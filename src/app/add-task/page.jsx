import Image from 'next/image'
import React from 'react';
import addtaskimg from '../../assests/addtask.svg'

export const metadata = {
  title:"Add Task : Work Manager"
}

const AddTask = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <h1 className='text-2xl text-center mt-5'>Add your task here</h1>
      <div className='md:flex w-[80%] gap-5 justify-center items-center mt-6'>
        {/* image div */}
        <div className='md:flex-1 w-[70%] mx-auto'>
          <Image src={addtaskimg}
            alt='addtask'
          />
        </div>

        <div className='h-96 w-[0.5px] mx-7 bg-slate-700 hidden md:block'></div>

        {/* add task div */}
        <div className='flex-1'>
          <form>

          {/* task title */}
            <div className='mt-4'>
              <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title</label>
              <input type="text" className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800' id='task_title' />
            </div>


          {/* task content */}
            <div className='mt-4'>
              <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content</label>
              <textarea type="text" className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'
              id='task_content'
              rows={5} />
            </div>


            {/* task status */}
            <div className='mt-4'>
              <label 
                  htmlFor="task_status"
                  className='block text-sm font-medium mb-2'>
                  Status
              </label>
              <select 
                defaultValue={"select status"}
                id="task_status"
                className='w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800'>
                <option value="select status" disabled>--- Select Status ---</option>              
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>



            {/* buttion action */}

            <div className='mt-4 flex justify-center gap-6'>
              <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
              <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800'>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTask