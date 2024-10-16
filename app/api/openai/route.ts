import next from "next";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET (){
    const openai = new OpenAI();

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "Write a haiku about recursion in programming.",
            },
        ],
    });

    console.log(completion.choices[0].message);
    return NextResponse.json(completion)
}