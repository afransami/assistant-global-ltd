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
      className={`flip-card h-64 w-full object-cover sm:h-80 lg:h-[700px] rounded-b-md bg-white rounded-lg cursor-pointer ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flip-card-inner w-full h-full transition-transform duration-500 transform-gpu">
        {/* Front side of the card (Image) */}
        <div className="flip-card-front w-full h-auto rounded-lg overflow-hidden">
          
          
{/*           
        <div className=" rounded-b-md relative">
            <div className="relative">
              <img src={card.image} alt="" />
            </div>
            <div className="lg:flex-none flex items-center justify-center flex-col absolute top-2 left-[35%] ">        
              <img className="w-24 " src={card.logo} alt="" />
              <p className="relative text-lg text-gray-500 font-semibold">{card.subTitle}</p>
              <div className="flex items-center justify-center top-20 lg:top-18">
                <Link
                  to="/"
                  className="font-medium lg:mt-2  text-[#0368CD] text-md flex items-center "
                >
                  Explore
                  <span className=" cursor-pointer">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </div>
            </div>
          </div> */}
          
          
          
          
          
          <div className=" text-center flex items-center flex-col">
            <img
              src={card.image}
              alt="Image"
              className="w-full h-full lg:object-fit rounded-b-md absolute"
            />
            <div className="absolute text-gray-400 flex items-center justify-center flex-col py-5 lg:pt-0 ">
              <div className="flex flex-col justify-center items-center">
                <img className=" absolute lg:pt-10 " src={card.logo} alt="" />
                <p className="text-md top-8 lg:top-12 relative font-Montserrat">
                  {card.subTitle}
                </p>
                <div className="flex items-center justify-center absolute top-20 lg:top-18 ">
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
          </div>
        </div>

        {/* Back side of the card (Description) */}

        <div className="flip-card-back w-full h-full bg-white rounded-lg transform-gpu rotate-y-180 flex flex-col justify-center items-center inset-0">
          <div className="grid grid-cols-2 gap-4 w-full h-auto">
            <div className="">
              <img
                className="w-full h-full rounded-b-md"
                src={card.image}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold mb-4 uppercase font-Montserrat">{card.title}</h3>
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
