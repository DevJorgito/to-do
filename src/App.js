
import React from 'react';
import Nav from "./components/general/Nav"
import Today from './components/general/templates/Today'; 
import { TaskProvider } from './components/general/molecule/TaskContext';
import "./css/config.css"

function App() {
    return (
        <TaskProvider>
            <div className="flex bg-slate-200">
                <Nav />
                <Today /> 
            </div>
        </TaskProvider>
    );
}

export default App;
