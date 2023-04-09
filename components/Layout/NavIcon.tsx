import React from "react";

type NavIconProps = {
  Icon;
  isActive?: boolean;
  side?: "left" | "center" | "right";
};
const NavIcon = ({ Icon, isActive = false, side }: NavIconProps) => {
  return (
    <div
      className={`flex items-center cursor-pointer md:px-4 sm:h-8 sm:hover:bg-gray-400 ${
        side === "center" && `active:border-b-4 active:border-blue-500 `
      } ${
        side === "right" && "hidden xl:inline-flex"
      } text-gray-500 p-4 rounded-lg group`}
    >
      <Icon
        className={`h-5 transition-all text-center sm:h-7 mx-auto ${
          isActive === true && "text-blue-500"
        }  group-hover:text-blue-500 ${side === "right" && "xl:inline-flex"}`}
      />
    </div>
  );
};

export default NavIcon;
