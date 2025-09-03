import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import ModalForm from "../components/ModalForm";
import ProfileForm from "../components/ProfileForm";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [taskView, setTaskView] = useState("grid");

  const [user, setUser] = useState({ name: "John Doe", photoURL: "https://via.placeholder.com/50" });

  const tasksRef = collection(db, "tasks");

  const fetchTasks = async () => {
    const data = await getDocs(tasksRef);
    setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await addDoc(tasksRef, { ...task, status: "Pending" });
    fetchTasks();
  };

  const toggleStatus = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    const task = tasks.find(t => t.id === id);
    await updateDoc(taskDoc, { status: task.status === "Pending" ? "Completed" : "Pending" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
    fetchTasks();
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const filteredTasks = tasks.filter(task => {
    if (view === "completed") return task.status === "Completed";
    if (view === "pending") return task.status === "Pending";
    return true;
  });

  return (
    <div className="dashboard-container">
      <Sidebar setView={setView}/>
      <div className="main-content">
        <Header user={user}/>
        {view === "profile" ? (
          <ProfileForm user={user} updateUser={updateUser}/>
        ) : (
          <>
            <div className="controls">
              <button onClick={() => setModalOpen(true)}>Add Task</button>
              <button onClick={() => setTaskView(taskView === "grid" ? "list" : "grid")}>
                Toggle View
              </button>
            </div>
            <TaskList tasks={filteredTasks} toggleStatus={toggleStatus} deleteTask={deleteTask} view={taskView}/>
          </>
        )}
      </div>
      {modalOpen && <ModalForm addTask={addTask} closeModal={() => setModalOpen(false)}/>}
    </div>
  );
};

export default Dashboard;
