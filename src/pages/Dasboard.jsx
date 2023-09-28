import React from "react";
import { useEffect } from "react";
import { IoFootsteps } from "react-icons/io5";
import Header from "../components/profile/Header";
import UserHeader from "../components/profile/UserHeader";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import WeeklyUsageChart from "../components/WeeklyUsageChart";
import TotalUsageChart from "../components/TotalUsageChart";

const Dasboard = () => {
  const { user } = useAuthContext();
  useEffect(() => {
    document.title = "Reacti.Ai | Dashboard";
  }, []);
const firstName = user?.displayName?.split(" ")[0]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="dashboard w-full min-h-[100vh]"
    >
      <Header title="Dashboard" />

      <h1 className="mt-[14.75px] font-poppins text-[1.5rem] leading-[19px] text-[#060606]">
        Dashboard Overview
      </h1>

      <UserHeader
        userName={firstName}
        text="Have a nice day and don’t forget to get some followers via using reacti.ai!"
        linkName="Marketplace"
        link="/profile/marketplace"
      />

      <div className="mt-[40px] w-full xmd:flex ">
        <div className="w-full h-fit">
          <div className="flex w-full gap-4 mt-10">
            <Link
              to="/profile/userprompts"
              className="bg-white w-full md:w-[25%]  pb-[10px] rounded-[6.95079px] flex flex-col items-center justify-center gap-[10px]"
            >
              <div className="h-[50px] w-[50px] rounded-full bg-[#1A4FBA] grid place-items-center">
                <IoFootsteps className="text-white text-[22px]" />
              </div>
              <p className="text-[#6E7191] font-bold flex items-center gap-[5px]">
                Your prompts{" "}
                <MdOutlineKeyboardArrowRight className="text-[20px]" />
              </p>
            </Link>
            <div className="bg-white rounded-lg p-4 flex-1">
              <h1 className="text-lg text-slate-800">Total Usage:</h1>
              <div className="w-[80%] mx-auto">
                <TotalUsageChart />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 flex-[2]">
              <h1 className="text-lg text-slate-800">Last Week Usage:</h1>

              <WeeklyUsageChart />
            </div>
          </div>
        </div>

      
      </div>
    </motion.div>
  );
};

export default Dasboard;
