import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import myIcon from "./assets/github-mark.png";
import myIcon2 from "./assets/control.png";
import myIcon3 from "./assets/medal.png";
import FAQ from "./FAQ";

function Home() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => setHoveredBox(index);
  const handleMouseLeave = () => setHoveredBox(null);
  const handleButtonClick = () => navigate("/faq");


  const tooltips = [
    "Box 1 does nothing",
    "Clicking here takes you to my github where you can see some of my projects",
    "Clicking here opens the FAQ page",
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
            className={`box ${i === 2 ? "button-box" : ""}`}
            onClick={i === 2 ? handleButtonClick : undefined}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >  
            {i === 0 ? (
              <a href="https://huputtautunut.itch.io/interviw" target="_blank" rel="noopener noreferrer">
                <img src={myIcon2} alt="Control" className="icon" />
              </a>
            ) : i === 1 ? (
              <a href="https://github.com/Huputtautunut?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={myIcon} alt="GitHub Icon" className="icon" />
              </a>
            )  : i === 5 ? (
              <a href="https://fi.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <img src={myIcon3} alt="medal" className="icon" />
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
