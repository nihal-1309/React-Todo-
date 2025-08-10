import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import styles from '../styles/TaskForm.module.css';

const verbs = ['submit', 'create', 'fix', 'update', 'check', 'write', 'review', 'call'];

export default function TaskForm() {
  const { tasks, addTask } = useContext(TaskContext);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const validateTask = (text) => {
    if (text.length < 10 || text.length > 50) {
      return "Task must be 10–50 characters.";
    }
    const lowerText = text.toLowerCase();
    if (!verbs.some(v => lowerText.includes(v))) {
      return "Task must contain at least one action verb.";
    }
    if (tasks.some(task => task.text.toLowerCase() === lowerText)) {
      return "Duplicate task detected.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateTask(input.trim());
    if (err) {
      setError(err);
      return;
    }
    addTask(input.trim());
    setInput('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add Task</button>
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
}
