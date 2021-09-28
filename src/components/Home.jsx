import React from "react";

import "./Home.css";
import PyramidImage from "../images/Pyramid 2.png";

function Home() {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>Do you know your triangles?</h1>
        <p>
          This reactjs app is all around triangles. With multiple features
          dedicated to triangles, play with them and get to know your triangles
          better
        </p>
      </div>
      <img className="heroImage" src={PyramidImage} alt="pyramid" />
    </div>
  );
}

export default Home;
