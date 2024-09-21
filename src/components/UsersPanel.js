import React from "react";

function UsersPanel({ connectedUsers }) {
  return (
    <div>
      <h3>Connected Users</h3>
      <ul>
        {connectedUsers.map((user, index) => (
          <li key={index}>{user.nickname}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPanel;
