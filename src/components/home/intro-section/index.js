import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
// import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

// import nextAnimation from "../../../animations/nextAnimation.json";
import BgImage from "@/components/common/BgImage";
import { activeSlideId } from "@/store";

import "swiper/css";
import "swiper/css/navigation";
import SliderBtn from "@/components/common/SliderBtn";

const CustomFont = dynamic(() => import("@/components/common/CustomFont"), {
  ssr: false,
});

const IntroSection = () => {
  const [activeIndex, setActiveIndex] = useAtom(activeSlideId);
  const [activeIndexState, setActiveIndexState] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setActiveIndexState(activeIndex);
    sliderRef.current.swiper.slideTo(activeIndex);
  }, [activeIndex]);

  return (
    <div className="group h-full">
      <Swiper
        ref={sliderRef}
        modules={[EffectFade, Navigation]}
        navigation={{
          prevEl: ".scene-nav--prev",
          nextEl: ".scene-nav--next",
        }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
        effect="cube"
        onSwiper={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          console.log(swiper.activeIndex);
        }}
      >
        <SwiperSlide className="relative h-full">
          <BgImage className="h-full brightness-50" url="/assets/villa-1.jpg" />
          <div className="absolute container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CustomFont family="Chakra Petch" className="container">
              {activeIndexState === 0 && (
                <>
                  <motion.div
                    className="max-w-[500px] lg:text-6xl text-4xl mb-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0,
                        duration: 0.6,
                      }}
                    >
                      VILLA
                    </motion.h2>
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                      }}
                    >
                      ESPEJO AQUA 1
                    </motion.h2>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h3
                      className="max-w-[500px] p-4 bg-black/50 text-xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                      }}
                    >
                      Welcome to the future of real estate! Our selection of
                      futuristic houses is designed to meet the needs of the
                      modern homeowner.
                    </motion.h3>
                  </motion.div>
                </>
              )}
            </CustomFont>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full">
          <BgImage className="h-full brightness-50" url="/assets/villa-2.jpg" />
          <div className="absolute container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CustomFont family="Chakra Petch" className="container">
              {activeIndexState === 1 && (
                <>
                  <motion.div
                    className="max-w-[500px] lg:text-6xl text-4xl mb-10"
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0,
                        duration: 0.6,
                      }}
                    >
                      VILLA
                    </motion.h2>
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                      }}
                    >
                      ESPEJO AQUA 2
                    </motion.h2>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h3
                      className="max-w-[500px] p-4 bg-black/50 text-xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                      }}
                    >
                      Welcome to the future of real estate! Our selection of
                      futuristic houses is designed to meet the needs of the
                      modern homeowner.
                    </motion.h3>
                  </motion.div>
                </>
              )}
            </CustomFont>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full">
          <BgImage className="h-full brightness-50" url="/assets/villa-3.jpg" />
          <div className="absolute container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CustomFont family="Chakra Petch" className="container">
              {activeIndexState === 2 && (
                <>
                  <motion.div
                    className="max-w-[500px] lg:text-6xl text-4xl mb-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0,
                        duration: 0.6,
                      }}
                    >
                      VILLA
                    </motion.h2>
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                      }}
                    >
                      ESPEJO AQUA 3
                    </motion.h2>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h3
                      className="max-w-[500px] p-4 bg-black/50 text-xl"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5,
                      }}
                    >
                      Welcome to the future of real estate! Our selection of
                      futuristic houses is designed to meet the needs of the
                      modern homeowner.
                    </motion.h3>
                  </motion.div>
                </>
              )}
            </CustomFont>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full">
          <video
            id="background-video"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="/assets/video_poster.jpg"
          >
            <source src="/assets/intro.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
        <button
          className="scene-nav--prev flex flex-row items-center text-lg h-20 p-2 bg-transparent text-white hover:scale-110 rounded-full z-10 group-hover:opacity-100 group-hover:visible -translate-x-10 transition-all duration-300 leading-none"
          data-nav="previous"
        >
          {/* <Image
            className="rotate-180"
            alt="arrow"
            width="100"
            height="10"
            src="/assets/arrow.svg"
          /> */}
          <span className="font-bold z-10">Prev</span>
          <SliderBtn className="-ml-6" direction="prev" />
          {/* <Lottie animationData={nextAnimation} loop={true} /> */}
        </button>
        <button
          className="scene-nav--next flex flex-row items-center text-lg h-20 p-2 bg-transparent text-white hover:scale-110 rounded-full z-10 group-hover:opacity-100 group-hover:visible translate-x-10 transition-all duration-300 leading-none"
          data-nav="next"
        >
          {/* <Image alt="arrow" width="100" height="10" src="/assets/arrow.svg" /> */}
          <SliderBtn direction="next" />
          <span className="-ml-6 font-bold z-10">Next</span>
          {/* <Lottie animationData={nextAnimation} loop={true} /> */}
        </button>
      </Swiper>
    </div>
  );
};

export default IntroSection;
