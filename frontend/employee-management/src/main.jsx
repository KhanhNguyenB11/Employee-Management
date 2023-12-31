import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEmployee from "./components/AddEmployee.jsx";
import Navbar from "./components/Navbar.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import UpdateEmployee from "./components/UpdateEmployee.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
    children: [
      {
        path: "/addEmployee",
        element: <AddEmployee />,
      },
      {
        path: "/editEmployee/:id",
        element: <UpdateEmployee />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
