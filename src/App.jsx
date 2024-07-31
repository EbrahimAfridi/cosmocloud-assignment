import { useState, useEffect } from "react";
import "./App.css";
import { getData } from "./api/employeeAPI";
import { getURL } from "./constants/constant";

function App() {
  const [data, setData] = useState({ data: [], page: {} });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(getURL);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ul>
      {data.data.map((emp) => (
        <li key={emp._id}>
          {emp.name}
          {emp.email}
          {emp.address_line_1}
          {emp.city}
          {emp.country}
          {emp.zip_code}
        </li>
      ))}
    </ul>
  );
}

export default App;
