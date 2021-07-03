import React from "react";

const MobileMenu = () => {
  return (
    <div className="flex  w-full flex-col items-center bg-white px-4 py-14 fixed z-50">
      <a
        className="text-lg mx-3 font-semibold border-2 border-transparent  px-4 py-1 rounded-3xl text-black hover:border-black"
        href="#"
      >
        Home
      </a>
      <a
        className="text-lg mx-3 mt-2 mb-8  font-normal border-2 border-transparent px-4 py-1 rounded-3xl text-black hover:border-black"
        href="#"
      >
        Portfolio
      </a>
      <button className="text-base font-semibold  px-10 py-3  rounded-3xl uppercase  transform transition duration-300 hover:scale-x-110 purple__hire w-52">
        Hire me
      </button>
    </div>
  );
};

export default MobileMenu;
