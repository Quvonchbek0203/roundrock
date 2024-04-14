import React from 'react'
import mainImg from "../../images/main.png"
import TitleText from '../TitleText'
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
        {/* <div className='container w-full h-full'> */}
        <div className='flex justify-center items-center flex-wrap gap-5'>
        <div className='flex justify-center items-center flex-wrap text-white w-full'>
          <div className='w-20 '><img src={Logo} alt="logo"/></div>
            <div>
            <h1 className='font-bold text-4xl'>Round Rock</h1>
            <p className='font-bold text-2xl'>Yard Maintenance</p>
            </div>
          </div>
          <button className='text-white w-60 h-10 bg-transparent bg- '>Lorem ipsum dolor sit amet</button>        
        </div>
        <div className='flex flex-wrap'>
        <div><h1 className='text-8xl font-bold text-white text-center w-[800px] h-[100px]'>WELCOME TO ROUND ROCK COMPANY</h1></div>
        <div>
          <Button/>
        </div>

        </div>
        </div>
    // </div>
  )
}

export default Header