// // import { useState, useEffect } from "react";
// // import "./App.css";
// // import { getEmployeeData } from "./api/employeeAPI";
// // import { GET_URL } from "./constants/constant";
// // import Form from "./components/Form";
// // import UserList from "./components/UserList";
// // import { Link } from "react-router-dom";
// // import { EmployeeProvider } from "./context/EmployeeContext";

// // function App() {
// //   const [data, setData] = useState({ data: [], page: {} });
// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const data = await getEmployeeData(GET_URL);
// //         setData(data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   return (
// //     <>
// //       <nav className="flex justify-between items-center p-4">
// //         <h3 className="text-3xl font-bold tracking-tighter">
// //           Employee Management
// //         </h3>
// //         <button className="bg-zinc-900 hover:bg-zinc-700 cursor-pointer text-white px-4 py-2 rounded shadow">
// //           <Link to="/create">Add new Employee +</Link>
// //         </button>
// //       </nav>
// //       <UserList data={data} setData={setData} />
// //       {/* <Form setData={setData} /> */}
// //     </>
// //   );
// // }

// // export default App;

// import { Button } from "@/components/ui/button";
// import UserList from "./components/UserList";

// export default function App() {

//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
//         <div className="text-2xl font-bold">Cosmocloud Org.</div>
//         <Button size="lg" className="text-lg" variant="secondary">
//           Add
//         </Button>
//       </header>
//       <UserList />
//     </div>
//   );
// }

// // function XIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="M18 6 6 18" />
// //       <path d="m6 6 12 12" />
// //     </svg>
// //   );
// // }




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import Header from "./components/Header";
import UserDetails from "./pages/UserDetails";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/employee/:id" element={<UserDetails />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/update-employee/:id" element={<UpdateEmployee />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
