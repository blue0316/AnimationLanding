import { useEffect } from "react";
import BgImage from "../BgImage";

const { default: Slider } = require("react-slick");

const PropertiesSlider = ({
  className,
  currIndex,
  data,
  mainSliderRef,
  thumbSliderRef,
  setCurrIndex,
}) => {
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

  useEffect(() => {
    thumbSliderRef.current.slickGoTo(currIndex);
  }, [currIndex, thumbSliderRef]);

  return (
    <Slider
      ref={thumbSliderRef}
      className={className}
      focusOnSelect={false}
      {...thumbSettings}
      onSwipe={(dir) => {
        if (dir === "right") {
          if (currIndex > 0) {
            setCurrIndex(currIndex - 1);
          }
        } else {
          if (currIndex < data.length - 1) {
            setCurrIndex(currIndex + 1);
          }
        }
      }}
    >
      {data["apartment"].map((item) => (
        <div
          key={`property-${item.id}`}
          onClick={() => {
            setCurrIndex(item.id - 1);
            thumbSliderRef.current.slickGoTo(item.id - 1);
            mainSliderRef.current.slickGoTo(0);
          }}
          className="h-[128px] px-1 rounded-md"
        >
          <BgImage url={item.images[0]} />
        </div>
      ))}
      {data["penthouse"].map((item) => (
        <div
          key={`property-${item.id}`}
          onClick={() => {
            setCurrIndex(item.id - 1);
            thumbSliderRef.current.slickGoTo(item.id - 1);
            mainSliderRef.current.slickGoTo(0);
          }}
          className="h-[128px] px-1 rounded-md"
        >
          <BgImage url={item.images[0]} />
        </div>
      ))}
      {data["townhouse"].map((item) => (
        <div
          key={`property-${item.id}`}
          onClick={() => {
            setCurrIndex(item.id - 1);
            thumbSliderRef.current.slickGoTo(item.id - 1);
            mainSliderRef.current.slickGoTo(0);
          }}
          className="h-[128px] px-1 rounded-md"
        >
          <BgImage url={item.images[0]} />
        </div>
      ))}
    </Slider>
  );
};

export default PropertiesSlider;
