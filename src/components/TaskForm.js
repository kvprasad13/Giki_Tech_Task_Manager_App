import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');
    const [error, setError] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            onAddTask(taskText);
            setTaskText('');
            setError(''); 
        } else {
            setError('Task field is required');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div><div className="task-form">

            <input
                type="text"
                placeholder="Enter new task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="task-input"
            />
            <button onClick={handleAddTask} className="add-button">Add Task</button>
          

        </div>
            <div className='error-container'>  {error && <div style={{ color: 'red' }}>{error}</div>}</div>
          </div>
        
    );
};

export default TaskForm;
