"use client"
import UserContext from '@/context/userContext';
import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { MdMenu } from 'react-icons/md';
import { toast } from 'react-toastify';


const CustomNavabar = () => {
    const context = useContext(UserContext);
    const router = useRouter();



    const doLogout = async () => {
        try {
            const response = await logout();
            context.setUser(undefined);
            toast.success("Logout successfully", {
                position: "top-center",               
            });
            router.push("/");
            
        } catch (error) {
            console.log(error);
            toast.error("failed to logout", {
                position: "top-center"
            });            
        }
    }
  return (
    <nav className='bg-blue-600 flex justify-between items-center h-16 py-2 w-full md:px-20 px-10'>
        <div className='brand'>
            <h1 className='text-2xl font-semibold whitespace-nowrap'><Link href="/">Work Manager</Link></h1>
        </div>



        {
            context.user && (
                
                <>
                <ul className='hidden md:flex space-x-5'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/add-task">Add Task</Link></li>
                    <li><Link href="/show-task">Show Tasks</Link></li>
                </ul>

                <div className='md:hidden text-4xl'>
                    <MdMenu/>
                </div>

                </>
            )
        }







        <div className='hidden sm:block'>
            {
                context.user ? (
                    <ul className='gap-5 flex'>
                        <li><Link href="/">{context.user.name}</Link></li>
                        <li><button href="/" onClick={doLogout}>Logout</button></li>
                    </ul>
                ):(
                     <ul className='gap-5 flex'>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/signup">SignUp</Link></li>
                    </ul> 
                )
            }
        
        </div>

    </nav>
  )
}

export default CustomNavabar