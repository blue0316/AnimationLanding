import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowAltCircleLeft,
  faBed,
  faEarth,
  faRuler,
  faShower,
} from "@fortawesome/free-solid-svg-icons";

import BgImage from "@/components/common/BgImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AptsSlider = () => {
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const mainSettings = {
    arrows: false,
    swipe: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  const thumbSettings = {
    infinite: true,
    arrows: false,
    initialSlide: 1,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <motion.div
      className="relative h-full"
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Slider
        className="h-full w-full main-slider"
        {...mainSettings}
        ref={mainSlider}
      >
        <BgImage
          className="h-screen flex items-center"
          url="/assets/apts/apts-1.webp"
          dark={true}
        >
          {activeIndex === 0 && (
            <div className="container mx-40 h-full flex items-center">
              <div className="max-w-[50vw]">
                <motion.h2
                  className="text-7xl uppercase font-bold mb-4 leading-tight"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  Luxury Apartment Type 1
                </motion.h2>
                <motion.p
                  className="text-2xl mb-6"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint.
                </motion.p>
                <div className="flex flex-wrap justify-between">
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faEarth}
                    />
                    <span className="ml-4">Dubai, UAE</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faRuler}
                    />
                    <span className="ml-4">
                      2400 ft<sup>2</sup>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faBed}
                    />
                    <span className="ml-4">4 Rooms</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faShower}
                    />
                    <span className="ml-4">2 Bathrooms</span>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </BgImage>
        <BgImage
          className="h-screen flex items-center"
          url="/assets/apts/apts-2.webp"
          dark={true}
        >
          {activeIndex === 1 && (
            <div className="container mx-40 h-full flex items-center">
              <div className="max-w-[50vw]">
                <motion.h2
                  className="text-7xl uppercase font-bold mb-4 leading-tight"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  Luxury Apartment Type 2
                </motion.h2>
                <motion.p
                  className="text-2xl mb-6"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint.
                </motion.p>
                <div className="flex flex-wrap justify-between">
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faEarth}
                    />
                    <span className="ml-4">Dubai, UAE</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faRuler}
                    />
                    <span className="ml-4">
                      2400 ft<sup>2</sup>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faBed}
                    />
                    <span className="ml-4">4 Rooms</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faShower}
                    />
                    <span className="ml-4">2 Bathrooms</span>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </BgImage>
        <BgImage
          className="h-screen flex items-center"
          url="/assets/apts/apts-3.webp"
          dark={true}
        >
          {activeIndex === 2 && (
            <div className="container mx-40 h-full flex items-center">
              <div className="max-w-[50vw]">
                <motion.h2
                  className="text-7xl uppercase font-bold mb-4 leading-tight"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  Luxury Apartment Type 3
                </motion.h2>
                <motion.p
                  className="text-2xl mb-6"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint.
                </motion.p>
                <div className="flex flex-wrap justify-between">
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faEarth}
                    />
                    <span className="ml-4">Dubai, UAE</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faRuler}
                    />
                    <span className="ml-4">
                      2400 ft<sup>2</sup>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faBed}
                    />
                    <span className="ml-4">4 Rooms</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faShower}
                    />
                    <span className="ml-4">2 Bathrooms</span>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </BgImage>
        <BgImage
          className="h-screen flex items-center"
          url="/assets/apts/apts-4.webp"
          dark={true}
        >
          {activeIndex === 3 && (
            <div className="container mx-40 h-full flex items-center">
              <div className="max-w-[50vw]">
                <motion.h2
                  className="text-7xl uppercase font-bold mb-4 leading-tight"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  Luxury Apartment Type 4
                </motion.h2>
                <motion.p
                  className="text-2xl mb-6"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint.
                </motion.p>
                <div className="flex flex-wrap justify-between">
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faEarth}
                    />
                    <span className="ml-4">Dubai, UAE</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faRuler}
                    />
                    <span className="ml-4">
                      2400 ft<sup>2</sup>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faBed}
                    />
                    <span className="ml-4">4 Rooms</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faShower}
                    />
                    <span className="ml-4">2 Bathrooms</span>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </BgImage>
        <BgImage
          className="h-screen flex items-center"
          url="/assets/apts/apts-5.webp"
          dark={true}
        >
          {activeIndex === 4 && (
            <div className="container mx-40 h-full flex items-center">
              <div className="max-w-[50vw]">
                <motion.h2
                  className="text-7xl uppercase font-bold mb-4 leading-tight"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  Luxury Apartment Type 5
                </motion.h2>
                <motion.p
                  className="text-2xl mb-6"
                  initial={{
                    y: "30%",
                    opacity: 0,
                    visibility: "hidden",
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                    visibility: "visible",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint.
                </motion.p>
                <div className="flex flex-wrap justify-between">
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faEarth}
                    />
                    <span className="ml-4">Dubai, UAE</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faRuler}
                    />
                    <span className="ml-4">
                      2400 ft<sup>2</sup>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faBed}
                    />
                    <span className="ml-4">4 Rooms</span>
                  </motion.div>
                  <motion.div
                    initial={{
                      y: "30%",
                      opacity: 0,
                      visibility: "hidden",
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                      visibility: "visible",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                    className="basis-1/2 text-2xl h-10 mb-4"
                  >
                    <FontAwesomeIcon
                      className="min-w-[50px] h-1/2"
                      icon={faShower}
                    />
                    <span className="ml-4">2 Bathrooms</span>
                  </motion.div>
                </div>
              </div>
            </div>
          )}
        </BgImage>
      </Slider>
      <div className="absolute flex w-[30vw] h-32 bottom-12 right-12">
        <Slider
          className="w-full thumb-slider"
          {...thumbSettings}
          focusOnSelect={false}
          ref={thumbSlider}
        >
          <div className="basis-1/3 h-60 px-1">
            <BgImage
              url="/assets/apts/apts-1.webp"
              onClick={(e) => {
                setActiveIndex(0);
                mainSlider.current.slickGoTo(5);
                thumbSlider.current.slickGoTo(1);
              }}
            />
          </div>
          <div className="basis-1/3 h-60 px-1">
            <BgImage
              url="/assets/apts/apts-2.webp"
              onClick={(e) => {
                setActiveIndex(1);
                mainSlider.current.slickGoTo(1);
                thumbSlider.current.slickGoTo(2);
              }}
            />
          </div>
          <div className="basis-1/3 h-60 px-1">
            <BgImage
              url="/assets/apts/apts-3.webp"
              onClick={(e) => {
                setActiveIndex(2);
                mainSlider.current.slickGoTo(2);
                thumbSlider.current.slickGoTo(3);
              }}
            />
          </div>
          <div className="basis-1/3 h-60 px-1">
            <BgImage
              url="/assets/apts/apts-4.webp"
              onClick={(e) => {
                setActiveIndex(3);
                mainSlider.current.slickGoTo(3);
                thumbSlider.current.slickGoTo(4);
              }}
            />
          </div>
          <div className="basis-1/3 h-60 px-1">
            <BgImage
              url="/assets/apts/apts-5.webp"
              onClick={(e) => {
                setActiveIndex(4);
                mainSlider.current.slickGoTo(4);
                thumbSlider.current.slickGoTo(5);
              }}
            />
          </div>
        </Slider>
      </div>
      <button
        onClick={() => {
          if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          } else {
            setActiveIndex(4);
          }
          mainSlider.current.slickPrev();
          thumbSlider.current.slickPrev();
        }}
        className="absolute top-1/2 left-12 z-10 text-5xl hover:text-black transition-all duration-300"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        onClick={() => {
          if (activeIndex < 4) {
            setActiveIndex(activeIndex + 1);
          } else {
            setActiveIndex(0);
          }
          mainSlider.current.slickNext();
          thumbSlider.current.slickNext();
        }}
        className="absolute top-1/2 right-12 z-10 text-5xl hover:text-black transition-all duration-300"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </motion.div>
  );
};

export default AptsSlider;
