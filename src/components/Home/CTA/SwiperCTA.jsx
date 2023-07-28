import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const SwiperCTA = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-[#757575] mb-10">
            <div className=" text-center py-5 flex flex-col items-center justify-center">
              <h1 className="font-normal sm:text-lg lg:text-4xl uppercase text-[#E2E2E2] ">
                DRIVE
                <strong
                  className="block font-extralight text-[16px] text-[#E2E2E2] opacity-50"
                  style={{ letterSpacing: `1.6px` }}
                >
                  SECURED DRIVE
                </strong>
              </h1>
              <Link className="text-[#3BAAFF] text-[20px] inline-flex items-center ">
                Explore
                <span>
                  <MdKeyboardArrowRight></MdKeyboardArrowRight>
                </span>{" "}
              </Link>
            </div>

            <img
              className="bg-contain"
              src="https://i.ibb.co/6wNH5pj/drive-image.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#757575] pb-10">
            <div className=" text-center py-5 flex flex-col items-center justify-center">
              <h1 className="font-normal sm:text-lg lg:text-4xl uppercase text-[#E2E2E2] ">
                DRIVE
                <strong
                  className="block font-extralight text-[16px] text-[#E2E2E2] opacity-50"
                  style={{ letterSpacing: `1.6px` }}
                >
                  SECURED DRIVE
                </strong>
              </h1>
              <Link className="text-[#3BAAFF] text-[20px] inline-flex items-center ">
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
          <img src="https://i.ibb.co/V0G8C3Z/Screenshot-8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/V0G8C3Z/Screenshot-8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/v4dgMFY/Screenshot-9.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FKXwFZB/Screenshot-10.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/n0ScXXZ/Screenshot-11.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/58XY7pZ/Screenshot-12.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/3Yj9LCm/Screenshot-13.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCTA;
