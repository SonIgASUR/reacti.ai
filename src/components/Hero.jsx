import React from "react";
import Navbar from "./Navbar";
import heroImg1 from "../assets/heroImage1.png";
import heroImg2 from "../assets/heroImage2.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  //state and useffect to toggle between the two hero Images
  const [showImg1, setShowImg1] = useState(true);
  useEffect(() => {
    const timeout = setInterval(() => {
      setShowImg1((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div
      id="hero"
      className="hero min-h-[100px] vsm:min-h-[1200px] xl:min-h-[840px] flex flex-col "
    >
      <Navbar />

      {/* Hero Content */}
      <div className="mt-[3rem] md:mt-[6.12rem] flex-1 w-full max-w-[1800px] mx-auto flex flex-col xl:flex-row gap-[3rem] vsm:gap-[5rem] xl:gap-[5rem] items-center xl:items-start hustify-start xl:justify-between px-[20px] vsm:px-[2rem] xmd:px-[5rem] xl:pl-[6.25rem] xl:pr-[4.25rem] ">
        <div className="xl:flex-1 flex flex-col items-center xl:block">
          <h1 className="text-stone-950 text-center xl:text-left text-[36px] vsm:text-[40px] md:text-[50px] 2xl:text-[62.73px] font-bold leading-normal">
            Transform Your{" "}
            <span className="relative">
              <p className="inline absolute h-full w-full top-[5px] left-[5px] bg-slate-900" />
              <p className="relative text-purple-50 inline bg-violet-600 pl-4 pr-[15px]">
                Twitter
              </p>
            </span>{" "}
            Conversations with <br className="hidden xl:block" />
            AI-Generated Replies!
          </h1>
          <p className="text-neutral-600 w-full vsm:w-[90%] md:w-[70%] xl:w-auto text-center xl:text-left text-[20px] vsm:text-2xl font-medium mt-[0.75rem] mb-[2rem]">
            With React AI, You can effortlessly craft AI-generated replies that
            match your desired tone and voice
          </p>
          <div className="flex flex-col vsm:flex-row items-center gap-4">
            <div
              onClick={() => navigate("/profile/dashboard")}
              className="get-started-btn hidden lg:block"
            >
              <div />
              <button>Get Started</button>
            </div>
            <a
              href="https://chrome.google.com/webstore/detail/reacti-ai/pmikjafnekojjckgdhcdmimoegkemdfj/related"
              target="blank"
              className="install-extension-btn"
            >
              <div />
              <button>Install Extension</button>
            </a>
          </div>
        </div>

        <div className="w-[90%] flex justify-center vsm:w-[500px] 2xl:w-[517px]">
          {showImg1 ? (
            <img
              className="w-full md:w-fit h-fit vsm:h-[489.94px] 2xl:h-[564px]"
              src={heroImg1}
              alt="hero_img"
            />
          ) : (
            <img
              className="w-full md:w-fit h-fit"
              src={heroImg2}
              alt="hero_img"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
