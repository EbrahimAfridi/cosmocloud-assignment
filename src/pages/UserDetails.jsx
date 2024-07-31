import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getEmployeeDataById,
  deleteEmployeeData,
  updateEmployeeData,
} from "../api/employeeAPI";
import { GET_BY_ID_URL } from "../constants/constant";

const UserDetails = () => {
  const { id } = useParams();
  console.log("ID: ", id);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEmployeeDataById(id, GET_BY_ID_URL);
        setUser(data);
        setFormData({
          name: data.name,
          email: data.email,
          phone_number: data.phone_number,
          address: data.address_line_1,
          city: data.city,
          country: data.country,
          zipCode: data.zip_code,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      await updateEmployeeData(id, formData);
      setUser({ ...user, ...formData });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteEmployeeData(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {isEditing ? (
          <>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-gray-600 font-semibold"
              >
                Name
              </label>
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone_number"
                className="mb-1 text-gray-600 font-semibold"
              >
                Phone No.
              </label>
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="phone-number"
                id="phone-number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="mb-1 text-gray-600 font-semibold"
              >
                Address
              </label>
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="mb-1 text-gray-600 font-semibold"
              >
                City
              </label>
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="city"
                id="city"
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
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="zipCode"
                className="mb-1 text-gray-600 font-semibold"
              >
                Zip Code
              </label>
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="zipCode"
                id="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">Name</label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.name}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">Email</label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.email}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">
                Phone Number
              </label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.phone_number}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">
                Address
              </label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.address_line_1}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">City</label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.city}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">
                Country
              </label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.country}
              </p>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600 font-semibold">
                Zip Code
              </label>
              <p className="p-3 border border-gray-300 rounded-lg">
                {user.zip_code}
              </p>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between mt-4">
        {isEditing ? (
          <>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
