import React from "react";
import { CiMicrophoneOn, CiSearch } from "react-icons/ci";

const Header = ({ title }) => {
  return (
    <div className="my-[30px] lg:my-0 w-full xmd:flex justify-between items-center">
      <h1 className="font-raleway text-[20px] leading-[11px] tracking-[-0.269158px] text-[#6E7191] mix-blend-normal">
        <span className="opacity-50">Pages</span>{" "}
        <span className="text-[#8C8C8C] font-sans">/</span> <span>{title}</span>
      </h1>

      <div className="w-full md:w-fit mt-[20px] xmd:mt-0 bg-white flex justify-between items-center rounded-[4.86556px] px-[11.47px] py-[10px]">
        <CiSearch />
        <input
          type="text"
          className="flex-1 bg-transparent px-[11.47px] outline-none"
          placeholder="Search any keywords"
        />
        <CiMicrophoneOn />
      </div>
    </div>
  );
};

export default Header;
