import React, { useState } from "react";
import "./Card.css"; // Import the CSS file for styling
import ait from "../../../assets/AIT.svg"
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";


const Ait = () => {
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
            <div className="text-center flex items-center flex-col">
            <img
              src="https://i.ibb.co/pRTyMMd/AIT.png"
              alt="Image"
              className="w-full h-full object-fit rounded-b-md absolute "
            />
             <div className="absolute text-gray-400 flex items-center justify-center flex-col py-0 ">           
    
             <div>
             <img className=" absolute" src={ait} alt="" /> 
             <p className="text-md top-[140px] relative">Assistant Information Technology</p>
             <div className="flex items-center justify-center">
             <Link to="/" className="font-medium text-[#0368CD] text-lg flex items-center top-40 absolute">Explore<span className=" cursor-pointer lg:block hidden">
            <FiArrowUpRight />
          </span></Link>
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
                src="https://i.ibb.co/pRTyMMd/AIT.png"
                alt=""
              />             
              </div>
  
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold mb-4 uppercase">Ait</h3>
                <p className="uppercase">Assistant Information Technology</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg uppercase">
                On Going
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Ait;