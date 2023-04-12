import React, { useRef, useState } from "react";
import TimelineImage from "./../../public/timeline1.jpg";
import Image from "next/image";
import { IUser } from "../../types/IUser";
import { CameraIcon } from "@heroicons/react/24/solid";
import { backendUrl } from "../../variables/environment-variables";
import { useAppDispatch } from "../../hooks/redux-toolkit";
import { getProfileUser, refetchUser } from "../../state/requests/users";

export const TimelineNavItem = ({
  text,
  isActive,
}: {
  text: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={`px-4 py-5  ${
        isActive && "text-blue-500 border-blue-500 border-b-2"
      }`}
    >
      {text}
    </div>
  );
};
const TimelineHeader = ({ foundUser }: { foundUser: IUser }) => {
  const [profileImageData, setProfileImageData] = useState(null);
  const profileImageRef = useRef(null);
  const [actualProfileImage, setActualProfileImage] = useState(null);
  const [showAddProfileImage, setShowAddProfileImage] = useState(false);
  const dispatch = useAppDispatch();

  const addProfileImage = (e) => {
    console.log("wow");
    e.preventDefault();
    const reader = new FileReader();

    if (!e.target.files[0]) {
      setShowAddProfileImage(false);
    }
    if (e.target.files[0]) {
      console.log("There is a file");
      setActualProfileImage(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setProfileImageData(readerEvent.target.result);
      setShowAddProfileImage(true);
    };
  };

  const submitProfileImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("profileImage", actualProfileImage);

    try {
      const res = await fetch(
        `${backendUrl}/api/v1/users/${foundUser?._id}/profile-image`,
        { method: "PUT", body: formData }
      );
      const data = await res.json();
      setShowAddProfileImage(false);
      setActualProfileImage(null);
      setProfileImageData(null);
      profileImageRef.current.value = "";
      dispatch(getProfileUser(foundUser._id));
      dispatch(refetchUser());
    } catch (error) {
      setShowAddProfileImage(false);
    }
  };
  return (
    <div className="px-44">
      {showAddProfileImage && (
        <div className="fixed z-50 p-4 -translate-x-1/2 -translate-y-1/2 bg-gray-500 top-1/2 left-1/2">
          <button
            className="block bg-red-500 "
            onClick={() => {
              setShowAddProfileImage(false);
            }}
          >
            Close
          </button>
          <img
            src={profileImageData}
            alt="Update profile Image"
            className="mx-auto my-2 w-80 h-80"
          />
          <button
            type="submit"
            onClick={submitProfileImage}
            className="p-2 text-white bg-blue-500 rounded-lg cursor-pointer"
          >
            Add Profile Image
          </button>
        </div>
      )}
      <div className="relative rounded-md h-96">
        <Image
          src={TimelineImage}
          alt=""
          className="object-cover w-full h-full rounded-md"
        />
        <div className="absolute w-48 h-48 -translate-x-1/2 border-2 border-white rounded-full left-1/2 -bottom-10">
          <div className="relative w-48 h-48">
            <Image
              src={foundUser.profileImageUrl}
              width={40}
              height={40}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
            <span className="absolute w-12 bottom-2 -right-2">
              <label htmlFor="profileImage" className="cursor-pointer">
                <CameraIcon />
              </label>
              <input
                type="file"
                id="profileImage"
                accept=".jpeg, .jpg, .webp, .gif, .png"
                onChange={addProfileImage}
                ref={profileImageRef}
                hidden
              />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12 text-3xl font-bold text-center ">
        <p>{foundUser.fullName}</p>
      </div>
      <div className="mt-6 border border-black border-opacity-10"></div>
      <div className="flex justify-between">
        <div className="flex">
          <TimelineNavItem text={"Posts"} isActive={true} />
          <TimelineNavItem text={"About"} />
          <TimelineNavItem text={"Friends"} />
          <TimelineNavItem text={"Photos"} />
          <TimelineNavItem text={"Videos"} />
          <TimelineNavItem text={"Check-ins"} />
          <TimelineNavItem text={"More"} />
        </div>
        <div className="flex">
          <button>Message</button>
          <button>Call</button>
          <button>Friends Checked</button>
          <button>Ellipses</button>
        </div>
      </div>
    </div>
  );
};

export default TimelineHeader;
