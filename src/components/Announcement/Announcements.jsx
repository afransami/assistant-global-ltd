import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GiHandBandage } from "react-icons/gi";
import kidsLogo from "../../assets/A Kids Logo.svg";

const Announcements = () => {
  return (
    <div className="bg-[#D6D6D9] px-4 lg:mt-12 mt-10 py-2 lg:h-16 text-center lg:flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img style={{ width: '80px', height: '100%' }} src={kidsLogo} alt="" />
      </div>
      <div className="flex items-center justify-center px-20 lg:px-0 lg:max-w-full">
        <p className="flex text-center items-center justify-center font-medium text-[#0368CD] font-Montserrat">
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
