import React, { useContext } from "react";
import style from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";
import { SearchingContext } from "../Context/SearchingContext";
const Header = ({ updateSearchTerm }) => {
  const { isLanding } = useContext(SearchingContext);
  const headerStyleClass = isLanding
    ? `${style.header_landing}`
    : `${style.header_searching}`;
  //console.log(headerStyleClass);
  return (
    <div className={headerStyleClass}>
      <Title />
      <SearchBar searchForBooks={updateSearchTerm} />
    </div>
  );
};

export default Header;
