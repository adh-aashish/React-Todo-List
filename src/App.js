import NavBar from "./components/navbar/navbar.jsx";
import UnCompleted from "./components/tasks/uncompleted.jsx";
import Completed from "./components/tasks/completed.jsx";
import { useState } from "react";

import "./components/navbar/navbar.css";

const compTask = {
  tasks: ["Go to the Market", "Clean utelsils", "Throw Garbage"],
};

const unCompTask = {
  tasks: ["Take Luna for Walk", "Water the flowers", "Wash clothes"],
};

export default function App() {
  const [completedTask, setCompletedTask] = useState([...compTask.tasks]);
  const [unCompletedTask, setUnCompletedTask] = useState([...unCompTask.tasks]);
  const [editedTask, setEditedTask] = useState([]);

  const removeCompTask = (task) => {
    const tasks = [...completedTask];
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    setCompletedTask(tasks);
  };

  const removeUnCompTask = (task) => {
    // const tasks = unCompletedTask.filter((item) => item !== task);
    const tasks = [...unCompletedTask];
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    setUnCompletedTask(tasks);
  };

  const addCompTask = (task) => {
    const tasks = [task, ...completedTask];
    setCompletedTask(tasks);
  };

  const addUnCompTask = (task) => {
    const tasks = [task, ...unCompletedTask];
    setUnCompletedTask(tasks);
  };

  const removeTask = (task, completed) => {
    if (completed) {
      removeCompTask(task);
    } else {
      removeUnCompTask(task);
    }
  };

  const addTask = (task, completed) => {
    if (completed) {
      addCompTask(task);
    } else {
      addUnCompTask(task);
    }
  };

  const editTask = (task) => {
    let temp = [...editedTask];
    temp = task;
    setEditedTask(temp);
  };

  return (
    <>
      <NavBar />
      <UnCompleted
        tasks={unCompletedTask}
        addTask={addTask}
        removeTask={removeTask}
        editTask={editTask}
        editedTask={editedTask}
      />
      <Completed
        tasks={completedTask}
        addTask={addTask}
        removeTask={removeTask}
        editTask={editTask}
      />
    </>
  );
}
