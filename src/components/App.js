import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(setData);
  }, []);
  
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
