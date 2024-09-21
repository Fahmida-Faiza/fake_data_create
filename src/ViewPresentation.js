import React, { useState, useEffect } from "react";
import SlidesPanel from "./components/SlidesPanel";
import UsersPanel from "./components/UsersPanel";

function ViewPresentation({ nickname }) {
  const [slides, setSlides] = useState([]);
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    // Simulate API fetch for slides
    setSlides([
      { id: 1, content: "Slide 1 Content" },
      { id: 2, content: "Slide 2 Content" },
    ]);

    // Simulate API fetch for connected users
    setConnectedUsers([{ nickname: "User1" }, { nickname: "User2" }]);
  }, []);

  return (
    <div className="presentation-container">
      <div className="left-panel">
        <SlidesPanel slides={slides} />
      </div>
      <div className="main-slide-area">
        <div>Slide Content: {slides.length > 0 && slides[0].content}</div>
      </div>
      <div className="right-panel">
        <UsersPanel connectedUsers={connectedUsers} />
      </div>
    </div>
  );
}

export default ViewPresentation;
