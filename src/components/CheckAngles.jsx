import React, { useState } from "react";
import "./CheckAngles.css";

function CheckAngles() {
  const [data, setData] = useState({
    angle1: "",
    angle2: "",
    angle3: "",
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
    const { angle1, angle2, angle3 } = data;
    if (angle1 && angle2 && angle3) {
      if (Number(angle1) + Number(angle2) + Number(angle3) === 180) {
        setResult("This triangle is correct with all the angles.");
      } else {
        setResult(
          "Angle don't sum up to 180deg. A triangle with these angles is not possible."
        );
      }
    }
  };

  return (
    <div className="hypotenuseContainer">
      <h1>Check if these angles can make a triangle</h1>
      <form>
        <label htmlFor="angle1">First Angle:</label>
        <input type="number" name="angle1" onChange={handleInputChange} />
        <label htmlFor="angle2">Second Angle:</label>
        <input type="number" name="angle2" onChange={handleInputChange} />
        <label htmlFor="angle3">Third Angle:</label>
        <input type="number" name="angle3" onChange={handleInputChange} />
        <button onClick={calculate}>Check Angles</button>
      </form>
      {result && <p className="angleResult">{result}</p>}
    </div>
  );
}

export default CheckAngles;
