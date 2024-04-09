import React from "react";
import style from "./Header.module.scss";
import eyes from "../../assets/tenor.gif";
const Header = () => {
  return (
    <div className={style.header}>
      <h1>
        L<img src={eyes} />k<span>4</span>Book
      </h1>
      <h4>...lookup for your favourite book online</h4>
    </div>
  );
};

export default Header;
