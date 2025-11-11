import React from 'react'
import { CircleArrowOutDownRight, CircleChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className=' h-150 w-full flex justify-evenly '>
        <div className="h-full w-full  flex flex-col justify-around  p-30 ">
            <div className=" text-6xl font-serif">Grow Your <br /> Business With <br /> <span className=' flex'> Us  <CircleArrowOutDownRight className=' rotate-315 mt-6 ml-3 '  /> </span></div>
            <div className=" text-xl font-serif">An amergency is a business, firm or <br />organization that provides service.</div>
            <div className="h-12 w-50 border-2 bg-amber-500  border-b-black text-xl rounded-xl shadow-black  border-r-4 border-b-4 ">
                <button className='w-full'> <span className='flex justify-center p-1.5 font-medium'>Get Started <CircleChevronRight className=' pt-2 pl-2' /> </span> </button>
            </div>
        </div>
        <div className="h-full w-full ">
          <img className='h-full w-full' src="/img1.jpg" alt="abc" />
        </div>
    </div>
  )
}

export default Hero