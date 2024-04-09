import React from "react";
import style from "./LoadingSpinner.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const LoadingSpinner = () => {
  //return <div className={style.spinner}>LoadingSpinner</div>;
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
};

export default LoadingSpinner;
