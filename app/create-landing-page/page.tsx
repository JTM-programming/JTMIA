'use client'
import axios from 'axios';
import { useState } from 'react';

export default function CreateLanding() {

	const [businessName, setBusinessName] = useState<string>('');
	const [businessDescription, setBusinessDescription] = useState<string>('');
	const [landingGoal, setLandingGoal] = useState<string>('');
	const [targetAudience, setTargetAudience] = useState<string>('');
	const [beneficts, setBeneficts] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [story, setStory] = useState<string>('');

	const handleSubmit = async () => {
		try {
			await axios.post("/api/openai", {
				businessName,
				businessDescription,
				landingGoal,
				targetAudience,
				beneficts,
				email,
				story
			});
			window.location.href = "#!";
		} catch {

		}
	}

	return (
		<section className="py-[60px] md:py-[80px] px-4">
			<div className="max-w-[484px] mx-auto">
				<span className="block text-center text-[18px] font-bold text-[#2C6FFF]">CREA TU LANDING EN 2 MINUTOS</span>
				<h1 className="text-center text-[28px] font-bold leading-[120%] mt-4 mb-8">Llena este formulario para crear tu Landing Page</h1>
				<form action="/" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
					<label className="block mb-4" htmlFor="businessName">
						Nombre del negocio
						<input
							onChange={(e) => { setBusinessName(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="businessDescription">
						Descripcion de tu negocio
						<textarea
							onChange={(e) => { setBusinessDescription(e.target.value) }}
							className="resize-none block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
						/>
					</label>
					<label className="block mb-4" htmlFor="landingGoal">
						Objetivo de la Landing
						<input
							onChange={(e) => { setLandingGoal(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="targetAudience">
						Cual es tu publico objetivo
						<input
							onChange={(e) => { setTargetAudience(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="beneficts">
						Cuales son los 4 beneficios principales de trabajar con vos
						<input
							onChange={(e) => { setBeneficts(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block" htmlFor="story">
						Historia de como llegaste a donde estas y porque ayudas a tus clientes
						<textarea
							onChange={(e) => { setStory(e.target.value) }}
							className="resize-none block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
						/>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color principal:</span>
						<div className="flex gap-4 my-2">
							<input className="size-[60px] cursor-pointer" type="color" id="head" name="head" value="#e66465" />

						</div>
						<p className="text-[14px] text-[#111]/70">
							Este es el color que se va a usar en los detalles del sitio que queremos que tengan un alto grado de importancia, recomendamos que uses alguno de los colores mas importantes de tu marca.
						</p>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color de fondo:</span>
						<div className="flex gap-4 my-2">
							<input className="size-[60px] cursor-pointer" type="color" id="background" name="background" value="#ffffff" />
						</div>
						<p className="text-[14px] text-[#111]/70">
							Este color se va a usar de fondo, lo ideal es que sea lo más contrastante posible al color principal, por ejemplo, si el principal es rojo, el color de fondo ideal sería un tono de rojo muy claro o muy oscuro.
						</p>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color de textos:</span>
						<div className="flex gap-4 my-2">
							<input className="size-[60px] cursor-pointer" type="color" id="text" name="text" value="#000000" />
						</div>
						<p className="text-[14px] text-[#111]/70">
							El color de textos debe ser lo más opuesto posible al color de fondo para que los textos sean altamente legibles.
						</p>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color para botones:</span>
						<div className="flex gap-4 my-2">
							<input className="size-[60px] cursor-pointer" type="color" id="button" name="button" value="#cc0000" />
						</div>
						<p className="text-[14px] text-[#111]/70">
							Este color debe ser el más llamativo, por lo que se puede usar una versión más saturada o contrastante del color principal. Siguiendo el ejemplo del rojo, se podría usar un rojo más fuerte o un rojo más oscuro si elegiste un fondo claro.
						</p>
					</label>
					<label className="block mb-4" htmlFor="email">
						Tu correo electronico
						<input
							onChange={(e) => { setEmail(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="email">
						Contraseña
						<input
							onChange={(e) => { setEmail(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="password"
						/>
					</label>
					<label className="block mb-4" htmlFor="email">
						Repeti tu contraseña
						<input
							onChange={(e) => { setEmail(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="password"
						/>
					</label>
					<button
						type='submit'
						className='bg-[#115CFF] w-full mt-8 text-white rounded-[4px] p-[14px] text-[18px] font-semibold block text-center'
					>Crear Landing</button>
				</form>
			</div>
		</section>
	)
}