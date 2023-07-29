import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, wrap } from "framer-motion";

const VerticalScrollbar = ({ currIndex, numSlides }) => {
  const [totalHeight, setTotalHeight] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setTotalHeight(wrapperRef.current.clientHeight);
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-4/5 w-1 my-8 rounded-full bg-gray-500 bg-opacity-40"
    >
      <motion.div
        className="absolute w-full bg-white bg-opacity-60"
        style={{
          height: `${100 / numSlides}%`,
        }}
        animate={{
          y: ((currIndex) / numSlides) * totalHeight,
        }}
      ></motion.div>
    </div>
  );
};

export default VerticalScrollbar;
