import React, { useEffect, useState } from "react";
import Herosection from "./Herosection";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const UpperLayout = () => {
  const [scroll, setScroll] = useState(false);
  const [hambarger, setHemburger] = useState(false);

  const handleMenuClick = () => {
    setHemburger(!hambarger);
  };

  const handleBackdrop = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setHemburger(false);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar__inner");
    const heroSec = document.querySelector(".hero__sec");
    const mobileMenu = document.querySelector(".mobile__menu");
    const backDrop = document.querySelector(".navbar__sec");
    const offSetPosition = navbar.offsetTop;

    window.onscroll = () => {
      if (window.pageYOffset > offSetPosition) {
        navbar.classList.add("sticky__nav");
        heroSec.classList.add("padding__top");
        setScroll(true);
      } else {
        navbar.classList.remove("sticky__nav");
        heroSec.classList.remove("padding__top");
        setScroll(false);
      }
    };

    if (hambarger) {
      navbar.classList.add("sticky__nav");
      mobileMenu.classList.add("visible", "w-full");
      mobileMenu.classList.remove("invisible", "w-0");
      backDrop.classList.add("backdrop");
    } else {
      mobileMenu.classList.remove("visible", "w-full");
      mobileMenu.classList.add("invisible", "w-0");
      navbar.classList.remove("sticky__nav");
      backDrop.classList.remove("backdrop");
    }
  });
  return (
    <div className="main__con relative">
      <div className="navbar__sec relative" onClick={(e) => handleBackdrop(e)}>
        <div className="navbar__inner border-b border-gray-50 border-opacity-40">
          <div className="xl:container mx-auto px-4">
            <Navbar
              scroll={scroll}
              handleMenuClick={handleMenuClick}
              hambarger={hambarger}
            />
          </div>
        </div>
        <div className="mobile__menu w-0 invisible pt-12">
          <MobileMenu />
        </div>
      </div>
      <div className="xl:container mx-auto relative z-40 hero__sec">
        <Herosection />
      </div>
    </div>
  );
};

export default UpperLayout;
