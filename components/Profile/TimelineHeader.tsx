import React from "react";
import TimelineImage from "./../../public/timeline1.jpg";
import Image from "next/image";

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
const TimelineHeader = () => {
  return (
    <div className="px-44">
      <div className="relative rounded-md h-96">
        <Image
          src={TimelineImage}
          alt=""
          className="object-cover w-full h-full rounded-md"
        />
        <div className="absolute w-48 h-48 -translate-x-1/2 border-2 border-white rounded-full left-1/2 -bottom-10">
          <Image
            src={TimelineImage}
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="mt-12 text-3xl font-bold text-center ">
        <p>Ronald Oliver</p>
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
