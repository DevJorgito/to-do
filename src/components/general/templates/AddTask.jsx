import React, { useState } from 'react';
import { useTasks } from '../molecule/TaskContext'; 

const AddTask = ({ show, onClose }) => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pendiente'); 
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addTask({ description, status });
    setDescription('');
    setStatus('Pendiente'); 
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        <h2 className="text-lg font-bold mb-4">Añadir Tarea</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre de la Tarea</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Estado</label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Completado">Completado</option>
              <option value="Pendiente">Pendiente</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
