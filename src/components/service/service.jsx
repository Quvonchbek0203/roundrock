import React from 'react'
import Vektor from '../../images/Vector.png'

const Service = () => {
  return (
    <div className='flex relative justify-center items-center flex-wrap'>
      <h1 className='w-full text-center text-5xl font-bold text-gray-500'>Services</h1>
      <div className='w-16 p-l-100'>
        <img src={Vektor} alt="Vektor" />
      </div>
    </div>
  )
}

export default Service
