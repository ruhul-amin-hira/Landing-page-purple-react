import React from "react";
import heroImage from "./../images/image_01@2x.png";

const Herosection = () => {
  return (
    <div className="xl:container mx-auto lg:flex items-end lg:pt-20 md:pt-14 pt-2 px-4">
      <div className="hero__left lg:flex-1 lg:pr-8 text-center lg:text-left">
        <p className="font-lato uppercase text-base font-semibold text-white">
          Bussiness workflow
        </p>
        <h1 className="lg:text-6xl text-4xl md:text-5xl lg:max-w-full max-w-xl lg:mx-0 mx-auto text-white font-bold leading-tight py-4">
          Get the most<br></br> efficient UI design for your business now!
        </h1>
        <p className="font-lato text-white font-normal lg:pt-3 pt-0 max-w-md lg:mx-0 mx-auto">
          Hire me to design a clean and modern UI for your product's website.
        </p>
        <div className="button-sec lg:pt-20 pt-10 lg:pb-0 pb-14">
          <button className="mb-4 md:mb-0 md:mr-4 button bg-white text-purple-800  border-transparent font-semibold w-64 lg:w-auto">
            Hire me
          </button>
          <button className="button bg-transparent border-white text-white font-medium hover:text-purple-800 hover:bg-white hover:border-transparent w-64 lg:w-auto">
            Portfolio
          </button>
        </div>
      </div>
      <div className="hero__right lg:flex-1 ">
        <img className="mx-auto lg:m-0" src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
};

export default Herosection;
