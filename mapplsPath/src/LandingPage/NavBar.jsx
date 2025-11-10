import React from 'react'
import { Flower } from 'lucide-react';

const NavBar = () => {
  return (
    <>
        <nav className=' flex justify-between pl-10 pr-10 ' >
            <div className="flex p-3 text-2xl">
                <Flower className=' h-8 ' />
                <span className=' font-bold  pl-2'  >Dhasu</span> 
            </div>
            <div className="">
                <ul className='flex justify-around p-1'>
                    <li className='p-3 text-lg font-medium'>Home</li>
                    <li className='p-3 text-lg font-medium'>Projects</li>
                    <li className='p-3 text-lg font-medium'>Services</li>
                    <li className='p-3 text-lg font-medium'>Contact</li>
                </ul>
            </div>
            <div className="p-3">
               <button className='bg-cyan-900 text-blue-50 p-2 rounded-lg' >Contact Us</button> 
            </div>
        </nav>
        <hr className=' text-fuchsia-50' />
    </>
  )
}

export default NavBar