// components/WelcomeScreen.jsx
import { useState } from "react";
import "../styles/WelcomeScreen.css";

export function WelcomeScreen({ onStart }) {
  const [trainerHovered, setTrainerHovered] = useState(null);

  return (
    <section className="poke-section">
      <h2>Choose your Tech Class!</h2>

      <div className="poke-intro-trainer">
        <div className="poke-ball"></div>
        <img
          className={`poke-trainer-img poke-trainer-img-classic ${trainerHovered === "classic" ? "active" : ""}`}
          src="https://raw.githubusercontent.com/tiffachoo/pokesprites/master/trainers/red-rb.png"
          alt="Classic Trainer"
        />
        <img
          className={`poke-trainer-img poke-trainer-img-master ${trainerHovered === "master" ? "active" : ""}`}
          src="https://raw.githubusercontent.com/tiffachoo/pokesprites/master/trainers/red-sm.png"
          alt="Master Trainer"
        />
      </div>

      <button
        className="button spacer"
        onClick={() => onStart("Tech Trainer")}
        onMouseOver={() => setTrainerHovered("classic")}
        onMouseOut={() => setTrainerHovered(null)}
      >
        Tech Trainer
      </button>

      <button
        className="button"
        onClick={() => onStart("Code Master")}
        onMouseOver={() => setTrainerHovered("master")}
        onMouseOut={() => setTrainerHovered(null)}
      >
        Code Master
      </button>
    </section>
  );
}
