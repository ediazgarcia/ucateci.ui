import { ConstanzaHeader } from "@/components/ucateci/constanza-header"
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
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
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

export default function ConstanzaPage() {
  return (
    <PageShell accent="emerald">
      <AnnouncementBar />
      <ConstanzaHeader />
      <main className="relative">
        <Reveal className="mx-auto max-w-[96rem] px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">UCATECI</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Recinto Académico Constanza</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Reveal>
        <ConstanzaHero />
        <Reveal><ConstanzaQuickAccess /></Reveal>
        <Reveal><ConstanzaAcerca /></Reveal>
        <Reveal><ConstanzaAcademics /></Reveal>
        <Reveal><ConstanzaStudentLife /></Reveal>
        <Reveal><ConstanzaVirtualTour /></Reveal>
        <Reveal><ConstanzaNews /></Reveal>
        <Reveal><ConstanzaContact /></Reveal>
      </main>
      <ConstanzaFooter />
      <BackToTop />
      <AdmissionsChatbot />
    </PageShell>
  )
}
