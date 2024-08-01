import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import {
  getEmployeeData,
  postEmployeeData,
  updateEmployeeData,
  deleteEmployeeData,
} from "../api/employeeAPI";
import { GET_URL } from "../constants/constant";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const data = await getEmployeeData(GET_URL);
      setEmployees(data);
      console.log(employees, "hahaha");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const addEmployee = async (employeeData) => {
    try {
      const newEmployeeId = await postEmployeeData(employeeData);
      await fetchEmployees();
      return newEmployeeId;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateEmployee = async (id, employeeData) => {
    try {
      await updateEmployeeData(id, employeeData);
      await fetchEmployees();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await deleteEmployeeData(id);
      await fetchEmployees();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        error,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        fetchEmployees,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
// Custom hook to use the Employee context
export const useEmployee = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployee must be used within an EmployeeProvider");
  }
  return context;
};
