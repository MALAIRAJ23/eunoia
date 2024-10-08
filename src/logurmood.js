import React, { useState } from "react";
import "./logurmood.css"; // Import the CSS file for styling

const LogUrMood = () => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      alert(`Mood: ${mood}\nNote: ${note}`);
      setMood(""); // Clear input after submission
      setNote("");
    } else {
      alert("Please select a mood.");
    }
  };

  return (
    <div className="log-mood-container">
      <h1>Log Your Mood</h1>
      <form onSubmit={handleSubmit} className="mood-form">
        <div className="mood-selection">
          <label htmlFor="mood">How are you feeling?</label>
          <select id="mood" value={mood} onChange={handleMoodChange}>
            <option value="" disabled>Select a mood</option>
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Anxious">Anxious</option>
            <option value="Excited">Excited</option>
            <option value="Calm">Calm</option>
            <option value="Angry">Angry</option>
          </select>
        </div>
        <div className="note-section">
          <label htmlFor="note">Notes (Optional)</label>
          <textarea
            id="note"
            value={note}
            onChange={handleNoteChange}
            placeholder="Describe your day or how you're feeling..."
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Mood</button>
      </form>
    </div>
  );
};

export default LogUrMood;
