import React from "react";
import { BsFillArrowUpRightCircleFill as Arrow } from "react-icons/bs";

const FreePricing = ({ isMonthly }) => {
  return (
    <div className="w-[90%] vsm:w-[427.79px] h-[427.79px] relative bg-[#F6AE29] rounded-tr-[40.59px] rounded-bl-[40.59px] flex flex-col items-center">
      <Arrow className="text-[47.08px] absolute right-[2.03rem] top-[2.02rem] text-white" />
      <h1 className="mt-[3.83rem] text-purple-50 text-[29.10px] font-bold mb-[1.16rem]">
        Free
      </h1>
      <p className="text-purple-50 text-[52.90px] font-bold mb-[2.31rem]">
        {isMonthly ? "$0" : "$0"}{" "}
        <span className="text-zinc-800 text-[21.16px] font-bold">
          {isMonthly ? "/M0" : "/PA"}
        </span>
      </p>
      <ul className="flex flex-col items-center gap-[19.84px]">
        <li className="text-purple-50 text-xl font-medium">
          Perfect to start with
        </li>
        <li className="text-purple-50 text-xl font-medium">
          30 requests/month
        </li>
        <li className="text-purple-50 text-xl font-medium">
          All type of reactions
        </li>
        <li className="text-purple-50 text-xl font-medium line-through">
          Premium Support
        </li>
      </ul>
    </div>
  );
};

export default FreePricing;
