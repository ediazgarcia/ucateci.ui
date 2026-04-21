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
import { PageShell } from "@/components/ucateci/page-shell"
import { Reveal } from "@/components/ucateci/reveal"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function CEBPage() {
  return (
    <PageShell accent="sky">
      <AnnouncementBar />
      <CEBHeader />
      <main className="relative">
        <Reveal className="mx-auto max-w-[96rem] px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">UCATECI</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Centro Educacional Bonao</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Reveal>
        <CEBHero />
        <Reveal><CEBQuickAccess /></Reveal>
        <Reveal><CEBAcerca /></Reveal>
        <Reveal><CEBAcademics /></Reveal>
        <Reveal><CEBStudentLife /></Reveal>
        <Reveal><CEBVirtualTour /></Reveal>
        <Reveal><CEBNews /></Reveal>
        <Reveal><CEBContact /></Reveal>
      </main>
      <CEBFooter />
      <BackToTop />
      <AdmissionsChatbot />
    </PageShell>
  )
}
