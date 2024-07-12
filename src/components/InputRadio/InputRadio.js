import React from "react";
import styles from "./InputRadio.module.css";

function InputRadio({ name, value, ...props }) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      <input id={id} type="radio" name={name} value={value} {...props} />
      {value}
    </label>
  );
}

export default InputRadio;
