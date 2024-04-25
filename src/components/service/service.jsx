import React from 'react'
import Vektor from '../../images/Vector.png'
import Ucell from '../../images/ucell.jpg'
import Beeline from '../../images/beeline.jpg'
import Mobi from '../../images/mobiuz.png' 
import Uzmobile from '../../images/uzmobile.png'


const Service = () => {
  return (
    <div className='flex relative justify-center items-center flex-wrap gap-20'>
      <div>
      <h1 className='w-full text-center text-5xl font-bold text-gray-500'>Services</h1>
      <div className='w-full relative'>
        <img src={Vektor} alt="Vektor" className='w-20 absolute left-[-10px] top-[-15px]'/>
      </div>
      </div>
      <div className='w-full flex justify-center items-center gap-4'>
        <div className='w-[200px]'>
          <div className='p-2'>
            <img src={Ucell} alt="Ucell" className='w-[200px] rounded-3xl' />
          </div>
          <div className='w-[200px] flex justify-center items-center flex-wrap gap-2'>
            <h1 className='font-bold text-lime-900'>UCELL</h1>
            <p className='text-xs text-lime-900 w-50 text-left'>Hozirgi kunda kompaniyada 1250 ta xodim ishlaydi. Abonent bazasi esa 7.1 millionni tashkil etadi. 2G tarmog‘i O‘zbekiston hududini 97% ni qoplaydi, 3G tarmog‘i esa – 60%.</p>
          </div>
        </div>
        <div className='w-[200px]'>
          <div className='p-2 h-[200px] flex justify-center items-center'>
          <img src={Beeline} alt="Beeline" className='w-[220px] rounded-3xl h-[150PX]' />
          </div>
          <div className='w-[200px] flex justify-center items-center flex-wrap gap-2'>
            <h1 className='font-bold text-lime-900'>BEELINE</h1>
            <p className='text-xs text-lime-900 w-50 text-left'>Beeline ( 2005-yilgacha "Beeline GSM") — VimpelCom Ltd.shuning ichida telekommunikatsiya sohasida (birinchi navbatda mobil aloqa) Rossiya va MDH davlatlari oʻrtasidagi yetakchi oʻrin oladi.</p>
          </div>
        </div>
        <div className='w-[200px]'>
          <div className='p-2'>
            <img src={Mobi} alt="Mobi " className='w-[200px] rounded-3xl' />
          </div>
          <div className='w-[200px] flex justify-center items-center flex-wrap gap-2'>
            <h1 className='font-bold text-lime-900'>MobiUZ</h1>
            <p className='text-xs text-lime-900 w-50 text-left'>Kompaniya 2014-yil 1-dekabrdan O‘zbekiston mobil aloqa bozorida faoliyat yuritib kelmoqda.Mobiuz ta’sischisi - O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligidir</p>
          </div>
        </div>
        <div className='w-[200px]'>
          <div className='p-2'>
            <img src={Uzmobile} alt="Uzmobile" className='w-[250px] rounded-3xl h-100' />
          </div>
          <div className='w-[250px] flex justify-center items-center flex-wrap gap-4'>
            <h1 className='font-bold text-lime-900'>Uzmobile</h1>
            <p className='text-xs text-lime-900 w-50 text-left'>Beeline (shuningdek: Beeline, 2005-yilgacha "Beeline GSM") — VimpelCom Ltd.shuning ichida telekommunikatsiya sohasida (birinchi navbatda mobil aloqa) Rossiya va MDH davlatlari oʻrtasidagi yetakchi oʻrin oladi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
