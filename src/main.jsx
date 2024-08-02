import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEmployee from "./pages/AddEmployee.jsx";
import UpdateEmployee from "./pages/UpdateEmployee.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import UserDetails from "./pages/UserDetails.jsx";
import UserList from "./pages/UserList.jsx";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UserList />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/employee/:id",
        element: <UserDetails />,
      },
      {
        path: "/update-employee/:id",
        element: <UpdateEmployee />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
