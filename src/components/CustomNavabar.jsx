"use client"
import Link from 'next/link';
import React from 'react';
import { MdMenu } from 'react-icons/md';


const CustomNavabar = () => {
  return (
    <nav className='bg-blue-600 flex justify-between items-center h-16 py-2 w-full md:px-20 px-10'>
        <div className='brand'>
            <h1 className='text-2xl font-semibold whitespace-nowrap'><Link href="/">Work Manager</Link></h1>
        </div>




        <ul className='hidden md:flex space-x-5'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/add-task">Add Task</Link></li>
            <li><Link href="/show-task">Show Tasks</Link></li>
        </ul>



        <div className='md:hidden text-4xl'>
            <MdMenu/>
        </div>



        <div className='hidden sm:block'>
            <ul className='gap-5 flex'>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">SignUp</Link></li>
            </ul>
        
        </div>

    </nav>
  )
}

export default CustomNavabar