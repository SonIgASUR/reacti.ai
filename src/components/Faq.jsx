import React from "react";
import { useState } from "react";
import { questions } from "../data/Questions";
import Question from "./Question";

const Faq = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const handleTogggle = (id) => {
    if (id == currentQuestion) {
      setCurrentQuestion(null);
    } else {
      setCurrentQuestion(id);
    }
  };
  return (
    <div
      id="faq"
      className="mt-[12rem] relative mx-auto w-[90%] vsm:w-[80%] xl:w-[1091px] h-[515px]"
    >
      <div
        className={`${
          currentQuestion !== null
            ? "h-[610px] vsm:h-[580px] xl:h-[480px]"
            : "h-[480px]"
        } absolute w-[100%] xl:w-[1077px] left-[14px] top-[23px]  bg-slate-900 rounded-[32px]`}
      />
      <div className="w-[100%] xl:w-[1077px] min-h-[492px] left-0 top-0 absolute bg-white rounded-[32px] border-2 border-slate-900">
        <h1 className="text-slate-900 text-[35px] vsm:text-[40px] font-bold text-center">
          Frequently asked questions
        </h1>
        <ul className="mt-[1.56rem] flex justify-center gap-[0.5rem] vsm:gap-[1.63rem] items-center">
          <li className="w-[98px] h-[35px] relative ">
            <div className="absolute h-full w-full left-[1px] top-[3px] bg-slate-900 rounded-[32px]" />
            <p className="absolute h-full w-full left-0 grid place-items-center bg-purple-50 top-0 text-black text-sm font-bold rounded-[32px] ">
              General
            </p>
          </li>
          <li className="text-zinc-600 text-sm font-bold">Subscription</li>
          <li className="text-zinc-600 text-sm font-bold">Account</li>
          <li className="text-zinc-600 text-sm font-bold">Features</li>
        </ul>

        <div className="mt-[3.06rem] w-full flex flex-col gap-[1.75rem] items-center">
          {questions.map((question) => (
            <Question
              key={question.id}
              handleToggle={handleTogggle}
              open={question.id == currentQuestion}
              question={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
