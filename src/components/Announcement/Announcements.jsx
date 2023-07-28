import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GiHandBandage } from "react-icons/gi";

const Announcements = () => {
  return (
    <div className="lg:bg-[#D6D6D9] px-4 py-3 lg:flex justify-center items-center lg:h-16 text-center gap-2">
      <div className="flex  justify-center items-start ">
        <GiHandBandage className="text-[#D31772] text-3xl h-[50px]"></GiHandBandage>
        <div className="flex flex-col justify-center items-start">
          <p className="text-[#949494] text-xs relative top-2">ASSISTANT</p>
          <p className="font-bold text-2xl lg:text-white text-[#D31772]">
            KIDS
          </p>
        </div>
      </div>
      <div className="inline-flex">
        <p className="text-center font-medium inline-block text-[#0368CD]">
          Empowering Communities to give children a brighter future
        </p>{" "}
        <span className="text-[#0368CD] cursor-pointer lg:block hidden">
          <FiArrowUpRight></FiArrowUpRight>
        </span>
      </div>
    </div>
  );
};

export default Announcements;
