import React, { useState, useEffect } from "react";
import { schemes } from "./data";
import "./style.css";


/* ---------- IMAGES ---------- */

import aasara from "./assets/schemes/aasara.jpg";
import aicte from "./assets/schemes/aicte.jpg";
import ayushman from "./assets/schemes/ayushman.jpg";
import divyang from "./assets/schemes/divyang.jpg";
import eshram from "./assets/schemes/e-shram.jpg";
import gruhajyothi from "./assets/schemes/gruha-jyothi.jpg";
import mahalaxmi from "./assets/schemes/mahalaxmi.jpg";
import mgnrega from "./assets/schemes/mgnrega.jpg";
import nsp from "./assets/schemes/nsp.jpg";
import pmcares from "./assets/schemes/pmcares.jpg";
import pmkisan from "./assets/schemes/pmkisan.jpg";
import pmmudra from "./assets/schemes/pmmudra.jpg";
import rythubharosa from "./assets/schemes/rythubharosa.jpg";
import tspostmatric from "./assets/schemes/ts-postmatric.jpg";
/* ---------- SCHEMES CONTEXT FOR AI ---------- */

const schemeImages = {
  aasara,
  aicte,
  ayushman,
  divyang,
  "e-shram": eshram,
  "gruha-jyothi": gruhajyothi,
  mahalaxmi,
  mgnrega,
  nsp,
  pmcares,
  pmkisan,
  pmmudra,
  rythubharosa,
  "ts-postmatric": tspostmatric
};

/* ---------- SPEECH ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

/* ---------- TEXT ---------- */
const TEXT = {
  title: {
    en: "Welfare Voice Assistant",
    te: "సంక్షేమ వాయిస్ అసిస్టెంట్",
    hi: "कल्याण वॉइस सहायक"
  },
  start: { en: "Start", te: "ప్రారంభించండి", hi: "शुरू करें" },
  next: { en: "Next", te: "తర్వాత", hi: "अगला" },
  back: { en: "Back", te: "వెనక్కి", hi: "वापस" },
  speak: { en: "Speak", te: "మాట్లాడండి", hi: "बोलें" },
  results: {
    en: "Eligible Government Schemes",
    te: "అర్హమైన ప్రభుత్వ పథకాలు",
    hi: "पात्र सरकारी योजनाएँ"
  }
};

/* ---------- QUESTIONS (MULTILINGUAL) ---------- */

const QUESTIONS = [
  {
    key: "gender",
    question: {
      en: "What is your gender?",
      te: "మీ లింగం ఏమిటి?",
      hi: "आपका लिंग क्या है?"
    },
    options: [
      { value: "male", en: "Male", te: "పురుషుడు", hi: "पुरुष" },
      { value: "female", en: "Female", te: "స్త్రీ", hi: "महिला" }
    ]
  },

  {
    key: "ageGroup",
    question: {
      en: "What is your age group?",
      te: "మీ వయస్సు వర్గం ఏమిటి?",
      hi: "आपका आयु वर्ग क्या है?"
    },
    options: [
      { value: "below18", en: "Below 18", te: "18 లోపు", hi: "18 से कम" },
      { value: "18-35", en: "18 – 35", te: "18 – 35", hi: "18 – 35" },
      { value: "36-59", en: "36 – 59", te: "36 – 59", hi: "36 – 59" },
      { value: "60+", en: "60+", te: "60 పైబడిన వారు", hi: "60 से ऊपर" }
    ]
  },

  {
    key: "occupation",
    question: {
      en: "What is your occupation?",
      te: "మీ వృత్తి ఏమిటి?",
      hi: "आपका पेशा क्या है?"
    },
    options: [
      { value: "student", en: "Student", te: "విద్యార్థి", hi: "छात्र" },
      { value: "farmer", en: "Farmer", te: "రైతు", hi: "किसान" },
      { value: "homemaker", en: "Homemaker", te: "గృహిణి", hi: "गृहिणी" },
      { value: "elderly", en: "Elderly", te: "వృద్ధుడు", hi: "वृद्ध" },
      { value: "unemployed", en: "Unemployed", te: "నిరుద్యోగి", hi: "बेरोज़गार" }
    ]
  },

  {
    key: "income",
    question: {
      en: "What is your income range?",
      te: "మీ ఆదాయం ఎంత?",
      hi: "आपकी आय कितनी है?"
    },
    options: [
      { value: "low", en: "Low", te: "తక్కువ", hi: "कम" },
      { value: "mid", en: "Middle", te: "మధ్యస్థ", hi: "मध्यम" },
      { value: "high", en: "High", te: "ఎక్కువ", hi: "अधिक" }
    ]
  },

  {
    key: "area",
    question: {
      en: "Where do you live?",
      te: "మీరు ఎక్కడ నివసిస్తున్నారు?",
      hi: "आप कहाँ रहते हैं?"
    },
    options: [
      { value: "rural", en: "Rural", te: "గ్రామీణ", hi: "ग्रामीण" },
      { value: "urban", en: "Urban", te: "నగర", hi: "शहरी" }
    ]
  },

  {
    key: "disability",
    question: {
      en: "Do you have a disability?",
      te: "మీకు వికలాంగత ఉందా?",
      hi: "क्या आपको विकलांगता है?"
    },
    options: [
      { value: "yes", en: "Yes", te: "అవును", hi: "हाँ" },
      { value: "no", en: "No", te: "కాదు", hi: "नहीं" }
    ]
  }
];



