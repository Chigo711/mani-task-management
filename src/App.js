import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTaskStatus } from './redux/actions';
import './App.css';

function App() {
  const [taskText, setTaskText] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [autoUpdate, setAutoUpdate] = useState(true); // Automatic update preference
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (autoUpdate) {
      const interval = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
        tasks.forEach((task) => {
          if (task.startTime <= currentTime && currentTime < task.endTime && task.status !== 'Pending') {
            alert(`Task "${task.text}" is now pending.`);
          } else if (currentTime >= task.endTime && task.status !== 'Done') {
            alert(`Task "${task.text}" is now done.`);
          }
        });
      }, 1000); // Check every second
      return () => clearInterval(interval);
    }
  }, [tasks, autoUpdate]);

  const handleAddTask = () => {
    if (taskText.trim() && startTime && endTime) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        startTime: startTime,
        endTime: endTime,
        status: 'Pending',
      };
      dispatch(addTask(newTask));
      setTaskText('');
      setStartTime('');
      setEndTime('');
    }
  };

  const handleStatusChange = (id, status) => {
    dispatch(updateTaskStatus(id, status));
  };

  return (
    <div className="app">
      <header>
        <h1>Task Manager</h1>
        <div className="settings">
        <label>
            <input
              type="checkbox"
              checked={autoUpdate}
              onChange={() => setAutoUpdate(!autoUpdate)}
            />
            Enable Automatic Status Updates
          </label>
        </div>
      </header>
      <div className="task-input">
  <input
    type="text"
    value={taskText}
    onChange={(e) => setTaskText(e.target.value)}
    placeholder="Add a new task..."
  />

  <div className="time-input">
    <label htmlFor="start-time">Start Time</label>
    <input
      id="start-time"
      type="time"
      value={startTime}
      onChange={(e) => setStartTime(e.target.value)}
    />
  </div>

  <div className="time-input">
    <label htmlFor="end-time">End Time</label>
    <input
      id="end-time"
      type="time"
      value={endTime}
      onChange={(e) => setEndTime(e.target.value)}
    />
  </div>

  <button onClick={handleAddTask}>Add Task</button>
</div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task ${task.status.toLowerCase()}`}>
            <div className="task-info">
              <span>{task.text}</span>
              <span className="task-time">Start: {task.startTime}</span>
              <span className="task-time">End: {task.endTime}</span>
            </div>
            <div className="task-status">
              Status: {task.status}
            </div>
            <div className="task-actions">
              <button onClick={() => handleStatusChange(task.id, 'Pending')}>Set Pending</button>
              <button onClick={() => handleStatusChange(task.id, 'In Progress')}>Set In Progress</button>
              <button onClick={() => handleStatusChange(task.id, 'Done')}>Set Done</button>
              <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
