import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PresentationList from "./PresentationList";
import CreatePresentation from "./CreatePresentation";
import ViewPresentation from "./ViewPresentation";

function App() {
  const [nickname, setNickname] = useState("");

  return (
    <Router>
      <div>
        {!nickname ? (
          <div>
            <h2>Enter your Nickname</h2>
            <input
              type="text"
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter a nickname"
            />
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<PresentationList nickname={nickname} />}
            />
            <Route
              path="/create"
              element={<CreatePresentation nickname={nickname} />}
            />
            <Route
              path="/presentation/:id"
              element={<ViewPresentation nickname={nickname} />}
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
