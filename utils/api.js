import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const fetchEmployee = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw error;
  }
};

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${id}`,
      employeeData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating employee with id ${id}:`, error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
    throw error;
  }
};
