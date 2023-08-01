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
        <h4 className="text-3xl">
          Lorem ipsum dolor sit amet consectetur. Arcu scelerisque pharetra
          convallis placerat lectus phasellus. Faucibus eget auctor velit est id
          fringilla convallis eget nec. Et tincidunt in.
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <h4 className="text-3xl">
          Lorem ipsum dolor sit amet consectetur. Arcu scelerisque pharetra
          convallis placerat lectus phasellus. Faucibus eget auctor velit est id
          fringilla convallis eget nec. Et tincidunt in.
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <h4 className="text-3xl">
          Lorem ipsum dolor sit amet consectetur. Arcu scelerisque pharetra
          convallis placerat lectus phasellus. Faucibus eget auctor velit est id
          fringilla convallis eget nec. Et tincidunt in.
        </h4>
      </SwiperSlide>
      <SwiperSlide>
        <h4 className="text-3xl">
          Lorem ipsum dolor sit amet consectetur. Arcu scelerisque pharetra
          convallis placerat lectus phasellus. Faucibus eget auctor velit est id
          fringilla convallis eget nec. Et tincidunt in.
        </h4>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
