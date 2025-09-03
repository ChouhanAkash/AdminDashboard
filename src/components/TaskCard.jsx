import React from "react";

const TaskCard = ({ task, toggleStatus, deleteTask }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due: {task.dueDate}</p>
      <div className="task-actions">
        <button onClick={() => toggleStatus(task.id)}>
          {task.status === "Pending" ? "Mark Completed" : "Mark Pending"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
