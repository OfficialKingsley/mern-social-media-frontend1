import React from "react";

type NavIconProps = {
  Icon;
  isActive?: boolean;
  side?: "left" | "center" | "right";
};
const NavIcon = ({ Icon, isActive = false, side }: NavIconProps) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer md:px-4 sm:hover:bg-gray-300 ${
        side === "center" && `active:border-b-4 active:border-blue-500 `
      }
       text-gray-500 p-2 rounded-lg group
       `}
    >
      <Icon
        className={`h-5 transition-all text-center sm:h-7 ${
          isActive === true && "text-blue-500"
        }  group-hover:text-blue-500`}
      />
    </div>
  );
};

export const RightNavIcon = ({ Icon }) => {
  return (
    <div
      className={`flex items-center justify-center cursor-pointer p-3 bg-gray-200 sm:hover:bg-gray-300 text-black rounded-full group`}
    >
      <Icon
        className={`transition-all text-center sm:h-4 sm:w-4   group-hover:text-blue-500`}
      />
    </div>
  );
};
export default NavIcon;
