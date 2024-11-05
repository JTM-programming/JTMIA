'use client';

import { useEffect, useState } from 'react';
import { createClient, User } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

type UserData = {
	id: string;
	nombre_negocio: string;
};

export default function GeneratingLanding() {
	const [userData, setUserData] = useState<UserData | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [image1, setImage1] = useState<File | null>(null);
	const [image2, setImage2] = useState<File | null>(null);

	useEffect(() => {
		const fetchUserData = async () => {
			const { data: { user }, error: sessionError } = await supabase.auth.getUser();

			if (sessionError) {
				console.error('Error fetching user session:', sessionError);
				return;
			}

			if (user) {
				setUser(user);

				const { data, error } = await supabase
					.from('users_data')
					.select()
					.eq('id', user.id);

				if (error) {
					console.error('Error fetching user data:', error);
				} else {
					setUserData(data[0]);
				}
			}
		};

		fetchUserData();
	}, []);

	const folderToInsertImages = userData?.nombre_negocio
		?.toLowerCase()
		.replace(/\s+/g, '-') || '';

	const handleImageUpload = async () => {
		if (!image1 || !image2) {
			alert('Please select both images.');
			return;
		}

		const uploadImage = async (image: File, imageName: string) => {
			const { error } = await supabase.storage
				.from('landings') // Nombre del bucket de Supabase, verifica que exista
				.upload(folderToInsertImages + `/${imageName}`, image);

			if (error) {
				console.error('Error uploading image:', error);
				alert('Error uploading image: ' + error.message);
			} else {
				console.log(`${imageName} uploaded successfully!`);
			}
		};

		await uploadImage(image1, 'image1.jpg');
		await uploadImage(image2, 'image2.jpg');
		alert('Images uploaded successfully!');
	};

	return (
		<section className='py-[80px]'>
			<div className="max-w-[484px] mx-auto">
				<span className="block text-center text-[18px] font-bold text-[#2C6FFF]">Las imagenes son de lo más importante en un sitio web...</span>
				<h1 className='text-center text-[28px] font-bold leading-[120%] mt-4 mb-8'>Subi las imagenes que queres en la Landing de {userData?.nombre_negocio}</h1>
				<form onSubmit={(e) => { e.preventDefault(); handleImageUpload(); }}>
					<div className='mb-4'>
						<label htmlFor="image1">Imagen 1:</label>
						<input
							className='block'
							type="file"
							id="image1"
							accept="image/*"
							onChange={(e) => setImage1(e.target.files?.[0] || null)}
						/>
					</div>
					<div>
						<label htmlFor="image2">Imagen 2:</label>
						<input
							className='block'
							type="file"
							id="image2"
							accept="image/*"
							onChange={(e) => setImage2(e.target.files?.[0] || null)}
						/>
					</div>
					<button className='bg-[#115CFF] w-full mt-8 text-white rounded-[4px] p-[14px] text-[18px] font-semibold block text-center' type="submit">Subir imagenes</button>
				</form>
			</div>
		</section>
	);
}
