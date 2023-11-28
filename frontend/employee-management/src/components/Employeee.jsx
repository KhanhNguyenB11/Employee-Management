import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
function Employeee({emp, handleDelete}) {
  const navigate = useNavigate();
  function handleUpdateEmployee(e,id){
    e.preventDefault();
    navigate(`editEmployee/${emp.id}`,{ state: { employee: emp } })
  }
  return (
    <tr >
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
                      onClick={(e)=>handleUpdateEmployee(e,emp.id)}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-800 px-4"
                      onClick={(e)=>handleDelete(e,emp.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
  )
}

export default Employeee