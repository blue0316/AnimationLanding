import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Vimeo from "@u-wave/react-vimeo";

import nextAnimation from "../../../animations/nextAnimation.json";
import { activeSlideId } from "@/store";
import BgImage from "@/components/common/BgImage";
import SliderBtn from "@/components/common/SliderBtn";

import "swiper/css";
import "swiper/css/navigation";

const CustomFont = dynamic(() => import("@/components/common/CustomFont"), {
  ssr: false,
});

const IntroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useAtom(activeSlideId);
  const [activeIndexState, setActiveIndexState] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          <div className="absolute xs:w-[90%] md:w-3/4 xl:container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
          <div className="absolute xs:w-[90%] md:w-3/4 xl:container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
          <div className="absolute xs:w-[90%] md:w-3/4 xl:container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
          <Vimeo
            video="711121097"
            className="2xl:!w-full"
            controls={false}
            background={true}
            loop={false}
            responsive={true}
            style={{ width: mounted ? window.innerHeight / 0.5625 : 100 }}
            onEnd={(props) => {
              sliderRef.current.swiper.slideTo(0);
            }}
            autoPlay
          />
          {/* <video
            id="background-video"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="/assets/video_poster.jpg"
          >
            <source src="/assets/intro.mp4" type="video/mp4" />
          </video> */}
        </SwiperSlide>
        <button
          className="scene-nav--prev flex flex-row items-center text-lg h-16 w-16 p-2 bg-transparent text-white hover:scale-110 rounded-full z-10 -translate-x-10 transition-all duration-300 leading-none rotate-180 hover:bg-white hover:bg-opacity-50"
          data-nav="previous"
        >
          {/* <span className="xs:hidden lg:block font-bold z-10">Prev</span>
          <SliderBtn
            direction="prev"
            className="lg:-ml-6 xs:opacity-0 xs:invisible md:opacity-100 md:visible md:translate-y-0 xs:translate-y-8 xs:group-hover:opacity-100 xs:group-hover:visible xs:group-hover:translate-y-0 xs:translate-x-8 md:translate-x-0"
          /> */}
          <Lottie animationData={nextAnimation} loop={true} />
        </button>
        <button
          className="scene-nav--next flex flex-row items-center text-lg h-16 w-16 p-2 bg-transparent text-white hover:scale-110 rounded-full z-10 translate-x-10 transition-all duration-300 leading-none hover:bg-white hover:bg-opacity-50"
          data-nav="next"
        >
          {/* <SliderBtn
            direction="next"
            className="xs:opacity-0 xs:invisible md:opacity-100 md:visible md:translate-y-0 xs:translate-y-8 xs:group-hover:opacity-100 xs:group-hover:visible xs:group-hover:translate-y-0 xs:-translate-x-8 md:translate-x-0"
          />
          <span className="xs:hidden lg:block -ml-6 font-bold z-10">Next</span> */}
          <Lottie animationData={nextAnimation} loop={true} />
        </button>
      </Swiper>
    </div>
  );
};

export default IntroSection;
