'use client';

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
	color_palete: string;
	current_plan: string;
};

export default function GeneratingLanding() {
	const [userData, setUserData] = useState<UserData | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [textsFetched, setTextsFetched] = useState(false);
	const [payed, setPayed] = useState(false);

	useEffect(() => {
		// Obtener datos del usuario y luego buscar los datos específicos del usuario en Supabase
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
					console.log("DATA:", data[0]);
				}
			}
		};

		fetchUserData();
	}, []);

	useEffect(() => {
		// Verificar que userData esté completamente cargado y textsFetched esté en falso antes de generar textos
		const generateLandingTexts = async () => {
			if (!userData) return;
			console.log("ENTRA")
			try {
				const response = await axios.post("/api/openai", {
					businessName: userData.nombre_negocio,
					businessDescription: userData.descripcion_negocio,
					landingGoal: userData.objetivo_landing,
					targetAudience: userData.audiencia_objetivo,
					beneficts: userData.beneficios,
					story: userData.historia,
					email: userData.email,
					current_plan: userData.current_plan
				});

				const cleanContent = response.data.content.replace(/```json|```/g, "");
				const texts = JSON.parse(cleanContent);

				await createLandingFolder(texts, userData);
				setTextsFetched(true); // Evitar repetir la llamada
			} catch (error) {
				console.error("Error generando textos de landing:", error);
			}
		};

		const createLandingFolder = async (texts: any, userData: UserData) => {
			try {
				const formattedName = userData?.nombre_negocio
					?.toLowerCase()
					.replace(/\s+/g, '-') || '';

				const response = await fetch('/api/createProyectFolder', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ folderName: formattedName, copies: texts, colors: userData.color_palete }),
				});

				if (!response.ok) {
					throw new Error('Error en la respuesta');
				}

				const data = await response.json();
				console.log('Carpeta creada exitosamente:', data.message);
				window.location.href = `/utils/images-form/`;

			} catch (error) {
				console.error('Error creando la carpeta de proyecto:', error);
			}
		};

		if (!textsFetched && userData?.current_plan == "starter") {
			setPayed(true)
			generateLandingTexts();
		} else {
			// window.location.href = `/plans`;
			console.log(userData?.current_plan)
		}

	}, [userData, textsFetched]);

	return (
		<div>
			{
				payed ? 
					<div className='h-screen flex items-center justify-center'>
						<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#111]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					</div>
				: (
					''
				)
			}
		</div>
	);
}
