import React from 'react'

interface CustomButtonProps {
	customClasses?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({customClasses}) => {

	return (
		<div 
			className={`
				max-w-[400px] w-full
				${customClasses}
			`}
		>
			<a 
				href="/utils/create-landing-page" 
				className={`
					luta-btn-color text-white rounded-[4px] p-[14px] text-[18px] font-semibold block text-center
				`} 
			>Crear mi Landing en 2 minutos</a>
			<span className='text-[14px] mt-[8px] text-center text-[#111]/80 block'>PD: La oferta termina hoy.</span>
		</div>
	)
}

export default CustomButton
