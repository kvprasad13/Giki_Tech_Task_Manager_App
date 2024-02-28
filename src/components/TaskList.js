// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
    return (
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={() => onDelete(task.id)}
                    onToggleComplete={() => onToggleComplete(task.id)}
                />
            ))}
        </ul>
    );
};

export default TaskList;
