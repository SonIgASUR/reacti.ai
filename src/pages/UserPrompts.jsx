import React from "react";
import { motion } from "framer-motion";
import Header from "../components/profile/Header";
import { IoFootsteps } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import PromptBox from "../components/profile/PromptBox";
import { useQuery } from "react-query";
import { useAuthContext } from "../context/authContext";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestoreDB } from "../config/firebase";

const UserPrompts = () => {
  const { userData } = useAuthContext();
  const savedPostsQuery = useQuery(
    ["savedPosts", userData?.savedPosts],
    async () => {
      const savedPosts = userData?.savedPosts || [];
      if (!savedPosts || savedPosts.length === 0) {
        return [];
      }
      const res = await Promise.all(
        savedPosts.map(async (postID) => {
          const ss = await getDoc(doc(firestoreDB, "posts", postID));
          if (ss.exists()) {
            const temp = ss.data();
            return {
              ...temp,
              id: ss.id,
              date_created: new Date(temp.date_created.seconds * 1000),
            };
          } else {
            return false;
          }
        })
      );
      const data = res.filter(p=>Boolean(p))
      console.log(data);
      return data;
    },
    { enabled: !!userData }
  );
  const savedPostsData = savedPostsQuery?.data || []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Header title="Dashboard" />

      <div className="mt-[20px] flex items-center gap-[10px]">
        <div className="h-[50px] w-[50px] rounded-full bg-[#1A4FBA] grid place-items-center">
          <IoFootsteps className="text-white text-[22px]" />
        </div>
        <p className="text-[#6E7191] font-bold flex items-center gap-[5px]">
          Your prompts <MdOutlineKeyboardArrowRight className="text-[20px]" />
        </p>
      </div>

      <div className="w-full mt-[30px] flex flex-wrap gap-x-[4%] gap-y-[40px]">
        {savedPostsData.map(p=>{
          return <PromptBox key={p.id} data={p}/>
        })}
      </div>
    </motion.div>
  );
};

export default UserPrompts;
