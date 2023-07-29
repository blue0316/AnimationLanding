"use client";
import dynamic from "next/dynamic";

const CustomCarousel = dynamic(
  () => import("@/components/ScrollSlider/CustomCarousel"),
  {
    ssr: false,
  }
);

import IntroSection from "@/components/home/intro-section";
import PropertiesSection from "@/components/home/properties-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CustomCarousel>
        <IntroSection />
        <PropertiesSection />
      </CustomCarousel>
    </main>
  );
}
