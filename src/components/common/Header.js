"use client";

import React from "react";
import dynamic from "next/dynamic";
// import Image from "next/image";

import HeaderSearchBar from "./HeaderSearchBar";
import ALink from "./ALink";
import HeaderNavList from "./HeaderNavList";

const CustomFont = dynamic(() => import("@/components/common/CustomFont"), {
  ssr: false,
});

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 w-4/5 sm:w-full mx-auto sm:px-5 md:px-10 lg:pl-36 lg:pr-20 pt-4 z-20">
      <div className="flex justify-between">
        <div className="flex justify-start items-center basis-1/5">
          <CustomFont family="Cormorant Garamond" className="w-full">
            <ALink className="flex items-center min-h-[100px] text-2xl font-semibold">
              DELATTIO
            </ALink>
          </CustomFont>
        </div>
        <div className="flex flex-1 items-center">
          <HeaderSearchBar />
        </div>
        <div className="flex justify-end items-center basis-1/5">
          <HeaderNavList />
        </div>
      </div>
    </header>
  );
};

export default Header;
