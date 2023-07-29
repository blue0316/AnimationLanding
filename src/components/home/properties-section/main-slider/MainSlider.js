import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import Navigation from "swiper/modules/navigation/navigation";
// import Pagination from "swiper/modules/pagination/pagination";
// import Scrollbar from "swiper/modules/scrollbar/scrollbar";
// import A11y from "swiper/modules/a11y/a11y";

import BgImage from "@/components/common/BgImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const MainSlider = ({ index, setIndex }) => {
  const slider = useRef(null);

  useEffect(() => {
    slider.current.swiper.slideTo(index);
  }, [index]);

  return (
    <Swiper
      ref={slider}
      modules={[Navigation]}
      className="h-full"
      slidesPerView={1}
      spaceBetween={0}
      navigation
      onSlideChange={(swiper) => {
        setIndex(swiper.activeIndex);
      }}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <div className="flex h-full">
          <div className="basis-1/4 w-1/4 h-full bg-black"></div>
          <div className="basis-3/4 w-3/4 h-full">
            <BgImage url="/assets/villa-1.jpg" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full">
          <div className="basis-1/4 w-1/4 h-full"></div>
          <div className="basis-3/4 w-3/4 h-full">
            <BgImage url="/assets/villa-2.jpg" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full">
          <div className="basis-1/4 w-1/4 h-full"></div>
          <div className="basis-3/4 w-3/4 h-full">
            <BgImage url="/assets/villa-3.jpg" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full">
          <div className="basis-1/4 w-1/4 h-full"></div>
          <div className="basis-3/4 w-3/4 h-full">
            <BgImage url="/assets/villa-4.jpg" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
