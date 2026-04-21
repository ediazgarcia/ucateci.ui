import { SiteHeader } from "@/components/ucateci/site-header"
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
import { HeroSection } from "@/components/ucateci/hero-section"
import { QuickAccess } from "@/components/ucateci/quick-access"
import { WhyUcateci } from "@/components/ucateci/why-ucateci"
import { AcademicOfferings } from "@/components/ucateci/academic-offerings"
import { Rankings } from "@/components/ucateci/rankings"
import { ResearchSection } from "@/components/ucateci/research-section"
import { Testimonials } from "@/components/ucateci/testimonials"
import { StudentLife } from "@/components/ucateci/student-life"
import { VirtualTour } from "@/components/ucateci/virtual-tour"
import { NewsSection } from "@/components/ucateci/news-section"
import { ServicesSection } from "@/components/ucateci/services-section"
import { EventsCalendar } from "@/components/ucateci/events-calendar"
import { AdmissionsCTA } from "@/components/ucateci/admissions-cta"
import { ResourcesSection } from "@/components/ucateci/resources-section"
import { SiteFooter } from "@/components/ucateci/site-footer"
import { AdmissionsChatbot } from "@/components/ucateci/admissions-chatbot"
import { BackToTop } from "@/components/ucateci/back-to-top"
import { PageShell } from "@/components/ucateci/page-shell"
import { Reveal } from "@/components/ucateci/reveal"

export default function HomePage() {
  return (
    <PageShell>
      <AnnouncementBar />
      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <Reveal><QuickAccess /></Reveal>
        <Reveal><WhyUcateci /></Reveal>
        <Reveal><AcademicOfferings /></Reveal>
        <Reveal><Rankings /></Reveal>
        <Reveal><ResearchSection /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><StudentLife /></Reveal>
        <Reveal><VirtualTour /></Reveal>
        <Reveal><NewsSection /></Reveal>
        <Reveal><ServicesSection /></Reveal>
        <Reveal><EventsCalendar /></Reveal>
        <Reveal><AdmissionsCTA /></Reveal>
        <Reveal><ResourcesSection /></Reveal>
      </main>
      <SiteFooter />
      <BackToTop />
      <AdmissionsChatbot />
    </PageShell>
  )
}
