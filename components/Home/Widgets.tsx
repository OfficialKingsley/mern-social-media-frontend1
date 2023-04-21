import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useAppSelector } from "../../hooks/redux-toolkit";

const Widgets = () => {
  const friends = useAppSelector((state) => state.auth.user)?.friends;
  return (
    <div className="flex-col hidden p-4 border-4 border-black lg:flex w-80">
      <div className="">
        <h1 className="text-3xl text-center text-black bg-white rounded-lg">
          Friends
        </h1>
        <div>
          {friends?.map((friend) => (
            <div className="flex items-center gap-2 p-2 my-4 bg-white rounded-lg">
              <img
                src={friend.profileImageUrl}
                alt={friend.fullName}
                className="w-[40px] h-[40px]"
              />
              {friend.fullName}
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-500">
        <h1 className="text-3xl text-center text-black bg-white rounded-lg">
          Friends
        </h1>
        <div>
          <MagnifyingGlassIcon width={40} height={40} />
          <EllipsisHorizontalIcon width={40} height={40} />
          <VideoCameraIcon width={40} height={40} />
        </div>
      </div>
      <div className="text-gray-500 ">
        <h1 className="text-3xl text-center text-black bg-white rounded-lg">
          Friends
        </h1>
        <div>
          <MagnifyingGlassIcon width={40} height={40} />
          <EllipsisHorizontalIcon width={40} height={40} />
          <VideoCameraIcon width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
