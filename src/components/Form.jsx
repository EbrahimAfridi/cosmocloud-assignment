import { useState, useEffect } from "react";
import {
  getEmployeeData,
  getEmployeeDataById,
  postEmployeeData,
  updateEmployeeData,
} from "../api/employeeAPI";
import { GET_URL } from "../constants/constant";
import { useLocation } from "react-router-dom";

function Form({ setData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address_line_1: "",
    city: "",
    country: "",
    zip_code: "",
  });
  const location = useLocation();
  const { id, update } = location.state || {};

  useEffect(() => {
    if (update && id) {
      const fetchEmployeeData = async () => {
        const data = await getEmployeeDataById(id, GET_URL);
        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone_number: data.phone_number || "",
          address_line_1: data.address_line_1 || "",
          city: data.city || "",
          country: data.country || "",
          zip_code: data.zip_code || "",
        });
      };
      fetchEmployeeData();
    }
  }, [id, update]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const buttonType = e.nativeEvent.submitter.name;

    try {
      if (buttonType === "createUser") {
        const id = await postEmployeeData(formData);
        console.log("Success:", id);
      } else if (buttonType === "updateUser" && update && id) {
        await updateEmployeeData(id, formData);
        console.log("Update Success");
      }
      const newAllUserData = await getEmployeeData(GET_URL);
      setData(newAllUserData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-semibold my-4">
        {update ? "Update Employee" : "Create New Employee"}
      </h1>
      <hr className="border-zinc-300 mb-10" />
      <form
        onSubmit={handleSubmit}
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
              value={formData.name}
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
              value={formData.email}
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
              value={formData.phone_number}
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
              value={formData.address_line_1}
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
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="mb-1 text-gray-600 font-semibold"
            >
              Country
            </label>
            <input
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={formData.country}
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
              value={formData.zip_code}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            name="createUser"
            className={`w-full px-4 py-2 font-semibold text-white rounded ${
              update
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-500 hover:bg-green-600"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {update ? "Update User" : "Create User"}
          </button>
        </div>
      </form>
    </main>
  );
}

export default Form;
