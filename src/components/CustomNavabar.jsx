"use client"
import Link from 'next/link';
import React from 'react';
import { MdMenu } from 'react-icons/md';


const CustomNavabar = () => {
  return (
    <nav className='bg-blue-600 flex justify-between items-center h-16 py-2 w-full md:px-20 px-10'>
        <div className='brand'>
            <h1 className='text-2xl font-semibold'><Link href="/">Work Manager</Link></h1>
        </div>




        <ul className='hidden md:flex space-x-5'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/add-task">Add Task</Link></li>
            <li><Link href="/show-task">Show Tasks</Link></li>
        </ul>



        <div className='md:hidden text-4xl'>
            <MdMenu/>
        </div>



        <div>
            <ul className='flex space-x-5'>
                <li><a href=""></a>Login</li>
                <li><a href=""></a>SignUp</li>
            </ul>
        
        </div>

    </nav>
  )
}

export default CustomNavabar