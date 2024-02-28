// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);



  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    setTasks([...storedTasks]);
  }, []);




  const addTask = (text) => {
    const curTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...curTasks, { id: Date.now(), text, completed: false }]));

    setTasks((prevTasks) => {
      return [...prevTasks, { id: Date.now(), text, completed: false }]
    })

   
  };

  const deleteTask = (taskId) => {
    const curTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const updatedTasks = curTasks.filter(prevTask => prevTask.id !== taskId);

    localStorage.setItem('tasks', JSON.stringify([...updatedTasks]));
  

    setTasks((prevTasks) => {
      return prevTasks.filter(prevTask => prevTask.id !== taskId)
    })

  };
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map(prevTask =>
      prevTask.id === taskId ? { ...prevTask, completed: !prevTask.completed } : prevTask
    )
    localStorage.setItem('tasks', JSON.stringify([...updatedTasks]));
    setTasks((prevTasks) => tasks.map(prevTask =>
      prevTask.id === taskId ? { ...prevTask, completed: !prevTask.completed } : prevTask
    ));
    
  };

  return (

    <div className='main-container'>
      <div className='middle-container'>
        <h1 >Personal Task Manager</h1>
        <TaskForm onAddTask={addTask} />
        <div className="list">
          <TaskList tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
        </div>
      </div>
    </div>
  );
};

export default App;
