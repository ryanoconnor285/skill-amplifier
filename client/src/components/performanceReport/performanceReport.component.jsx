import React from "react";

const PerformanceReport = () => {
  return (
    <div>
      <h2>Daily Observation Report</h2>
      <h4>Field Training Performance Evaluation Factors</h4>
      <form>
        <fieldset>
          <legend>Fruit juice size</legend>
          <p>
            <input type="radio" name="size" id="size_1" value="small" />
            <label for="size_1">Small</label>
          </p>
          <p>
            <input type="radio" name="size" id="size_2" value="medium" />
            <label for="size_2">Medium</label>
          </p>
          <p>
            <input type="radio" name="size" id="size_3" value="large" />
            <label for="size_3">Large</label>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default PerformanceReport;
