import { useState, useEffect } from "react";
import "./App.css";
import { getData } from "./api/employeeAPI";
import { GET_URL } from "./constants/constant";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState({ data: [], page: {} });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(GET_URL);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <ol>
        {data.data.map((emp) => (
          <li key={emp._id}>
            {emp.name}
            <br />
            {emp.email}
            <br />
            {emp.address_line_1}
            <br />
            {emp.city}
            <br />
            {emp.country}
            <br />
            {emp.zip_code}
            <br />
          </li>
        ))}
      </ol>
      {/* <Form setData={setData} /> */}
    </>
  );
}

export default App;
