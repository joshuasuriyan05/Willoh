export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are a helpful AI research assistant. Answer clearly in 4-6 sentences.\nUser: ${message}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();
    console.log("Gemini response 👉", data);

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return Response.json({
      reply: reply || "⚠️ No response",
    });

  } catch (error) {
    console.error("Gemini Error:", error);
    return new Response("Error", { status: 500 });
  }
}