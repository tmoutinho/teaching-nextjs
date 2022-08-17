import React from "react";
import styles from "./index.module.css";

const Button = ({ buttonTexto, variant }) => {
  let buttonClass = styles["button-primary"];
  if (variant === "secondary") {
    buttonClass = styles["button-secondary"];
  }
  return (
    <button className={`${styles.button} ${buttonClass}`}>{buttonTexto}</button>
  );
};

export default Button;
