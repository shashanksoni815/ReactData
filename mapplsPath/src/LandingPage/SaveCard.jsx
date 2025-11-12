import React from 'react'
import { MonitorDown } from 'lucide-react';

const SaveCard = (props) => {
  return (
    <div className='m-3 p-3.5 h-70 w-60 border-2 border-black rounded-xl border-r-4 border-b-4 flex flex-col justify-evenly '>
        <div className=" h-13 w-15 rounded-4xl border-2 border-black flex justify-center items-center">
            {props.logo}
        </div>
        <div className=" text-3xl font-semibold">
            {props.title}
        </div>
        <div className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ab excepturi dolores illo repudiandae repellendus 
        </div>
    </div>
  )
}

export default SaveCard