import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
function EmployeeList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  function handleAddEmployeeClick() {
    navigate("/addEmployee");
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await EmployeeService.getEmployees()
          .then((response) => {
            setEmployees(response.data);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={handleAddEmployeeClick}
          className="rounded bg-slate-500 hover:bg-slate-700 px-6 py-2 text-white font-bold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        {!loading ? (
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  First Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Last Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Email ID
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td className="text-left px-6 py-4 whitespace-nowrap text-sm">
                    {emp.firstName}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap text-sm">
                    {emp.lastName}
                  </td>
                  <td className="text-left px-6 py-4 whitespace-nowrap text-sm">
                    {emp.emailId}
                  </td>
                  <td className=" text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
