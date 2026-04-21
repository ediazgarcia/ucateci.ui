"use client"

import { useEffect, useState } from "react"

type SetStateAction<T> = T | ((previousValue: T) => T)

export function usePersistedForm<T>(storageKey: string, initialValue: T) {
  const [value, setValueState] = useState<T>(initialValue)
  const [isReady, setIsReady] = useState(false)
  const [didRestoreDraft, setDidRestoreDraft] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const savedValue = window.localStorage.getItem(storageKey)

      if (savedValue) {
        setValueState(JSON.parse(savedValue) as T)
        setDidRestoreDraft(true)
      }
    } catch {
      window.localStorage.removeItem(storageKey)
    } finally {
      setIsReady(true)
    }
  }, [storageKey])

  useEffect(() => {
    if (!isReady || typeof window === "undefined") return

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(value))
    } catch {
      // Ignore quota and serialization errors. The form still works in memory.
    }
  }, [storageKey, value, isReady])

  const setValue = (nextValue: SetStateAction<T>) => {
    setValueState((previousValue) =>
      typeof nextValue === "function" ? (nextValue as (currentValue: T) => T)(previousValue) : nextValue,
    )
  }

  const reset = () => {
    setValueState(initialValue)
    setDidRestoreDraft(false)

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(storageKey)
    }
  }

  return {
    value,
    setValue,
    reset,
    isReady,
    didRestoreDraft,
    setDidRestoreDraft,
  }
}
