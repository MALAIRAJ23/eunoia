import React from "react";
import "./elements.css"; // Ensure the CSS file is correctly referenced
import img from "./exambooster.jpg"; // Import images as necessary
import image2 from "./affandman.jpg";
import image3 from "./journal.jpg";
import image4 from "./activities.jpg";

// Updated images array with unique button names
const images = [
  { src: img, desc: "vanakam da mapla", buttonLabel: "Start Boost" },  // Unique button label
  { src: image2, desc: "Description for Image 2", buttonLabel: "Affirm&Manifest" },
  { src: image3, desc: "Description for Image 3", buttonLabel: "Log Your Mood" },
  { src: image4, desc: "Description for Image 4", buttonLabel: "Explore Activities" },
];

function FlipCard() {
  const flipCard = (e, index) => {
    e.preventDefault();
    const cardInner = document.querySelector(`#card-inner-${index}`);
    if (cardInner) {
      cardInner.classList.toggle("is-flipped"); // Ensure dInner exists before toggling
    }
  };

  const redirectToTest = (e) => {
    e.stopPropagation(); // Prevent flipping
    alert("Redirecting to test page...");
    // window.location.href = 'your_test_page_url.html'; // Uncomment to redirect
  };

  return (
    <div className="container">
      {/* Text area for free space above the images */}
      <div className="free-space">
        <h2>Eunoia: Your personal mental health assistant.</h2>
      </div>

      {images.map((image, index) => (
        <div className="card" key={index} onClick={(e) => flipCard(e, index)}>
          <div className="card-inner" id={`card-inner-${index}`}>
            <div className="card-front">
              <img src={image.src} alt={image.desc} />
            </div>
            <div className="card-back">
              <p>{image.desc}</p>
            </div>
          </div>
          <button className="test-button" onClick={redirectToTest}>
            {image.buttonLabel}  {/* Use unique button label here */}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlipCard;
