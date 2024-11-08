import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {

	const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL || "";
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";
	const supabase = createClient(supabaseUrl, supabaseKey);

	// Conseguir datos del POST
	const { 
		businessName,
		businessDescription,
		landingGoal,
		targetAudience,
		beneficts,
		story,
		email,
		password,
		colorPalete
	 } = await request.json();

	// Crear usuario en supabase auth
	const { data: newUser, error: newUserError } = await supabase.auth.signUp({
		email: email,
		password: password,
	})

	// Cargar usuarios en tabla users_data
	const { data: newUserData, error: newUserDataError } = await supabase
		.from('users_data')
		.insert({
			id: newUser.user?.id,
			nombre_negocio: businessName,
			descripcion_negocio: businessDescription,
			objetivo_landing: landingGoal,
			audiencia_objetivo: targetAudience,
			beneficios: beneficts,
			historia: story,
			email: email,
			color_palete: [
				colorPalete.mainColor,
				colorPalete.backgroundColor,
				colorPalete.textColor,
				colorPalete.buttonColor
			]
		})
		.select()

	console.log(newUserData, newUserError, newUserDataError)

  	// Redirigir al usuario a la página de planes
  	const response = NextResponse.json({ message: "User created and logged in successfully" });
  	response.headers.set("Location", "/plans");

  	return response;

}