import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { areas } from "@/dataset";

const HeaderSearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (keyword && keyword.length > 2) {
      let tmp1 = areas.filter((item) =>
        item.region.toLowerCase().includes(keyword)
      );
      let tmp2 = areas.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      let tmp = [...tmp1, ...tmp2];
      if (tmp.length > 7) setResult(tmp.slice(0, 7));
      else setResult(tmp);
    } else {
      setResult([]);
    }
  }, [keyword]);

  return (
    <div className="xs:hidden 2xl:flex relative justify-center max-w-6xl min-w-[720px] px-5 py-2 mx-auto border-0 rounded-full bg-black bg-opacity-25">
      <div className="pr-4 text-gray-400">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </div>
      <input
        className="flex-1 bg-transparent leading-6 focus:bg-transparent active:bg-transparent text-sm text-white outline-none"
        type="text"
        name="keyword"
        placeholder="Search for Area or Development"
        value={keyword}
        onChange={(data) => {
          setKeyword(data.target.value);
        }}
      />
      {result.length > 0 && (
        <div className="absolute left-0 right-0 top-full py-4 translate-y-4 rounded-3xl bg-black bg-opacity-60 text-white">
          <ul>
            {result.map((item, index) => {
              return (
                <li
                  className="px-4 py-2 text-xl opacity-80 border-b hover:bg-white hover:bg-opacity-25 hover:opacity-100 transition-all duration-100"
                  key={`search-result-${index}`}
                >
                  {item.region}, {item.country}
                </li>
              );
            })}
            <li className="px-4 py-2 text-center text-xl opacity-80 hover:bg-white hover:bg-opacity-25 hover:opacity-100 transition-all duration-100">
              More
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderSearchBar;
