import React from 'react';

interface ClientsButtonProps {
	customClasses?: string;
}

const ClientsButton: React.FC<ClientsButtonProps> = ({customClasses}) => {

	return (
		<div 
			className={`
				max-w-[400px] w-full
				${customClasses}
			`}
		>
			<a 
				href="URL-DEL-CLIENTE" 
				className={`
					luta-btn-color text-white rounded-[4px] p-[14px] text-[18px] font-semibold block text-center
				`} 
			>CTA del cliente</a>
			<span className='text-[14px] mt-[8px] text-center text-[#111]/80 block'>PD: La oferta termina hoy.</span>
		</div>
	)
}

export default ClientsButton
