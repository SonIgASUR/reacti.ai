import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/authContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  //menu bar toggle
  const [openMenu, setOpenMenu] = useState(false);
  const onLoginClick = () => {
    setOpenMenu(false);
    if (user) {
      navigate("/profile/dashboard");
    } else {
      navigate("/login")
    }
  };
  return (
    <nav className="w-full max-w-[1800px] mx-auto h-24 flex justify-between items-center px-[20px] vsm:pl-[100px] vsm:pr-[76px] pt-[23.50px] pb-[24.50px] border-b border-stone-300 ">
      <div className="text-slate-900 text-2xl font-bold">REACTI.AI</div>
      <ul
        className={`${
          openMenu ? "block lg:flex" : "hidden lg:flex"
        } fixed top-[95px] rounded-none right-0 z-[100] bg-violet-700 lg:bg-transparent w-full h-fit lg:static lg:w-fit lg:h-12 px-[58px] py-2.5 lg:rounded-[30px] border border-stone-300 flex flex-col lg:flex-row items-center gap-6`}
      >
        <ScrollLink
          onClick={() => setOpenMenu(false)}
          to="hero"
          smooth={true}
          duration={1000}
        >
          <li>Home</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenMenu(false)}
          to="guide"
          smooth={true}
          duration={1000}
        >
          <li>Guide</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenMenu(false)}
          to="features"
          smooth={true}
          duration={1000}
        >
          <li>Features</li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setOpenMenu(false)}
          to="pricing"
          smooth={true}
          duration={1000}
        >
          <li>Pricing</li>
        </ScrollLink>
      </ul>

      <div onClick={onLoginClick} className="get-started-btn hidden lg:block">
        <div />
        <button>{user ? "Dashboard" : "Get Started"}</button>
      </div>

      {openMenu ? (
        <FaTimes
          onClick={() => setOpenMenu(false)}
          className="text-[25px] text-red-700 lg:hidden cursor-pointer"
        />
      ) : (
        <FaBars
          onClick={() => setOpenMenu(true)}
          className="text-[25px] lg:hidden cursor-pointer"
        />
      )}
    </nav>
  );
};

export default Navbar;
