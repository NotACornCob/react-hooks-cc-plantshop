import React from "react";

function NewPlantForm({onFormSubmit, onNameChange, onImageChange, onPriceChange}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={onNameChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={onImageChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={onPriceChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
