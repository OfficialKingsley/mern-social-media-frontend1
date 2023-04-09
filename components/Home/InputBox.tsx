import {
  CameraIcon,
  FaceSmileIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NextImage from "./../../public/next.svg";
import InputIcon from "./InputIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { addPost } from "../../state/requests/posts";
import { unwrapResult } from "@reduxjs/toolkit";
import Link from "next/link";

const InputBox = () => {
  const user = useAppSelector((state) => state.auth).user;
  const [imageToPost, setImageToPost] = useState(null);
  const [actualImage, setActualImage] = useState(null);
  const [showSubmit, setShowSubmit] = useState<boolean>(false);
  const filePickerRef = useRef(null);
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();

  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    if (!e.target.files[0]) {
      setShowSubmit(false);
    }
    if (e.target.files[0]) {
      setActualImage(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
      setShowSubmit(true);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const text = inputRef.current.value;

    const postImage = actualImage;
    console.log(postImage);
    formData.append("text", text);
    formData.append("postImage", postImage);
    formData.append("user", user._id);
    dispatch(addPost(formData));
    setActualImage(null);
    setImageToPost(null);
    inputRef.current.value = "";
  };

  return (
    <form className="p-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl">
      <div className="flex items-center gap-4 p-4">
        <Link href={`profile/${user?._id}`}>
          <Image
            src={user?.profileImageUrl}
            alt={""}
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <div className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${user?.firstName}`}
            ref={inputRef}
            onChange={(e) => {
              if (e.target.value) {
                setShowSubmit(true);
              } else {
                setShowSubmit(false);
              }
            }}
            className="flex-grow h-12 px-5 bg-gray-200 rounded-xl focus:outline-none"
          />
        </div>
      </div>
      {imageToPost && (
        <div
          onClick={() => {}}
          className="flex justify-center transition duration-150 border-t cursor-pointer hover:brightness-110 hover:scale-105 i tems-center"
        >
          <img src={imageToPost} alt="" className="object-contain" />
        </div>
      )}
      {showSubmit && (
        <>
          <div className="text-white bg-blue-500 rounded-xl">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full h-full p-2 "
            >
              Add Post
            </button>
          </div>
        </>
      )}
      <div className="flex p-3 border-t justify-evenly">
        <InputIcon>
          <VideoCameraIcon className="text-red-500 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </InputIcon>
        <InputIcon
          onClick={() => {
            filePickerRef.current.click();
          }}
        >
          <CameraIcon className="text-green-400 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Photo</p>
          <input
            type="file"
            accept=".jpg, .jpeg, .webp, .gif, .png"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </InputIcon>
        <InputIcon>
          <FaceSmileIcon className="text-yellow-300 h-7" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </InputIcon>
      </div>
    </form>
  );
};

export default InputBox;
