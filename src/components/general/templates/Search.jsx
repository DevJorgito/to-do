import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 ">
                <h2 className="text-lg font-bold mb-4">Buscar</h2>
                <form>
                    <div className="flex justify-center py-4 shadow-sm">
                        <input type="text" className="pl-2 w-full border border-gray-300 p-2 rounded" placeholder="Busca una tarea..."/>
                        <svg className="w-8 h-8 text-red-500 pl-2" fill="none" viewBox=" 0 0 24 24">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </svg>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
