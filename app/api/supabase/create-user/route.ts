import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@supabase/supabase-js';

export async function POST(request: NextRequest) {

	const supabaseUrl = process.env.PROJECT_URL || "";
	const supabaseKey = process.env.SUPABASE_KEY || "";
	const supabase = createClient(supabaseUrl, supabaseKey);

	// Conseguir datos del POST
	const { email, phone } = await request.json();

	// Crear usuario en supabase auth
	const { data: newUser, error: newUserError } = await supabase.auth.signUp({
		email: 'example@email.com',
		password: 'example-password',
	})

	// Cargar usuarios en tabla "nexo"
	const { data: newUserData, error: newUserDataError } = await supabase
		.from('suscriptos')
		.insert({
			email: email,
			phone: phone,
		})
		.select()

	// Iniciar sesion del usuario y enviarlo a pagina de planes
	// codigo...

	// Si alguna de los dos tira error...
	const error = newUserError || newUserDataError
	
	if (!error) {
		return NextResponse.json({ data: '' }, { status: 200 });
	} else {
		return NextResponse.json({ error }, { status: 400 });
	}
}