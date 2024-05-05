import React from 'react'
import Vektor from '../../images/Vector.png'
import Ucell from '../../images/ucell.jpg'
import Beeline from '../../images/beeline.jpg'
import Mobi from '../../images/mobiuz.png' 
import Uzmobile from '../../images/uzmobile.png'
import Button from '../Button'


const Service = () => {
  return (
    <div className='flex relative justify-center items-center flex-wrap gap-20 pt-10 bg-slate-200'>
      <div>
        <h1 className='w-full text-center text-5xl font-bold text-gray-500'>Services</h1>
        <div className='w-full relative'>
          <img src={Vektor} alt="Vektor" className='w-20 absolute left-[-10px] top-[-15px]'/>
        </div>
      </div>
      <div className='w-full flex justify-center items-center gap-4'>
        <div className='w-[200px]'>
          <div className='p-2'>
            <img src={Ucell} alt="Ucell" className='w-[220px] rounded-3xl h-[150PX]' />
          </div>
          <div className='w-[200px] flex justify-center items-center flex-wrap gap-2'>
            <h1 className='font-bold text-lime-900'><a href="https://ucell.uz/uz/subscribers/services2/subscribers_services/chosen_number">UCELL</a></h1>
          </div>
        </div>
        <div className='w-[200px]'>
          <div className='p-2 flex justify-center items-center'>
          <img src={Beeline} alt="Beeline" className='w-[220px] rounded-3xl h-[150PX]' />
          </div>
          <div className='w-[200px] flex justify-center items-center flex-wrap gap-2'>
            <h1 className='font-bold text-lime-900'><a href="https://nomer.beeline.uz/uz/sim">BEELINE</a></h1>
          </div>
        </div>
        <div className='w-[220px]'>
          <div className='p-2'>
            <img src={Mobi} alt="Mobi " className='w-[200px] rounded-3xl h-[150PX]' />
          </div>
          <div className='w-[220px] flex justify-center items-center flex-wrap gap-2'>
            <h1 className='font-bold text-lime-900'><a href="https://raqamtanlash.uz/mobiuz/pick-number">MobiUZ</a></h1>
          </div>
        </div>
        <div className='w-[220px]'>
          <div className='p-2'>
            <img src={Uzmobile} alt="Uzmobile" className='w-[250px] rounded-3xl h-[150PX]' />
          </div>
          <div className='w-[250px] flex justify-center items-center flex-wrap gap-4'>
            <h1 className='font-bold text-lime-900'><a href="https://uztelecom.uz/uz/jismoniy-shaxslarga/mobil-raqamlarni-onlayn-band-qilish/">Uzmobile</a></h1>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center h-10 pb-4'>
        <Button/>
      </div>
    </div>
  )
}

export default Service
