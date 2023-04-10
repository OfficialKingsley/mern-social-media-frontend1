import Image from "next/image";
import React from "react";
import { FaFacebookMessenger, FaBell, FaPlus } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import { ArrowDownIcon, FlagIcon } from "@heroicons/react/24/outline";
import FacebookImage from "./../../public/facebook-logo.svg";
import {
  HomeIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChatBubbleBottomCenterIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import NavIcon, { RightNavIcon } from "./NavIcon";
import Link from "next/link";
import { useAppSelector } from "../../hooks/redux-toolkit";
import FacebookLogo from "../../icons/FacebookLogo";
const Navbar = () => {
  const authState = useAppSelector((state) => state.auth);
  const user = authState.user;
  return (
    <nav className="sticky top-0 z-50 ">
      <div className="flex items-center justify-between px-2 bg-white shadow-md sm:p-4 hover:shadow-lg lg:px-6 h-14 md:hidden">
        {/* Left Side */}
        <div className="flex items-center flex-shrink gap-1 md:gap-2">
          <Link href={"/"}>
            <FacebookLogo />
          </Link>
          <div className="flex items-center flex-shrink gap-2 p-2 bg-gray-100 rounded-full cursor-pointer">
            <MagnifyingGlassIcon className="h-6 text-gray-600" />
            <input
              type="text"
              placeholder="Search ..."
              className="w-48 bg-transparent outline-none md:inline-flex placeholder:text-gray-500"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex">
            <Link
              href={`/profile/${user?._id}`}
              className={"flex items-center"}
              title={user?.username}
            >
              <Image
                src={user?.profileImageUrl}
                alt={user?.fullName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full p-0.5"
              />
              <p className="items-center hidden text-sm lg:block w-fit">
                {user?.fullName}
              </p>
            </Link>
          </div>
          <Link className="" href={""}>
            <RightNavIcon Icon={FaPlus} />
          </Link>
          <RightNavIcon Icon={FaFacebookMessenger} />
          <RightNavIcon Icon={FaBell} />
          <RightNavIcon Icon={BsTriangleFill} />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between w-screen gap-6 px-2 bg-white shadow-md hover:shadow-lg lg:px-4 h-14">
        {/* lEFT nav */}
        <div className="items-center hidden gap-1 md:flex md:gap-2">
          <Image src={FacebookImage} alt="" />
          <div className="flex items-center flex-shrink gap-2 p-2 bg-gray-100 rounded-full cursor-pointer">
            <MagnifyingGlassIcon className="h-6 text-gray-600" />
            <input
              type="text"
              placeholder="Search ..."
              className="hidden w-48 bg-transparent outline-none md:inline-flex placeholder:text-gray-500"
            />
          </div>
        </div>
        {/* Center Nav */}
        <div className="flex w-full max-w-[600px] px-4 justify-evenly">
          <div className="flex justify-between w-full gap-6">
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
        <div className="hidden lg:items-center lg:flex lg:justify-between lg:gap-2">
          <div className="flex">
            <Link
              href={`/profile/${user?._id}`}
              className={"flex items-center"}
              title={user?.username}
            >
              <Image
                src={user?.profileImageUrl}
                alt={user?.fullName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full p-0.5"
              />
              <p className="items-center hidden text-sm lg:block w-fit">
                {user?.fullName}
              </p>
            </Link>
          </div>
          <Link className="" href={""}>
            <RightNavIcon Icon={FaPlus} />
          </Link>
          <RightNavIcon Icon={FaFacebookMessenger} />
          <RightNavIcon Icon={FaBell} />
          <RightNavIcon Icon={BsTriangleFill} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
