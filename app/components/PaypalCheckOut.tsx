'use client'
import { useState, useRef, useEffect } from "react";
import { createClient, User } from '@supabase/supabase-js';

declare global {
	interface Window {
	  paypal: any;
	}
}

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

export default function PaypalCheckOut({plan}: any) {

	const [userData, setUserData] = useState<UserData | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [loadState, setLoadState] = useState({ loading: false, loaded: false });

	// Configura el cliente de Supabase
	const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL || "";
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
	const supabase = createClient(supabaseUrl, supabaseKey);

	const paypalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchUserData = async () => {
			const { data: { user }, error: sessionError } = await supabase.auth.getUser();

			if (sessionError) {
				console.error('Error fetching user session:', sessionError);
				return;
			}

			if (user) {
				setUser(user); // Guardar el usuario logueado en el estado

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

	useEffect(() => {
		if (!loadState.loading && !loadState.loaded) {
			setLoadState({ loading: true, loaded: false });

			const script = document.createElement('script');
			script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PYPL_CLIENT_ID}&currency=USD&vault=true`;
			script.addEventListener('load', () => setLoadState({ loading: false, loaded: true }));
			document.body.appendChild(script);
		}

		if (loadState.loaded) {
			window.paypal
				.Buttons({
					style: {
						shape: 'rect',
						color: 'gold',
						layout: 'vertical',
						label: 'subscribe'
					},
					createSubscription: function(data: any, actions: any) {
					  return actions.subscription.create({
						plan_id: plan.id
					  });
					},
					onApprove: async function(data: any, actions: any) {
						console.log("El usuario completo el pago: ", data)

						const confirmPayment = async () => {
							const { data: planData, error: planDataError } = await supabase
								.from('users_data')
								.update({ current_plan: plan.slug })
								.eq('id', user?.id);
							
							console.log("Datos del plan: ", planData);
							console.log("Errores del plan: ", planDataError);

							window.location.href = '/utils/generating-landing';
						}
						confirmPayment();
					}
				})
				.render(paypalRef.current);

		}
	}, [loadState]);

	return (
		<div ref={paypalRef}>

		</div>
	)
}
