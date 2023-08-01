import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import SwiperCTA from "./SwiperCTA";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import travel from "../../../assets/travelRemoveBg.png";
import abs from "../../../assets/AbsRemoveBg.png";
import acap from "../../../assets/acapRemoveBg.png";


const CTA = () => {
  return (
    <div className=" ">
      <div className="hidden lg:block ">
        <div className="grid lg:grid-cols-2 gap-4 lg:p-12 md:p-6">
          <div className="bg-[#757575] rounded-b-md">
            <div className=" text-center py-20 flex flex-col items-center justify-center">
              <h1 className="font-normal sm:text-lg lg:text-4xl uppercase text-[#E2E2E2] font-Montserrat ">
                DRIVE
                <strong
                  className="block font-extralight text-[12px] text-[#E2E2E2] opacity-50 font-Montserrat"
                  style={{ letterSpacing: `1.6px` }}
                >
                  SECURED DRIVE
                </strong>
              </h1>
              <Link className="text-[#3BAAFF] text-[15px] inline-flex items-center font-Montserrat">
                Explore
                <span>
                  <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </span>{" "}
              </Link>
            </div>

            <div className="bg-[url(https://i.ibb.co/6wNH5pj/drive-image.png)] bg-cover bg-center bg-no-repeat lg:h-[474px] lg:w-[735px]">
              <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen flex items-center justify-center lg:items-center lg:px-8 "></div>
            </div>
          </div>

          <div className="bg-[#757575] rounded-b-md ">
            <div className=" text-center py-20 flex flex-col items-center justify-center">
              <h1 className="font-bold sm:text-lg lg:text-5xl  text-[#E2E2E2] font-Montserrat">
                aPay
                <strong
                  className="relative right-4 block font-extralight text-[10px] font-Montserrat text-[#E2E2E2] opacity-50"
                  style={{ letterSpacing: `1.6px` }}
                >
                  IT'S SECURED
                </strong>
              </h1>
              <Link className="text-[#3BAAFF] text-[15px] pt-4 inline-flex items-center font-Montserrat">
                Explore
                <span>
                  <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </span>{" "}
              </Link>
            </div>

            <div className="bg-[url(https://i.ibb.co/Mnb7Wd2/raw.png)] bg-cover bg-center bg-no-repeat lg:h-[474px] lg:w-[735px] md:h-auto md:w-full">
              <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen flex items-center justify-center lg:items-center lg:px-8 "></div>
            </div>
          </div>

          <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/f0Spt06/ABS.png" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col absolute top-20 left-[40%] ">
            <img className="w-32 " src={abs} alt="" />
              {/* <p className="text-lg font-bold lg:text-4xl">ABS</p> */}
              <p className="font-Montserrat uppercase text-gray-400 text-[13px]">YOUR BUSINESS SOLUTION</p>
              <div className="flex items-center justify-center  top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/8sP6h0T/Property.png" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col absolute top-20 left-[40%] ">
              <p className="text-lg font-extralight font-Montserrat lg:text-4xl">PROPERTY</p>
              <p className="font-Montserrat uppercase text-gray-400 text-[13px]">MAKE SECURE YOUR FUTURE</p>
              <div className="flex items-center justify-center  top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/W2xwczS/ATRavel.png" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col absolute top-20 left-[40%] ">
              <img className="w-32 " src={travel} alt="" />
              {/* <p className="text-lg font-bold lg:text-4xl"></p> */}
              <p className="font-Montserrat uppercase text-gray-400 text-[13px]">LEARN & ENJOY</p>
              <div className="flex items-center justify-center  top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/TtCjY9m/GREEN.png" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col absolute top-20 left-[40%] ">
              <p className="text-lg font-bold lg:text-4xl font-Montserrat">GREEN</p>
              <p className="font-Montserrat uppercase text-gray-400 text-[13px]">EAT HEALTHY FOOD</p>
              <div className="flex items-center justify-center  top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/wMscM1s/ACap.png" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col absolute top-20 left-[40%] ">
            <img className="w-32 " src={acap} alt="" />
              {/* <p className="text-lg font-bold lg:text-4xl">GREEN</p> */}
              <p className="font-Montserrat uppercase text-gray-400 text-[13px]">ADVANCE YOUR BUSINESS CAPACITY</p>
              <div className="flex items-center justify-center top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/wKdNcw8/EDucation.png" alt="" />
            </div>
            <div className="flex items-center justify-center flex-col absolute top-20 left-[40%] ">            
              <p className="text-lg font-extralight lg:text-4xl font-Montserrat uppercase">EDUACATION</p>
              <p className="font-Montserrat uppercase text-gray-400 text-[13px]">GAIN KNOWLEDGE</p>
              <div className="flex items-center justify-center top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <SwiperCTA></SwiperCTA>
      </div>
    </div>
  );
};

export default CTA;
