import React from 'react'

function AddEmployee() {
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
        <div className='p-8'>
            <div className=' font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className=' h-14 w-full my-4'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input type="text" name="" id="" className='h-10 w-96 border mt-2 p-2' />
            </div>
            <div className=' h-14 w-full my-4'>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input type="text" name="" id="" className='h-10 w-96 border mt-2 p-2' />
            </div>
            <div className=' h-14 w-full my-4 '>
                <label htmlFor="" className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type="email" name="" id="" className='h-10 w-96 border mt-2 p-2' />
            </div>
            <div className=' h-14 w-full my-4 pt-4 space-x-4'>
                <button className='rounded text-white font-bold bg-blue-600 py-2 px-6 hover:bg-blue-800'>Save</button>
                <button className='rounded text-white font-bold bg-red-600 py-2 px-6 hover:bg-red-800'>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee