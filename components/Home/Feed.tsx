import React, { useEffect } from "react";
import InputBox from "../Layout/InputBox";
import Stories from "./Stories";
import Posts from "../Layout/Posts";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-toolkit";
import { getPosts } from "../../state/requests/posts";

const Feed = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts).posts;

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="pb-32 overflow-y-auto grow">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-xl">
        {/* Stories */}
        <Stories />
        <InputBox />
        <Posts posts={posts} />
        {/* InputBox */}
      </div>
    </div>
  );
};

export default Feed;
