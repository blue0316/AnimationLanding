import React, { useState } from "react";

import MainSlider from "./main-slider/MainSlider";
import ThumbSlider from "./thumb-slider/ThumbSlider";
import IndexSlider from "./index-slider/IndexSlider";
import TitleSlider from "./title-slider/TitleSlider";
import DescSlider from "./desc-slider/DescSlider";

const PropertiesSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="h-full relative">
      <MainSlider index={index} setIndex={setIndex} />
      <div className="absolute w-1/5 h-3/5 left-[15%] top-1/2 -translate-y-1/2 z-10">
        <ThumbSlider index={index} setIndex={setIndex} />
      </div>
      <div className="flex absolute justify-center flex-col w-2/5 h-3/5 right-[15%] top-1/2 -translate-y-1/2 z-10">
        <TitleSlider index={index} setIndex={setIndex} />
        <DescSlider index={index} setIndex={setIndex} />
        <IndexSlider index={index} setIndex={setIndex} />
      </div>
    </section>
  );
};

export default PropertiesSection;
