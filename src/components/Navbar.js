import React from "react";
import logo from "./../images/logo_white@2x.png";
import logoBlack from "./../images/logo_01@2x.png";

const Navbar = ({ scroll, handleMenuClick, hambarger }) => {
  let image, menuColor, hireMeColor, iconColor;
  if (scroll || hambarger) {
    image = logoBlack;
    menuColor = "black__menu";
    hireMeColor = "purple__hire";
    iconColor = "text-black border-black";
  } else {
    image = logo;
    menuColor = "white__menu";
    hireMeColor = "white__hire";
    iconColor = "text-white border-white";
  }

  return (
    <div className="flex justify-between items-center py-3">
      <div className="nav__logo">
        <img
          className="logo__img cursor-pointer"
          src={image}
          alt="bestDesigner-logo"
        />
      </div>

      <svg
        onClick={handleMenuClick}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 w-10 p-2 border rounded cursor-pointer ${iconColor} lg:hidden menu__bar`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div className="nav__middle hidden lg:block">
        <a
          className={`text-base mx-3 font-semibold border-2 border-transparent  px-4 py-1 rounded-3xl ${menuColor}`}
          href="#"
        >
          Home
        </a>
        <a
          className={`text-base mx-3  font-normal border-2 border-transparent px-4 py-1 rounded-3xl ${menuColor}`}
          href="#"
        >
          Portfolio
        </a>
      </div>
      <div className="nav__hireme hidden lg:block">
        <button
          className={`text-sm font-semibold  px-10 py-2  rounded-3xl uppercase  transform transition duration-300 hover:scale-x-110 ${hireMeColor}`}
        >
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
