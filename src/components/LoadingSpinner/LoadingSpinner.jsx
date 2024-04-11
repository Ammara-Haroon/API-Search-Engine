import React from "react";
import style from "./LoadingSpinner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const LoadingSpinner = () => {
  //return <div className={style.spinner}>LoadingSpinner</div>;
  return (
    <div className={style.wrapper}>
      <FontAwesomeIcon className={style.spinner} icon={faSpinner} siz="lg" />
    </div>
  );
};

export default LoadingSpinner;
