import React from "react";
import Card from "./Card";

const Package = () => {
  return (
    <div>
      <div className="xl:container mx-auto pt-6 pb-20 px-4 relative z-20 lg:mt-0 -mt-16">
        <div className="flex justify-center">
          <div className="text-center inline-block">
            <h2 className="text-black text-4xl font-bold block pb-3">
              Packages
            </h2>
            <div className="inline-block package">&nbsp;</div>
          </div>
        </div>
        <div className="card__sec grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 gap-7  lg:pt-10 pt-6 lg:max-w-max max-w-xl lg:m-0 mx-auto">
          <Card title="Getting Started" subtitle="Singularity" />
          <Card title="Business workflow" subtitle="Plurality" />
          <Card title="Interactions" subtitle="Professional" />
        </div>
      </div>
    </div>
  );
};

export default Package;
