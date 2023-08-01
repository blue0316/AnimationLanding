import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

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
      className="w-full my-4"
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
        <div className="text-[160px] text-transparent font-bold text-stroke">1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-[160px] text-transparent font-bold text-stroke">2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-[160px] text-transparent font-bold text-stroke">3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-[160px] text-transparent font-bold text-stroke">4</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
