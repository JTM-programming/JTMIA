import PaypalCheckOut from '../components/PaypalCheckOut';

export default function PlansPage() {

	const PLANS = [
		{
			id: "P-3VT75497KL146340GM4TI5XY",
			name: "Starter Plan",
			slug: "starter",
			price: 77,
			yearlyBilled: true,
			description: "Landing Page - Starter Plan",
			includes: [
				"Listo para usar en 2 minutos",
				"Textos personalizados y optimizados para SEO potenciado con IA",
				"Diseño pensado para profesionales de la salud",
				"Contacto 24/7",
				"Integración con herramientas de marketing",
				"Optimización avanzada para la conversión",
			],
		},
		// {
		//   name: "Stelar Plan",
		//   price: 120,
		//   yearlyBilled: true,
		//   description: "Landing Page - Stelar Plan",
		//   includes: [
		// 	"Listo para usar en 2 minutos",
		// 	"Textos personalizados y optimizados para SEO potenciado con IA",
		// 	"Diseño pensado para profesionales de la salud",
		// 	"Contacto 24/7",
		// 	"Integración con herramientas de marketing",
		// 	"Optimización avanzada para la conversión",
		//   ],
		// },
		// {
		//   name: "Custom Plan",
		//   price: 600,
		//   yearlyBilled: false,
		//   description: "Landing Page - Custom Plan",
		//   includes: [
		// 	"Textos personalizados y optimizados para SEO potenciado con IA",
		// 	"Diseño único y personalizado adaptado a vos",
		// 	"Soporte técnico de 6 meses",
		// 	"Integración avanzada con herramientas de marketing",
		// 	"Optimización avanzada para la conversión",
		// 	"Creación de imagenes a medida",
		//   ],
		// },
	]

	return (
		<section className='py-[80px]'>
			<div className="jtm-container">
				<h1 className='text-center mb-8 text-[32px] max-w-[640px] mx-auto font-extrabold'>Queremos que tengas el sitio que necesitas por el precio que necesitas</h1>
				<div className="grid grid-cols-3 gap-4">
					{
						PLANS.map((plan) => {
							return (
								<div className='bg-white p-8 rounded-[8px]'>
									<h3 className='text-center font-bold text-[22px]'>{plan.name}</h3>
									<ul className='divide-y my-4 list-inside'>
										{
											plan.includes.map((item) => {
												return (
													<li className='py-4'>
														{item}
													</li>
												)
											})
										}
									</ul>
									<p className='mb-4 text-center'>
										<span className='text-[26px] font-extrabold'>${plan.price}</span> {plan.yearlyBilled ? ' / año' : ' pago unico'}
									</p>
									<PaypalCheckOut plan={plan} />
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}