import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, toggleStatus, deleteTask, view }) => {
  return (
    <div className={view === "grid" ? "task-list-grid" : "task-list"}>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          toggleStatus={toggleStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
