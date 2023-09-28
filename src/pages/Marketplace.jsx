import React, { useEffect } from "react";
import Header from "../components/profile/Header";
import { SlArrowRight } from "react-icons/sl";
import PromptBox from "../components/profile/PromptBox";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "react-query";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../config/firebase";
import { useAuthContext } from "../context/authContext";

const Marketplace = ({ setOpenModal }) => {
  const { userData, user } = useAuthContext();

  useEffect(() => {
    document.title = "Reacti.Ai | Marketplace";
  }, []);

  const postsQuery = useQuery(
    ["posts", userData?.likedPosts],
    async () => {
      const snapshot = await getDocs(collection(firestoreDB, "posts"));
      const data = [];
      if (snapshot.empty) {
        return data;
      }
      snapshot.forEach((ss) => {
        const temp = ss.data();
        data.push({
          ...temp,
          id: ss.id,
          date_created: new Date(temp.date_created.seconds * 1000),
        });
      });
      return data;
    },
    { enabled: !!user }
  );
  const postsData = postsQuery?.data || [];
  console.log(postsData);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="min-h-[100vh]"
    >
      <Header title="Marketplace" />

      <div className="w-full mt-[50px]">
        <div className="user-header w-full h-fit px-[20px] py-[10px] flex justify-between items-center">
          <h1 className="text-[1.5rem] leading-[37px] text-[#CED5DC]">
            Hello <span className="text-white">{user?.displayName}</span>
          </h1>
          <div className="flex items-center gap-[6px] text-white">
            <p className="text-white text-[16px] font-bold leading-3">
              See Dashboard
            </p>
            <SlArrowRight />
          </div>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="float-right mr-0 mb-[20px] mt-[30px] px-[15px] py-[10px] bg-gradient-to-r from-sky-500 to-slate-500 rounded-[5px] text-white leading-snug"
        >
          Add New Prompt
        </button>

        <div className="w-full flex flex-wrap gap-x-[4%] gap-y-[40px]">
          {postsData.length ? (
            postsData.map((post) => {
              return <PromptBox key={post.id} data={post} />;
            })
          ) : (
            <p className="text-slate-400">No prompts available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;
