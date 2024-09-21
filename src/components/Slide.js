import React from "react";
import Markdown from "markdown-to-jsx";

function Slide({ slide }) {
  return (
    <div className="slide">
      {slide.textBlocks.map((block, index) => (
        <div
          key={index}
          className="text-block"
          style={{
            position: "absolute",
            top: block.position.y,
            left: block.position.x,
          }}
        >
          <Markdown>{block.text}</Markdown>
        </div>
      ))}
    </div>
  );
}

export default Slide;


