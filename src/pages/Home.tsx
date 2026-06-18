import { HomeNavbar } from '../components/layout/HomeNavbar';
import { BusinessHero } from '../components/sections/home/BusinessHero';
import { AboutSection } from '../components/sections/home/AboutSection';
import { VisionMissionSection } from '../components/sections/home/VisionMissionSection';
import { ProgramsSection } from '../components/sections/home/ProgramsSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { ApplySection } from '../components/sections/home/ApplySection';

export function Home() {
  return (
    <>
      <HomeNavbar />
      <BusinessHero />
      <AboutSection />
      <VisionMissionSection />
      <ProgramsSection />
      <ApplySection />
      <PartnersSection className="-mt-4 pb-10 sm:-mt-6 sm:pb-12" />
    </>
  );
}
