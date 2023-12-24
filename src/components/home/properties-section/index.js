import React, { useEffect, useRef, useState } from "react";

import CustomFont from "@/components/common/CustomFont";
import PropertiesHeader from "@/components/common/headers/PropertiesHeader";
import MainSlider from "@/components/common/properties-slider/MainSlider";
import PropertiesSlider from "@/components/common/properties-slider/PropertiesSlider";

import { propertyData } from "./data";
import DetailSidebar from "./detailSidebar";
import VideoPlayer from "./videoPlayer";

const PropertiesSection = () => {
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);
  const sidebarRef = useRef(null);
  const outsideRef = useRef(null);

  const [currType, setCurrType] = useState("apartment");
  const [currIndex, setCurrIndex] = useState(0);

  const changeProperty = (newIndex) => {
    if (newIndex > 8) setCurrIndex(0);
    else if (newIndex < 0) setCurrIndex(8);
    else setCurrIndex(newIndex);
    if (newIndex > 2 && newIndex < 6) setCurrType("penthouse");
    else if (newIndex > 5 && newIndex < 9) setCurrType("townhouse");
    else setCurrType("apartment");
  };

  useEffect(() => {
    if (currIndex / 3 < 1) setCurrType("apartment");
    else if (currIndex / 3 < 2) setCurrType("penthouse");
    else setCurrType("townhouse");
  }, [currIndex]);

  return (
    <div ref={outsideRef} className="relative h-full">
      <CustomFont family="Roboto" className="font-semibold">
        <PropertiesHeader currType={currType} setCurrType={setCurrType} />
        <MainSlider
          className="h-screen"
          mainSliderRef={mainSliderRef}
          data={propertyData[currType][currIndex % 3]}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
          changeProperty={changeProperty}
        />
      </CustomFont>
      <div className="absolute bottom-8 right-12 z-10 w-[37.5vw]">
        <PropertiesSlider
          className="thumb-slider"
          data={propertyData}
          mainSliderRef={mainSliderRef}
          thumbSliderRef={thumbSliderRef}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
        />
      </div>
      <DetailSidebar
        sidebarRef={sidebarRef}
        data={propertyData[currType][currIndex % 3]}
      />
      <VideoPlayer />
    </div>
  );
};

export default PropertiesSection;
