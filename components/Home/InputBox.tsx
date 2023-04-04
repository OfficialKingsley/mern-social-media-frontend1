import {
  CameraIcon,
  FaceSmileIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef, useState } from "react";
import NextImage from "./../../public/next.svg";
import InputIcon from "./InputIcon";

const InputBox = () => {
  const filePickerRef = useRef(null);
  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const [imageToPost, setImageToPost] = useState(null);
  return (
    <form className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex gap-4 p-4 items-center">
        <Image
          src={NextImage}
          alt={""}
          className="rounded-full border border-black w-[40px] h-[40px] bg-black"
        />
        <div className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind Kingsley`}
            className="rounded-full h-12 bg-gray-200 px-5 focus:outline-none flex-grow"
          />
        </div>
      </div>
      {imageToPost && (
        <div
          onClick={() => {}}
          className="flex hover:brightness-110 transition duration-150 hover:scale-105 cursor-pointer i justify-center tems-center"
        >
          <img src={imageToPost} alt="" className="object-contain" />
        </div>
      )}
      <div className="flex justify-evenly p-3 border-t">
        <InputIcon>
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </InputIcon>
        <InputIcon
          onClick={() => {
            filePickerRef.current.click();
          }}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </InputIcon>
        <InputIcon>
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </InputIcon>
      </div>
    </form>
  );
};

export default InputBox;
