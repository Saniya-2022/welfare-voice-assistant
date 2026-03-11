const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require("dotenv").config();

async function listGeminiModels() {
  try {
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Attempt to list models to see strictly what is accessible
    // Using simple fetch to bypass SDK wrapper issues with pure endpoints
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=" + apiKey);
    const data = await response.json();
    fs.writeFileSync("models.json", JSON.stringify(data, null, 2));

  } catch (error) {
    fs.writeFileSync("models.json", JSON.stringify({ error: error.message }, null, 2));
  }
}

listGeminiModels();
