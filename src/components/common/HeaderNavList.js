"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar } from "swiper/modules";
import { motion } from "framer-motion";

import ALink from "./ALink";

import "swiper/css";
import VerticalScrollbar from "./VerticalScrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CustomFont = dynamic(() => import("@/components/common/CustomFont"), {
  ssr: false,
});

const HeaderNavList = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({ width: 1920, height: 768 });

  const sliderRef = useRef(null);

  useEffect(() => {
    window &&
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
  }, []);

  useEffect(() => {
    sliderRef.current && console.log(sliderRef.current);
    sliderRef.current &&
      sliderRef.current.swiper.activeIndex > 1 &&
      sliderRef.current.swiper.slideTo(3);
  }, [activeIndex, sliderRef]);

  return (
    <nav>
      <CustomFont family="Roboto">
        {open && (
          <motion.div
            className="fixed bg-black bg-opacity-50 w-80 h-80 rounded-full -translate-x-1/2 -translate-y-1/2"
            initial={{
              top: 300 + Math.random() * (screenSize.height - 600),
              left: 300 + Math.random() * (screenSize.width - 600),
            }}
            animate={{
              scale: 20,
            }}
            exit={{
              scale: 0,
            }}
            transition={{
              duration: 1.4,
            }}
          ></motion.div>
        )}
        <div
          className={classNames({
            "fixed top-0 left-0 right-0 bottom-0 h-screen transition-all cursor-custom backdrop-blur": true,
            "invisible opacity-0": !open,
            "visible opacity-100 delay-300 duration-500": open,
          })}
          // initial={{
          //   opacity: 0
          // }}
          // animate={{
          //   opacity: 1
          // }}
          // transition={{
          //   delay: 1,
          //   duration:500
          // }}
        >
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="header-nav-slider container flex flex-col text-xl h-screen">
              <div className="nav-list-header flex flex-row justify-end my-10">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 xs:py-4 sm:py-2 mx-6 rounded-full border-2 leading-none hover:bg-white text-white hover:text-black xs:border-white hover:sm:border-white transition-all duration-300 cursor-custom"
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    className="sm:hidden xs:block"
                  />
                  <span className="xs:hidden sm:block">Close</span>
                </button>
                <button className="xs:hidden sm:block px-4 py-2 bg-white rounded-full text-black border-2 border-white transition-all duration-300 cursor-custom">
                  Menu
                </button>
              </div>
              <div className="nav-list-body flex flex-1 flex-row items-center">
                <VerticalScrollbar currIndex={activeIndex} numSlides={7} />
                <Swiper
                  ref={sliderRef}
                  // modules={[Scrollbar]}
                  className="flex flex-1 2xl:!mx-40 xs:!ml-12 2xl:ml-0 h-[70vh] !pt-8"
                  slidesPerView={4.5}
                  spaceBetween={10}
                  direction="vertical"
                  // scrollbar={{ draggable: true }}
                  allowTouchMove={true}
                  // loop={true}
                  // centeredSlides={true}
                  onSwiper={(swiper) => {
                    console.log(swiper);
                  }}
                  onTransitionEnd={(swiper) => {
                    console.log(swiper);
                  }}
                >
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(0);
                        // sliderRef.current.swiper.slideTo(0);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(0);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 0,
                      })}
                    >
                      HOME
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(1);
                        // sliderRef.current.swiper.slideTo(1);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(1);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 1,
                      })}
                    >
                      BUY
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(2);
                        // sliderRef.current.swiper.slideTo(2);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(2);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 2,
                      })}
                    >
                      SELL | RENT
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(3);
                        // sliderRef.current.swiper.slideTo(3);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(3);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 2,
                      })}
                    >
                      OFF PLAN | PROPERTIES
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(4);
                        // sliderRef.current.swiper.slideTo(4);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(4);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 2,
                      })}
                    >
                      LOCATION
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(5);
                        // sliderRef.current.swiper.slideTo(5);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(5);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 2,
                      })}
                    >
                      OUR JOURNAL
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      onMouseEnter={() => {
                        setActiveIndex(6);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      onTouchStart={() => {
                        setActiveIndex(6);
                        // sliderRef.current.swiper.slideTo(6);
                      }}
                      className={classNames({
                        "xs:text-4xl 2xl:text-5xl font-normal header-nav none xl:block": true,
                        active: activeIndex === 2,
                      })}
                    >
                      CONTACT US
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="nav-list-bottom flex flex-row xs:justify-end md:justify-between my-10">
                <div className="xs:hidden md:block">
                  <ul className="flex flex-row">
                    <li className="flex justify-center items-center w-12 h-12 mr-4 border-2 rounded-full text-xl hover:text-[#507ad5] hover:border-[#507ad5] transition-all duration-300">
                      <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li className="flex justify-center items-center w-12 h-12 mr-4 border-2 rounded-full text-xl hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-all duration-300">
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li className="flex justify-center items-center w-12 h-12 mr-4 border-2 rounded-full text-xl hover:text-[#E4405F] hover:border-[#E4405F] transition-all duration-300">
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li className="flex justify-center items-center w-12 h-12 mr-4 border-2 rounded-full text-xl hover:text-[#25F4EE] hover:border-[#25F4EE] transition-all duration-300">
                      <FontAwesomeIcon icon={faTiktok} />
                    </li>
                  </ul>
                </div>
                <button className="xs:py-2 xs:px-6 2xl:py-4 2xl:px-12 border-white border-2 rounded-3xl hover:bg-white hover:text-black transition-all duration-300 cursor-custom">
                  LOGIN AS AGENT
                </button>
              </div>
            </div>
          </div>
        </div>
        <ALink
          onClick={() => setOpen(!open)}
          className={classNames({ "z-20": open })}
        >
          <div className="flex flex-col items-end justify-end w-10 h-8 cursor-pointer transform sm:-translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={classNames({
                "absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out -translate-y-2.5": true,
                "w-0 opacity-50 delay-300": open,
                "w-3/4 opacity-100": !open,
              })}
            ></span>
            <span
              className={classNames({
                "absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out": true,
                "w-0 opacity-50 delay-150": open,
                "w-full opacity-100": !open,
              })}
            ></span>
            <span
              className={classNames({
                "absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out translate-y-2.5": true,
                "w-0 opacity-50": open,
                "w-1/2 opacity-100": !open,
              })}
            ></span>
          </div>
        </ALink>
      </CustomFont>
    </nav>
  );
};

export default HeaderNavList;
