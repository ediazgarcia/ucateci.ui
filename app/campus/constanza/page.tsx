import { ConstanzaHeader } from "@/components/ucateci/constanza-header"
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
import { ConstanzaHero } from "@/components/ucateci/constanza-hero"
import { ConstanzaQuickAccess } from "@/components/ucateci/constanza-quick-access"
import { ConstanzaAcerca } from "@/components/ucateci/constanza-acerca"
import { ConstanzaAcademics } from "@/components/ucateci/constanza-academics"
import { ConstanzaStudentLife } from "@/components/ucateci/constanza-student-life"
import { ConstanzaVirtualTour } from "@/components/ucateci/constanza-virtual-tour"
import { ConstanzaNews } from "@/components/ucateci/constanza-news"
import { ConstanzaContact } from "@/components/ucateci/constanza-contact"
import { ConstanzaFooter } from "@/components/ucateci/constanza-footer"
import { AdmissionsChatbot } from "@/components/ucateci/admissions-chatbot"
import { BackToTop } from "@/components/ucateci/back-to-top"

export default function ConstanzaPage() {
  return (
    <div className="min-h-screen bg-background">
      <ConstanzaHeader />
      <main>
        <ConstanzaHero />
        <ConstanzaQuickAccess />
        <ConstanzaAcerca />
        <ConstanzaAcademics />
        <ConstanzaStudentLife />
        <ConstanzaVirtualTour />
        <ConstanzaNews />
        <ConstanzaContact />
      </main>
      <ConstanzaFooter />
      <BackToTop />
      <AdmissionsChatbot />
    </div>
  )
}