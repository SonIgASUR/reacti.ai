import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Question = ({ question, handleToggle, open }) => {
  return (
    <div className="w-[80%] border-b border-stone-300">
      <div className="flex justify-between items-center mb-[1.69rem]">
        <p className="text-black text-sm font-bold">01</p>
        <h1 className="flex-1 ml-[1.75rem] text-black text-base font-bold">
          {question.question}
        </h1>

        {open ? (
          <IoIosArrowDown
            onClick={() => handleToggle(question.id)}
            className="text-[20px]"
          />
        ) : (
          <IoIosArrowUp
            onClick={() => handleToggle(question.id)}
            className="text-[20px]"
          />
        )}
      </div>
      <div
        className={`${
          open ? "h-fit mb-[1.69rem]" : "h-0"
        } overflow-hidden duration-500`}
      >
        <p className="pl-[20px] text-neutral-600 text-sm font-bold">
          {question.answer}
        </p>
      </div>
    </div>
  );
};

export default Question;
