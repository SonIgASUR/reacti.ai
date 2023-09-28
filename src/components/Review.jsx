const Review = ({ review }) => {
  return (
    <div className="w-[95%] vsm:w-[382px] h-[500px] vsm:h-[465px] relative">
      <div className="w-[95%] vsm:w-[375px] h-[500px] vsm:h-[456px] left-[7px] top-[9px] absolute bg-slate-900 rounded-2xl" />
      <div className="w-[95%] vsm:w-[375px] h-[500px] vsm:h-[456px] px-6 pt-[55px] pb-[20px] absolute left-0 top-0  bg-white rounded-2xl border border-slate-900 flex flex-col">
        <div className="text-violet-700 text-6xl font-bold leading-[0] ">“</div>

        <p className="mt-[30px] flex-1 text-neutral-400 text-xl font-medium ">
          {review.text}
        </p>

        <div className="flex items-center gap-3.5">
          <div className="w-[68px] h-[68px] ">
            <img
              className="w-[68px] h-[68px] object-cover rounded-full"
              src={review.img}
              alt="reviewerImg"
            />
          </div>

          <div className="">
            <p className="text-slate-900 text-xl font-medium">{review.name}</p>
            <p className="text-center text-neutral-400 text-base font-medium">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
