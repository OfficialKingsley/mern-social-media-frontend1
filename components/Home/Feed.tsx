import React from "react";
import InputBox from "../Layout/InputBox";
import Stories from "./Stories";
import Posts from "../Layout/Posts";

const Feed = () => {
  return (
    <div className="pb-32 overflow-y-auto grow">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-xl">
        {/* Stories */}
        <Stories />
        <InputBox />
        <Posts />
        {/* InputBox */}
      </div>
    </div>
  );
};

export default Feed;
