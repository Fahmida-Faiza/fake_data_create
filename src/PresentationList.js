import React from "react";
import { Link } from "react-router-dom";

function PresentationList() {
  // You can replace this with real data fetching in the future
  const presentations = [
    { id: 1, name: "Presentation 1" },
    { id: 2, name: "Presentation 2" },
  ];

  return (
    <div>
      <h2>List of Presentations</h2>
      <ul>
        {presentations.map((presentation) => (
          <li key={presentation.id}>
            <Link to={`/presentation/${presentation.id}`}>
              {presentation.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/create">
        <button>Create a New Presentation</button>
      </Link>
    </div>
  );
}

export default PresentationList;
