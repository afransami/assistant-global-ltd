import React from "react";

const Hero = () => {
  return (
    <div className="">
<div style={{ position: 'relative' }}>
      <img
      className="pt-10 lg:pt-0"
        src="https://i.ibb.co/BZrXQFk/Header-Banner.jpg" // Replace with the path to your image
        alt="Image"
        style={{ width: '100%', height: 'auto' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50px',
          left: '50%',
          transform: 'translate(-50%, -50%)',       
        }}
      >
       <div className="max-w-xl lg:max-w-full text-center lg:pt-10 sm:pt-10 ">
        <h1 className=" text-xl lg:text-4xl uppercase text-[#313232]">
          ASSISTANT GLOBAL
        </h1>
          <h1 className="block font-extralight lg:text-2xl text-[#313132]" style={{ letterSpacing: `5px` }}>
            FOR THE PEOPLE
          </h1>
      </div>
      </div>
    </div>

      {/* <div className=" text-center pt-10 flex items-center justify-center">
        <h1 className=" font-normal text-2xl lg:text-4xl uppercase text-[#313232]">
          ASSISTANT GLOBAL
          <strong className="block font-extralight text-lg text-[#313132]" style={{ letterSpacing: `10px` }}>
            FOR THE PEOPLE
          </strong>
        </h1>
      </div> */}



      {/* <div className="bg-[url(https://i.ibb.co/BZrXQFk/Header-Banner.jpg)] bg-cover bg-center bg-no-repeat relative pb-32">
      
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen  lg:items-center lg:px-8 ">
        </div>

      <div className=" text-center pt-10 flex items-center justify-center relative">
        <h1 className="absolute font-normal text-2xl lg:text-4xl uppercase text-[#313232] ">
          ASSISTANT GLOBAL
          <strong className="block font-extralight text-lg text-[#313132]" style={{ letterSpacing: `10px` }}>
            FOR THE PEOPLE
          </strong>
        </h1>
      </div>

        
      </div> */}
    </div>
  );
};

export default Hero;
