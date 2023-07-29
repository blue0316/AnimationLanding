import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import classNames from "classnames";

const SliderBtn = ({ className, direction }) => {
  return (
    <div
      className={classNames([
        "flex relative justify-center items-center w-16 h-16",
        className,
      ])}
    >
      <motion.div
        className="h-full w-full bg-white rounded-full"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 0.8,
          scale: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <div className="flex absolute top-1/2 left-1/2 justify-center items-center w-12 h-12 bg-black rounded-full -translate-x-1/2 -translate-y-1/2">
        {direction === "next" ? (
          <FontAwesomeIcon icon={faAnglesRight} />
        ) : (
          <FontAwesomeIcon icon={faAnglesLeft} />
        )}
      </div>
    </div>
  );
};

export default SliderBtn;
