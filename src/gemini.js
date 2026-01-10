export async function askGemini(prompt) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await res.json();
  console.log("Gemini raw response:", data);

  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map(p => p.text)
      .join(" ")
      .trim();

  return text && text.length > 0
    ? text
    : "You are eligible for the schemes shown above.";
}
