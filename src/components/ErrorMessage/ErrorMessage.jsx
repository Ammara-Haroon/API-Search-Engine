import React from "react";
import style from "./ErrorMessage.module.scss";
const ErrorMessage = ({ errMsg }) => {
  return (
    <div className={style.error}>
      <h2>{errMsg}</h2>
      <h4>We don't want you to stop looking!</h4>
      <ul>
        Here are a few tips to make your search experience better:
        <li>Try with fewer words.</li>
        <li>Check the spellings</li>
        <li>...or just try again after a break!</li>
      </ul>
    </div>
  );
};

export default ErrorMessage;
