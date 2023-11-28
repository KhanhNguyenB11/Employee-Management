import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state?.employee;
  const [employeeState, setEmployeeState] = useState(
    employee
      ? employee
      : {
          id: "",
          firstName: "",
          lastName: "",
          emailId: "",
        }
  );
  function handleChange(e) {
    setEmployeeState({ ...employeeState, [e.target.name]: e.target.value });
  }
  function handleCancel() {
    navigate("/");
  }
  function handleUpdate(id) {
    EmployeeService.updateEmployee(id, employeeState)
    .then(Response=>{
        console.log(Response);
        navigate("/");
    })
    .catch(error=>{
        console.log(error);
    })
  }
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="p-8">
        <div className=" font-thin text-2xl tracking-wider">
          <h1>Edit Employee</h1>
        </div>
        <div className=" h-14 w-full my-4">
          <label htmlFor="" className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employeeState.firstName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 p-2"
          />
        </div>
        <div className=" h-14 w-full my-4">
          <label htmlFor="" className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employeeState.lastName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 p-2"
          />
        </div>
        <div className=" h-14 w-full my-4 ">
          <label htmlFor="" className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employeeState.emailId}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 p-2"
          />
        </div>
        <div className=" h-14 w-full my-4 pt-4 space-x-4">
          <button className="rounded text-white font-bold bg-blue-600 py-2 px-6 hover:bg-blue-800" onClick={()=>handleUpdate(employeeState.id,employeeState)}>
            Update
          </button>
          <button
            className="rounded text-white font-bold bg-red-600 py-2 px-6 hover:bg-red-800"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;
