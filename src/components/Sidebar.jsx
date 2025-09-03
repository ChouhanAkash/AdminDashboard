import React from "react";

const Sidebar = ({ setView }) => {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <button onClick={() => setView("all")}>All Tasks</button>
        <button onClick={() => setView("completed")}>Completed Tasks</button>
        <button onClick={() => setView("pending")}>Pending Tasks</button>
        <button onClick={() => setView("profile")}>Profile</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
