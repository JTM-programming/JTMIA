import PaypalCheckOut from '../components/PaypalCheckOut';

export default function PlansPage() {

	const PLANS = [
		{
			id: "P-3VT75497KL146340GM4TI5XY",
			name: "Starter Plan",
			slug: "starter",
			oldPrice: 280,
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
		{
		  name: "Custom Plan",
		  oldPrice: "1.300",
		  price: 600,
		  yearlyBilled: false,
		  description: "Landing Page - Custom Plan",
		  includes: [
			"Textos personalizados y optimizados para SEO potenciado con IA",
			"Diseño único y personalizado adaptado a vos",
			"Soporte técnico de 6 meses",
			"Integración avanzada con herramientas de marketing",
			"Optimización avanzada para la conversión",
			"Creación de imagenes a medida",
			"Dominio .com",
		  ],
		},
	]

	return (
		<section className='py-[60px] md:py-[80px]'>
			<div className="max-w-[900px] mx-auto px-4">
				<h1 className='text-center mb-8 leading-[115%] text-[26px] md:text-[32px] max-w-[640px] mx-auto font-extrabold'>
					Queremos que tengas el <span className='text-[#2C6FFF]'>sitio que mereces por el precio que necesitas</span>
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					{
						PLANS.map((plan) => {
							return (
								<div className='bg-white p-8 rounded-[8px]'>
									<h3 className='font-bold text-[22px]'>{plan.name}</h3>
									<ul className='divide-y my-4 list-inside'>
										{
											plan.includes.map((item) => {
												return (
													<li className='text-[14px] py-4 flex gap-4'>
														<svg className='min-w-[16px] w-[16px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#2C6FFF' d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
														{item}
													</li>
												)
											})
										}
									</ul>
									<div className='mb-4'>
										<p className="block mb-4 line-through text-[#111]/60"><span className="">U$D</span> {plan.oldPrice}</p>
										<p><span>U$D </span> <span className='text-[34px] font-extrabold'>{plan.price}</span> {plan.yearlyBilled ? ' / año' : ' pago unico'}</p>
									</div>
									{
										plan.slug === 'starter' ?
											<PaypalCheckOut plan={plan} /> 
										:
											<a 
												className='bg-[#2C6FFF] text-white w-full block text-center rounded-[4px] p-3' 
												href="https://wa.me/+542616841853"
												target='white'
											>
											Solicitar proyecto</a>

									}
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}