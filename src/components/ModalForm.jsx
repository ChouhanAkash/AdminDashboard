import React, { useState } from "react";

const ModalForm = ({ addTask, closeModal }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    closeModal();
  };

  return (
    <div className="modal">
      <form className="modal-form" onSubmit={handleSubmit}>
        <h2>Add Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        />
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          required
        />
        <button type="submit">Add Task</button>
        <button type="button" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default ModalForm;
