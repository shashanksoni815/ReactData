import React from 'react'
import { CircleArrowOutDownRight, CircleChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className=' h-150 w-full flex justify-evenly border-2 border-amber-950'>
        <div className="h-full w-full border-2 border-amber-950">
            <div className="">Grow Your Business With Us  <CircleArrowOutDownRight className=' rotate-315' /> </div>
            <div className="">An amergency is a business, firm or organization that provides service.</div>
            <div className="">
                <button>Get Started <CircleChevronRight /></button>
            </div>
        </div>
        <div className="h-full w-full border-2 border-amber-950"></div>
    </div>
  )
}

export default Hero