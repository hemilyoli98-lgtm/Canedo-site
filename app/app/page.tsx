import CinematicLoader from "@/components/CinematicLoader";
import Hero from "@/components/Hero";
import HistoryTimeline from "@/components/HistoryTimeline";
import BeforeAfter from "@/components/BeforeAfter";
import PdrScience from "@/components/PdrScience";
import TestimonialsNetflix from "@/components/TestimonialsNetflix";
import SchoolCourses from "@/components/SchoolCourses";
import LatamMap from "@/components/LatamMap";
import RoiCalculator from "@/components/RoiCalculator";
import GalleryMasonry from "@/components/GalleryMasonry";
import ToolStore from "@/components/ToolStore";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main className="relative bg-[#050505] overflow-hidden">
      <CinematicLoader />
      <Hero />
      <HistoryTimeline />
      <BeforeAfter />
      <PdrScience />
      <TestimonialsNetflix />
      <SchoolCourses />
      <LatamMap />
      <RoiCalculator />
      <GalleryMasonry />
      <ToolStore />
      <FaqAccordion />
      <FinalCta />
    </main>
  );
}
