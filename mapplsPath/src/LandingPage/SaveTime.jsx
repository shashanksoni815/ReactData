import React from 'react'
import SaveCard from './SaveCard'
import { ShoppingBag, MonitorDown, MessageCircleCode } from 'lucide-react';

const SaveTime = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="text-4xl  ">
            <p>Save time managing you </p> 
            <p>business with our services</p>
        </div>
        <div className=" text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dolore quisquam cumque assumenda ullam architecto quidem error repellat, neque deserunt sed perspiciatis </div>
        <div className="flex w-full justify-evenly items-center">
        <SaveCard title="Web Design" logo={<MonitorDown/>} />
        <SaveCard title="development" logo={<MessageCircleCode/>} />
        <SaveCard title="Ecommerce" logo={<ShoppingBag/>} />
        </div>
    </div>
  )
}

export default SaveTime