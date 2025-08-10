import React, { createContext, useState, useEffect } from 'react';

const encodeData = (data) => btoa(JSON.stringify(data));
const decodeData = (data) => JSON.parse(atob(data));

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      setTasks(decodeData(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', encodeData(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null
      }
    ]);
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString() : null }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
