import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      &#169; {new Date().getFullYear()} Ammara Haroon
    </footer>
  );
};

export default Footer;
