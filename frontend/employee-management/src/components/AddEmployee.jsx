import { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
function AddEmployee() {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    });
    function handleChange(e){
        setEmployee({...employee,[e.target.name] : e.target.value}) ;
    }
    function saveEmployee(){
        EmployeeService.saveEmployee(employee)
        .then((response)=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className='p-8'>
            <div className=' font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className=' h-14 w-full my-4'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} className='h-10 w-96 border mt-2 p-2' />
            </div>
            <div className=' h-14 w-full my-4'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} className='h-10 w-96 border mt-2 p-2' />
            </div>
            <div className=' h-14 w-full my-4 '>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type="email" name="emailId" value={employee.emailId} onChange={handleChange} className='h-10 w-96 border mt-2 p-2' />
            </div>
            <div className=' h-14 w-full my-4 pt-4 space-x-4'>
                <button className='rounded text-white font-bold bg-blue-600 py-2 px-6 hover:bg-blue-800' onClick={saveEmployee}>Save</button>
                <button className='rounded text-white font-bold bg-red-600 py-2 px-6 hover:bg-red-800'>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee