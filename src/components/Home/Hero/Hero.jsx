import React from "react";

const Hero = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          className="py-10 lg:pt-0"
          src="https://i.ibb.co/BZrXQFk/Header-Banner.jpg" // Replace with the path to your image
          alt="Image"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          className="max-w-7xl"
          style={{
            position: "absolute",
            top: "40px",
            width: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-center pt-2 lg:pt-20 ">
            <h1 className="text-xl lg:text-5xl uppercase text-[#313232] font-Montserrat font-medium">
              ASSISTANT GLOBAL
            </h1>
            <h1
              className=" font-light text-lg lg:text-xl font-Montserrat text-[#313132] hidden lg:block"
              style={{ letterSpacing: `15px` }}
            >
              FOR THE PEOPLE
            </h1>
            <h1
              className="font-light text-md font-Montserrat text-[#313132] lg:hidden block"
              style={{ letterSpacing: `4px` }}
            >
              FOR THE PEOPLE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
