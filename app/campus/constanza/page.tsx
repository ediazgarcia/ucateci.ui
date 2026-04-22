import { CampusHeader } from "@/components/ucateci/campus-header"
import { CampusHero } from "@/components/ucateci/campus-hero"
import { CampusQuickAccess } from "@/components/ucateci/campus-quick-access"
import { CampusAbout } from "@/components/ucateci/campus-about"
import { CampusAcademics } from "@/components/ucateci/campus-academics"
import { CampusStudentLife } from "@/components/ucateci/campus-student-life"
import { CampusVirtualTour } from "@/components/ucateci/campus-virtual-tour"
import { CampusNews } from "@/components/ucateci/campus-news"
import { CampusContact } from "@/components/ucateci/campus-contact"
import { CampusFooter } from "@/components/ucateci/campus-footer"
import { AdmissionsChatbot } from "@/components/ucateci/admissions-chatbot"
import { BackToTop } from "@/components/ucateci/back-to-top"
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
import { PageShell } from "@/components/ucateci/page-shell"
import { CAMPUS_DATA } from "@/lib/data"
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
      <CampusHeader campusId="constanza" />
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
        <CampusHero 
          name={CAMPUS_DATA.constanza.name} 
          shortName={CAMPUS_DATA.constanza.shortName} 
          type={CAMPUS_DATA.constanza.type} 
          heroSlides={CAMPUS_DATA.constanza.heroSlides} 
        />
        <Reveal><CampusQuickAccess campusId="constanza" /></Reveal>
        <Reveal><CampusAbout campusId="constanza" /></Reveal>
        <Reveal><CampusAcademics campusId="constanza" /></Reveal>
        <Reveal><CampusStudentLife campusId="constanza" /></Reveal>
        <Reveal><CampusVirtualTour campusId="constanza" /></Reveal>
        <Reveal><CampusNews campusId="constanza" /></Reveal>
        <Reveal><CampusContact campusId="constanza" /></Reveal>
      </main>
      <CampusFooter campusId="constanza" />
      <BackToTop />
      <AdmissionsChatbot />
    </PageShell>
  )
}
