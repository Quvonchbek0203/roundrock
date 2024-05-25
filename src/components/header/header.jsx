import React from 'react'
import mainImg from "../../images/main.png"
import Logo from '../../images/logo.jpeg'
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
        <div className='flex justify-center items-center flex-wrap gap-4 text-white w-full'>
          <div className='w-20 h-10'><img src={Logo} alt="logo" className='rounded-3xl'/></div>
            <div>
            <h1 className='font-bold text-4xl'>I-MAX</h1>
            <p className='font-bold text-2xl'>Doimo siz bilan</p>
            </div>
          </div>
          <div className='w-full flex justify-center pt-10'>
            <h1 className='w-[800px] text-center font-bold text-8xl text-green-950'>Welcome to <h1 className='font-bolt text-9xl'>I-MAX</h1> Company</h1>
          </div>
          <div className='w-full flex justify-center items-center h-10 absolute bottom-10'>
            <Button/>
          </div>
        </div>
        </div>
)
}

export default Header