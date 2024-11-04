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
};

export default function GeneratingLanding() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [textsFetched, setTextsFetched] = useState(false);

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
    const generateLandingTexts = async () => {
      if (!userData) return; // Asegúrate de que userData esté disponible

      const response = await axios.post("/api/openai", {
        businessName: userData.nombre_negocio,
        businessDescription: userData.descripcion_negocio,
        landingGoal: userData.objetivo_landing,
        targetAudience: userData.audiencia_objetivo,
        beneficts: userData.beneficios,
        story: userData.historia,
        email: userData.email,
      });

      const cleanContent = response.data.content.replace(/```json|```/g, "");
      const texts = JSON.parse(cleanContent);
      
      console.log("COllected data: ", userData);
      createLandingFolder(texts, userData);
    };

    const createLandingFolder = async (texts: any, userData: UserData) => {
      try {
        const formattedName = userData?.nombre_negocio
          ?.toLowerCase()
          .replace(/\s+/g, '-') || '';

        console.log('Nombre formateado:', formattedName);
        console.log('Textos a enviar:', texts); // Verifica que texts tenga el contenido esperado

        const response = await fetch('/api/createProyectFolder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ folderName: formattedName, copies: texts }),
        });

        if (!response.ok) {
          throw new Error('Error en la respuesta');
        }

        const data = await response.json();
        console.log('Carpeta creada exitosamente:', data.message);
        window.location.href = `/pages/${formattedName}`;

      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (!textsFetched && userData) { // Solo ejecutar si hay userData
      generateLandingTexts();
      setTextsFetched(true);
    }
  }, [userData, textsFetched]); // Asegúrate de que textsFetched esté en las dependencias

  return (
    <div>
      Cargando...
    </div>
  );
}
