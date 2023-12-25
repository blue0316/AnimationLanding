import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import classNames from "classnames";

import { showDetailScreen } from "@/store";
import BgImage from "@/components/common/BgImage";

import { useDetectClickOutside } from "react-detect-click-outside";

const DetailSidebar = ({ data }) => {
  const [detailScreen, setDetailScreen] = useAtom(showDetailScreen);
  const [detailScreenState, setDetailScreenState] = useState(false);

  const sidebarRef = useDetectClickOutside({
    onTriggered: () => {
      console.log("clicked");
      setDetailScreen(false);
    },
  });

  useEffect(() => {
    setDetailScreenState(detailScreen);
  }, [detailScreen]);

  return (
    <div
      ref={sidebarRef}
      className={classNames({
        "absolute w-2/5 top-0 bottom-0 right-0 transition-all duration-300 z-20 bg-black bg-opacity-20": true,
        "translate-x-full": !detailScreenState,
        "translate-x-0": detailScreenState,
      })}
    >
      <div
        className="relative w-full h-full px-10 py-16"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <BgImage
          url={data.images[0]}
          className="relative mt-12 mx-8 max-h-[30vh] rounded-md"
          dark={true}
        >
          <div className="absolute left-8 bottom-10">
            <h2 className="text-3xl font-extrabold mb-2">{data.title}</h2>
            <p className="text-md font-semibold">{data.desc}</p>
          </div>
        </BgImage>
        <div className="w-full h-1 mt-8 bg-white bg-opacity-25 rounded-full"></div>
        <p className="mt-8 text-">{data.detail}</p>
        <div className="w-full flex flex-wrap flex-row justify-center mt-8 -mx-2">
          {data &&
            data.images.map((item, index) => (
              <div className="basis-1/3 px-2" key={`property-image-${index}`}>
                <BgImage
                  url={item}
                  className="!h-32 rounded-md hover:!backdrop-brightness-50"
                />
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 mt-12 text-sm border border-white rounded-full hover:bg-white hover:text-black selection:outline-none transition-all duration-300 text-2xl">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSidebar;
