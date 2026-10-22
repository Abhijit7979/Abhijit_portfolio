import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { GitHubContributionsSection } from '@/components/sections/GitHubContributionsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <ExperienceSection />
        <AchievementsSection />
        <ProjectsSection />
        <SkillsSection />
        <GitHubContributionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
