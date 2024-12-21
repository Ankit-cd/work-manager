"use client"

import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-blue-600'>
        <div className='md:pt-7 pb-2.5'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='flex items-center justify-center gap-5 w-full'>
                    <div className='bg-white h-[0.5px] md:w-96'></div>
                    <h1 className='text-xl font-bold md:text-3xl whitespace-nowrap'>Welcome to work manager</h1>
                    <div className='bg-white h-[0.5px] md:w-96'></div>
                </div>
                <p className='text-center text-sm md:text-base'>
                    I run a design agency, we've made TONS of websites over the years and designing footers can suck. Just wanted to make your life a little easier when thinking about your next footer.
                </p>
            





                <div className='text-center'>
                    <ul className='flex gap-2 text-2xl'>
                        <li><a href="#!"><FaLinkedin/></a></li>
                        <li><a href="#!"><FaTwitterSquare/></a></li>
                        <li><a href="#!"><FaFacebook/></a></li>
                        <li><a href="#!"><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer