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
      <PartnersSection />
    </>
  );
}
