"use client";
import dynamic from "next/dynamic";

const CustomCarousel = dynamic(
  () => import("@/components/ScrollSlider/CustomCarousel"),
  {
    ssr: false,
  }
);

const CustomActiveItem = dynamic(
  () => import("@/components/ScrollSlider/CustomActiveItem"),
  {
    ssr: false,
  }
);

import IntroSection from "@/components/home/intro-section";
import PropertiesSection from "@/components/home/properties-section";
import { useEffect } from "react";

const forwardStyleWrapper = { transform: "translateY(100%)", height: "100%" };
const backwardStyleWrapper = { transform: "translateY(-100%)", height: "100%" };
// const stableStyleWrapper = {transform: "translateY(0%)",  height: "100%" };

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CustomCarousel className="w-full h-full">
        <CustomActiveItem
          className="w-full h-full"
          forwardStyle={forwardStyleWrapper}
          backwardStyle={backwardStyleWrapper}
          // stableStyle={stableStyleWrapper}
        >
          <IntroSection />
        </CustomActiveItem>
        <CustomActiveItem
          className="w-full h-full"
          forwardStyle={forwardStyleWrapper}
          backwardStyle={backwardStyleWrapper}
          // stableStyle={stableStyleWrapper}
        >
          <PropertiesSection />
        </CustomActiveItem>
      </CustomCarousel>
    </main>
  );
}
