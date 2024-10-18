import React from 'react'
import CustomButton from '../CustomButton/CustomButton'

const Hero = () => {

  return (
    <section className='py-[100px]'>
        <div className="jtm-container">
            <div className="flex gap-[20px] justify-between items-center">
                <div>
                    <h1 className='font-bold text-[40px]'>Título Principal</h1>
                    <p className='my-[20px]'>
                        Descripción...
                    </p>
                    <CustomButton/>
                </div>
                <img src="" alt="" className='size-[400px] bg-red-500' />
            </div>
        </div>
    </section>
  )
}

export default Hero
