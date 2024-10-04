import React, { useState } from 'react';

function App() {
    // State for tasks and task input
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    // Function to add a new task
    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    };

    // Function to toggle the completed status of a task
    const toggleTaskCompleted = (index) => {
        const newTasks = tasks.map((t, i) => {
            if (i === index) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
        setTasks(newTasks);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>To-Do List</h1>
            {/* Input field and button */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            {/* List of tasks */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompleted(index)}
                        />
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
