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
                          className="text-7xl uppercase font-bold mb-8 leading-tight"
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
                          className="text-2xl mb-12"
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
                          className="text-2xl"
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
                          <Link href={data.link}>
                            <span className="px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                              Detail
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
                    <div className="absolute left-24 bottom-24 text-2xl">
                      <Link href={data.link}>
                        {/* <span className="px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-all duration-300"> */}
                        <span className="px-4 py-2 btn-underline">
                          Show detail
                        </span>
                      </Link>
                      <h3 className="text-2xl px-4 pt-2">
                        {activeIndex + 1} / {data.images.length}
                      </h3>
                    </div>
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
            mainSliderRef.current.slickGoTo(data.images.length);
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
