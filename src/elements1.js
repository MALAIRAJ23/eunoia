import React, { useState, useEffect } from "react";
import Calendar from "react-calendar"; // Importing the calendar component
import "react-calendar/dist/Calendar.css"; // Import the default styles
import "./elements1.css"; // CSS for elements1 page

const Elements1Page = () => {
  const [date, setDate] = useState(new Date()); // State to manage selected date
  const [eventInput, setEventInput] = useState(""); // State for user input
  const [events, setEvents] = useState({}); // State to manage events
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Load events from local storage on component mount
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
    setEvents(storedEvents);
  }, []);

  // Handle date change and open modal
  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsModalOpen(true); // Open the modal when a date is clicked
  };

  // Handle event input change
  const handleEventInputChange = (e) => {
    setEventInput(e.target.value);
  };

  // Handle event submission
  const handleEventSubmit = () => {
    if (eventInput.trim()) {
      const formattedDate = date.toDateString();
      setEvents((prevEvents) => {
        const updatedEvents = {
          ...prevEvents,
          [formattedDate]: [...(prevEvents[formattedDate] || []), eventInput],
        };
        // Save updated events to local storage
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        return updatedEvents;
      });
      setEventInput(""); // Clear input after submitting
      setIsModalOpen(false); // Close the modal after submitting
    }
  };

  // Render events for the selected date
  const renderEvents = () => {
    const formattedDate = date.toDateString();
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
            // Function to assign a different color for each day
            const colors = ["#FF6347", "#FFD700", "#ADFF2F", "#00BFFF", "#FF69B4", "#FF4500", "#8A2BE2"];
            return view === 'month' ? `tile-${date.getDate() % colors.length}` : null;
          }}
        />
      </div>

      {/* Modal for adding events */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Add Event for {date.toDateString()}</h2>
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
