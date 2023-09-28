import React, { useEffect, useState } from "react";
import Header from "../components/profile/Header";
import { motion } from "framer-motion";
import { useAuthContext } from "../context/authContext";
import { toast } from 'react-toastify'
import request from "../config/request";
import { errorToast, successToast } from "../../utils/notify";

const paramsArr= ["<tweet>","<tone>","<comment>","<characterLimit>","<language>"]

const Prompts = () => {

  const [customPrompt, setCustomPrompt] = useState(`Loading...`)
  const [invalidParams, setInvalidParams] = useState([])

  const {userData} = useAuthContext()
  useEffect(()=>{
    setCustomPrompt(userData.prompt)
  },[userData])
  
  const handlePromptChange=(e)=>{
    const val = e.target.value;
    const temp = paramsArr.filter(p=>!val.includes(p))
    setInvalidParams(temp)
    setCustomPrompt(val)
} 
const handlePromptSave=async ()=>{
  if(invalidParams.length){
    return errorToast("Please resolve all error in prompt")
  }
   const res = await  await  toast.promise(request.post("/user/prompt",{prompt:customPrompt}),{ pending: 'Saving your prompt!',})
   if(res.data && res.data.success){
    successToast("Prompt saved successfully!")
   }
   else{
    errorToast("Could save the prompt")
   }
}
const resetPrompt=async ()=>{
  const res = await  toast.promise(request.get("/user/prompt/reset"),{ pending: 'Resetting your prompt!',})
  if(res.data && res.data.success){
   successToast("Prompt reset successfully!")
   setCustomPrompt(res.data.prompt)

  }
  else{
   errorToast("Could reset the prompt")
  }
}
  useEffect(() => {
    document.title = "Reacti.Ai | Prompts";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="prompts-page flex flex-col"
    >
      <Header title="Marketplace" />
      <h1 className="mt-[40.65px] mb-[18px] text-center font-manrope font-bold text-[22px] leading-[30px]">
        Custom Prompts
      </h1>
      <button className="ml-auto btn1 z-[999] relative w-fit font-manrope font-bold text-lg text-white px-[28px] py-[5px] bg-[#0E45B7AB] rounded-[4px]">
        RESET
      </button>
      <textarea className="p-[20px] outline-none mt-[11px] mb-[14px] w-full h-[179px] bg-[#E7E7E7] rounded-[13px]" value={customPrompt} onChange={handlePromptChange}></textarea>
      <button className="w-fit font-urbanist font-bold text-2xl text-[#0E45B7] leading-[30px] px-[18px] border rounded-[9px] border-solid border-black" onClick={handlePromptSave}>
        save
      </button>
      <div className="mt-[55px] font-manrope font-bold text-sm leading-[19px]">
        <p>Note</p>
        <p>These parameters in your prompt are compulsory.</p>
        <ul className="list-disc list-inside">
          <li>&lt;tweet&gt; The tweet text fetched from the twitter page</li>
          <li>
            &lt;tone&gt;The chosen tone. 'Normal' will be passed when using
            custom comment
          </li>
          <li>
            &lt;comment&gt; The comment passed by user.Left blank when sing
            tones
          </li>
          <li>&lt;characterLimit&gt;Characters limit selected</li>
          <li>&lt;language&gt;Language selected</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Prompts;
