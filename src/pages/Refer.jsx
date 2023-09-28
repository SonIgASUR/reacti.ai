import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { errorToast, successToast } from "../../utils/notify";
import request from "../config/request";
import {  useQueryClient } from 'react-query'

const ReferralPage = () => {
  const { userData, setCounter } = useAuthContext();
  const [enteredCode, setEnteredCode] = useState("");
  const [enteredRedeemCode, setEnteredRedeemCode] = useState("");
  const [copied, setCopied] = useState(false);
  const queryClient = useQueryClient()
  const handleRefer = async () => {
    if (enteredCode.length != 10) {
      return errorToast("Invalid Code!");
    }
    console.log(enteredCode);
    try {
      const response = await request("/refer/" + enteredCode);
      if (response?.data?.success) {
        successToast(response?.data?.message);
queryClient.invalidateQueries({queryKey:["userData"]})
        setCounter((prev) => prev + 1);
      } else if (response?.data?.message) {
        errorToast(response?.data?.message);
      } else {
        errorToast("Some error occurred!!");
      }
      setEnteredCode("");
    } catch (e) {
      console.log(e);
      errorToast("Some error occurred!!");
    }
  };
  const handleRedeem = async () => {
    console.log(enteredRedeemCode);
    if (enteredRedeemCode.length != 20) {
      return errorToast("Invalid Code!");
    }
    try {
      const response = await request("/redeem/" + enteredRedeemCode);
      if (response?.data?.success) {
        successToast(response?.data?.message);
        queryClient.invalidateQueries({queryKey:["userData"]})
        setCounter((prev) => prev + 1);
      } else if (response?.data?.message) {
        errorToast(response?.data?.message);
      } else {
        errorToast("Some error occurred!!");
      }
      setEnteredRedeemCode("");
    } catch (e) {
      console.log(e);
      errorToast("Some error occurred!!");
    }
  };
  return (
    <div className=" flex flex-col items-center mt-10">
      <h1 className="text-4xl text-slate-700">Refer and Earn Rewards</h1>
      <h4 className="text-sm  mb-2">
        Earn <span className="text-violet-700">30 requests </span> on each referral
      </h4>
      <div className="bg-slate-100 p-4 rounded-lg max-w-[700px] w-full">
        <h1 className="text-xl mb-1">Your referral code</h1>
        <div className="flex mb-3y rounded overflow-hidden mb-8">
          <h1 className="bg-slate-300 p-3 flex-[3] ">
            {userData.referralCode}
          </h1>
          <button
            className="bg-violet-700 text-white p-2 flex-1"
            onClick={() => {
              navigator.clipboard.writeText(userData.referralCode);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          >
            {copied ? "Copied" : "COPY"}
          </button>
        </div>
        <h1 className="text-xl mb-1">Got a referral code?</h1>
        <div className="flex mb-8  rounded overflow-hidden">
          <input
            type="text"
            value={enteredCode}
            onChange={(e) => {
              setEnteredCode(e.target.value);
            }}
            className=" bg-transparent border-2 border-slate-400 border-r-0 p-3 flex-[3]"
          />
          <button className="bg-violet-700 text-white p-2 flex-1" onClick={handleRefer}>
            Submit
          </button>
        </div>
        <h1 className="text-xl mb-1">Got a coupon code?Redeem here</h1>
        <div className="flex  rounded overflow-hidden">
          <input
            type="text"
            value={enteredRedeemCode}
            onChange={(e) => {
              setEnteredRedeemCode(e.target.value);
            }}
            className=" bg-transparent border-2 border-slate-400 border-r-0 p-3 flex-[3]"
          />
          <button className="bg-violet-700 text-white p-2 flex-1" onClick={handleRedeem}>
            Redeem
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReferralPage;
