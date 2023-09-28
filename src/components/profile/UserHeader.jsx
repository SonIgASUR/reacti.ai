import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import userImg from "../../assets/Male_avatar.png";

const UserHeader = ({ userName, text, linkName, link }) => {
  return (
    <div className="user-header z-[0] relative mt-[20.28px] w-full h-[210px] sm:h-[191px] text-white px-[20px] py-[15px] font-poppins">
      <img
        className="absolute z-[-1] h-[116%] bottom-0 right-[-50px] md:right-[20px] opacity-50 vsm:opacity-100"
        src={userImg}
        alt="user"
      />

      <div className="z-[2] h-full flex flex-col justify-between">
        <div className="">
          <h1 className="text-[1.5rem] leading-[37px] text-[#CED5DC]">
            Hello{" "}
            <span className="text-white">
              {userName}
              <span>,</span>
            </span>
          </h1>
          <p className="w-[50%] xmd:w-full mt-[20px] text-[1rem] leading-[1.2] text-[#D4E3F0]">
            {text}
          </p>
        </div>
        <Link
          className="font-bold text-[0.8rem] text-[#71DDB1] flex items-center gap-[5px]"
          to={link}
        >
          See {linkName} <SlArrowRight className="" />
        </Link>
      </div>
    </div>
  );
};

export default UserHeader;
