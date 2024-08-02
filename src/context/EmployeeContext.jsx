// import {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
// } from "react";
// import {
//   getEmployeeData,
//   postEmployeeData,
//   updateEmployeeData,
//   deleteEmployeeData,
// } from "../api/employeeAPI";
// import { useCallback } from "react";

// export const EmployeeContext = createContext();

// export const EmployeeProvider = ({ children }) => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchEmployees = useCallback(async () => {
//     try {
//       setLoading(true);
//       const allEmployeeData = await getEmployeeData();
//       setEmployees(allEmployeeData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const addEmployee = async (employeeData) => {
//     try {
//       const newEmployeeId = await postEmployeeData(employeeData);
//       await fetchEmployees(); // Refetch to get the updated list
//       return newEmployeeId;
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     }
//   };

//   const updateEmployee = async (id, employeeData) => {
//     try {
//       await updateEmployeeData(id, employeeData);
//       await fetchEmployees(); // Refetch to get the updated list
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     }
//   };

//   const deleteEmployee = async (id) => {
//     try {
//       await deleteEmployeeData(id);
//       await fetchEmployees(); // Refetch to get the updated list
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     }
//   };

//   return (
//     <EmployeeContext.Provider
//       value={{
//         employees,
//         loading,
//         error,
//         addEmployee,
//         updateEmployee,
//         deleteEmployee,
//         fetchEmployees, // Add fetchEmployees to context
//       }}
//     >
//       {children}
//     </EmployeeContext.Provider>
//   );
// };

// // Custom hook to use the Employee context
// export const useEmployee = () => {
//   const context = useContext(EmployeeContext);
//   if (!context) {
//     throw new Error("useEmployee must be used within an EmployeeProvider");
//   }
//   return context;
// };
