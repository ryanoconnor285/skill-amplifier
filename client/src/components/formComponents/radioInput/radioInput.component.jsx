import React from "react";
import "./radioInput.style.sass";

const RadioInputs = ({ legend, description, values, className }) => {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      <p>{description}</p>
      {values.map((value) => (
        <div key={legend.trim().toLowerCase() + "-" + value}>
          <input type="radio" name={legend} id={value} value={value} />
          <label htmlFor={value}>{value}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioInputs;
