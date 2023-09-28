import { useState } from "react";
import pricingIcon from "../assets/pricingIcon.png";
import atomImg from "../assets/atomImg.png";
import { FaPlay } from "react-icons/fa";
import ProPricing from "./ProPricing";
import FreePricing from "./FreePricing";
import StarterPricing from "./StarterPricing";
import BasicPricing from "./BasicPricing";
import { toast } from "react-toastify";
import request from "../config/request";
import { errorToast } from "../../utils/notify";
import { useAuthContext } from "../context/authContext";

export const pricingPlansData = [
  {
    price: 0,
    plan_id: 0,
    name: "Free",
    heading: "Perfect to start with",
    heading2: "No credit card required",
    monthly_limit: 30,
    premium_support: false,
  },
  {
    price: 5,
    plan_id: 5,
    name: "Starter",
    heading: "For Beginners",
    heading2: "$60/year per account",
    monthly_limit: 200,
    daily_limit: 5,
    premium_support: false,
  },
  {
    price: 15,
    plan_id: 15,
    name: "Basic",
    heading: "For the Active Users",
    heading2: "$180/year per account",
    monthly_limit: 1500,
    daily_limit: 50,
    premium_support: true,
  },
  {
    price: 30,
    plan_id: 30,
    name: "Professional",
    heading: "For the Real Influencers",
    heading2: "$360/year per account",
    monthly_limit: 1500,
    daily_limit: 50,
    premium_support: true,
  },
];
const pricingPlans = [
  
  {
    price: 5,
    id:5,
    name:"Starter",
    plan_monthly_limit: 200,
    plan_daily_limit: 5,
    type:"monthly"
  },
  {
    price: 15,
    id:15,
    name:"Basic",

    plan_monthly_limit: 600,
    plan_daily_limit: 20,
    type:"monthly"
  },
  {
    price: 30,
    id:30,
    name:"Professional",

    plan_monthly_limit: 1500,
    plan_daily_limit: 50,
    type:"monthly"
  },
  {
    price: 14,
    id:14,
    name:"Starter",
    plan_monthly_limit: 200,
    plan_daily_limit: 5,
    type:"quarterly"
  },
  {
    price: 42,
    id:42,
    name:"Basic",

    plan_monthly_limit: 600,
    plan_daily_limit: 20,
    type:"quarterly"
  },
  {
    price: 84,
    id:84,
    name:"Professional",

    plan_monthly_limit: 1500,
    plan_daily_limit: 50,
    type:"quarterly"
  },
  {
    price: 54,
    id:54,
    name:"Starter",
    plan_monthly_limit: 200,
    plan_daily_limit: 5,
    type:"yearly"
  },
  {
    price: 162,
    id:162,
    name:"Basic",

    plan_monthly_limit: 600,
    plan_daily_limit: 20,
    type:"yearly"
  },
  {
    price: 324,
    id:324,
    name:"Professional",

    plan_monthly_limit: 1500,
    plan_daily_limit: 50,
    type:"yearly"

  },
];
const Pricing = () => {
  //State to handle billing period
  const [isMonthly, setIsMonthly] = useState(true);
  const [planDuration, setPlanDuration] = useState("monthly");
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const handlePayment = async (id) => {
    if (loading || !user) return;
    setLoading(true);
    try {
      if (id == 0) return;
      const res = await toast.promise(request.get("/user/createorder/" + id), {
        pending: "Creating your order!",
      });

      if (res.data && res.data.success) {
        window.open(res.data.payment_url, "_blank");
      }
      setLoading(false);
    } catch (e) {
      errorToast(e.response?.data?.message || "Some error occurred!");
      setLoading(false);
    }
  };
  const starterPlan = pricingPlans.find(p=>(p.type===planDuration&&p.name==="Starter"))
  const basicPlan = pricingPlans.find(p=>(p.type===planDuration&&p.name==="Basic"))
  const professionalPlan = pricingPlans.find(p=>(p.type===planDuration&&p.name==="Professional"))
  return (
    <div
      id="pricing"
      className="max-w-[1800px] mx-auto mt-[10rem] vsm:mt-[5.69rem] relative"
    >
      <div className="absolute top-[-50px] md:top-[-20px] left-[80px] h-[62px] w-[62px]">
        <div className="relative h-full w-full grid place-items-center">
          <img
            className="absolute z-[-2] h-full w-full"
            src={pricingIcon}
            alt="pricing_Icon"
          />
          <FaPlay className="text-white text-[24px] z-[2]" />
        </div>
      </div>
      <img
        className="hidden lg:block absolute right-[50px] top-[-40px]"
        src={atomImg}
        alt="pricing_Icon"
      />

      <h1 className="text-stone-950 text-[44px] font-bold text-center">
        Choose your pricing
      </h1>
      <p className="text-zinc-600 mx-auto w-[80%] xmd:w-auto text-lg font-medium text-center">
        30 days unlimited free trial. No contract or credit card required.
      </p>

      {/* Billing period selection */}
      <div className="mt-[1.5rem] w-full flex items-center justify-center gap-[11px]">
        <select name="" id="" className=" py-[8px] px-4 text-xl bg-purple-50 rounded-[32px] border border-stone-300 font-bold text-stone-950 focus:outline-none" value={planDuration} onChange={(e)=>{setPlanDuration(e.target.value)}}>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* <div className="mt-[1.5rem] w-full flex items-center justify-center gap-[11px]">
        <div
          className={`${
            isMonthly
              ? "font-bold text-stone-950"
              : "font-normal text-neutral-500"
          } text-base`}
        >
          Monthly
        </div>
        <div
          onClick={() => setIsMonthly((prev) => !prev)}
          className="relative w-[71px] h-9  py-[5px] bg-purple-50 rounded-[32px] border border-stone-300 flex items-center"
        >
          <div
            className={`absolute ${
              isMonthly ? "left-[5px]" : "left-[40px]"
            } duration-200 w-[26px] h-[26px] bg-violet-600 rounded-[27.73px] border`}
          />
        </div>
        <div
          className={`${
            !isMonthly
              ? "font-bold text-stone-950"
              : "font-normal text-neutral-500"
          } text-base`}
        >
          Yearly
        </div>
      </div> */}

      <div className="relative mt-[3rem] vsm:mt-[7.74rem] px-[20px] md:px-[50px]">
        <div className="hidden vsm:block absolute z-[-1] left-[-220px] top-[80px] h-[350px] 2xl:h-[508px] w-[415.01px]">
          <div className="relative w-full h-full">
            <div className="origin-top-left w-full h-full rotate-[-30deg] opacity-60 bg-purple-50" />
            <div className="absolute left-[30px] top-[0px] w-full h-full z-[2] origin-top-left rotate-[-30deg] opacity-60 bg-purple-100" />
          </div>
        </div>
        <div className="hidden vsm:block absolute z-[-1] right-[-30px] bottom-[-180px] h-[350px] 2xl:h-[508px] w-[515.01px]">
          <div className="relative w-full h-full">
            <div className="origin-top-left w-full h-full rotate-[-30deg] opacity-60 bg-purple-50" />
            <div className="absolute left-[30px] top-[0px] w-full h-full z-[2] origin-top-left rotate-[-30deg] opacity-60 bg-purple-100" />
          </div>
        </div>

        {/* Pricings */}
        <div className="flex flex-col items-center xmd:flex-row gap-[1.01rem]">
          <FreePricing />
          <StarterPricing handlePayment={()=>{handlePayment(starterPlan.id)}} plan={starterPlan}/>
        </div>
        <div className="mt-[1.03rem] flex flex-col items-center xmd:flex-row xmd:justify-end gap-[1.01rem]">
          <BasicPricing handlePayment={()=>{handlePayment(basicPlan.id)}} plan={basicPlan}/>
          <ProPricing handlePayment={()=>{handlePayment(professionalPlan.id)}} plan={professionalPlan}/>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
