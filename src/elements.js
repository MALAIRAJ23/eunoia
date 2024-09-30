import React from "react";
import { useNavigate } from "react-router-dom";
import "./elements.css";
import img from "./exambooster.jpg"; // Ensure the image paths are correct
import image2 from "./affandman.jpg";
import image3 from "./journal.jpg";
import image4 from "./activities.jpg";

const images = [
  { src: img, desc: "vanakam da mapla", buttonLabel: "Start Boost" },
  { src: image2, desc: "Description for Image 2", buttonLabel: "Affirm&Manifest" },
  { src: image3, desc: "Description for Image 3", buttonLabel: "Log Your Mood" },
  { src: image4, desc: "Description for Image 4", buttonLabel: "Explore Activities" },
];

function ElementsPage() {
  const navigate = useNavigate(); // useNavigate for programmatic routing

  const flipCard = (e, index) => {
    e.preventDefault();
    const cardInner = document.querySelector(`#card-inner-${index}`);
    if (cardInner) {
      cardInner.classList.toggle("is-flipped");
    }
  };

  const handleButtonClick = (e, buttonLabel) => {
    e.stopPropagation(); // Prevent card flip
    if (buttonLabel === "Start Boost") {
      navigate("/elements1"); // Redirect to elements1 page
    } else {
      alert(`Button clicked: ${buttonLabel}`);
    }
  };

  return (
    <div className="container">
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
          <button
            className="test-button"
            onClick={(e) => handleButtonClick(e, image.buttonLabel)}
          >
            {image.buttonLabel}
          </button>
        </div>
      ))}
    </div>
  );
}

<<<<<<< HEAD
export default ElementsPage;
=======
export default FlipCard;
>>>>>>> ceaf903fa6da16392ff1b78228e6f5b64c0cce3b
