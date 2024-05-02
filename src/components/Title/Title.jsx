import React, { useContext } from "react";
import style from "./Title.module.scss";
import eyes from "../../assets/tenor.gif";
import { SearchingContext } from "../Context/SearchingContext";

const Title = () => {
  const { isLanding } = useContext(SearchingContext);
  return (
    <div className={style.title}>
      <h1>
        L<img src={eyes} />K<span>4</span>BOOK
      </h1>
      {isLanding && <h4>...lookup for your favourite book online</h4>}
    </div>
  );
};

export default Title;
