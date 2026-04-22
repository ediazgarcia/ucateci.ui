import { CampusHeader } from "@/components/ucateci/campus-header"
import { AnnouncementBar } from "@/components/ucateci/announcement-bar"
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

export default function CEBPage() {
  
  return (
    <PageShell accent="sky">
      <AnnouncementBar />
      <CampusHeader campusId="ceb" />
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
        <CampusHero 
          name={CAMPUS_DATA.ceb.name} 
          shortName={CAMPUS_DATA.ceb.shortName} 
          type={CAMPUS_DATA.ceb.type} 
          heroSlides={CAMPUS_DATA.ceb.heroSlides} 
        />
        <Reveal><CampusQuickAccess campusId="ceb" /></Reveal>
        <Reveal><CampusAbout campusId="ceb" /></Reveal>
        <Reveal><CampusAcademics campusId="ceb" /></Reveal>
        <Reveal><CampusStudentLife campusId="ceb" /></Reveal>
        <Reveal><CampusVirtualTour campusId="ceb" /></Reveal>
        <Reveal><CampusNews campusId="ceb" /></Reveal>
        <Reveal><CampusContact campusId="ceb" /></Reveal>
      </main>
      <CampusFooter campusId="ceb" />
      <BackToTop />
      <AdmissionsChatbot />
    </PageShell>
  )
}
