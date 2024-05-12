import React, { useContext, useRef, useState } from "react";
import style from "./SearchBar.module.scss";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchingContext } from "../Context/SearchingContext";
//const element = ReactDOM.render(element, document.body);
const SearchBar = ({ searchForBooks }) => {
  const { isLanding, setIsLanding } = useContext(SearchingContext);
  const [isInputEmpty,setIsInputEmpty] = useState(true);
  //const inputRef = useRef(null);
  const [searchInput,setSearchInput] = useState("");
  const [displayMsg,setDisplayMsg] = useState();

  const handleChange = (e)=>{
    setSearchInput(e.target.value);
    if(isInputEmpty && e.target.value != ""){
      setIsInputEmpty(false);
    }else if(!isInputEmpty && e.target.value  == ""){
      setIsInputEmpty(true);
    }
    setDisplayMsg("");
  }
  const wrapperStyleClass =
    `${style.wrapper}` +
    (isLanding ? ` ${style.wrapper_landing}` : ` ${style.wrapper_searching}`);
  
  // const barStyleClass =
  //   `${style.bar}` +
  //   (isLanding ? ` ${style.bar_landing}` : ` ${style.bar_searching}`);
  
  const crossStyle = (isInputEmpty ? {color:"transparent"} : {color:"darkgrey"});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    if(form.get("search_input").trim() != ""){
    searchForBooks(form.get("search_input"));
    setIsLanding(false);
    setSearchInput("");
    setIsInputEmpty(true);
    setDisplayMsg("");
    }else{
      setDisplayMsg("Need to enter a search term !");
      setSearchInput("");

    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setSearchInput("");
    setIsInputEmpty(true);
    setDisplayMsg("");
  };
  return <div className={wrapperStyleClass}>
    <form className={style.bar}  onSubmit={handleSubmit}>
      <input
        type="text"
        name="search_input"
        placeholder="Search for book"
        autoComplete="off"
        onInput={handleChange}
        value={searchInput}
      />
      <p style={crossStyle} onClick={handleClear}>X</p>    
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} color="green" />
      </button>    
    </form>
     <small className={style.message}>&#8203;{displayMsg}</small> 
      </div>;
  
};

export default SearchBar;
