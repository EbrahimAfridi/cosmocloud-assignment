import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form from "./components/Form.jsx";
// import ErrorPage from "./components/ErrorPage.jsx";
// import UserDetails from "./pages/UserDetails.jsx";
// import UpdateEmployee from "./pages/UpdateEmployee.jsx";
// import { EmployeeProvider } from "./context/EmployeeContext.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   // {
//   //   path: "/create",
//   //   element: <Form />,
//   // },
//   {
//     path: "/details/:id",
//     element: <UserDetails />,
//   },
//   // {
  //   path: "/update/:id",
  //   element: <UpdateEmployee />,
  // },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <EmployeeProvider> */}
      {/* <RouterProvider router={router} /> */}
      <App />
    {/* </EmployeeProvider> */}
  </React.StrictMode>
);
