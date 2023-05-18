import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  id: string;
}

const Button = (props: ButtonProps) => {
  return <button id={props.id}>{props.label}</button>;
};

export default Button;
