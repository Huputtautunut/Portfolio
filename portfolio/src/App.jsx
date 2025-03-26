import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import myIcon from "./assets/github-mark.png";
import myIcon2 from "./assets/joystick.png";
import myIcon3 from "./assets/prize1.png";
import myIcon4 from "./assets/taulukko1.png";
import myIcon5 from "./assets/tikku1.png";
import myIcon7 from "./assets/under-construction.png";
import myFAQIcon from "./assets/kyssari2.png"
import FAQ from "./FAQ";

function Home() {
  const [hoveredBox, setHoveredBox] = useState(null);
  const [funFact, setFunFact] = useState("Click for a fact about me");
  const navigate = useNavigate();

  const funFacts = [
    "I graduated early on 31.12.2025!",
    "I did a semester in Seoultech in South-Korea!",
    "Cybersecurity is my personal interest!",
    "I have worked as a cashier for over three years!",
    "I completed 270 credits! (240 is required to graduate)",
    "I did my thesis on security of biometrics!",
    "I love bioethics and study it independtly on my free time",
    "I've completed 17 ECTS on cybersecurity",
    "My group scored 3rd place on AWS hackathon!",
    "My favorite book is Lord of The Rings",
    "I performed in the student theatre",
    "Astronomy and cosmology are a hobby of mine!",
    "I don't drink coffee, but I love tea!"
  ];
const [remainingFacts, setRemainingFacts] = useState([...funFacts]);
const [currentFact, setCurrentFact] = useState("");

const handleCircleClick = (event) => {
  event.stopPropagation(); // Prevents parent event interference
  console.log("Circle clicked!");

  if (remainingFacts.length === 0) {
      // Refill the facts when all have been used
      setRemainingFacts([...funFacts]);
      return; // Exit early to avoid trying to access an empty array
  }

  // Get a random fact from the remaining ones
  const index = Math.floor(Math.random() * remainingFacts.length);
  const selectedFact = remainingFacts[index];

  // Create a new array without the selected fact
  const newRemainingFacts = remainingFacts.filter((_, i) => i !== index);

  // Update state with new list and fact
  setRemainingFacts(newRemainingFacts);
  setFunFact(selectedFact);
};



  const handleMouseEnter = (index) => setHoveredBox(index);
  const handleMouseLeave = () => setHoveredBox(null);
  const handleButtonClick = () => navigate("/faq");

  const tooltips = [
    "My infamous job hunting excel. It has more functions than this website",
    "My github where you can browse my projects",
    "FAQ and my answers",
    "A working process",
    "Want to play a job interview simulator I made a few years ago?",
    "All the certificates I have",
    "Want to see some of my art?",
  ];

  return (
    <div className="container">
      <div className="circle" onClick={handleCircleClick}>
  {funFact}
</div>

      <div className="boxes">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`box ${i === 2 ? "button-box" : ""}`}
            onClick={i === 2 ? handleButtonClick : undefined}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            {i === 4 ? (
              <a href="https://huputtautunut.itch.io/interviw" target="_blank" rel="noopener noreferrer">
                <img src={myIcon2} alt="Control" className="icon" />
              </a>
            ) : i === 1 ? (
              <a href="https://github.com/Huputtautunut?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img src={myIcon} alt="GitHub Icon" className="icon" />
              </a>
            ) : i === 0 ? (
              <a href="https://docs.google.com/spreadsheets/d/1ZX_oRKSsZUQmwpX9QQd7l0bGfK8QZ_44bmJNmo6tneY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src={myIcon4} alt="graph" className="icon" />
              </a>
            ) : i === 5 ? (
              <a href="https://www.linkedin.com/in/johanna-huttunen-149b32179/details/certifications/" target="_blank" rel="noopener noreferrer">
                <img src={myIcon3} alt="medal" className="icon" />
              </a>
            ) : i === 6 ? (
              <a href="https://fi.pinterest.com/jonsku022/my-art/" target="_blank" rel="noopener noreferrer">
                <img src={myIcon5} alt="brush" className="icon" />
              </a>
            ) 

            : i === 3 ? (
              <a >
                <img src={myIcon7} alt="brush" className="icon" />
              </a>
            ) 
            
            : i === 2 ? (
              <div className="button-box" onClick={handleButtonClick}>
                <img src={myFAQIcon} alt="FAQ Icon" className="icon" />
              </div>
            )
            : (
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