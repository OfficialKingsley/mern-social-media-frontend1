import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="overflow-hidden grow">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        {/* Stories */}
        <Stories />
        <InputBox />
        {/* InputBox */}
      </div>
    </div>
  );
};

export default Feed;
