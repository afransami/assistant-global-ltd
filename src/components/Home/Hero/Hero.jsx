import React from "react";

const Hero = () => {
  return (
    <div>
      <div className=" text-center py-20 flex items-center justify-center">
        <h1 className=" font-normal sm:text-lg lg:text-4xl uppercase text-[#313232]">
          ASSISTANT GLOBAL
          <strong className="block font-extralight text-lg text-[#313132]" style={{ letterSpacing: `10px` }}>
            FOR THE PEOPLE
          </strong>
        </h1>
      </div>

      <div className="bg-[url(https://i.ibb.co/SX4WC89/world.png)] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen flex items-center justify-center lg:items-center lg:px-8 ">
        </div>
      </div>
    </div>
  );
};

export default Hero;
