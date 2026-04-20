import { CEBHeader } from "@/components/ucateci/ceb-header"
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
import { CEBHero } from "@/components/ucateci/ceb-hero"
import { CEBQuickAccess } from "@/components/ucateci/ceb-quick-access"
import { CEBAcerca } from "@/components/ucateci/ceb-acerca"
import { CEBAcademics } from "@/components/ucateci/ceb-academics"
import { CEBStudentLife } from "@/components/ucateci/ceb-student-life"
import { CEBVirtualTour } from "@/components/ucateci/ceb-virtual-tour"
import { CEBNews } from "@/components/ucateci/ceb-news"
import { CEBContact } from "@/components/ucateci/ceb-contact"
import { CEBFooter } from "@/components/ucateci/ceb-footer"
import { AdmissionsChatbot } from "@/components/ucateci/admissions-chatbot"
import { BackToTop } from "@/components/ucateci/back-to-top"

export default function CEBPage() {
  return (
    <div className="min-h-screen bg-background">
      <CEBHeader />
      <main>
        <CEBHero />
        <CEBQuickAccess />
        <CEBAcerca />
        <CEBAcademics />
        <CEBStudentLife />
        <CEBVirtualTour />
        <CEBNews />
        <CEBContact />
      </main>
      <CEBFooter />
      <BackToTop />
      <AdmissionsChatbot />
    </div>
  )
}