import React from "react";

const ResultsSelector = ({
  options,
  selectedValue,
  onSelect,
  setCurrentPage,
}) => {
  const handleSelect = (e) => {
    onSelect(Number(e.target.value));
    setCurrentPage(0);
  };
  return (
    <div>
      <label htmlFor="resultsSelector">Results Per Page : </label>
      <select id="resultsSelector"
        style={{ backgroundColor: "light-grey", color: "black" }}
        onChange={handleSelect}
        value={selectedValue}
      >
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
