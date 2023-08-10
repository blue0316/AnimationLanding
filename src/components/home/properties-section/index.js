import React, { useRef, useState } from "react";

import CustomFont from "@/components/common/CustomFont";
import PropertiesHeader from "@/components/common/headers/PropertiesHeader";
import MainSlider from "@/components/common/properties-slider/MainSlider";

import { propertyData } from "./data";
import PropertiesSlider from "@/components/common/properties-slider/PropertiesSlider";

const PropertiesSection = () => {
  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  const [currType, setCurrType] = useState("apartment");
  const [currIndex, setCurrIndex] = useState(0);

  const changeProperty = (newIndex) => {
    if (currType === "apartment") {
      if (newIndex < 0) {
        setCurrIndex(propertyData["townhouse"].length - 1);
        setCurrType("townhouse");
      } else if (newIndex < propertyData["apartment"].length) {
        setCurrIndex(newIndex);
      } else {
        setCurrIndex(0);
        setCurrType("penthouse");
      }
    }
    if (currType === "penthouse") {
      if (newIndex < 0) {
        setCurrIndex(propertyData["apartment"].length - 1);
        setCurrType("apartment");
      } else if (newIndex < propertyData["penthouse"].length) {
        setCurrIndex(newIndex);
      } else {
        setCurrIndex(0);
        setCurrType("townhouse");
      }
    }
    if (currType === "townhouse") {
      if (newIndex < 0) {
        setCurrIndex(propertyData["penthouse"].length - 1);
        setCurrType("penthouse");
      } else if (newIndex < propertyData["townhouse"].length) {
        setCurrIndex(newIndex);
      } else {
        setCurrIndex(0);
        setCurrType("apartment");
      }
    }
  };

  return (
    <div className="relative h-full">
      <PropertiesHeader currType={currType} setCurrType={setCurrType} />
      <CustomFont family="Roboto">
        <MainSlider
          className="h-screen"
          mainSliderRef={mainSliderRef}
          data={propertyData[currType][currIndex]}
          currIndex={currIndex}
          changeProperty={changeProperty}
        />
      </CustomFont>
      <div className="absolute bottom-12 right-16 z-10 w-[40vw]">
        <PropertiesSlider
          className="thumb-slider"
          data={propertyData[currType]}
          mainSliderRef={mainSliderRef}
          thumbSliderRef={thumbSliderRef}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
        />
      </div>
    </div>
  );
};

export default PropertiesSection;
