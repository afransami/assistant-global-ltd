import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GiHandBandage } from "react-icons/gi";
import kidsLogo from "../../assets/A Kids Logo.svg";

const Announcements = () => {
  return (
    <div className="lg:bg-[#D6D6D9] px-4 lg:mt-12 mt-10 py-3 lg:h-16 text-center lg:flex sm:flex-row items-center justify-center ">
      <div className="flex items-center justify-center">
        <img className="w-28" src={kidsLogo} alt="" />
      </div>
      <div className="flex  max-w-xs lg:max-w-full">
        <p className="flex text-center items-center justify-center font-medium text-[#0368CD]">
          Empowering Communities to give children a brighter future
          <span className="text-[#0368CD] cursor-pointer lg:block hidden">
            <FiArrowUpRight />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Announcements;
