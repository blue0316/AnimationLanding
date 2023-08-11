import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import BgImage from "../BgImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MainSlider = ({
  className,
  mainSliderRef,
  data,
  changeProperty,
  currIndex,
  setCurrIndex,
}) => {
  const mainSettings = {
    arrows: false,
    swipe: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(-1);
  }, [data]);

  useEffect(() => {
    if (activeIndex === -1) setActiveIndex(0);
  }, [activeIndex]);

  return (
    <div className="relative h-full">
      <Slider className={className} ref={mainSliderRef} {...mainSettings}>
        {data &&
          data.images.map((item, index) => {
            if (index === 0) {
              return (
                <BgImage
                  className="h-screen flex items-center"
                  key={`item-${index}`}
                  url={item}
                  dark={true}
                >
                  {activeIndex === 0 && (
                    <div className="container mx-40 flex items-center h-full">
                      <div className="max-w-[50vw]">
                        <motion.h2
                          className="text-6xl uppercase mb-4 leading-tight font-extrabold"
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
                          {data.title}
                        </motion.h2>
                        <motion.p
                          className="text-xl mb-12 font-semibold uppercase"
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
                          {data.desc}
                        </motion.p>
                        <motion.div
                          className="text-2xl flex"
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
                        >
                          <Link className="group relative mx-2" href={data.link}>
                            <span
                              className="absolute left-0 right-0 -top-2 -bottom-2 bg-white bg-opacity-20 rounded-full"
                              style={{ filter: "blur(2px)" }}
                            ></span>
                            <span className="px-6 py-2 border border-white rounded-full group-hover:bg-white group-hover:bg-opacity-100 group-hover:text-black transition-all duration-300 z-10">
                              Video Tour
                            </span>
                          </Link>
                          <Link className="group relative mx-2" href={data.link}>
                            <span
                              className="absolute left-0 right-0 -top-2 -bottom-2 bg-white bg-opacity-20 rounded-full"
                              style={{ filter: "blur(2px)" }}
                            ></span>
                            <span className="px-6 py-2 border border-white rounded-full group-hover:bg-white group-hover:bg-opacity-100 group-hover:text-black transition-all duration-300 z-10">
                              Details
                            </span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  )}
                </BgImage>
              );
            } else {
              return (
                <BgImage
                  className="relative h-screen flex items-center"
                  key={`item-${index}`}
                  url={item}
                  dark={true}
                >
                  {activeIndex === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        visibility: "hidden",
                      }}
                      animate={{
                        opacity: 1,
                        visibility: "visible",
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0,
                      }}
                      exit={{
                        opacity: 0.5,
                      }}
                      className="absolute left-24 bottom-24 text-2xl"
                    >
                      <Link className="group relative" href={data.link}>
                        <span
                          className="absolute left-0 right-0 -top-2 -bottom-2 bg-white bg-opacity-20 rounded-full"
                          style={{ filter: "blur(2px)" }}
                        ></span>
                        <span className="px-6 py-2 border border-white rounded-full group-hover:bg-white group-hover:bg-opacity-100 group-hover:text-black transition-all duration-300 z-10">
                          Show details
                        </span>
                      </Link>
                      <h3 className="text-2xl px-4 pt-4">
                        {activeIndex + 1} / {data.images.length}
                      </h3>
                    </motion.div>
                  )}
                </BgImage>
              );
            }
          })}
      </Slider>
      <button
        className="absolute top-1/2 left-16 w-16 h-16 rounded-full text-4xl -translate-y-1/2 hover:bg-white hover:bg-opacity-25 hover:text-black transition-all duration-300"
        onClick={() => {
          if (activeIndex > 0) {
            mainSliderRef.current.slickPrev();
            setActiveIndex(activeIndex - 1);
          } else {
            setActiveIndex(0);
            mainSliderRef.current.slickGoTo(0);
            setCurrIndex(currIndex - 1);
            changeProperty(currIndex - 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className="absolute top-1/2 right-16 w-16 h-16 rounded-full text-4xl -translate-y-1/2 hover:bg-white hover:bg-opacity-25 hover:text-black transition-all duration-300"
        onClick={() => {
          if (activeIndex < data.images.length - 1) {
            mainSliderRef.current.slickNext();
            setActiveIndex(activeIndex + 1);
          } else {
            setActiveIndex(0);
            mainSliderRef.current.slickGoTo(3);
            setCurrIndex(currIndex + 1);
            changeProperty(currIndex + 1);
          }
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default MainSlider;
