"use client";
import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Task = ({task,deleteTaskParent}) => {

    function deleteTask(taskId) {
        deleteTaskParent(taskId)
    }
  return (
    <div className='bg-gray-700 shadow-lg p-5 m-2.5 rounded-md w-[60%] mx-auto flex items-center gap-10'>
        <div className='w-full'>
            <h1 className='text-2xl font-semibold'>{task.title}</h1>
            <p className='line-clamp-1'>{task.content}</p>
            {
                task.status === 'Completed' ? (
                    <p className='px-2 py-1 mt-1 bg-green-700 rounded-full inline-block'>{task.status}</p>
                ) : (
                    <p className='px-2 py-1 mt-1 bg-red-700 rounded-full inline-block'>{task.status}</p>)
            }
        </div>

        <button onClick={()=>{
            deleteTask(task._id);
        }} className='bg-red-500 hover:bg-red-700 p-2.5 transition delay-150 size-10 flex rounded-full items-center justify-center '>
            <FaDeleteLeft className='text-xl'/>
        </button>

    </div>
  )
}

export default Task