import React from "react";

const Card = () => {

  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:mx-4">
      <a href="#" className={`flip-card ${isFlipped ? 'flipped' : ''} block `} onClick={handleClick}>

        <img
          alt="Art"
          src="https://i.ibb.co/DGCh9Js/Screenshot-2.png"
          className="h-64 w-full object-cover sm:h-80 lg:h-[700px]  rounded-b-md"
        />
     
      </a>

      <a href="#" className="block">
        <img
          alt="Art"
          src="https://i.ibb.co/jLCcX7J/Screenshot-3.png"
          className="h-64 w-full object-cover sm:h-80 lg:h-[700px]  rounded-b-md"
        />
       
      </a>

      <a href="#" className="block">
        <img
          alt="Art"
          src="https://i.ibb.co/gRQ5M72/Screenshot-4.png"
          className="h-64 w-full object-cover sm:h-80 lg:h-[700px]  rounded-b-md"
        />
      
      </a>

      <a href="#" className="block">
        <img
          alt="Art"
          src="https://i.ibb.co/gJXLT15/Screenshot-5.png"
          className="h-64 w-full object-cover sm:h-80 lg:h-[700px]  rounded-b-md"
        />

      </a>
    </div>
  );
};

export default Card;
