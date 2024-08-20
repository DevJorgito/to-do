import React, { useState } from 'react';
import { useTasks } from '../molecule/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Today = () => {
    const { tasks, editTask, deleteTask, markAsCompleted } = useTasks();
    const [editingIndex, setEditingIndex] = useState(null);
    const [taskDescription, setTaskDescription] = useState('');

    const handleEditClick = (index, task) => {
        setEditingIndex(index);
        setTaskDescription(task.description);
    };

    const handleSave = () => {
        editTask(editingIndex, { description: taskDescription});
        setEditingIndex(null);
        setTaskDescription('');
    };

    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold mb-6">Hoy</h2>
            <ul className="space-y-4 w-72">
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
                        <div>
                            <p className="text-lg">{task.description}</p>
                            <p className="text-sm text-gray-600">{task.status}</p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <button onClick={() => markAsCompleted(index)} className="p-1 text-green-500">
                                <FontAwesomeIcon icon={task.status === 'Completado' ? faCheckCircle : faCircle} className={`text-${task.status === 'Completado' ? 'green' : 'gray'}-500`} />
                            </button>
                            <button onClick={() => handleEditClick(index, task)} className="p-1">
                                <FontAwesomeIcon icon={faEdit} className="text-blue-500" />
                            </button>
                            <button onClick={() => deleteTask(index)} className="p-1">
                                <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {editingIndex !== null && (
                <div className="mt-6 p-4 bg-gray-100 shadow rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Edit Task</h3>
                    <input
                        type="text"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="border p-2 mb-2 w-full"
                        placeholder="Task Description"
                    />
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            )}
        </div>
    );
};

export default Today;
