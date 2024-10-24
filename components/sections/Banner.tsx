import CustomButton from '../CustomButton'
const Banner = () => {
    return (
        <section className='py-[80px]'>
            <div className="jtm-container text-center bg-white py-[80px] px-[123px]">
                <h2 className='text-[32px] font-bold text-gray-800 max-w-[499px] mx-auto leading-[120%]'>
                    Call to action final ej Agenda ahora y no pierdas más
                </h2>
                <CustomButton customClasses='mt-[32px] mx-auto'/>
            </div>
        </section>
    )
}
export default Banner