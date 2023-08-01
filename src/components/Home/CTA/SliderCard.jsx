import React, { useEffect, useState } from 'react';
// import SwiperCTA from './SwiperCTA';
import CTA from './CTA';
import SwiperCTA from './SwiperCTA';

const SliderCard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/public/upcoming.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
      console.log(data)
  }, []);

  return (
    // <div className="grid lg:grid-cols-2 md:grid-cols-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-4">
      {data.map((card) => (
        <SwiperCTA
         key={card.id} card={card} />
      ))}
    </div>
   
    );
};

export default SliderCard;