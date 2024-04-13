import React, { useContext, useRef } from "react";
import style from "./SearchBar.module.scss";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchingContext } from "../Context/SearchingContext";
//const element = ReactDOM.render(element, document.body);
const SearchBar = ({ searchForBooks }) => {
  const { isLanding, setIsLanding } = useContext(SearchingContext);

  const barStyleClass =
    `${style.bar}` +
    (isLanding ? ` ${style.bar_landing}` : ` ${style.bar_searching}`);
  //console.log(barStyleClass);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLanding(false);
    const form = new FormData(e.target);
    console.log("searching for " + form.get("search_input"));
    searchForBooks(form.get("search_input"));
    e.target.reset();
  };
  const inputRef = useRef(null);
  const handleClear = (e) => {
    console.log("clicked X", inputRef);
    e.preventDefault();
    inputRef.current.value = "";
  };
  return (
    <form className={barStyleClass} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search_input"
        placeholder="Search for book"
        autoComplete="off"
        ref={inputRef}
      />
      <p onClick={handleClear}>X</p>
      <button>
        <FontAwesomeIcon icon={faSearch} color="green" />
      </button>
    </form>
  );
};

export default SearchBar;
