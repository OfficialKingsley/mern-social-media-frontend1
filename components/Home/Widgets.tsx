import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Widgets = () => {
  return (
    <div className="flex-col hidden lg:flex w-80 ">
      <div className="flex items-center justify-between mb-5 text-gray-500">
        <h1>Contacts</h1>
        <div>
          <MagnifyingGlassIcon />
          <EllipsisHorizontalIcon />
          <VideoCameraIcon />
        </div>
        <div>Online</div>
        <div>Suggestions</div>
      </div>
    </div>
  );
};

export default Widgets;
