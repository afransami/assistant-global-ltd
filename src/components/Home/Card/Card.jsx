import React, { useState } from "react";
import "./Card.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card h-96 w-full  sm:h-80 lg:h-[700px] rounded-b-md bg-white rounded-lg cursor-pointer ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flip-card-inner w-full h-full transition-transform duration-500 transform-gpu">
        {/* Front side of the card (Image) */}
        <div className="flip-card-front w-full h-full rounded-lg bg-[#E5E6E8]">
          {/* <div className=" text-center flex items-center flex-col h-[200px]"> */}
          <div className=" text-center flex items-center flex-col h-[200px] w-full aspect-w-16 aspect-h-9">
            <img
              src={card.image}
              alt="Image"
              className="bg-contain md:object-contain w-full h-full absolute "              
            />
            <div className="absolute text-gray-400 flex items-center justify-center flex-col pt-2 lg:pt-0">
              <div className="flex flex-col justify-center items-center">
                <img className="absolute lg:pt-10 w-[70px] lg:w-32" src={card.logo} alt="" />
                <p className="text-md top-[20px] lg:top-[55px] relative font-Montserrat">
                  {card.subTitle}
                </p>
                <div className="flex items-center justify-center absolute top-[50px] lg:top-20 ">
                  <Link
                    to="/"
                    className="font-medium lg:mt-2 text-[#0368CD] text-[14px] flex items-center font-Montserrat"
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

        {/* Back side of the card (Description) */}

        <div className="flip-card-back h-auto w-full bg-white rounded-lg transform-gpu rotate-y-180 flex flex-col justify-center items-center inset-0">
          <div className="grid grid-cols-2 gap-4 w-full h-auto">
            <div className="w-full h-auto">
              <img
                className="w-full h-96 bg-contain md:object-contain lg:rounded-b-md"
                src={card.image}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold mb-4 uppercase font-Montserrat">
                {card.title}
              </h3>
              <p className="uppercase font-Montserrat">{card.subTitle}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg uppercase font-Montserrat">
                On Going
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
