import React, { useState } from "react";

function Area() {
  const [data, setData] = useState({
    length1: "",
    length2: "",
    length3: "",
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
    const { length1, length2, length3 } = data;
    if (length1 && length2 && length3) {
      const s = (Number(length1) + Number(length2) + Number(length3)) / 2;
      const area = Math.sqrt(
        s *
          (s - Number(length1)) *
          (s - Number(length2)) *
          (s - Number(length3))
      );
      setResult(area);
    }
  };

  return (
    <div className="hypotenuseContainer">
      <h1>Calculate the Area of a triangle</h1>
      <form>
        <label htmlFor="length1">First Side:</label>
        <input type="number" name="length1" onChange={handleInputChange} />
        <label htmlFor="length2">Second Side:</label>
        <input type="number" name="length2" onChange={handleInputChange} />
        <label htmlFor="length3">Third Side:</label>
        <input type="number" name="length3" onChange={handleInputChange} />
        <button onClick={calculate}>Calculate Area</button>
      </form>
      {result !== null && <p className="angleResult">Area : {result}</p>}
    </div>
  );
}

export default Area;
