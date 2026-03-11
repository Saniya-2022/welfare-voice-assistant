# Welfare Voice Assistant

Hi! This is a voice-enabled web platform I built to help people easily discover eligible government welfare schemes (Telangana and Central).

The goal of this project is to make finding welfare information simple, accessible, and fast for everyone—whether they are students, farmers, or the elderly.

### What it does

- **Voice Guided:** The app can speak required questions out loud to the user.
- **Voice Answers:** Users can just speak their answers (like age, occupation, income) into the microphone instead of typing.
- **AI Chatbot:** I integrated the Google Gemini AI so users can ask specific questions about their eligible schemes, and the AI will explain it to them naturally.
- **Multilingual:** It fully supports English, Telugu, and Hindi for both the UI and the Voice Assistant.
- **Smart Filtering:** It automatically matches users to the right schemes based on their profile.

### Tech Stack
- Frontend: React.js
- Styling: Custom CSS (Gradients and Glassmorphism)
- AI: Google Generative AI (Gemini Flash)
- Speech: Web Speech API (SpeechRecognition and SpeechSynthesisUtterance)

### How to run it

1. Make sure you have Node.js installed.
2. Clone the project and install the dependencies:
   ```bash
   npm install
   ```
3. Get a Gemini API key from Google AI Studio.
4. Create a `.env` file in the main folder and add your key:
   ```env
   REACT_APP_GEMINI_API_KEY=your_key_here
   ```
5. Start the app:
   ```bash
   npm start
   ```
   
The app will open up at `http://localhost:3000`.
