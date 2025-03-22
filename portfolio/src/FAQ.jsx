import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./FAQ.css";

const FAQ = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back
      </button>
    <div className="containerfaq">
      <h1>Most Frequently Asked Questions</h1>
      <p> </p>
      <h2>Tell me about yourself?</h2>
      <p>I'm a software engineer and I graduated in december 2024. I'm Finnish but I speak and write fluent
        English. I'm very talkative and usually like to spice conversations with dry humor. I'm also very enthusiastic 
        of multiple different topics beside IT, like bioethics or cosmology. I'm always trying to learn something new, whether 
        it's a skill, knowledge or new jokes! 
      </p>
      <h2>What are your strengths?</h2>
      <p>I'm ernest, hardworking and resilient. I'm a good communicator and I like helping people.
        I have many skills, and I'm always aspiring to learn more. Also I'm quite good with excel.
      </p>
      <h2>What are your weaknesses?</h2>
      <p>Bullets, plutonium and messages containing only "We need to talk."</p>
      <h2>Where do you see yourself in 10 years?</h2>
      <p>Probably in a mirror.</p>
      <h2>How do you react to conflict?</h2>
      <p>This is a common question? Why? Anyways, I don't like conflicts. I usually work toward finding a 
        compromise and try to be a mediator for the situation.</p>
      <h2>Why should we hire you?</h2>
      <p>I'm trustworthy and a good worker. I do my job well, I'm flexible and a fast learner.
         I bring good humor with me and sometimes some baked goods. </p>
      <h2>What are your future goals?</h2>
      <p>In professiobal life I would like to make a career in cybersecurity or in data-analytics. With
        my freetime I would like to develop my artistic skills and maybe develop a small 8bit-style game.
      </p>
      <h2>Do you have any questions?</h2>
      <p>Why is plural of goose, geese but moose is note meese?</p>
      </div>
      </div>
  );
};

export default FAQ;
