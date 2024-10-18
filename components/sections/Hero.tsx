import React from 'react'
import CustomButton from '../CustomButton'

const Hero = () => {

  return (
    <section className='py-[80px]'>
        <div className="jtm-container">
            <div>
                <h1 className='font-bold text-[40px] leading-[110%] text-center'>Título Principal</h1>
                <p className='mt-[14px] mb-[30px] text-center'>
                    Descripción...
                </p>
                <div className="bg-gray-300 max-w-full w-[900px] aspect-video mx-auto">

                </div>
                <CustomButton customClasses="bg-red-500 mx-auto mt-[30px]"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
