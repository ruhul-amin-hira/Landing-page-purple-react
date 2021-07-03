import React from "react";

const Footer = () => {
  return (
    <div className="footer lg:m-0 -mt-20">
      <div className="xl:container mx-auto relative z-50 px-4">
        <div className="flex justify-center">
          <div className="text-center inline-block">
            <h2 className="text-white text-4xl font-bold block pb-3">
              Start a project with me
            </h2>
            <div className="inline-block underline-white">&nbsp;</div>
          </div>
        </div>
        <p className="max-w-lg font-lato font-normal text-white text-lg text-center mx-auto">
          let's discuss our ideas for presenting your business to the world ina
          n attractive, efficient and effictive way.
        </p>
        <div className="flex justify-center pt-8">
          <button className="mt-4 button bg-white text-purple-800  border-transparent font-semibold box__shadow w-64 lg:w-auto">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
