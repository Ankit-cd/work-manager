"use client";

import UserContext from '@/context/userContext';
import { deleteTask, getTasksofUser } from '@/services/taskServices';
import React, {useContext, useEffect, useState } from 'react'
import Task from './Task';
import { toast } from 'react-toastify';

const ShowTasks = () => {
    const [tasks,setTasks] = useState([]);
    const context = useContext(UserContext);


    async function getTasks(userId) {
        try {
            const tasks = await getTasksofUser(userId);
            setTasks([...tasks]);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        if(context.user){
            getTasks(context.user._id)
        }
    },[context.user]);

    async function deleteTaskParent(taskId){
        try {
            
            const result = await deleteTask(taskId);
            const newtasks = tasks.filter((task)=>task._id!==taskId);
            setTasks(newtasks);
            toast.success("Your task has been deleted",{
                position:'top-center'
            })

        } catch (error) {
            console.log(error);
            toast.error("Error in deleting task !!")
        }

    }


  return (
    <div>
        <h1 className='text-4xl text-center font-bold mt-5'>Your Tasks ({tasks.length})</h1>
        <div>
        {
            tasks.map((task) => (
               <Task key={task._id} task={task} deleteTaskParent={deleteTaskParent}/>
            ))
        }
        </div>
    </div>
  )
}

export default ShowTasks