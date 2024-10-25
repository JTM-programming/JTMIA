import CustomButton from '../CustomButton'
const Plans = () => {
    return (
        <section className='py-[80px]'>
            <div className="jtm-container py-[80px] px-[123px]">
                <h2 className='text-[28px] font-bold text-gray-800 mx-auto leading-[120%] text-center'>
                    Planes
                </h2>
                <div className='grid md:grid-cols-3 mt-[32px]'>
                    <div className=' mx-auto leading-[120%] bg-white p-8 rounded-[8px]'>
                        <h3 className='text-[22px]'>
                            Producto 1
                        </h3>
                        <p className='text-[16px] my-4'>
                            Incluye:
                            <ul className='list-disc max-w-[80%] list-inside'>
                                <li>Lorem ipsum dolor blabal balabla</li>
                                <li>Lorem ipsum dolor blabal balabla</li>
                                <li>Lorem ipsum dolor blabal balabla</li>
                            </ul>
                        </p>
                        <p className='text-[28px] font-bold text-center'>
                            $70
                        </p>
                        <CustomButton customClasses='mt-[32px] mx-auto'/>
                    </div>
                    <div className=' mx-auto leading-[120%] bg-white p-8 rounded-[8px]'>
                        <h3 className='text-[22px]'>
                            Producto 1
                        </h3>
                        <p className='text-[16px] my-4'>
                            Incluye:
                            <ul className='list-disc max-w-[80%] list-inside'>
                                <li>Lorem ipsum dolor blabal balabla</li>
                                <li>Lorem ipsum dolor blabal balabla</li>
                                <li>Lorem ipsum dolor blabal balabla</li>
                            </ul>
                        </p>
                        <p className='text-[28px] font-bold text-center'>
                            $120
                        </p>
                        <CustomButton customClasses='mt-[32px] mx-auto'/>
                    </div>
                    <div className=' mx-auto leading-[120%] bg-white p-8 rounded-[8px]'>
                        <h3 className='text-[22px]'>
                            Producto 1
                        </h3>
                        <p className='text-[16px] my-4'>
                            Incluye:
                            <ul className='list-disc max-w-[80%] list-inside'>
                                <li>Lorem ipsum dolor blabal balabla</li>
                                <li>Lorem ipsum dolor blabal balabla</li>
                                <li>Lorem ipsum dolor blabal balabla</li>
                            </ul>
                        </p>
                        <p className='text-[28px] font-bold text-center'>
                            $300
                        </p>
                        <CustomButton customClasses='mt-[32px] mx-auto'/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Plans