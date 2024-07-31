import { useState, useEffect } from "react";
import "./App.css";
import { getEmployeeData } from "./api/employeeAPI";
import { GET_URL } from "./constants/constant";
import Form from "./components/Form";
import UserList from "./components/UserList";

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
      <UserList data={data} setData={setData}/>
      <Form setData={setData} />
    </>
  );
}

export default App;
