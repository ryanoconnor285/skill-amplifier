const RadioInputs = ({ legend, description, values }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <p>{description}</p>
      {values.map((value) => (
        <div>
          <input type="radio" name={legend} id={value} value={value} />
          <label for={value}>{value}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioInputs;
