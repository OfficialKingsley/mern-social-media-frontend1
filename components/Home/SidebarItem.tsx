import Image from "next/image";
import Link from "next/link";
import React from "react";

type SidebarItemProps = {
  textContent: string;
  src?;
  Icon?;
  linkValue: string;
};
const SidebarItem = ({
  textContent,
  src,
  Icon,
  linkValue,
}: SidebarItemProps) => {
  return (
    <Link href={linkValue}>
      <div className="flex items-center gap-2 p-2 cursor-pointer sm:w-64 hover:bg-gray-400 rounded-xl">
        {src && (
          <Image
            src={src}
            alt={""}
            className="rounded-full"
            width={30}
            height={30}
          />
        )}
        {Icon && <Icon className="w-6 h-6 text-blue-500" />}
        <p className="hidden font-medium sm:inline-flex">{textContent}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;
