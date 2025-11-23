import OpenAI from "openai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing OPENAI_API_KEY' }), { status: 500 });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are Akin\'s AI Tutor. Be helpful and polite.' },
        { role: 'user', content: message }
      ],
      max_tokens: 800
    });

    const reply = response.choices?.[0]?.message?.content || 'No response from model';
    return new Response(JSON.stringify({ reply }));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
