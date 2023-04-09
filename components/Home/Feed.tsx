import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = () => {
  return (
    <div className="overflow-y-auto grow pb-32">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
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
