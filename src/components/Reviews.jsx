import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { reviewsData } from "../data/ReviewsData";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="mt-[5rem] vsm:mt-[13.13rem] w-[95%] 2xl:max-w-[90%] mx-auto">
      <div className="w-full xmd:flex justify-between">
        <h1 className="text-black text-[40px] text-center vsm:text-start vsm:text-[44px] font-bold">
          See what our customers have <br />
          to say about us
        </h1>

        {/* <div className="mt-[30px] xmd:mt-0 flex justify-center xmd:justify-start items-start gap-4">
          <div className="w-[100px] h-[53px]  rounded-[32px] border border-stone-300 flex justify-center items-center">
            <BsArrowLeft />
          </div>
          <div className="w-[100px] h-[53px]  bg-violet-700 rounded-[32px] flex justify-center items-center">
            <BsArrowRight className="text-white" />
          </div>
        </div> */}
      </div>

      <div className="mt-[2.63rem] flex flex-wrap justify-center gap-[3rem]">
        {reviewsData.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
