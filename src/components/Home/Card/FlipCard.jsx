import React, { useState, useEffect } from "react";
import Card from "../Card/Card";


const MainComponent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
      // console.log(cards)
  }, []);

  return (
    <div className="grid lg:grid-cols-2 max-w-full h-auto bg-cover gap-0 lg:gap-4 ">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
        ))}        
    </div>
  );
};

export default MainComponent;
