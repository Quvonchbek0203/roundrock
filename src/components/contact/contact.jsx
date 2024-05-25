import React from 'react'
import {FaMessage} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
  return (
    <div className='w-full flex flex-wrap justify-center items-center'>
      <div className=''> 
        <h1>Contact Us</h1>
      </div>
      <div className='flex justify-center items-center'>
      <div className='w-[500px] flex-wrap flex justify-center items-center gap-5'>
        <div className='w-[500px]'>
          <input type="text" className='w-[300px] h-[50px] rounded-xl bg-lime-500' />
        </div>
        <div className='w-[500px]'>
          <input type="text" className='w-[300px] h-[50px] rounded-xl bg-lime-500' />
        </div>
        <div className='w-[500px]'>
          <input type="text" className='w-[300px] h-[50px] rounded-xl bg-lime-500' />
        </div>
        <div className='w-[500px]'>
          <input type="text" className='w-[150px] h-[50px] rounded-xl bg-lime-500' />
        </div>
      </div>
      <div className='w-[50%]flex justify-center items-center'>
        <div className='flex flex-wrap w-[300px] gap-10'>
            <div className='flex justify-center items-center gap-4'>
              <FaMessage />
              <a href="https://t.me/Imax6060/">TELEGRAM</a>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <FiPhone />
              <a href="">+998 90 636 60 60</a>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <CiLocationOn />
              <h1>Qashqadaryo viloyati, Qarshi shahar.</h1>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
