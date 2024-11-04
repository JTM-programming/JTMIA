'use client'

import { useEffect, useState } from 'react';
import { createClient, User } from '@supabase/supabase-js';
import axios from 'axios';

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
	const [userData, setUserData] = useState<UserData | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [textsFetched, setTextsFetched] = useState(false);

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
				}
			}
		};

		fetchUserData();

	}, []);

	useEffect(() => {

		// Funcion para obtener el JSON con los textos de la landing
		const generateLandingTexts = async () => {
	
			const businessName = userData?.nombre_negocio
			const businessDescription = userData?.descripcion_negocio
			const landingGoal = userData?.objetivo_landing
			const targetAudience = userData?.audiencia_objetivo
			const beneficts = userData?.beneficios
			const story = userData?.historia
			const email = userData?.email
	
			const response = await axios.post("/api/openai", {
				businessName,
				businessDescription,
				landingGoal,
				targetAudience,
				beneficts,
				story,
				email,
			});
	
			const cleanContent = response.data.content.replace(/```json|```/g, ""); // Elimina caracteres ``
			const texts = JSON.parse(cleanContent);
	
			// console.log("JSON", response.data.content);
			console.log("Textos", texts);
		}

		// Funcion para crear el archivo de la nueva pagina con las secciones listas
		const createLandingFolder = async () => {
			try {

				const formattedName = userData?.nombre_negocio
					?.toLowerCase()
					.replace(/\s+/g, '-') || '';

				const response = await fetch('/api/createProyectFolder', {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({ folderName: formattedName }),
				});
				
				const data = await response.json();

				window.location.href = `/pages/${formattedName}`

				console.log(data.message);
			  } catch (error) {
				console.error('Error:', error);
			}
		}

		// Evitamos que los genere mas de una vez
		if (!textsFetched) {
			generateLandingTexts();
			setTextsFetched(true);
			console.log(textsFetched)
		}
		// createLandingSections();
		createLandingFolder();

	}, [userData])

	return (
		<div>
			Cargando...
		</div>
	);
}
