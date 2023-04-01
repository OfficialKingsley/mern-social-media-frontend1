import Image from "next/image";
import React from "react";
import FbLogo from "./../../public/fb-logo.webp";
import {
  ArrowDownIcon,
  FlagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ViewColumnsIcon,
  ChatBubbleBottomCenterIcon,
  BellIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import NavIcon from "./NavIcon";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-md sm:p-2 hover:shadow-lg lg:px-5">
      {/* lEFT nav */}
      <div className="flex items-center flex-shrink gap-1 md:gap-2">
        <Image src={FbLogo} width={40} height={40} alt={""} />
        <div className="flex items-center flex-shrink gap-2 p-2 bg-gray-100 rounded-full">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search ..."
            className="hidden bg-transparent outline-none md:inline-flex placeholder:text-gray-500"
          />
        </div>
      </div>
      {/* Center Nav */}
      <div className="justify-center">
        <div className="flex gap-6">
          <Link href={"/"}>
            <NavIcon Icon={HomeIcon} isActive side={"center"} />
          </Link>
          <Link href="">
            <NavIcon Icon={FlagIcon} side={"center"} />
          </Link>
          <Link href={""}>
            <NavIcon Icon={PlayIcon} side={"center"} />
          </Link>
          <Link href={""}>
            <NavIcon Icon={ShoppingCartIcon} side={"center"} />
          </Link>
        </div>
      </div>
      {/* Right Nav */}
      <div className="flex items-center sm:spacing-x-2">
        {/* <Image /> ProfilePi */}

        <Link
          href={"profile/id"}
          className={"flex items-center gap-1"}
          title={"Kingsley Ihemelandu"}
        >
          <NavIcon Icon={UserIcon} />
        </Link>
        <NavIcon Icon={ViewColumnsIcon} side={"right"} />
        <NavIcon Icon={ChatBubbleBottomCenterIcon} side={"right"} />
        <NavIcon Icon={BellIcon} side={"right"} />
        <NavIcon Icon={ArrowDownIcon} side={"right"} />
      </div>
    </nav>
  );
};

export default Navbar;
