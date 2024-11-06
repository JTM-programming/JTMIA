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
	const [previewImage1, setPreviewImage1] = useState<string | null>(null);
	const [previewImage2, setPreviewImage2] = useState<string | null>(null);

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
				.from('landings')
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
		
		window.location.href = `/pages/${folderToInsertImages}`;
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setImage: React.Dispatch<React.SetStateAction<File | null>>, setPreview: React.Dispatch<React.SetStateAction<string | null>>) => {
		const file = e.target.files?.[0] || null;
		setImage(file);
		setPreview(file ? URL.createObjectURL(file) : null);
	};

	return (
		<section className='py-[80px]'>
			<div className="max-w-[584px] mx-auto">
				<span className="block text-center text-[18px] font-bold text-[#2C6FFF]">Las imagenes son de lo más importante en un sitio web...</span>
				<h1 className='text-center text-[28px] font-bold leading-[120%] mt-4 mb-8'>Subi las imagenes que queres en la Landing de {userData?.nombre_negocio}</h1>
				<form onSubmit={(e) => { e.preventDefault(); handleImageUpload(); }}>
					<div className='mb-8'>
						<label className='font-semibold' htmlFor="image1">Imagen Encabezado:</label>
						<p className='text-[14px] text-[#111]/80 my-2'>
							Recomendamos que uses una imagen de muy alta calidad en la que se vea a tu "cliente ideal" feliz por haber trabajado con vos y con los resultados prometidos.
						</p>
						<div className='bg-gray-200 size-[160px] relative flex items-center justify-center'>
							<input
								className='block bg-green-300 w-full h-full cursor-pointer opacity-0 relative z-50'
								type="file"
								id="image1"
								accept="image/*"
								onChange={(e) => handleImageChange(e, setImage1, setPreviewImage1)}
							/>
							{previewImage1 && <img src={previewImage1} alt="Preview of Image 2" className="absolute left-0 top-0 w-full h-full object-contain" />}
						</div>
					</div>
					<div>
						<label className='font-semibold' htmlFor="image2">Imagen Beneficios:</label>
						<p className='text-[14px] text-[#111]/80 my-2'>
							Recomendamos que esta sea una imagen tuya o de tu producto.
						</p>
						<div className='bg-gray-200 size-[160px] relative flex items-center justify-center'>
							<input
								className='block bg-green-300 w-full h-full cursor-pointer opacity-0 relative z-50'
								type="file"
								id="image2"
								accept="image/*"
								onChange={(e) => handleImageChange(e, setImage2, setPreviewImage2)}
							/>
							{previewImage2 && <img src={previewImage2} alt="Preview of Image 2" className="absolute left-0 top-0 w-full h-full object-contain" />}
						</div>
					</div>
					<button className='bg-[#115CFF] w-full mt-8 text-white rounded-[4px] p-[14px] text-[18px] font-semibold block text-center' type="submit">Subir imagenes</button>
				</form>
			</div>
		</section>
	);
}
