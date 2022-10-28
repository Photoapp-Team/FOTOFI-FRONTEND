import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button {...props}>{props.name}</button>;
};

export default Button;
