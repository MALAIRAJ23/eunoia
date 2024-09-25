import React, { useRef } from "react";
import "./about.css";
import Audios from "./Eunoia Pronunciation.mp3"; // Imported audio file
import { useNavigate } from "react-router-dom";
import { FaVolumeUp } from "react-icons/fa"; // Importing a speaker icon from Font Awesome

function About() {
  const a = "Eunoia <ευνοία>";
  const b = "yoo-NOY-uh"
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <h1>ABOUT US</h1>
      <div className="GreekRoot">
        <h2>{a}</h2>
      </div>
      <div className="Pronunciation">
        <FaVolumeUp onClick={playAudio} style={{ fontSize: '2rem', cursor: 'pointer' }} />
        <audio ref={audioRef}>
          <source src={Audios} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <h2>{b}</h2>
      </div>
      <div className="Description">
        <p>
          At Eunoia, we believe that mental health is as essential as physical
          health. Our mission is to provide everyone with a minimal, sustainable
          way to keep track of their mental well-being. With personalized
          features and an intuitive interface, our platform helps you monitor,
          reflect, and grow at your own pace. Whether you're looking for daily
          mental health check-ins or long-term tracking, Eunoia is designed to
          support you every step of the way.
        </p>
      </div>
    </>
  );
}

export default About;
