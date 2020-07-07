import React from "react";
import Filter from "./Components/Filter";
import RandomImg from "./Components/RandomImg";

const App = () => {
  return (
    <div>
      <header>Search your city to move forward:</header>
      <Filter />
      <RandomImg />
    </div>
  );
};

export default App;
