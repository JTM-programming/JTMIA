import React from 'react'
import CustomButton from '../CustomButton'

const Hero = () => {

  return (
    <section className='py-[80px]'>
        <div className="jtm-container">
            <div>
                <h1 className='font-bold text-[40px] leading-[110%] text-center'>Título Principal</h1>
                <p className='mt-[14px] mb-[30px] text-center'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices venenatis, augue urna tincidunt nisi, nec tincidunt nunc nisi vel augue. Sed vitae lectus vel ligula varius tincidunt. Proin sed mauris eget nunc malesuada ultrices.
                </p>
                <div className="bg-gray-300 max-w-full w-[900px] aspect-video mx-auto">

                </div>
                <CustomButton customClasses="bg-red-500 text-white mx-auto mt-[30px]"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
