import React from 'react'
import CustomButton from '../CustomButton'

const Hero = () => {

  return (
    <section className='py-[80px] md:py-[100px]'>
        <div className="jtm-container">
            <div className="flex items-center md:gap-[64px]">
                <div className="max-w-full w-[700px]">
                  <span>LOGO</span>
                  <h1 className='font-bold mt-[32px] text-[28px] leading-[110%]'>Titulo principal Aca va la promesa (Entre 28 y 32px) (Máximo 5 o 6 Lineas)</h1>
                  <p className='mt-[16px] mb-[32px] text-[16px] mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices venenatis, augue urna tincidunt nisi, nec tincidunt nunc nisi vel augue. Sed vitae lectus vel ligula varius tincidunt.
                  </p>
                  <CustomButton customClasses="bg-red-500 text-white"/>
                </div>
                {
                  false ? ( // Si el usuario marco que quiere un VSL
                    <div className="bg-gray-300 max-w-full w-[900px] aspect-video mx-auto">
                    </div>
                  ) : ( // Si el usuario no marco
                    <div className="bg-gray-300 max-w-full w-[900px] aspect-square mx-auto">
                    </div>
                  )
                }
            </div>
        </div>
    </section>
  )
}

export default Hero
