import React from "react";

const ResultsSelector = ({ options, selectedValue, onSelect }) => {
  const handleSelect = (e) => {
    onSelect(e.target.value);
  };
  return (
    <div>
      <label htmlFor="resultsSelector">Results Per Page :</label>
      <select onChange={handleSelect} value={selectedValue}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ResultsSelector;
