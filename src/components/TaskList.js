import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import styles from '../styles/TaskList.module.css';

export default function TaskList({ filter, focusMode }) {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);
  const now = new Date();

  let filtered = tasks;
  if (filter === 'active') filtered = tasks.filter(t => !t.completed);
  if (filter === 'completed') {
    filtered = tasks.filter(t => t.completed && (now - new Date(t.completedAt)) / 60000 <= 15);
  }

  const pending = filtered
    .filter(t => !t.completed)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const completed = filtered
    .filter(t => t.completed)
    .sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));

  const displayPending = focusMode ? pending.slice(0, 1) : pending;

  return (
    <div>
      <h3>Pending Tasks</h3>
      {displayPending.map(task => (
        <div key={task.id} className={styles.taskItem}>
          <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
          {task.text}
          <button onClick={() => deleteTask(task.id)}>🗑</button>
        </div>
      ))}
      <h3>Completed Tasks</h3>
      {completed.map(task => (
        <div key={task.id} className={styles.taskItem}>
          <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
          {task.text}
          <button onClick={() => deleteTask(task.id)}>🗑</button>
        </div>
      ))}
    </div>
  );
}
