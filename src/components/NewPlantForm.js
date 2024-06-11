import React from "react";

function NewPlantForm(onSubmit) {
  const [formData, setFormData] = useState({
    plantname: "",
    imageURL: "",
    Price: "",
  });
  
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("the server URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.plantname} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.imageURL} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
