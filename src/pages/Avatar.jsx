import React from "react";
import Header from "../components/profile/Header";
import maleAvatar from "../assets/Male_avatar.png";
import femaleAvatar from "../assets/female_avatar.png";
import { RxPencil1 } from "react-icons/rx";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="min-h-[84.8vh]"
    >
      <Header title="Avatar" />
      <div className="mt-[64.76px] flex flex-wrap gap-[30px]">
        <div className="relative w-[219px] h-[228px] bg-[#D9D9D9] rounded-[10px] flex justify-center items-center">
          <div className="avatar_gradient" />

          <div className="absolute top-[21px] h-[83%] w-fit flex flex-col items-center justify-center">
            <img
              className="h-[120%] w-fit"
              src={maleAvatar}
              alt="male avatar"
            />
            <p className="mt-[10px] font-poppins font-bold text-base leading-[14px] text-black">
              BILLU THE BILLA
            </p>
          </div>
        </div>

        <div className="relative w-[219px] h-[228px] bg-transparent rounded-[10px] flex justify-center items-center">
          <div className="avatar_gradient" />

          <div className="absolute top-[19px] h-[83%] w-fit flex flex-col items-center justify-center">
            <img
              className="h-[120%] w-fit"
              src={femaleAvatar}
              alt="female avatar"
            />
            <p className="mt-[10px] font-poppins font-bold text-base leading-[14px] text-black">
              BILLI THE PUSSY
            </p>
          </div>
        </div>

        <div className="relative w-[219px] h-[228px] bg-transparent rounded-[10px] flex justify-center items-center">
          <div className="avatar_gradient" />

          <div className="absolute top-[36px] h-[83%] w-fit flex flex-col items-center justify-center">
            <RxPencil1 className="text-white text-[8rem]" />
            <p className="font-bold leading-none text-white">CUSTOMISE</p>
            <p className="mt-[10px] font-poppins font-bold text-base leading-[14px] text-black">
              COMING SOON
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Avatar;
