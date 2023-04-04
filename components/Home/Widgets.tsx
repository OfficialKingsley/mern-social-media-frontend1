import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 ">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h1>Contacts</h1>
        <div>
          <MagnifyingGlassIcon />
          <EllipsisHorizontalIcon />
          <VideoCameraIcon />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
