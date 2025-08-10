import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [filter, setFilter] = useState('all');
  const [focusMode, setFocusMode] = useState(false);

  return (
    <TaskProvider>
      <div style={{ padding: '20px' }}>
        <h1>Adaptive To-Do App</h1>
        <TaskForm />
        <div style={{ marginBottom: '10px' }}>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFocusMode(!focusMode)}>
            {focusMode ? 'List Mode' : 'Focus Mode'}
          </button>
        </div>
        <TaskList filter={filter} focusMode={focusMode} />
      </div>
    </TaskProvider>
  );
}
