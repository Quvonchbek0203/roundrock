import React from 'react'
import mainImg from "../../images/main.png"
import Logo from '../../images/logo round.png'
import Button from '../Button'


const Header = () => {
    const backImage = {
        backgroundImage: `url(${mainImg})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
  return (
    <div className='w-full h-screen' style={backImage}>
        <div className='flex justify-center items-center flex-wrap'>
        <div className='flex justify-center items-center flex-wrap text-white w-full'>
          <div className='w-20 '><img src={Logo} alt="logo"/></div>
            <div>
            <h1 className='font-bold text-4xl'>Round Rock</h1>
            <p className='font-bold text-2xl'>Yard Maintenance</p>
            </div>
          </div>
          <div className='w-full h-20 flex justify-center items-center'>
            <button className='text-white text-center rounded-3xl w-80 h-10 bg-opacity-40 bg-black'>Lorem ipsum dolor sit amet</button>
          </div>
          <div className='w-full flex justify-center '>
            <h1 className='w-[800px] text-center font-bold text-8xl text-green-950'>Welcome to ROUND ROCK Company</h1>
          </div>
          <div className='w-full flex justify-center items-center h-10 absolute bottom-10'>
            <Button/>
          </div>
        </div>
        </div>
)
}

export default Header