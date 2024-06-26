import React, { useState } from "react";

function PlantCard({name, image, price}) {
  const [inStock, setInStock] = useState(true)

  const handleClick = () => {
   setInStock(!inStock)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={image} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
