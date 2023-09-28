import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { formatDistance } from 'date-fns'
import { useMutation, useQueryClient } from "react-query";
import { arrayRemove, arrayUnion, doc, increment, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../../config/firebase";
import { useAuthContext } from "../../context/authContext";
import { successToast } from "../../../utils/notify";

const PromptBox = ({data}) => {
  const {title,prompt,date_created,likes_count,id} =data
  const {user,userData} = useAuthContext()

  const likedPosts = userData.likedPosts || [];
  const savedPosts = userData.savedPosts || [];
  const liked=likedPosts.includes(id);
       const saved=savedPosts.includes(id);
  const queryClient = useQueryClient()
  const isCurrentPromptInUse = userData?.post_id===id 
  const likePostMutation = useMutation({
    mutationFn: async() => {
      const postRef = doc(firestoreDB, "posts",id)
      const userRef = doc(firestoreDB, "users",user?.uid)
      const postUpdate = await updateDoc(postRef,{likes_count:increment(liked?-1 :1)})
      const userUpdate = await updateDoc(userRef,{likedPosts:liked?arrayRemove(id):arrayUnion(id)})
      await queryClient.invalidateQueries({ queryKey: ['userData'] })
    },
  })
  const savePostMutation = useMutation({
    mutationFn: async() => {
      const userRef = doc(firestoreDB, "users",user?.uid)
      const userUpdate = await updateDoc(userRef,{savedPosts:saved?arrayRemove(id):arrayUnion(id)})
      await queryClient.invalidateQueries({ queryKey: ['userData'] })

    },
  })
  const usePromptMutation = useMutation({
    mutationFn: async() => {
      const userRef = doc(firestoreDB, "users",user?.uid)
      const userUpdate = await updateDoc(userRef,{prompt,post_id:id,})
      await queryClient.invalidateQueries({queryKey:["userData"]})
      successToast("Prompt updated successfully!!")
    },
  })
  return (
    <div className="w-[374px] md:w-[48%] h-[260px] vsm:h-[241.35px] px-[13px] py-[10px] flex flex-col justify-between bg-white rounded-md border-[0.50px] border-black">
      <div>
        <p className="text-black text-[15.98px] font-bold">{title}</p>
        <p className="text-black text-[10px]">{formatDistance(date_created,new Date())} ago</p>
      </div>
      <div className="w-full h-fit vsm:h-[128.66px] p-[5px] border-[0.50px] border-black text-pink-900 text-[14px] md:text-[17px] leading-snug overflow-scroll" >
        {prompt}
      </div>

      <div className="w-full flex justify-between items-center">
        <button className={ `px-[10px] py-[6px] bg-gradient-to-r from-sky-500 to-slate-500 rounded-[5px] text-white text-[14px] ${isCurrentPromptInUse && " opacity-60"}`} onClick={usePromptMutation.mutate} disabled={isCurrentPromptInUse}>
          {isCurrentPromptInUse? "In use":"use prompt"}
        </button>
        <div className="flex items-center gap-[10px]">
          <button onClick={()=>{if(!likePostMutation.isLoading)likePostMutation.mutate()}} className="flex items-center px-[3px] gap-[5px] w-fit h-[23.94px] bg-opacity-50 bg-gradient-to-r from-sky-500 to-slate-500 rounded-[5px]">
            {liked ? (
              <AiFillHeart className="text-[red] " />
            ) : (
              <AiOutlineHeart className="text-[red]" />
            )}{" "}
            <p>{likes_count}</p>
          </button>

          <button onClick={()=>{if(!savePostMutation.isLoading)savePostMutation.mutate()}}>{saved ? <BsBookmarkFill />:<BsBookmark />}</button>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
