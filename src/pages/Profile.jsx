import React from "react";
import { Outlet } from "react-router-dom";
import dash from "../assets/dashBdIcon.svg";
import prompts from "../assets/promptsIcon.svg";
import mart from "../assets/martIcon.svg";
import userIcon from "../assets/userIcon.svg";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { logout } from "../config/firebase";
import { useAuthContext } from "../context/authContext";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const {user,limit,count} = useAuthContext()
  const handleLogout = async()=>{
    setOpen(false)
    logout()
  }
  return (
    <div className="profile relative h-fit overflow-x-hidden w-full flex bg-[#F2F8FD]">
      <div
        className={`${
          open ? "left-0" : "left-[-250px] lg:left-0"
        } nav z-[10] fixed h-screen w-[250px] lg:w-[20%] lg:fixed top-0 duration-500 bg-white rounded-r-[13.9016px] py-[30.43px] flex flex-col`}
      >
        <Link
          to="/"
          className="hidden lg:block font-poppins pl-[18.07px] font-semibold text-[1.5rem] leading-[21px] text-[#1A4FBA]"
        >
          Reacti.ai
        </Link>
        <FaTimes
          onClick={() => setOpen(false)}
          className="block lg:hidden text-[red]  text-[30px] ml-[30px]"
        />
        <div className="flex-1 mt-[45.34px]">
          <div className="ml-[18.07px] mb-[10px] w-[70%] h-fit rounded-[8.34095px] bg-[#0e45b7] p-[5px] flex gap-[6px] text-white">
            <div className="w-[35px] h-[35px] rounded-md bg-[#d9d9d9]"></div>
            <div className="">
              <p className="font-sans font-black text-[16px]">{user?.displayName}</p>
              <p className="text-[10px] text-white opacity-60 mt-[-3px]">
                {limit-count} credits left
              </p>
            </div>
          </div>
          <ul>
            <NavLink onClick={() => setOpen(false)} to="/profile/dashboard">
              <img src={dash} alt="icon" />
              <p>Dashboard</p>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/profile/prompts">
              <img src={prompts} alt="icon" />
              <p>Prompts</p>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/profile/marketplace">
              <img src={mart} alt="icon" />
              <p>Marketplace</p>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/profile/tones">
              <p className="pl-[39px]">Tones</p>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/profile/avatar">
              <p className="pl-[39px]">Avatar</p>
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/profile/refer">
              <p className="pl-[39px]">Refer</p>
            </NavLink>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="pl-[34px] flex gap-[7.65px] items-center text-[#6E7191]"
        >
          <img src={userIcon} alt="icon" />
          Log out
        </button>
      </div>

      <div className="flex-1 lg:ml-[20%] w-full px-[30px] xmd:px-[40px] py-[30px]">
        <div className="fixed z-[5] h-[60px] top-[0px] bg-[#F2F8FD] lg:hidden w-full mb-[10px] flex gap-[30px] items-center">
          <FaBars
            onClick={() => setOpen(true)}
            className="text-black text-[25px]"
          />
          <Link
            to="/"
            className="font-poppins font-semibold text-[1.5rem] leading-[21px] text-[#1A4FBA]"
          >
            Reacti.ai
          </Link>
        </div>
        <div className="mt-[40px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
