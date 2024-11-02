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
						plan_id: 'P-3VT75497KL146340GM4TI5XY'
					  });
					},
					onApprove: function(data: any, actions: any) {
						setPaidFor(true);
						console.log("El usuario completo el pago: ", data)

						// TODO: Cargar el plan pagado en supabase
						// codigo...

						window.location.href = '/generating-landing';
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
