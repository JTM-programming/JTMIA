'use client'

import { useEffect, useState } from 'react';
import { createClient, User } from '@supabase/supabase-js';

// Configura el cliente de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

type UserData = {
	id: string;
	nombre_negocio: string;
	descripcion_negocio: string;
	objetivo_landing: string;
	audiencia_objetivo: string;
	beneficios: string;
	historia: string;
	email: string;
};

export default function GeneratingLanding() {
	const [userData, setUserData] = useState<UserData | null>(null); // Estado para datos del usuario
	const [user, setUser] = useState<User | null>(null); // Estado para el usuario logueado

	useEffect(() => {
		// Función para obtener la sesión y datos del usuario
		const fetchUserData = async () => {
			// Obtener el usuario logueado
			const { data: { user }, error: sessionError } = await supabase.auth.getUser();
			
			if (sessionError) {
				console.error('Error fetching user session:', sessionError);
				return;
			}

			if (user) {
				setUser(user); // Guardar el usuario logueado en el estado

				// Usar el ID del usuario logueado para obtener sus datos en la tabla users_data
				const { data, error } = await supabase
					.from('users_data')
					.select()
					.eq('id', user.id)

				if (error) {
					console.error('Error fetching user data:', error);
				} else {
					setUserData(data[0]);
					console.log(data)
				}
			}
		};

		fetchUserData();
	}, []);

	return (
		<div>
			{userData ? (
				<div>
					<h1>Datos del Usuario</h1>
					<p>Nombre del Negocio: {userData.nombre_negocio}</p>
					<p>Descripción del Negocio: {userData.descripcion_negocio}</p>
					<p>Objetivo Landing: {userData.objetivo_landing}</p>
					<p>Audiencia Objetivo: {userData.audiencia_objetivo}</p>
					<p>Beneficios: {userData.beneficios}</p>
					<p>Historia: {userData.historia}</p>
					<p>Email: {userData.email}</p>
				</div>
			) : (
				<p>Cargando datos...</p>
			)}
		</div>
	);
}
