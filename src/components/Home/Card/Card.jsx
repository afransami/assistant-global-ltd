import React, { useState } from "react";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card h-64 w-full object-cover sm:h-80 lg:h-[700px] rounded-b-md bg-white rounded-lg shadow-md cursor-pointer ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flip-card-inner w-full h-full transition-transform duration-500 transform-gpu">
        {/* Front side of the card (Image) */}
        <div className="flip-card-front absolute w-full h-full rounded-lg overflow-hidden">
          <img
            src={card.image}
            alt="Image"
            className="h-64 w-full object-cover sm:h-80 lg:h-[700px] rounded-b-md"
          />
        </div>

        {/* Back side of the card (Description) */}

        <div className="flip-card-back absolute w-full h-full bg-white rounded-lg transform-gpu rotate-y-180 flex flex-col justify-center items-center inset-0">
          <div className="grid grid-cols-2 gap-4">
            <img
              className="h-64 w-full object-cover sm:h-80 lg:h-[700px] rounded-b-md"
              src={card.image}
              alt=""
            />

            <div className="flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold mb-4 uppercase">{card.title}</h3>
              <p className="uppercase">{card["sub-title"]}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg uppercase">
                {card.explore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
