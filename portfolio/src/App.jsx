import { useState } from "react";
import "./App.css";
import myIcon from "./assets/github-mark.png";


function App() {

  const [hoveredBox, setHoveredBox] = useState(null); // State for hovered box

  const handleMouseEnter = (index) => {
    setHoveredBox(index); // Set tooltip when hovering
  };

  const handleMouseLeave = () => {
    setHoveredBox(null); // Hide tooltip when mouse leaves
  };


  // Function to handle button click for box 3
  const handleButtonClick = () => {
    window.open("https://www.example.com", "_blank");
  };

  const tooltips = [
    "Box 1 does nothing",
    "Clicking here takes you to my github where you can see some of my projects",
    "Clicking here opens a new tab",
    "Box 4 is just decorative",
    "Box 5 is also just for looks",
    "Box 6 is a mystery box",
    "Box 7 hides secrets",
  ];


  return (
    <div className="container">
      <div className="circle"></div>
      <div className="boxes">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`box ${i === 2 ? "button-box" : ""}`} // Box 3 as a button
            onClick={i === 2 ? handleButtonClick : undefined} // Clickable only for box 3
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            {i === 1 ? (
              <a href="https://github.com/Huputtautunut?tab=repositories" target="_blank" rel="noopener noreferrer">

                <img src={myIcon} alt="Custom Icon" className="icon" />
              </a>
            ) : (
              i + 1
            )}

{hoveredBox === i && <div className="tooltip">{tooltips[i]}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
