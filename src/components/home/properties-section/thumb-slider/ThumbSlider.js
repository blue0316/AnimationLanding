import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import BgImage from "@/components/common/BgImage";

import "swiper/css";
import "swiper/css/navigation";

const MainSlider = ({ index, setIndex }) => {
  const slider = useRef(null);

  useEffect(() => {
    slider.current.swiper.slideTo(index);
  }, [index]);

  return (
    <Swiper
      ref={slider}
      className="h-full"
      slidesPerView={1}
      spaceBetween={0}
      onSlideChange={(swiper) => {
        setIndex(swiper.activeIndex);
      }}
      autoplay={{
        delay: 1,
      }}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <BgImage url="/assets/villa-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <BgImage url="/assets/villa-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <BgImage url="/assets/villa-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <BgImage url="/assets/villa-4.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
