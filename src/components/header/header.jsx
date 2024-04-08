import React from 'react'
import mainImg from "../../images/main.png"
import TitleText from '../TitleText'


const Header = () => {
    const backImage = {
        backgroundImage: `url(${mainImg})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
  return (
    <div className='w-full h-screen' style={backImage}>
        <div className='container'>
            <TitleText title="Service"/>
        </div>
    </div>
  )
}

export default Header