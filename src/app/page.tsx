// src/app/page.tsx or src/pages/index.tsx

import HomeBanner from "@/components/HomeBanner";
import MusicPlatforms from "@/components/Platform";
import SoundWaves from "@/components/SoundWaves";

import WeOffer from "@/components/WeOffer";

export default function Home() {
  return (
    <div className="min-w-full top-0 absolute">
      <HomeBanner />
      
      <WeOffer/>

      <SoundWaves/>
    
      <MusicPlatforms/>
      <div className="p-6">
        <main className="py-10">
          <p>This is the content area.</p>
        </main>

        <footer className="mt-4">
          <h2>Footer</h2>
        </footer>
      </div>
    </div>
  );
}
