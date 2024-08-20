import React, { createContext, useState, useEffect, useContext } from 'react';

const TaskContext = createContext();

export const useTasks = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (index, updatedTask) => {
        const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const markAsCompleted = (index) => {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, status: 'Completado' } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, markAsCompleted }}>
            {children}
        </TaskContext.Provider>
    );
};
