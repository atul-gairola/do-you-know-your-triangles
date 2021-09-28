import { useState } from "react";
import "./App.css";

function App() {
  const [currentNav, setCurrentNav] = useState(0);

  const handleNavChange = (e) => {
    const { id } = e.target;
    setCurrentNav(Number(id));
  };

  return (
    <div>
      <nav>
        <div id={0} onClick={handleNavChange} className="logo">
          Do you know your triangle ?
        </div>
        <ul className="linksContainer">
          <li
            id={1}
            className={currentNav === 1 && "activeLink"}
            onClick={handleNavChange}
          >
            Quiz
          </li>
          <li
            id={2}
            className={currentNav === 2 && "activeLink"}
            onClick={handleNavChange}
          >
            Calculate Hypotenuse
          </li>
          <li
            id={3}
            className={currentNav === 3 && "activeLink"}
            onClick={handleNavChange}
          >
            Calculate Area
          </li>
          <li
            id={4}
            className={currentNav === 4 && "activeLink"}
            onClick={handleNavChange}
          >
            Check Angles
          </li>
        </ul>
      </nav>
      <p>{currentNav}</p>
      <footer>
        Create with love by <a href="https://atulgairola.tech">Atul Gairola</a>
      </footer>
    </div>
  );
}

export default App;
