'use client'
import { useState } from 'react';

export default function createLanding() {

	const [businessName, setBusinessName] = useState<string>('');
	const [businessDescription, setBusinessDescription] = useState<string>('');
	const [landingGoal, setLandingGoal] = useState<string>('');
	const [targetAudience, setTargetAudience] = useState<string>('');
	const [beneficts, setBeneficts] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [story, setStory] = useState<string>('');

	return (
		<section className="py-[80px] md:py-[100px] px-4">
			<div className="max-w-[484px] mx-auto">
				<span className="block text-center text-[18px] font-bold text-[#2C6FFF]">CREA TU LANDING EN 2 MINUTOS</span>
				<h1 className="text-center text-[28px] font-bold leading-[120%] mt-4 mb-8">Llena este formulario para crear tu Landing Page</h1>
				<form action="POST">
					<label className="block mb-4" htmlFor="businessName">
						Nombre del negocio
						<input 
							onChange={(e) => {setBusinessName(e.target.value)}}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
							type="text" 
						/>
					</label>
					<label className="block mb-4" htmlFor="businessDescription">
						Descripcion de tu negocio
						<textarea 
							onChange={(e) => {setBusinessDescription(e.target.value)}}
							className="resize-none block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
						/>
					</label>
					<label className="block mb-4" htmlFor="landingGoal">
						Objetivo de la Landing
						<input 
							onChange={(e) => {setLandingGoal(e.target.value)}}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
							type="text" 
						/>
					</label>
					<label className="block mb-4" htmlFor="targetAudience">
						Cual es tu publico objetivo
						<input 
							onChange={(e) => {setTargetAudience(e.target.value)}}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
							type="text" 
						/>
					</label>
					<label className="block mb-4" htmlFor="beneficts">
						Cuales son los 4 beneficios principales de trabajar con vos
						<input 
							onChange={(e) => {setBeneficts(e.target.value)}}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
							type="text" 
						/>
					</label>
					<label className="block mb-4" htmlFor="email">
						Que correo electronico te gustaria que aparezca en la web
						<input 
							onChange={(e) => {setEmail(e.target.value)}}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
							type="text" 
						/>
					</label>
					<label className="block" htmlFor="story">
						Historia de como llegaste a donde estas y porque ayudas a tus clientes
						<textarea 
							onChange={(e) => {setStory(e.target.value)}}
							className="resize-none block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30" 
						/>
					</label>
				</form>
			</div>
		</section>
	)
}