import React from "react";

const Card = ({ title, subtitle }) => {
  return (
    <div className="p-8 border-2 border-gray-100 card__box">
      <p className="uppercase text-sm font-medium color__text pb-3">{title}</p>
      <h3 className="text-black font-semibold text-lg pb-1">{subtitle}</h3>
      <p className="font-lato font-normal text-base text-gray-600 pb-6">
        This package will suit you if you want a single page simple website for
        your product. It will cover only one web UI. You can revise the design
        for 2 times after the initial draft discussion session...
      </p>
      <button className="px-5 py-2 rounded-3xl see__more text-white uppercase text-sm font-medium">
        See more
      </button>
    </div>
  );
};

export default Card;
