import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css"; 
import "./elements1.css"; 

const Elements1Page = () => {
  const [date, setDate] = useState(new Date());
  const [eventInput, setEventInput] = useState(""); 
  const [events, setEvents] = useState({}); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load events from local storage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    setEvents(storedEvents);
  }, []);

  const formatSelectedDate = () => date.toDateString(); // Helper for formatted date

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsModalOpen(true); 
  };

  const handleEventInputChange = (e) => {
    setEventInput(e.target.value);
  };

  const handleEventSubmit = () => {
    if (eventInput.trim()) {
      const formattedDate = formatSelectedDate();
      setEvents((prevEvents) => {
        const updatedEvents = {
          ...prevEvents,
          [formattedDate]: [...(prevEvents[formattedDate] || []), eventInput],
        };
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        return updatedEvents;
      });
      setEventInput(""); 
      setIsModalOpen(false);
    }
  };

  const renderEvents = () => {
    const formattedDate = formatSelectedDate();
    return (
      <div className="events-container">
        <h3>Events on {formattedDate}</h3>
        {events[formattedDate] && events[formattedDate].length > 0 ? (
          <ul>
            {events[formattedDate].map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        ) : (
          <p>No events added for this date.</p>
        )}
      </div>
    );
  };

  return (
    <div className="elements1-container">
      <h1>Welcome to the Boost Page</h1>
      <p>This is where you can start boosting your mental health journey!</p>

      {/* Custom Calendar */}
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date, view }) => {
            const colors = ["#FF6347", "#FFD700", "#ADFF2F", "#00BFFF", "#FF69B4", "#FF4500", "#8A2BE2"];
            return view === "month" ? `tile-${date.getDate() % colors.length}` : null;
          }}
          next2Label={null} // Remove the "Next Year" button
          prev2Label={null} // Remove the "Previous Year" button
        />
      </div>

      {/* Modal for adding events */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Add Event for {formatSelectedDate()}</h2>
            <input
              type="text"
              value={eventInput}
              onChange={handleEventInputChange}
              placeholder="Add an event"
            />
            <button onClick={handleEventSubmit}>Add Event</button>
          </div>
        </div>
      )}

      {/* Display Events */}
      {renderEvents()}
    </div>
  );
};

export default Elements1Page;
