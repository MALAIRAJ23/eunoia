// ElementsPage.js
import React, { useState, useEffect } from "react";
import "./engage.css";

function engage() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  // Start the timer
  const startTimer = () => {
    if (!timer) {
      setTimer(setInterval(() => setTime(prevTime => prevTime + 1), 1000));
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setTime(0);
  };

  // Format the timer display
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="engage">
      <h1>Breathwork Timer & Relaxation Audio</h1>

      <div className="timer-section">
        <h2>Breathe with the Timer</h2>
        <div className="timer-display">{formatTime(time)}</div>
        <div className="timer-buttons">
          <button onClick={startTimer}>Start</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>

      <div className="audio-section">
        <h2>Relaxation Audio</h2>
        <div className="audio-files">
          <audio controls>
            <source src="audio1.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls>
            <source src="audio2.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}

export default engage;