export default function App() {
  const [step, setStep] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [lang, setLang] = useState("en");
  const [activeScheme, setActiveScheme] = useState(null);
 const [autoPlay, setAutoPlay] = useState(false);
const [autoIndex, setAutoIndex] = useState(0);
const [chatInput, setChatInput] = useState("");
const [chatResponse, setChatResponse] = useState("");
const [loadingAI, setLoadingAI] = useState(false);

 
const [introSpoken, setIntroSpoken] = useState(false);

  const [user, setUser] = useState({
    name: "",
    gender: "",
    ageGroup: "",
    occupation: "",
    income: "",
    area: "",
    disability: ""
  });

  /* ---------- SPEAK ---------- */
 const speak = (text, onEnd) => {
  const synth = window.speechSynthesis;
  synth.cancel();   // ✅ ADD THIS LINE

  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === "te" ? "te-IN" : lang === "hi" ? "hi-IN" : "en-IN";
  u.rate = 0.9;

  if (onEnd) u.onend = onEnd;
  synth.speak(u);
};

const eligibleSchemes = schemes.filter((s) => {
  const e = s.eligibility;

  return (
    (!user.gender || e.gender.includes("any") || e.gender.includes(user.gender)) &&
    (!user.ageGroup || e.ageGroup.includes("any") || e.ageGroup.includes(user.ageGroup)) &&
    (!user.occupation || e.occupation.includes("any") || e.occupation.includes(user.occupation)) &&
    (!user.income || e.income.includes("any") || e.income.includes(user.income)) &&
    (!user.area || e.area.includes("any") || e.area.includes(user.area)) &&
    (!user.disability || e.disability.includes("any") || e.disability.includes(user.disability))
  );
});


  /* ---------- AUTO QUESTION VOICE ---------- */
  /* ---------- AUTO SPEAK QUESTION (MULTILINGUAL) ---------- */
/* ================= QUESTION VOICE ================= */
useEffect(() => {
  if (step !== 1) return;
  if (!QUESTIONS[qIndex]) return;

  window.speechSynthesis.cancel();
  speak(QUESTIONS[qIndex].question[lang]);
}, [step, qIndex, lang]);



/* ================= ELIGIBLE SCHEMES INTRO ================= */

useEffect(() => {
  if (step !== 2) return;
  if (eligibleSchemes.length === 0) return;
  if (introSpoken) return; // ✅ prevents repeat

  window.speechSynthesis.cancel();
  setAutoPlay(false);
  setAutoIndex(0);
  setActiveScheme(null);

  speak(
    lang === "te"
      ? "మీ అర్హత ఆధారంగా ఈ పథకాలు అందుబాటులో ఉన్నాయి."
      : lang === "hi"
      ? "आपकी पात्रता के आधार पर ये योजनाएँ उपलब्ध हैं।"
      : "Based on your eligibility, these schemes are available.",
    () => {
      setIntroSpoken(true);   // ✅ mark intro done
      setAutoPlay(true);      // ✅ now start scheme explanations
    }
  );
}, [step, eligibleSchemes.length, lang, introSpoken]);

  /* ================= GEMINI FUNCTION (ADD HERE) ================= */
 
const buildAIContext = () => {
  const profile = `
User Profile:
Name: ${user.name || "Not provided"}
Gender: ${user.gender}
Age Group: ${user.ageGroup}
Occupation: ${user.occupation}
Income: ${user.income}
Area: ${user.area}
Disability: ${user.disability}
`;

  const schemesText =
    eligibleSchemes.length > 0
      ? eligibleSchemes
          .map(
            (s, i) =>
              `${i + 1}. ${s.name.en} – ${s.benefit.en}`
          )
          .join("\n")
      : "No eligible schemes found.";

  return `
You are a Government Welfare AI Assistant.

${profile}

Eligible Schemes:
${schemesText}

Answer clearly and simply.
`;
};
const copyUserDetailsToClipboard = async () => {
  const context = buildAIContext();

  try {
    await navigator.clipboard.writeText(context);
    alert(
      lang === "te"
        ? "వినియోగదారుడి వివరాలు కాపీ అయ్యాయి"
        : lang === "hi"
        ? "उपयोगकर्ता विवरण कॉपी हो गया"
        : "User details copied to clipboard"
    );
  } catch (err) {
    alert("Clipboard access failed");
  }
};


/* ================= AUTO SCHEME EXPLANATION ================= */
useEffect(() => {
  if (!autoPlay) return;
  if (!eligibleSchemes || eligibleSchemes.length === 0) return;

  if (autoIndex >= eligibleSchemes.length) {
    setAutoPlay(false);
    setActiveScheme(null);
    return;
  }

  const scheme = eligibleSchemes[autoIndex];
  if (!scheme) return;

  setActiveScheme(scheme.id);

  speak(
    lang === "te"
      ? `${scheme.name.te}. ${scheme.benefit.te}. మరిన్ని వివరాల కోసం అధికారిక వెబ్‌సైట్‌ను సందర్శించండి.`
      : lang === "hi"
      ? `${scheme.name.hi}. ${scheme.benefit.hi}. अधिक जानकारी के लिए आधिकारिक वेबसाइट देखें।`
      : `${scheme.name.en}. ${scheme.benefit.en}. For more information, visit the official website.`,
    () => {
      setActiveScheme(null);
      setAutoIndex((prev) => prev + 1);
    }
  );
}, [autoPlay, autoIndex, eligibleSchemes, lang]);

const explainScheme = (index) => {
  window.speechSynthesis.cancel();
  setAutoPlay(false);

  const s = eligibleSchemes[index];
  if (!s) return;

  setActiveScheme(s.id);

  speak(
    lang === "te"
      ? `${s.name.te}. ${s.benefit.te}. మరిన్ని వివరాల కోసం అధికారిక వెబ్‌సైట్‌ను సందర్శించండి.`
      : lang === "hi"
      ? `${s.name.hi}. ${s.benefit.hi}. अधिक जानकारी के लिए आधिकारिक वेबसाइट देखें।`
      : `${s.name.en}. ${s.benefit.en}. For more information, please visit the official website.`,
    () => setActiveScheme(null)
  );
};


  /* ---------- HOME ---------- */
 const goHome = () => {
  window.speechSynthesis.cancel();
  setAutoPlay(false);
  setAutoIndex(0);
  setActiveScheme(null);
  setIntroSpoken(false); // ✅ reset
  setStep(0);
};
const findMentionedScheme = (text) => {
  const lowerText = text.toLowerCase();

  return schemes.find((s) =>
    s.name.en.toLowerCase().includes(lowerText) ||
    lowerText.includes(s.name.en.toLowerCase()) ||
    (s.name.te && lowerText.includes(s.name.te)) ||
    (s.name.hi && lowerText.includes(s.name.hi))
  );
};

// ================= AI VOICE INPUT =================


const handleAskAI = async () => {
  // If user asks nothing → list eligible schemes
  if (!chatInput.trim()) {
    setChatResponse(
      eligibleSchemes
        .map((s, i) => `${i + 1}. ${s.name[lang]} – ${s.benefit[lang]}`)
        .join("\n")
    );
    return;
  }

  const languageInstruction =
    lang === "te"
      ? "Answer ONLY in Telugu language."
      : lang === "hi"
      ? "Answer ONLY in Hindi language."
      : "Answer ONLY in English language.";

  setLoadingAI(true);

  const mentionedScheme = findMentionedScheme(chatInput);
  let prompt = "";

  if (mentionedScheme) {
    // 🎯 Specific scheme explanation
    prompt = `
You are a Government Welfare Assistant for India and Telangana.

${languageInstruction}

Explain this government scheme clearly:

Scheme Name: ${mentionedScheme.name.en}
Benefits: ${mentionedScheme.benefit.en}
Official Website: ${mentionedScheme.officialLink}

User Question:
"${chatInput}"

Explain:
- Who is eligible
- What benefits they get
- How to apply
`;
  } else {
    // 📋 General eligibility response
    prompt = `
You are a Government Welfare Assistant for India and Telangana.

${languageInstruction}

User Profile:
- Gender: ${user.gender}
- Age Group: ${user.ageGroup}
- Occupation: ${user.occupation}
- Income: ${user.income}
- Area: ${user.area}
- Disability: ${user.disability}

Eligible Schemes:
${eligibleSchemes
  .map((s, i) => `${i + 1}. ${s.name.en} – ${s.benefit.en}`)
  .join("\n")}

User Question:
"${chatInput}"

Answer clearly. Do NOT say "shown above".
`;
  }

  try {
    const reply = await askGemini(prompt);
    setChatResponse(reply);
    speak(reply); // 🔊 voice output
  } catch (error) {
    setChatResponse(
      lang === "te"
        ? "క్షమించండి, ప్రస్తుతం AI అందుబాటులో లేదు."
        : lang === "hi"
        ? "क्षमा करें, AI अभी उपलब्ध नहीं है।"
        : "Sorry, AI service is temporarily unavailable."
    );
  } finally {
    setLoadingAI(false);
  }
};


  /* ---------- HOME PAGE ---------- */
  if (step === 0) {
    return (
      <div className="page center">
        <div className="card center">
          <h1>{TEXT.title[lang]}</h1>
          <input
  type="text"
  placeholder={
    lang === "te"
      ? "మీ పేరు నమోదు చేయండి"
      : lang === "hi"
      ? "अपना नाम दर्ज करें"
      : "Enter your name"
  }
  value={user.name || ""}
  onChange={(e) => setUser({ ...user, name: e.target.value })}
  style={{ marginBottom: "12px" }}
/>

          
          
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
            <option value="hi">हिंदी</option>
          </select>
          <button className="primary" onClick={() => setStep(1)}>
            {TEXT.start[lang]}
          </button>
        </div>
      </div>
    );
  }
/* ---------- VOICE INPUT (MIC) ---------- */
const startListening = () => {
  if (!SR) {
    alert("Speech recognition not supported in this browser");
    return;
  }

  const rec = new SR();
  rec.lang = lang === "te" ? "te-IN" : lang === "hi" ? "hi-IN" : "en-IN";
  rec.start();

  rec.onresult = (e) => {
    const spokenText = e.results[0][0].transcript.toLowerCase();
    setUser({
      ...user,
      [QUESTIONS[qIndex].key]: spokenText
    });
  };

  rec.onerror = () => {
    alert("Voice input error. Please try again.");
  };
};

  /* ---------- QUESTIONS ---------- */
  if (step === 1) {
    const q = QUESTIONS[qIndex];
    return (
      <div className="page center">
        <div className="card center">
        <h2>{q.question[lang]}</h2>

          <select
  value={user[QUESTIONS[qIndex].key]}
  onChange={(e) =>
    setUser({ ...user, [QUESTIONS[qIndex].key]: e.target.value })
  }
>
  <option value="">
    {lang === "te" ? "ఎంచుకోండి" : lang === "hi" ? "चुनें" : "Select"}
  </option>

  {QUESTIONS[qIndex].options.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt[lang]}
    </option>
  ))}
