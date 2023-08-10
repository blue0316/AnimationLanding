import BgImage from "@/components/common/BgImage";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ThumbSlider = ({
  thumbSlider,
  mainSlider,
  sliderOneIndex,
  sliderTwoIndex,
  sliderThreeIndex,
  setSliderOneIndex,
  setSliderTwoIndex,
  setSliderThreeIndex,
}) => {
  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);
  const sliderThreeRef = useRef(null);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    sliderOneRef && sliderOneRef.current.swiper.slideTo(sliderOneIndex);
  }, [sliderOneRef, sliderOneIndex]);

  useEffect(() => {
    sliderTwoRef && sliderTwoRef.current.swiper.slideTo(sliderTwoIndex);
  }, [sliderTwoRef, sliderTwoIndex]);

  useEffect(() => {
    sliderThreeRef && sliderThreeRef.current.swiper.slideTo(sliderThreeIndex);
  }, [sliderThreeRef, sliderThreeIndex]);

  return (
    <Swiper
      ref={thumbSlider}
      className="h-full"
      spaceBetween={10}
      slidesPerView={4}
      onSlideChangeTransitionEnd={(swiper) => {
        setCurrIndex(swiper.realIndex);
        mainSlider &&
          mainSlider.current &&
          mainSlider.current.swiper.slideTo(swiper.realIndex);
      }}
    >
      <SwiperSlide
        onClick={() => {
          mainSlider.current.swiper.slideTo(0);
        }}
        className={classNames({
          "group thumb-slide relative": true,
          "thumb-slide-active": currIndex === 0,
        })}
      >
        <Swiper
          ref={sliderOneRef}
          direction="vertical"
          className="h-full"
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setSliderOneIndex(swiper.activeIndex);
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            setSliderOneIndex(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <BgImage url="/assets/apts/apts-1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/apts/apts-2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/apts/apts-3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/apts/apts-4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/apts/apts-5.webp" />
          </SwiperSlide>
        </Swiper>
        <div className="flex absolute items-center justify-center left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <h3 className="text-2xl font-semibold">Apartments</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide
        onClick={() => {
          mainSlider.current.swiper.slideTo(1);
        }}
        className={classNames({
          "group thumb-slide relative": true,
          "thumb-slide-active": currIndex === 1,
        })}
      >
        <Swiper
          ref={sliderTwoRef}
          direction="vertical"
          className="h-full"
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setSliderTwoIndex(swiper.activeIndex);
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            setSliderTwoIndex(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <BgImage url="/assets/penthouse/pent-1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/penthouse/pent-2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/penthouse/pent-3.webp" />
          </SwiperSlide>
        </Swiper>
        <div className="flex absolute items-center justify-center left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <h3 className="text-2xl font-semibold">Penthouse</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide
        onClick={() => {
          mainSlider.current.swiper.slideTo(2);
        }}
        className={classNames({
          "group thumb-slide relative": true,
          "thumb-slide-active": currIndex === 2,
        })}
      >
        <Swiper
          ref={sliderThreeRef}
          direction="vertical"
          className="h-full"
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={(swiper) => {
            setSliderThreeIndex(swiper.activeIndex);
          }}
          onSlideChangeTransitionEnd={(swiper) => {
            setSliderThreeIndex(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <BgImage url="/assets/townhouse/town-1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/townhouse/town-2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/townhouse/town-3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <BgImage url="/assets/townhouse/town-4.webp" />
          </SwiperSlide>
        </Swiper>
        <div className="flex absolute items-center justify-center left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <h3 className="text-2xl font-semibold">Townhouse</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ThumbSlider;
