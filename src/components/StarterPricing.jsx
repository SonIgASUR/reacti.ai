import React from "react";
import { BsFillArrowUpRightCircleFill as Arrow } from "react-icons/bs";

const StarterPricing = ({handlePayment,plan}) => {
  return (
    <div className="w-[90%] vsm:w-[427.79px] h-[427.79px] relative bg-pink-500 rounded-[40.59px] flex flex-col items-center">
      <button onClick={handlePayment} className="text-2xl absolute right-[2.03rem] top-[2.02rem] text-pink-500 bg-white py-2 px-5 rounded-full">
        {" "}
        {/* <Arrow className="text-[47.08px] absolute right-[2.03rem] top-[2.02rem] text-white" /> */}
        BUY
      </button>
      <h1 className="mt-[4.01rem] text-purple-50 text-[29.10px] font-bold mb-[1.16rem]">
        Starter
      </h1>
      <p className="text-purple-50 text-[52.90px] font-bold mb-[2.31rem]">
        ${plan["price"]}
        <span className="text-zinc-800 text-[21.16px] font-bold">
          {plan.type==="monthly" && "/M0"}
          {plan.type==="quarterly" && "/PQ"}
          {plan.type==="yearly" && "/PA"}
        </span>
      </p>
      <ul className="flex flex-col items-center gap-[19.84px]">
        <li className="text-purple-50 text-xl font-medium">For Beginner</li>
        <li className="text-purple-50 text-xl font-medium">
          200 requests/month
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

export default StarterPricing;
