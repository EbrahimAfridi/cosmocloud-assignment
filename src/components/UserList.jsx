import { useState } from "react";

const UserList = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Address</th>
            <th className="py-3 px-6 text-left">City</th>
            <th className="py-3 px-6 text-left">Country</th>
            <th className="py-3 px-6 text-left">Zip Code</th>
            <th className="py-3 px-6 text-left">Option</th>
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
              <td className="py-3 px-6 text-left">{emp.name}</td>
              <td className="py-3 px-6 text-left">{emp.email}</td>
              <td className="py-3 px-6 text-left">{emp.address_line_1}</td>
              <td className="py-3 px-6 text-left">{emp.city}</td>
              <td className="py-3 px-6 text-left">{emp.country}</td>
              <td className="py-3 px-6 text-left">{emp.zip_code}</td>
              <td className="py-3 px-6 text-left">
                <button onClick={() => setIsModalOpen(!isModalOpen)}>✏️</button>
              </td>
            </tr>
          ))}
          {isModalOpen && (
            <div className="font-bold text-black px-4 py-2 absolute right-10 shadow rounded hover:bg-zinc-100">
              <button>Update</button>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
