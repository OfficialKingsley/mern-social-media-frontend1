import React, { useEffect } from "react";
import InputBox from "../Layout/InputBox";
import Posts from "../Layout/Posts";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { getSpecificUserPosts } from "../../state/requests/posts";

const ProfileBody = ({ foundUser }) => {
  const dispatch = useAppDispatch();
  const specifiUserPosts = useAppSelector(
    (state) => state.users.specificUserPosts
  );
  useEffect(() => {
    dispatch(getSpecificUserPosts(foundUser?._id));
  }, []);
  return (
    <div className="flex gap-2 px-4 py-4 overflow-y-auto bg-gray-200 md:px-24 lg:px-44">
      <div>
        <div className="hidden p-2 bg-white rounded-md w-80 md:block">
          <h3>Intro</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sunt.
          </p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full border-4 border-black h-fit">
        <InputBox />
        <div className="flex items-center justify-between w-full p-2 my-2 bg-white rounded-xl title">
          <h1 className="text-2xl font-bold">Posts</h1>
          <p>Filter</p>
        </div>
        <Posts posts={specifiUserPosts} />
      </div>
    </div>
  );
};

export default ProfileBody;
