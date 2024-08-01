import { useState, useEffect } from "react";
import "./App.css";
import { getEmployeeData } from "./api/employeeAPI";
import { GET_URL } from "./constants/constant";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { Link } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";

function App() {
  const [data, setData] = useState({ data: [], page: {} });
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEmployeeData(GET_URL);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <h3 className="text-3xl font-bold tracking-tighter">
          Employee Management
        </h3>
        <button className="bg-zinc-900 hover:bg-zinc-700 cursor-pointer text-white px-4 py-2 rounded shadow">
          <Link to="/create">Add new Employee +</Link>
        </button>
      </nav>
      <UserList data={data} setData={setData} />
      {/* <Form setData={setData} /> */}
    </>
  );
}

export default App;
