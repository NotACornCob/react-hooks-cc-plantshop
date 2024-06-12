import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search, userPlantObjects}) {
  const searchLowerCase = search.toLowerCase();
  const plantsToDisplay = plants.filter((plant) => {
    const plantNameLowerCase = plant.name.toLowerCase();
    return plantNameLowerCase.includes(searchLowerCase);
  });

  return (
    <ul className="cards">
      {plantsToDisplay.map((plant) => (
      < PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>))}
      {userPlantObjects? (
        < PlantCard key={userPlantObjects.id} name={userPlantObjects.name} image={userPlantObjects.image} price={userPlantObjects.price}/>
      ) : (
        null
      )
      }
    </ul>
      
  );
}

export default PlantList;
