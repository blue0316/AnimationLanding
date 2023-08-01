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
        <h3 className="text-6xl">Test Title 1</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3 className="text-6xl">Test Title 2</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3 className="text-6xl">Test Title 3</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3 className="text-6xl">Test Title 4</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
