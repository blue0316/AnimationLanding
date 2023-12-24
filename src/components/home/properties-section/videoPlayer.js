import { useAtom } from "jotai";

import { use, useEffect, useState } from "react";
import classNames from "classnames";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { videoScreen } from "@/store";
import closeAnimationIcon from "@/animations/close.json";

const VideoPlayer = () => {
  const [videoScreenState, setVideoScreenState] = useAtom(videoScreen);

  const [videoState, setVideoState] = useState(null);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setVideoState(videoScreenState);
  }, [videoScreenState]);

  useEffect(() => {
    if (videoState) {
      setTimeout(() => {
        setTimer(true);
      }, 3000);
    } else {
      setTimer(false);
    }
  }, [videoState]);

  return (
    <div className="absolute z-50">
      <video
        id="bg-video"
        className={classNames({
          "fixed top-0 left-0 h-screen w-screen object-cover": true,
          "visible opacity-100": videoState,
          "invisible opacity-0": !videoState,
        })}
        loop
        autoPlay
        muted
        poster="/assets/video_poster.jpg"
        onEnded={() => {
          setVideoScreenState(false);
        }}
      >
        <source src="/assets/intro.mp4" type="video/mp4" />
      </video>
      <button
        className={classNames({
          "flex fixed w-12 h-12 justify-center items-center text-2xl top-12 right-12 bg-white bg-opacity-20 rounded-full hover:bg-opacity-100 hover:text-black hover:rotate-180 transition-all duration-300": true,
          "visible opacity-100": videoState,
          "invisible opacity-0": !videoState,
        })}
        onClick={() => {
          setVideoScreenState(false);
        }}
      >
        <Lottie animationData={closeAnimationIcon} loop={true} />
        {/* {!timer ? (
        ) : (
          <FontAwesomeIcon icon={faClose} />
        )} */}
      </button>
    </div>
  );
};

export default VideoPlayer;
