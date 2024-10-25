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
					highlightBg text-white p-[14px] text-[18px] font-semibold max-w-[400px] w-full block text-center
					${customClasses}
				`} 
			>Botón</a>
		</>
	)
}

export default CustomButton
