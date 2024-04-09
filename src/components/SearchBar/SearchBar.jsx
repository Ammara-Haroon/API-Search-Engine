import React from "react";
import style from "./SearchBar.module.scss";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//const element = ReactDOM.render(element, document.body);
const SearchBar = ({ searchForBooks }) => {
  const handleSubmit = (e) => {
    // /console.log("clcikedS");
    e.preventDefault();
    const form = new FormData(e.target);
    console.log("searching for " + form.get("search_input"));
    searchForBooks(form.get("search_input"));
    e.target.reset();
  };

  return (
    <form className={style.search_bar} onSubmit={handleSubmit}>
      <input type="text" name="search_input" placeholder="Search for book" />
      <button>
        <FontAwesomeIcon icon={faSearch} color="green" />
      </button>
    </form>
  );
};

export default SearchBar;
