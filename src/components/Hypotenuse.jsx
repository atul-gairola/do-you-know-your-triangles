import React, { useState } from "react";
import "./Hypotenuse.css";

function Hypotenuse() {
  const [data, setData] = useState({
    base: "",
    height: "",
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculate = (e) => {
    e.preventDefault();
    setResult(null);
    const { base, height } = data;
    if (base && height) {
      setResult(Math.pow(Number(base), 2) + Math.pow(Number(height), 2));
    }
  };

  return (
    <div className="hypotenuseContainer">
      <h1>Calculate the Hypotenuse of a triangle</h1>
      <form>
        <label htmlFor="number">Base Side (a):</label>
        <input type="number" min="0" name="base" onChange={handleInputChange} />
        <label htmlFor="number">Height (b):</label>
        <input
          type="number"
          name="height"
          min="0"
          onChange={handleInputChange}
        />
        <button onClick={calculate}>Calculate Hypotenuse</button>
      </form>
      {result && (
        <p className="hypotenuseResult">The hypotenuse is : {result}</p>
      )}
    </div>
  );
}

export default Hypotenuse;
