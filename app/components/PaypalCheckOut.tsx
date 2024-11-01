'use client'
import { useState, useRef, useEffect } from "react"

declare global {
	interface Window {
	  paypal: any;
	}
}

export default function PaypalCheckOut({plan}: any) {
	const [paidFor, setPaidFor] = useState(false)
	const [loadState, setLoadState] = useState({ loading: false, loaded: false });

	const paypalRef = useRef<HTMLDivElement>(null);

	// const product = {
	// 	price: 77.77,
	// 	description: "Landing Page - Base Plan"
	// }

	useEffect(() => {
		if (!loadState.loading && !loadState.loaded) {
			setLoadState({ loading: true, loaded: false });

			const script = document.createElement('script');
			script.src = `https://sandbox.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PYPL_CLIENT_ID}&currency=USD`;
			script.addEventListener('load', () => setLoadState({ loading: false, loaded: true }));
			document.body.appendChild(script);
		}

		if (loadState.loaded) {
			window.paypal
				.Buttons({
					// TODO: Cambiar por suscripcion (Ref al final de este doc)
					createOrder: (data: any, actions: any) => {
						return actions.order.create({
							purchase_units: [
								{
									description: plan.description,
									amount: {
										currency_code: "USD",
										value: plan.price
									}
								}
							],
						});
					},
					onApprove: async (data: any, actions: any) => {
						const order = await actions.order.capture();
						setPaidFor(true);
						console.log(order);
					}
				})
				.render(paypalRef.current);
		}
	}, [loadState]);

	return (
		<div>
			{paidFor ? (
				// TODO: Si ya pago se deberia enviar a una pagina de agradecimiento que le muestre que su proyecto esta listo
				<></>
			) : (
				<div>
					<div ref={paypalRef}></div>
				</div>
			)}
		</div>
	)
}

// createOrder: (data: any, actions: any) => {
//     return actions.subscription.create({
//         plan_id: 'YOUR_PLAN_ID', // Reemplaza esto con el ID de tu plan de suscripción
//         subscriber: {
//             email_address: 'customer@example.com' // Cambia esto por el email del cliente
//         },
//         application_context: {
//             return_url: 'https://tusitio.com/return', // URL de retorno después de la suscripción
//             cancel_url: 'https://tusitio.com/cancel' // URL de cancelación
//         }
//     });
// },
