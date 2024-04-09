import React from "react";
import style from "./ErrorMessage.module.scss";
const ErrorMessage = ({ errMsg }) => {
  return (
    <div>
      <h1>{errMsg}</h1>
      <p>
        Keep Looking! Here are a few tips: Try with fewer words, check the
        spellings or try again after a break!
      </p>
    </div>
  );
};

export default ErrorMessage;
