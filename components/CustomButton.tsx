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
					bg-red-500 text-white p-[14px] text-[18px] font-semibold w-[400px] max-w-full block text-center
					${customClasses}
				`} 
			>Botón</a>
		</>
	)
}

export default CustomButton
