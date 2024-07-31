import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteEmployeeData } from "../api/employeeAPI";
import { useNavigate } from "react-router-dom";

const UserList = ({ data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteEmployeeData(id);
      const updatedData = data.data.filter((emp) => emp._id !== id);
      setData({ data: updatedData });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const openModal = (id) => {
    setSelectedEmployeeId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-auto bg-zinc-900 h-screen w-screen">
      <table className="min-w-full bg-zinc-800 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Options</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.data.map((emp) => (
            <tr
              key={emp._id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {emp._id}
              </td>

              <td className="py-3 px-6 text-left">
                <Link key={emp._id} to={`/details/${emp._id}`}>
                  {emp.name}
                </Link>
              </td>

              <td className="py-3 px-6 text-left">
                <button onClick={() => openModal(emp._id)}>✏️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="flex flex-col font-bold text-black absolute right-52 shadow rounded">
          <button
            className="px-4 py-2 hover:bg-blue-600 hover:text-white"
            onClick={() => navigate("/create")}
          >
            Update
          </button>
          <button
            className="px-4 py-2 text-red-700 hover:bg-red-700 hover:text-white"
            onClick={() => handleDelete(selectedEmployeeId)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
