import next from "next";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET (){
    console.log("Entra");
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "Dame un título para mi landing page.",
            },
        ],
    });

    console.log(completion.choices[0].message);
    return NextResponse.json(completion.choices[0].message);
}