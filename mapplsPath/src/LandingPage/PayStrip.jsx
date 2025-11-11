import React from 'react'
import { ChartGantt, BadgeIndianRupee, ShoppingBag, Slack, Trello } from 'lucide-react';

const PayStrip = () => {
  return (
    <div className=' text-white flex justify-around items-center text-2xl bg-gray-900 h-20 w-full'>
      <span className='flex'>  <ChartGantt className='m-1' /> Monday</span>
      <span className='flex'> <BadgeIndianRupee className='m-1'/> PayPal</span>
      <span className='flex'> <ShoppingBag className='m-1'/> Shopify</span>
      <span className='flex'> <Slack className='m-1'/> Slack</span>
      <span className='flex'> <Trello className='m-1'/> Trello</span>
    </div>
  )
}

export default PayStrip