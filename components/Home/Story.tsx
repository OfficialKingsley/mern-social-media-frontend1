import Image from "next/image";
import React from "react";

const Story = ({ name, src, profile }) => {
  return (
    <div className="relative p-3 overflow-x-hidden overflow-y-hidden transition duration-200 ease-in transform cursor-pointer h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 hover:scale-105 hover:animate-pulse">
      <Image
        src={src}
        alt=""
        className="absolute z-50 object-cover rounded-full opacity-0 lg:opacity-100 top-10"
        width={40}
        height={40}
      />
      <Image
        src={profile}
        alt={""}
        className="object-cover rounded-full filter brightness-75 lg-rounded-3xl"
      />
      <p className="absolute w-5/6 text-sm font-bold text-white truncate opacity-0 lg:opacity-100 bottom-4">
        {name}
      </p>
    </div>
  );
};

export default Story;
