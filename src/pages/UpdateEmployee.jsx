import { useParams } from "react-router-dom";
import { useEmployee } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
  const { UpdateEmployee, fetchEmployees, employees } = useEmployee();
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleSubmit(id) {
    await UpdateEmployee(id);
    await fetchEmployees();
    navigate("/");
  }
  
  const employee = employees.find((emp) => id === emp._id);
  console.log("emps: ", employees, "emp: ", employee);

  return (
    <form
      onSubmit={handleSubmit(id)}
      className="max-w-full p-6 bg-white rounded-lg shadow space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-gray-600 font-semibold">
            Name
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-gray-600 font-semibold">
            Email
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone_number"
            className="mb-1 text-gray-600 font-semibold"
          >
            Phone no.
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            min="0"
            name="phone_number"
            id="phone_number"
            placeholder="Phone no."
            value={employee.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address_line_1"
            className="mb-1 text-gray-600 font-semibold"
          >
            Address
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="address_line_1"
            id="address_line_1"
            placeholder="Address"
            value={employee.address_line_1}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="mb-1 text-gray-600 font-semibold">
            City
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={employee.city}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="country" className="mb-1 text-gray-600 font-semibold">
            Country
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            value={employee.country}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="zip_code"
            className="mb-1 text-gray-600 font-semibold"
          >
            Zip Code
          </label>
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            min="0"
            name="zip_code"
            id="zip_code"
            placeholder="Zip Code"
            value={employee.zip_code}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          name="updateUser"
          className={`w-full px-4 py-2 font-semibold text-white rounded bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Update User
        </button>
      </div>
    </form>
  );
};

export default UpdateEmployee;
