import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import classNames from "classnames";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Vimeo from "@u-wave/react-vimeo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import nextAnimation from "../../../animations/nextAnimation.json";

import { activeSlideId } from "@/store";
import BgImage from "@/components/common/BgImage";
import IntroHeader from "@/components/common/headers/IntroHeader";
import IntroFooter from "@/components/common/footers/IntroFooter";
// import SliderBtn from "@/components/common/SliderBtn";

import "swiper/css";
import "swiper/css/navigation";

const CustomFont = dynamic(() => import("@/components/common/CustomFont"), {
  ssr: false,
});

const IntroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useAtom(activeSlideId);
  const [activeIndexState, setActiveIndexState] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
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
      <IntroHeader />
      <Swiper
        ref={sliderRef}
        modules={[Autoplay, EffectFade, Navigation]}
        navigation={{
          prevEl: ".scene-nav--prev",
          nextEl: ".scene-nav--next",
        }}
        spaceBetween={0}
        slidesPerView={1}
        // loop={true}
        className="h-full"
        effect="cube"
        onSwiper={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        autoplay={{
          delay: 3250,
          stopOnLastSlide: true,
        }}
      >
        {/* <SwiperSlide className="relative h-full">
          <BgImage className="h-full brightness-50" url="/assets/villa-1.jpg" />
          <div className="absolute xs:w-[90%] md:w-3/4 xl:container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CustomFont family="Roboto" className="container">
              {activeIndexState === 0 && (
                <>
                  <motion.div
                    className="max-w-[500px] lg:text-6xl text-4xl mb-10 font-semibold"
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
                      className="font-semibold"
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
                      className="max-w-[500px] p-4 bg-black/50 text-xl font-semibold"
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
            <CustomFont family="Roboto" className="container">
              {activeIndexState === 1 && (
                <>
                  <motion.div
                    className="max-w-[500px] lg:text-6xl text-4xl mb-10 font-semibold"
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
                      className="font-semibold"
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
                      className="max-w-[500px] p-4 bg-black/50 text-xl font-semibold"
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
        </SwiperSlide> */}
        <SwiperSlide className="relative h-full">
          <BgImage className="h-screen brightness-50" url="/assets/villa-3.jpg" />
          <div className="absolute xs:w-[90%] md:w-3/4 xl:container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CustomFont family="Roboto" className="container">
              {activeIndexState === 0 && (
                <>
                  <motion.div
                    className="max-w-[500px] lg:text-6xl text-4xl mb-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h2
                      className="font-semibold"
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
                      className="font-semibold"
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
                      ESPEJO AQUA
                    </motion.h2>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h3
                      className="max-w-[500px] p-4 bg-black/50 text-xl font-semibold"
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
          {/* <Vimeo
            video="711121097"
            className={classNames({
              // "2xl:!w-full": true,
              hidden: !videoLoaded,
            })}
            controls={false}
            background={true}
            loop={false}
            responsive={true}
            style={{ width: mounted ? window.innerHeight / 0.5625 : 100 }}
            onEnd={(props) => {
              sliderRef.current.swiper.slideToLoop(0);
            }}
            onLoaded={() => {
              setVideoLoaded(true);
            }}
            autoPlay
          />
          {!videoLoaded && (
            <Image
              className="w-full h-full"
              src="/assets/video_poster.jpg"
              alt="video preview"
              width={100}
              height={100}
            />
          )} */}
          <video
            id="background-video"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="/assets/video_poster.jpg"
            onEnded={() => {
              sliderRef.current.swiper.slideToLoop(0);
            }}
          >
            <source src="/assets/intro.mp4" type="video/mp4" />
          </video>
          <div className="absolute xs:hidden md:flex justify-between mx-20 mb-8 bottom-0 left-0 right-0 z-10">
            <div></div>
            <div>
              <ul className="flex flex-row">
                <li className="flex justify-center items-center w-12 h-12 ml-4 border-2 rounded-full text-xl hover:text-[#507ad5] hover:border-[#507ad5] transition-all duration-300">
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
                <li className="flex justify-center items-center w-12 h-12 ml-4 border-2 rounded-full text-xl hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300">
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li className="flex justify-center items-center w-12 h-12 ml-4 border-2 rounded-full text-xl hover:text-[#E4405F] hover:border-[#E4405F] transition-all duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
                <li className="flex justify-center items-center w-12 h-12 ml-4 border-2 rounded-full text-xl hover:text-[#25F4EE] hover:border-[#25F4EE] transition-all duration-300">
                  <FontAwesomeIcon icon={faTiktok} />
                </li>
              </ul>
            </div>
          </div>
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
      <IntroFooter />
    </div>
  );
};

export default IntroSection;