</select>

          <button onClick={startListening}>🎤 {TEXT.speak[lang]}</button>
          <div className="nav">
            <button onClick={() => qIndex === 0 ? setStep(0) : setQIndex(qIndex - 1)}>{TEXT.back[lang]}</button>
            <button className="primary" onClick={() => qIndex < QUESTIONS.length - 1 ? setQIndex(qIndex + 1) : setStep(2)}>{TEXT.next[lang]}</button>
          </div>
        </div>
      </div>
    );
  }
  const startAIListening = () => {
  if (!SR) {
    alert("Speech Recognition not supported in this browser");
    return;
  }

  const recognition = new SR();
  recognition.lang =
    lang === "te" ? "te-IN" : lang === "hi" ? "hi-IN" : "en-IN";

  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    setChatInput(spokenText); // puts voice text into textarea
  };
};


/* ---------- AI CHATBOT PAGE ---------- */
if (step === 3) {
  return (
    <div className="page center">
      <div className="card" style={{ width: "90%", maxWidth: "700px" }}>

        <h2>🤖 Welfare AI Assistant</h2>

        <textarea
          placeholder="Ask about any government scheme..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          rows={4}
        />

        <button onClick={startAIListening}>
          🎤 Speak
        </button>

        <button className="primary" onClick={handleAskAI}>
          Ask AI
        </button>

        <div className="ai-response">
          <h3>AI Response:</h3>
          <p>{chatResponse || "No response yet"}</p>
        </div>

        <button onClick={() => setStep(2)}>
          ⬅ Back to Schemes
        </button>

      </div>
    </div>
  );
}

  /* ---------- RESULTS ---------- */
  /* ---------- RESULTS ---------- */
