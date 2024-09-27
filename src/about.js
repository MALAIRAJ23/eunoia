import React, { useRef } from "react";
import "./about.css";
import Audios from "./Eunoia Pronunciation.mp3";
import { FaVolumeUp } from "react-icons/fa";

function About() {
  const a = "Eunoia <ευνοία>";
  const b = "yoo-NOY-uh";
  const c = "A Greek word that means beautiful thinking or a well mind."
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
        <div className="AudioWrapper">
          <FaVolumeUp onClick={playAudio} style={{ fontSize: '2rem', cursor: 'pointer' }} />
          <h2>{b}</h2>
        </div>
        <audio ref={audioRef}>
          <source src={Audios} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="Meaning">
        <h2>{c}</h2>
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
