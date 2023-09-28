import React from "react";
import textOutline from "../assets/textOutline.svg";
import featuresIcon from "../assets/featuresIcon.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import lineDsgn from "../assets/lineDsgn.png";

const Features = () => {
  return (
    <div
      id="features"
      className="mt-[11rem] w-full max-w-[1800px] mx-auto relative"
    >
      <img
        className="absolute top-[-50px] left-[90px]"
        src={featuresIcon}
        alt="icon"
      />
      <div className="mx-auto mb-[0.6rem] vsm:mb-[2.06rem] w-full vsm:w-[474px] h-[88px]">
        <div className="w-screen vsm:w-[500px] h-[90px] relative flex items-center justify-center">
          <h1 className="text-stone-950 text-[35px] vsm:text-[45px] font-bold">
            Reacti AI Features
          </h1>
          <img
            className="hidden vsm:block absolute top-0 left-[50%] translate-x-[-50%]"
            src={textOutline}
            alt="outline"
          />
        </div>
      </div>

      <div>
        <div className="">
          <h1 className="text-slate-900 text-[40px] font-bold mb-[16px] text-center">
            Dashboard
          </h1>
          <p className="mx-auto w-[90%] vsm:w-[80%] 2xl:w-[88%] text-center text-zinc-600 text-[20px] vsm:text-[32px]">
            Reacti AI offers an analytics dashboard that provide insights into
            your usage pattern, credits used and credit left.
          </p>
          <div className="mx-auto mt-[2rem] vsm:mt-[4.62rem] relative w-[80%] bg-slate-900 rounded-[32px] pt-[1.06rem] pr-[1.88rem] pl-[0.75rem]">
            <img className="w-full" src={img1} alt="feature" />
            <img
              className="hidden vsm:block absolute top-[30%] right-[-90px] z-[-1]"
              src={lineDsgn}
              alt="dsgn"
            />
          </div>
        </div>

        <div className="mt-[4.31rem]">
          <h1 className="text-slate-900 text-[40px] font-bold mb-[16px] text-center">
            Custom Prompts
          </h1>
          <p className="mx-auto w-[90%] vsm:w-[80%] 2xl:w-[88%] text-center text-zinc-600 text-[20px] vsm:text-[32px]">
            You can define prompts and train the AI to respond in a way that
            match your unique voice and style.
          </p>
          <div className="mx-auto mt-[2rem] vsm:mt-[4.62rem] relative w-[80%] bg-slate-900 rounded-[32px] pt-[1.06rem] pr-[1.88rem] pl-[0.75rem]">
            <img className="w-full" src={img2} alt="feature" />
          </div>
        </div>

        <div className="relative mt-[4.31rem]">
          <h1 className="text-slate-900 text-[40px] font-bold mb-[16px] text-center">
            Prompt Marketplace
          </h1>
          <p className="mx-auto w-[90%] vsm:w-[80%] 2xl:w-[88%] text-center text-zinc-600 text-[20px] vsm:text-[32px]">
            Our prompt marketplace provides a community where user can share and
            discover new prompts.
          </p>
          <div className="mx-auto mt-[2rem] vsm:mt-[4.62rem] relative w-[80%] bg-slate-900 rounded-[32px] pt-[1.06rem] pr-[1.88rem] pl-[0.75rem]">
            <img className="w-full" src={img3} alt="feature" />
          </div>
          <img
            className="hidden vsm:block absolute top-[60%] right-[0px] z-[-1]"
            src={lineDsgn}
            alt="dsgn"
          />
        </div>

        <div className="relative mt-[4.31rem]">
          <h1 className="text-slate-900 text-[40px] font-bold mb-[16px] text-center">
            Avatar
          </h1>
          <p className="mx-auto w-[90%] vsm:w-[80%] 2xl:w-[88%] text-center text-zinc-600 text-[20px] vsm:text-[32px]">
            You gain access to powerful Ai algorithms that analyze tweet content
            and provide instant, well crafted responses.
          </p>
          <div className="mx-auto mt-[2rem] vsm:mt-[4.62rem] relative w-[80%] bg-slate-900 rounded-[32px] pt-[1.06rem] pr-[1.88rem] pl-[0.75rem]">
            <img className="w-full" src={img4} alt="feature" />
          </div>
          <img
            className="hidden vsm:block absolute top-[60%] left-[-80px] z-[-1]"
            src={lineDsgn}
            alt="dsgn"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
