import React from 'react'
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center'>
        <div><input type="text" className='w-[150px] h-[50px] rounded-xl bg-lime-500' /></div>
        <div><input type="text" className='w-[150px] h-[50px] rounded-xl bg-lime-500' /></div>
        <div><input type="text" className='w-[150px] h-[50px] rounded-xl bg-lime-500' /></div>
        <div><input type="text" className='w-[80px] h-[50px] rounded-xl bg-lime-500' /></div>
      </div>
      <div className='flex justify-center items-center'>
        <div>
            <div><FaMessage /></div>
            <div><a href="quvonchbeknormurodov62@gmail.com"></a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
