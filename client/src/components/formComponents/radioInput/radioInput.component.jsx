import React from "react";
import "./radioInput.style.css";

const RadioInputs = ({ legend, description, values, className }) => {
  return (
    <fieldset className={className}>
      <div>
        <legend>{legend}</legend>
      </div>
      <div>
        <p>{description}</p>
      </div>
      {values.map((value) => (
        <div key={legend.trim().toLowerCase() + "-" + value}>
          <label htmlFor={value}>
            <input type="radio" name={legend} id={value} value={value} />
            {value}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioInputs;
