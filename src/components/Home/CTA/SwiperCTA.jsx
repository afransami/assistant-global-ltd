import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import travel from "../../../assets/travelRemoveBg.png";
import abs from "../../../assets/AbsRemoveBg.png";
import acap from "../../../assets/acapRemoveBg.png";

const SwiperCTA = () => {
  
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        
        <SwiperSlide>
          <div className="bg-[#757575] mb-10">
            <div className=" text-center py-5 flex flex-col items-center justify-center ]">
              <h1 className="font-normal text-md uppercase text-[#E2E2E2] font-Montserrat text-center">
                DRIVE
                <strong
                  className="block font-extralight text-[12px] text-[#E2E2E2] opacity-50 font-Montserrat text-center"
                  style={{ letterSpacing: `1.6px` }}
                >
                  SECURED DRIVE
                </strong>
              </h1>
              <Link className="text-[#3BAAFF] text-[14px] inline-flex items-center font-Montserrat text-center">
                Explore
                <span>
                  <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </span>{" "}
              </Link>
            </div>
            
            <img
              className="bg-contain"
              src="https://i.ibb.co/4Swtf85/Drive.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#757575] pb-10">
            <div className=" text-center py-5 flex flex-col items-center justify-center">
              <h1 className="font-normal text-md text-[#E2E2E2] font-Montserrat">
                aPay
                <strong
                  className="block font-medium text-[12px] text-[#E2E2E2] opacity-50 font-Montserrat"
                  style={{ letterSpacing: `1.6px` }}
                >
                 IT'S SECURED
                </strong>
              </h1>
              <Link className="text-[#3BAAFF] text-[14px] inline-flex items-center font-Montserrat">
                Explore
                <span>
                  <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </span>{" "}
              </Link>
            </div>

            <img
              className="bg-cover bg-center bg-no-repeat"
              src="https://i.ibb.co/Mnb7Wd2/raw.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className=" rounded-b-md relative">
            <div className="">
              <img className="" src="https://i.ibb.co/f0Spt06/ABS.png" alt="" />
            </div>
            <div className="flex flex-col lg: flex-none  items-center justify-center absolute md:top-10 top-2 md:left-[40%] left-[30%]">
            <img style={{ width: '90px', height: '100%' }} src={abs} alt="" />    
              <p className="font-Montserrat uppercase text-gray-400 text-[12px]">YOUR BUSINESS SOLUTION</p>
              <div className="flex items-center justify-center  top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-[14px] flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" rounded-b-md relative">
            <div>
              <img src="https://i.ibb.co/8sP6h0T/Property.png" alt="" />
            </div>
            <div className="flex flex-col lg: flex-none  items-center justify-center absolute md:top-10 top-2 md:left-[35%] left-[30%]">            
              <p className="text-lg font-medium lg:text-4xl font-Montserrat">PROPERTY</p>
              <p className="text-gray-400 text-[12px] font-Montserrat uppercase ">MAKE SECURE YOUR FUTURE</p>
              <div className="flex items-center justify-center top-2 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-[14px] flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" rounded-b-md relative">
            <div>
              <img src="https://i.ibb.co/W2xwczS/ATRavel.png" alt="" />
            </div>
            <div className="flex flex-col lg: flex-none  items-center justify-center absolute md:top-10 top-2 md:left-[40%] left-[40%]">            
              <img style={{ width: '90px', height: '100%' }} src={travel} alt="" />
              {/* <p className="text-lg font-bold lg:text-4xl"></p> */}
              <p className="text-gray-400 text-[12px] font-Montserrat uppercase">LEARN & ENJOY</p>
              <div className="flex items-center justify-center  top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-[14px] flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/TtCjY9m/GREEN.png" alt="" />
            </div>
            <div className="flex flex-col lg: flex-none  items-center justify-center absolute md:top-10 top-2 md:left-[40%] left-[35%]">
              <p className="text-lg font-medium lg:text-4xl font-Montserrat">GREEN</p>
              <p className="text-gray-400 text-[12px] font-Montserrat uppercase">EAT HEALTHY FOOD</p>
              <div className="flex items-center justify-center  top-2 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-[14px] flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/wMscM1s/ACap.png" alt="" />
            </div>
            <div className="flex flex-col lg: flex-none  items-center justify-center absolute md:top-10 top-2 md:left-[40%] left-[20%]">             
            <img style={{ width: '90px', height: '100%' }}  src={acap} alt="" />
              {/* <p className="text-lg font-bold lg:text-4xl">GREEN</p> */}
              <p className="text-gray-400 text-[12px] font-Montserrat uppercase">ADVANCE YOUR BUSINESS CAPACITY</p>
              <div className="flex items-center justify-center top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-[14px] flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" rounded-b-md relative">
            <div className="">
              <img src="https://i.ibb.co/wKdNcw8/EDucation.png" alt="" />
            </div>
            
            <div className="flex flex-col lg: flex-none  items-center justify-center absolute md:top-10 top-2 md:left-[40%] left-[35%]">            
              <p className="text-lg font-medium lg:text-4xl font-Montserrat uppercase">EDUACATION</p>
              <p className="text-gray-400 text-[12px] font-Montserrat">GAIN KNOWLEDGE</p>
              <div className="flex items-center justify-center top-20 lg:top-18 ">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-[14px] flex items-center font-Montserrat"
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
     
      </Swiper>
    </>
  );
};

export default SwiperCTA;
