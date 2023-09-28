import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestoreDB } from "../../config/firebase";
import { errorToast, successToast } from "../../../utils/notify";

const paramsArr = [
  "<tweet>",
  "<tone>",
  "<comment>",
  "<characterLimit>",
  "<language>",
];

const PromptModal = ({ openModal, setOpenModal }) => {
  const [invalidParams, setInvalidParams] = useState([]);
  const [customPrompt, setCustomPrompt] = useState("");
  const queryClient = useQueryClient();
  const handlePromptChange = (e) => {
    const val = e.target.value;
    const temp = paramsArr.filter((p) => !val.includes(p));
    setInvalidParams(temp);
    setCustomPrompt(val);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const addPostMutation = useMutation({
    mutationFn: async (data) => {
      
  if(invalidParams.length){
    return errorToast("Please resolve all error in prompt")
  }
      data = { ...data, date_created: serverTimestamp(), likes_count: 0,prompt:customPrompt };
      const docRef = await addDoc(collection(firestoreDB, "posts"), data);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      successToast("Prompt published to marketplace")
      reset()
    },
  });
  return (
    <div
      className={`prompt-modal ${
        !openModal && "hidden"
      } z-[11] fixed top-0 left-0 w-full h-[100vh] bottom-0 bg-black/10 flex justify-center items-center`}
    >
      <div className="relative w-[85%] lg:w-[894px] h-fit xmd:h-[428px] bg-white rounded-md px-[60px] py-[30px] flex flex-col justify-end">
        <FaTimes
          onClick={() => setOpenModal(false)}
          className="absolute top-[20px] right-[20px] text-[30px] cursor-pointer"
        />

          <form onSubmit={handleSubmit(addPostMutation.mutate)}>
        <div className="w-full h-[249px] bg-white rounded-md border-[1px] border-black p-[10px] flex flex-col lg:flex-row gap-[10px]">

            {" "}
            <div className="w-full lg:w-[70%]">
            <textarea
              placeholder="Your prompt goes here"
              className={`w-full  border ${invalidParams.length>0 ? "border-red-500 border-[2px]":"border-slate-400 border-[2px]"}`}
             value={customPrompt}
          rows="10"

             onChange={handlePromptChange}
            ></textarea>

<p className={`text-red-400 opacity-0 transition-opacity text-sm duration-300 ${invalidParams.length>0 && "opacity-100"}`}>Missing following params:{invalidParams.join(",")}</p>
</div>
            <div className="flex-1">
              <input
                placeholder="Select Prompt Category"
                className="w-full "
                type="text"
                {...register("category")}
              />
              <input
                placeholder="Prompt Title"
                className="w-full mt-[10px]"
                type="text"
                {...register("title")}
              />
              <button
                className="mt-[20px]"
                disabled={addPostMutation.isLoading}
              >
                {addPostMutation.isLoading ? "Saving...." : "Save & Publish"}
              </button>
            </div>
        </div>
          </form>

        <button className="self-end mt-[40px]">Manage Prompts</button>
      </div>
    </div>
  );
};

export default PromptModal;
