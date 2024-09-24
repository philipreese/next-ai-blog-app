import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();
    const aiResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Create small blog post with html tags based on this title: ${title} and in this style of a writer: ${role}`,
        },
        {
          role: "system",
          content: `${role}. Write with html tags.`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(
      {
        content: aiResponse.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
