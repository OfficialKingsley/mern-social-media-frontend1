import React from "react";

const InputIcon = ({ children, onClick }: { children; onClick? }) => {
  return (
    <div
      className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 flex-grow justify-center rounded-xl cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default InputIcon;
