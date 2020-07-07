import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  const cities = [
    "Mumbai",
    "Delhi",
    "Jaipur",
    "Lucknow",
    "Gurugram",
    "Goa",
    "pune",
    "Dehradun",
    "Chandigarh",
    "Chennai",
  ];

  const updateSearch = (input) => {
    setSearch(input);
    setDisplay(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setDisplay(true);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search Your City Here..."
        value={search}
        onChange={handleChange}
      />
      {display && (
        <div className="something">
          {cities
            .filter((city) => {
              return city.toLowerCase().startsWith(search);
            })
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateSearch(value)}
                  className="dropdownList"
                  key={i}
                  tabIndex="0"
                >
                  <div>{value}</div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Filter;
