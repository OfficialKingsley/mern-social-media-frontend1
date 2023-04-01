import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  ChevronDownIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className="w-fit p-4 max-w-[600px] xl:min-w-[300px]">
      <SidebarItem
        textContent={"Kingsley Ihemelandu"}
        linkValue="profile/"
        Icon={UserIcon}
      />
      <SidebarItem
        textContent={"Friends"}
        linkValue="friends/"
        Icon={UsersIcon}
      />
      <SidebarItem
        textContent={"Groups"}
        linkValue="groups/"
        Icon={UserGroupIcon}
      />
      <SidebarItem
        textContent={"Kingsley Ihemelandu"}
        linkValue="profile/"
        Icon={BookmarkIcon}
      />
      <SidebarItem
        textContent={"Kingsley Ihemelandu"}
        linkValue="profile/"
        Icon={AdjustmentsHorizontalIcon}
      />
      <SidebarItem
        textContent={"Kingsley Ihemelandu"}
        linkValue="profile/"
        Icon={ChevronDownIcon}
      />
    </aside>
  );
};

export default Sidebar;
