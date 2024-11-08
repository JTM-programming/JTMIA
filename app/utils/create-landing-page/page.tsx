'use client'
import axios from 'axios';
import { useState } from 'react';
import { createClient, User } from '@supabase/supabase-js';

// Configura el cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CreateLanding() {

	const [businessName, setBusinessName] = useState<string>('');
	const [businessDescription, setBusinessDescription] = useState<string>('');
	const [landingGoal, setLandingGoal] = useState<string>('');
	const [targetAudience, setTargetAudience] = useState<string>('');
	const [beneficts, setBeneficts] = useState<string>('');
	const [story, setStory] = useState<string>('');
	const [colorPalete, setColorPalete] = useState({
		mainColor: '#e66465',
		backgroundColor: '#ffffff',
		textColor: '#000000',
		buttonColor: '#cc0000'
	});
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = async () => {
		try {
			const response = await axios.post("/api/supabase/create-user", {
				businessName,
				businessDescription,
				landingGoal,
				targetAudience,
				beneficts,
				story,
				email,
				password,
				colorPalete
			});

			// Iniciar sesión del usuario
			const { data: session, error: signInError } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});

			console.log("Sesion", session);

			window.location.href = response.headers.location;
		} catch {

		}
	}

	return (
		<section className="py-[60px] md:py-[80px] px-4">
			<div className="max-w-[484px] mx-auto">
				<span className="block text-center text-[18px] font-bold text-[#2C6FFF]">CREA TU LANDING EN 2 MINUTOS...</span>
				<h1 className="text-center text-[28px] font-bold leading-[120%] mt-4 mb-8">Llena este formulario para crear tu Landing Page</h1>
				<form action="/" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
					<label className="block mb-4" htmlFor="businessName">
						Nombre del negocio
						<input
							onChange={(e) => { setBusinessName(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							placeholder='Nombre del negocio'
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="businessDescription">
						Descripcion de tu negocio
						<textarea
							onChange={(e) => { setBusinessDescription(e.target.value) }}
							placeholder='Describi de forma clara y con detalle a que te dedicas'
							className="resize-none block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
						/>
					</label>
					<label className="block mb-4" htmlFor="landingGoal">
						Objetivo de la Landing
						<input
							onChange={(e) => { setLandingGoal(e.target.value) }}
							placeholder='Ej. Que agenden una reunion conmigo'
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="targetAudience">
						Cual es tu publico objetivo
						<input
							onChange={(e) => { setTargetAudience(e.target.value) }}
							placeholder='Edades, Paises, Profesiones, etc...'
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="beneficts">
						Cuales son los 4 beneficios principales de trabajar con vos
						<input
							onChange={(e) => { setBeneficts(e.target.value) }}
							placeholder='Los 4 beneficios que te diferencian del resto'
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block" htmlFor="story">
						Historia de como llegaste a donde estas y porque ayudas a tus clientes
						<textarea
							onChange={(e) => { setStory(e.target.value) }}
							placeholder='Historia resumida de como llegaste a donde estas para que el usuario conecte con vos'
							className="resize-none block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
						/>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color principal:</span>
						<div className="flex gap-4 my-2">
							<input 
								className="size-[60px] cursor-pointer" 
								type="color" 
								id="head" 
								name="head" 
								defaultValue="#e66465" 
								onChange={(e) => setColorPalete({ ...colorPalete, mainColor: e.target.value })}
							/>
						</div>
						<p className="text-[14px] text-[#111]/70">
							Este es el color que se va a usar en los detalles del sitio que queremos que tengan un alto grado de importancia, recomendamos que uses alguno de los colores mas importantes de tu marca.
						</p>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color de fondo:</span>
						<div className="flex gap-4 my-2">
							<input 
								className="size-[60px] cursor-pointer" 
								type="color" 
								id="background" 
								name="background" 
								defaultValue="#ffffff" 
								onChange={(e) => setColorPalete({ ...colorPalete, backgroundColor: e.target.value })}
							/>
						</div>
						<p className="text-[14px] text-[#111]/70">
							Este color se va a usar de fondo, lo ideal es que sea lo más contrastante posible al color principal, por ejemplo, si el principal es rojo, el color de fondo ideal sería un tono de rojo muy claro (practicamente blanco) o muy oscuro (practicamente negro).
						</p>
					</label>
					<label className='block mt-4'>
						<span className='block'>Selecciona el color de textos:</span>
						<div className="flex gap-4 my-2">
							<input 
								className="size-[60px] cursor-pointer" 
								type="color" 
								id="text" 
								name="text" 
								defaultValue="#000000" 
								onChange={(e) => setColorPalete({ ...colorPalete, textColor: e.target.value })}
							/>
						</div>
						<p className="text-[14px] text-[#111]/70">
							El color de textos debe ser lo más opuesto posible al color de fondo para que los textos sean altamente legibles.
						</p>
					</label>
					<label className='block my-4'>
						<span className='block'>Selecciona el color para botones:</span>
						<div className="flex gap-4 my-2">
							<input 
								className="size-[60px] cursor-pointer"
								type="color" 
								id="button" 
								name="button" 
								defaultValue="#cc0000" 
								onChange={(e) => setColorPalete({ ...colorPalete, buttonColor: e.target.value })}
							/>
						</div>
						<p className="text-[14px] text-[#111]/70">
							Este color debe ser el más llamativo, por lo que se puede usar una versión más saturada o contrastante del color principal. Siguiendo el ejemplo del rojo, se podría usar un rojo más fuerte o un rojo más oscuro si elegiste un fondo claro.
						</p>
					</label>
					<label className="block mb-4" htmlFor="email">
						Tu correo electronico
						<input
							onChange={(e) => { setEmail(e.target.value) }}
							placeholder='Tu correo electronico'
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="text"
						/>
					</label>
					<label className="block mb-4" htmlFor="password">
						Contraseña
						<input
							onChange={(e) => { setPassword(e.target.value) }}
							placeholder='Tu correo constraseña'
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="password"
						/>
					</label>
					{/* <label className="block mb-4" htmlFor="email">
						Repeti tu contraseña
						<input
							onChange={(e) => { setEmail(e.target.value) }}
							className="block mt-2 outline outline-none w-full p-2 rounded-[4px] text-[16px] placeholder:text-[14px] border border-[#2C6FFF]/30"
							type="password"
						/>
					</label> */}
					<button
						type='submit'
						className='bg-[#115CFF] w-full mt-8 text-white rounded-[4px] p-[14px] text-[18px] font-semibold block text-center'
					>Crear Landing</button>
				</form>
			</div>
		</section>
	)
}