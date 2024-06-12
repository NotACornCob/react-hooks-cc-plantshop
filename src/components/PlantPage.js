import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { v4 as uuid } from "uuid";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("")
  const [submittedData, setSubmittedData] = useState()
  const [plantName, setPlantName] = useState("")
  const [plantImage, setPlantImage] = useState("")
  const [plantPrice, setPlantPrice] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => {setPlants(plants)});
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      name: plantName || "Audrey II",
      image: plantImage || "https://vignette.wikia.nocookie.net/warehouse-13-artifact-database/images/c/c2/Shop_of_horrors.jpg/revision/latest?cb=20190618141718",
      price: plantPrice || "1.95"
    };
  
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        setPlants((prevPlants) => [...prevPlants, newPlant]);
        setPlantName("");
        setPlantImage("");
        setPlantPrice("");
        
      })
  };

  const handleImage = (e) => {
    setPlantImage(e.target.value);
  }

  const handleName = (e) => {
    console.log(e.target.value)
    setPlantName(e.target.value)
  }

  const handlePrice = (e) => {
    console.log(e.target.value)
    setPlantPrice(e.target.value)
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={handleSubmit} onNameChange={handleName} onImageChange={handleImage} onPriceChange={handlePrice} />
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants} search={search} userPlantObjects={submittedData}/>
    </main>
  );
}


export default PlantPage;
