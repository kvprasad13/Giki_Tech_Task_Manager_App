// TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
    return (
        <li className={` task-item ${task.completed ? 'completed' : ''}`}>
            <span
                onClick={onToggleComplete}
                className="task-text"
            >
                {task.text}
            </span>
            <button onClick={onDelete} className="delete-button">Delete</button>
        </li>
    );
};

export default TaskItem;
