import React from 'react'

interface CustomButtonProps {
	customClasses?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({customClasses}) => {

	return (
		<>
			<a 
				href="#!" 
				className={`
					highlightBg text-white rounded-[4px] p-[14px] text-[18px] font-semibold max-w-[400px] w-full block text-center
					${customClasses}
				`} 
			>Crea tu Landing en 2 minutos</a>
			<span className='text-[14px] mt-[8px] text-center text-[#111]/80 block'>PD: La oferta termina hoy.</span>
		</>
	)
}

export default CustomButton
