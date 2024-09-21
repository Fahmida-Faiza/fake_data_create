import React from "react";

function SlidesPanel({ slides }) {
  return (
    <div>
      <h3>Slides</h3>
      <ul>
        {slides.map((slide, index) => (
          <li key={index}>Slide {index + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default SlidesPanel;
