import React from "react";
import { FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-[6.25rem] w-full min-h-[395px] py-[30px] xl:py-0 relative bg-slate-900 font-inter flex justify-center items-center px-[20px] vsm:px-[70px]">
      <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-0 justify-between w-full">
        <h1 className="text-slate-50 text-[40.16px] font-bold">REACTI.AI</h1>

        <div className="flex flex-col vsm:flex-row gap-[1rem] vsm:gap-[4rem] xmd:gap-[8.81rem]">
          <ul>
            <h1>ReactiAi</h1>
            <ScrollLink to="guide" smooth={true} duration={500}>
              <li>How it works</li>
            </ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500}>
              <li>Features</li>
            </ScrollLink>
            <ScrollLink to="pricing" smooth={true} duration={500}>
              <li>Pricing</li>
            </ScrollLink>
            <li>
              <a
                href="https://chrome.google.com/webstore/detail/reacti-ai/pmikjafnekojjckgdhcdmimoegkemdfj/related"
                target="blank"
              >
                Extension
              </a>
            </li>
          </ul>
          <ul>
            <h1>Information</h1>
            <ScrollLink to="faq" smooth={true} duration={500}>
              <li>FAQ</li>
            </ScrollLink>
            <li onClick={() => alert("Coming soon..")}>Blog</li>
            <li>
              <a href="https://twitter.com/Reacti_ai" target="blank">
                Support
              </a>
            </li>
          </ul>
          <ul>
            <h1>Company</h1>
            <ScrollLink to="hero" smooth={true} duration={500}>
              <li>About us</li>
            </ScrollLink>
            <li onClick={() => alert("Coming soon..")}>Careers</li>
            <li>
              <a href="https://twitter.com/Reacti_ai" target="blank">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <div className="w-[212px] h-[64.78px] relative">
            <div className="w-[212px] h-[55.94px] left-0 top-[8.83px] absolute bg-purple-50 rounded-xl" />

            <div
              onClick={() => navigate("/profile/dashboard")}
              className="px-[35.33px] py-[14.72px] left-0 top-0 absolute bg-violet-600 rounded-xl text-purple-50 text-2xl font-medium"
            >
              <div />
              <button>Get Started</button>
            </div>
          </div>

          <div className="mt-[38px] flex-col justify-start items-start gap-4 flex">
            <h1 className="text-white text-opacity-75 text-base font-bold leading-3 tracking-wide">
              Follow us
            </h1>
            <div className="flex gap-[10px]">
              <a
                href="https://twitter.com/Reacti_ai"
                target="blank"
                className="w-[35.24px] h-[35.24px] rounded-full border-purple-50 group hover:bg-purple-600 cursor-pointer duration-300 border grid place-items-center"
              >
                <FaLinkedinIn className="text-purple-50" />
              </a>
              <a
                href="https://twitter.com/Reacti_ai"
                target="blank"
                className="w-[35.24px] h-[35.24px] rounded-full border-purple-50 group hover:bg-purple-600 cursor-pointer duration-300 border grid place-items-center"
              >
                <FaFacebook className="text-purple-50" />
              </a>
              <a
                href="https://twitter.com/Reacti_ai"
                target="blank"
                className="w-[35.24px] h-[35.24px] rounded-full border-purple-50 group hover:bg-purple-600 cursor-pointer duration-300 border grid place-items-center"
              >
                <FaTwitter className="text-purple-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
