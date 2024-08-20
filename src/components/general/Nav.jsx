import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCalendarDay, faCalendarDays, faInbox, faMagnifyingGlass, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddTask from "./templates/AddTask";
import useModal from "./atom/useModal";
import Search from "./templates/Search";

function Nav() {

    const addTaskModal = useModal();
    const searchModal = useModal();

    return (
        <nav className="rounded-md w-72 h-screen flex-col justify-between">
            <div className="bg-white h-full">
                <div className="flex justify-center py-10 shadow-sm pr-4">
                    <svg className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24">
                        <FontAwesomeIcon icon={faAddressBook} />
                    </svg>
                    <div className="pl-2">
                        <p className="text-2xl font-bold text-red-500">TO</p>
                        <span className="text-xs block text-gray-800">DO</span>
                    </div>
                </div>
                <div className="pl-10">
                    <ul className="space-y-8 pt-10">
                        <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                            <svg className=" h-6 w-6 text-red-500">
                                <FontAwesomeIcon icon={faPlusCircle} />
                            </svg>
                            <a onClick={addTaskModal.openModal}>Añadir Tarea</a>
                        </li>
                        <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                            <svg className=" h-6 w-6 text-red-500">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </svg>
                            <a onClick={searchModal.openModal}>Buscador</a>
                        </li>
                        <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                            <svg className=" h-6 w-6 text-red-500">
                                <FontAwesomeIcon icon={faInbox} />
                            </svg>
                            <a href="#">Bandeja de entrada</a>
                        </li>
                        <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                            <svg className=" h-6 w-6 text-red-500">
                                <FontAwesomeIcon icon={faCalendarDay} />
                            </svg>
                            <a href="#">Hoy</a>
                        </li>
                        <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                            <svg className=" h-6 w-6 text-red-500">
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </svg>
                            <a href="#">Próximo</a>
                        </li>
                    </ul>
                    <AddTask show={addTaskModal.isOpen} onClose={addTaskModal.closeModal} />
                    <Search show={searchModal.isOpen} onClose={searchModal.closeModal} />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
