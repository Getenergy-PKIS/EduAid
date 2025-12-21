import { MainHero, FeatureHero } from "@/components/hero";
import Objectives from "@/components/sections/Objectives";
import ProgramsInitiatives from "@/components/sections/ProgramsInitiatives";
import TargetGroup from "@/components/sections/TargetGroup";
import EngagementCollaboration from "@/components/sections/EngagementCollaboration.jsx";
import OngoingProjects from "@/components/sections/OngoingProjects";
import SmartGoals from "@/components/sections/SmartGoals.jsx";
import LocalChapter from "@/components/sections/LocalChapter.jsx";
import Partners from "@/components/sections/Partners.jsx";
import WallOfAchievers from "@/components/sections/WallOfAchievers.jsx";
import GetInTouch from "@/components/sections/GetInTouch.jsx";
import FAQs from "@/components/sections/FAQs.jsx";
import DonationSection from "@/components/sections/DonationSection.jsx";
import Merchandise from "@/components/sections/Merchandise.jsx";
import ReferralSection from "@/components/sections/ReferralSection.jsx";

import {
  ScrollProgress,
  LoadingScreen,
  AnimatedBackground,
} from "@/components/ui";

export default function Home() {
  return (
    <main className="relative ">
      {/* Loading Screen */}
      <LoadingScreen duration={1000} />

      {/* Scroll Progress Indicator */}
      <ScrollProgress color="#1F892B" height={4} position="top" />

      {/* Mouse Follow Effect removed */}

      {/* Animated Background */}
      <AnimatedBackground pattern="dots" density={15} speed={8} />

      {/* Main Hero Section */}
      <MainHero
        welcomeText="Welcome to EduAid Africa"
        title="Empowering Education, Enabling Futures Across Africa."
        description="Join us in transforming the educational landscape through scholarships, donations, CSR initiatives, community projects, and global education expos."
        stats={[
          { value: "500+", label: "renovated schools" },
          { value: "72,000+", label: "scholarship awarded" },
          { value: "1000+", label: "Teachers trained" },
        ]}
        primaryButtonText="Start a Fundraiser"
        primaryButtonLink="/fundraiser"
        secondaryButtonText="Donate now"
        secondaryButtonLink="/donate"
        backgroundImage="/hero-bg.jpg"
      />

      {/* Vision & Objectives Section */}
      <FeatureHero
        title="Vision & Objectives for 2032"
        description="We envision to achieve these smart goals by 2032"
        features={[
          {
            title: "To empower 10 Million Students",
            description:
              "through scholarships, e-learning, and vocational training",
            stats: {
              current: "Current achievement: 8000 beneficiaries",
              percentage: "23%",
            },
          },
          {
            title: "To Renovate or build 10,000 Schools",
            description: "Current achievement: 3000 schools",
            stats: { percentage: "23%" },
          },
          {
            title: "To Train 500,000 Teachers in ICT",
            description: "and modern teaching methodologies",
            stats: {
              current: "Current achievement: 5000 teachers trained",
              percentage: "23%",
            },
          },
        ]}
      />

      {/* Objectives Section */}
      <Objectives />

      {/* Programs and Initiatives Section */}
      <ProgramsInitiatives />

      {/* Target Group Section */}
      <TargetGroup />

      {/* Ongoing Projects Section */}
      <OngoingProjects />

      {/* SMART Goals Section */}
      <SmartGoals />

      {/* Engagement and Collaboration Section */}
      <EngagementCollaboration />

      {/* Local Chapter Section */}
      <LocalChapter />

      {/* Partners Section */}
      <Partners />

      {/* Wall of Achievers Section */}
      <WallOfAchievers />

      {/* Get In Touch Section */}
      <GetInTouch />

      {/* FAQs Section */}
      <FAQs />

      {/* Ready To Take Action Section */}
      <DonationSection />

      {/* Get Our Merchandise Section */}
      {/* <Merchandise /> */}

      {/* Referral Section */}
      <ReferralSection />
    </main>
  );
}
