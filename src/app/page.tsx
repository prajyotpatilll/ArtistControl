// src/app/page.tsx or src/pages/index.tsx

import CDLoader from "@/components/CdplayerLoader";
import HomeBanner from "@/components/HomeBanner";
import HoverExpand from "@/components/HoverExpand";
import MusicTrail from "@/components/MusicTrail";
import MusicPlatforms from "@/components/Platform";
import SoundWaves from "@/components/SoundWaves";
import InfiniteTextScroll from "@/components/TextSroll";

import WeOffer from "@/components/WeOffer";
import FAQ from "../components/Faq";
import HowItWorks from "@/components/WorkFlow";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="min-w-full top-0 absolute">
      <HomeBanner />

      <WeOffer />

      <SoundWaves />
      <HowItWorks />
      <MusicPlatforms />

      <HoverExpand />

      

      {/* <CDLoader/> */}

      <FAQ />

      <ContactUs />
    </div>
  );
}
