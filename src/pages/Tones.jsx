import React, { useEffect } from "react";
import Header from "../components/profile/Header";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "react-query";
import { firestoreDB } from "../config/firebase";
import { useAuthContext } from "../context/authContext";
import {  arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { errorToast, successToast } from "../../utils/notify";

const Tones = ({ setOpenModal }) => {
  const { userData,user } = useAuthContext();
  const queryClient = useQueryClient()
  const [enteredTone,setTone] = useState("")
  const userRef =user &&  doc(firestoreDB,"users",user?.uid)

  useEffect(() => {
    document.title = "Reacti.Ai | Tones";
  }, []);
  const tonesData =  userData?.tones || [];
  const addToneMutation = useMutation({mutationFn:async()=>{
    if(tonesData.find(d=>d.tone===enteredTone)){
        return errorToast("Tone already exists!")
    }
    const res = await updateDoc(userRef,{
        tones:arrayUnion({tone:enteredTone,selected:false})
    })
    await queryClient.invalidateQueries(["userData"])
    successToast("Tone added successfully")
    setTone("")

}})
 const removeToneMutation = useMutation({mutationFn:async(toneData)=>{
  const res = await updateDoc(userRef,{
    tones:arrayRemove(toneData)
})
  await queryClient.invalidateQueries(["userData"])
  successToast("Tone removed successfully")
  setTone("")

}})
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className=""
    >
      <Header title="Tones" />
      <h1 className="mt-[40.65px] mb-[18px] text-center font-manrope font-bold text-[22px] leading-[30px]">
        Tones
      </h1>
      <div className="w-full mt-[50px]">
  

      <div className="mt-4">
        <div className="bg-[#e7e7e7] rounded-lg  py-6 px-4">
            <div className="flex items-center gap-4 flex-wrap">
                {tonesData?.map(t=>{
                    return <ToneButton key={t.tone} data={t} onClick={()=>{!removeToneMutation.isLoading && removeToneMutation.mutate(t)}}/>
                })}
            </div>
        </div>
        <div className="bg-slate-800 h-[1px] my-6"></div>
      <h1 className="text-2xl font-semibold">Add tone</h1>
      <div className="mt-4">
        <div className="flex">
            <input type="text" value={enteredTone} onChange={(e)=>{setTone(e.target.value)}} className="p-[10px] outline-none  w-full max-w-sm bg-[#E7E7E7] rounded-l-xl" />
            <button className={`bg-[#0e45b7] px-4 py-2 rounded-r-xl text-white ${(!enteredTone || addToneMutation.isLoading) && "opacity-40"}`} onClick={addToneMutation.mutate} disabled={!enteredTone || addToneMutation.isLoading}>{addToneMutation.isLoading ?"Adding.." :"Add tone"}</button>
        </div>
      </div>
      </div>
      </div>
    </motion.div>
  );
};

const ToneButton = ({ data, onClick }) => {
  return (
    <div className="px-[10px] py-[6px] bg-[#0e45b7] rounded-[5px] text-white text-[14px] false  relative">
        <span className="text-lg font-medium">{data.tone}</span>
        <button onClick={onClick} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-slate-700 rounded-full h-4 w-4 flex justify-center items-center">
            x
        </button>
    </div>
  );
};
export default Tones;