return (
  <div className="results-page">

    {/* Header */}
    <div className="results-header">
      <h2>{TEXT.results[lang]}</h2>

      <button className="home-btn" onClick={goHome}>
        🏠 Home
      </button>
    </div>

    {/* Eligible Schemes */}
    <div className="scheme-row">
      {eligibleSchemes.length === 0 && (
        <p style={{ textAlign: "center" }}>
          {lang === "te"
            ? "అర్హమైన పథకాలు లభించలేదు"
            : lang === "hi"
            ? "कोई पात्र योजना नहीं मिली"
            : "No eligible schemes found"}
        </p>
      )}

      {eligibleSchemes.map((s, i) => (
        <div
          key={s.id}
          className={`scheme-card ${
            activeScheme === s.id ? "active" : ""
          }`}
        >
          <img src={schemeImages[s.image]} alt={s.name[lang]} />


          <h3>{s.name[lang]}</h3>
          <p>{s.benefit[lang]}</p>

          <button
            className="explain-btn"
            onClick={() => explainScheme(i)}
          >
            🔊 Explain
          </button>

          <a
            href={s.officialLink}
            target="_blank"
            rel="noreferrer"
          >
            Official Website
          </a>
        </div>
      ))}
    </div>
   <button
  className="primary"
  style={{ margin: "20px auto", display: "block" }}
  onClick={() => setStep(3)}
>
  🤖 Open AI Welfare Assistant
</button>
</div>


);

}
