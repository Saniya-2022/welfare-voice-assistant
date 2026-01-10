// src/data.js

export const schemes = [

  /* ================= STUDENT SCHEMES ================= */

  {
    id: "ts-postmatric",
    category: "Telangana",
    image: "ts-postmatric",

    name: {
      en: "TS Post Matric Scholarship",
      te: "టీఎస్ పోస్ట్ మెట్రిక్ స్కాలర్‌షిప్",
      hi: "टीएस पोस्ट मैट्रिक छात्रवृत्ति"
    },

    benefit: {
      en: "Fee reimbursement and monthly stipend for students",
      te: "విద్యార్థులకు ఫీజు రీయింబర్స్‌మెంట్ మరియు నెలవారీ స్టైపెండ్",
      hi: "छात्रों के लिए शुल्क प्रतिपूर्ति और मासिक सहायता"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["18-35"],
      occupation: ["student"],
      income: ["low", "mid"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://telanganaepass.cgg.gov.in"
  },

  {
    id: "nsp",
    category: "Central",
    image: "nsp",

    name: {
      en: "National Scholarship Portal",
      te: "జాతీయ స్కాలర్‌షిప్ పోర్టల్",
      hi: "राष्ट्रीय छात्रवृत्ति पोर्टल"
    },

    benefit: {
      en: "Central government scholarships for students",
      te: "కేంద్ర ప్రభుత్వ స్కాలర్‌షిప్‌లు",
      hi: "केंद्र सरकार की छात्रवृत्तियाँ"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["below18", "18-35"],
      occupation: ["student"],
      income: ["low"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://scholarships.gov.in"
  },

  {
    id: "aicte",
    category: "Central",
    image: "aicte",

    name: {
      en: "AICTE Pragati / Saksham Scholarship",
      te: "ఏఐసిటీఈ ప్రగతి / సాక్షమ్ స్కాలర్‌షిప్",
      hi: "एआईसीटीई प्रगति / सक्षम छात्रवृत्ति"
    },

    benefit: {
      en: "₹50,000 per year for eligible technical students",
      te: "అర్హులైన సాంకేతిక విద్యార్థులకు సంవత్సరానికి ₹50,000",
      hi: "पात्र तकनीकी छात्रों के लिए ₹50,000 प्रति वर्ष"
    },

    eligibility: {
      gender: ["female"],
      ageGroup: ["18-35"],
      occupation: ["student"],
      income: ["low"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://www.aicte-india.org"
  },

  /* ================= FARMER SCHEMES ================= */

  {
    id: "pmkisan",
    category: "Central",
    image: "pmkisan",

    name: {
      en: "PM Kisan",
      te: "పీఎం కిసాన్",
      hi: "पीएम किसान"
    },

    benefit: {
      en: "₹6,000 per year income support for farmers",
      te: "రైతులకు సంవత్సరానికి ₹6,000 ఆదాయ సహాయం",
      hi: "किसानों को ₹6,000 वार्षिक सहायता"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["18-35", "36-59", "60+"],
      occupation: ["farmer"],
      income: ["low", "mid", "high"],
      area: ["rural"],
      disability: ["yes", "no"]
    },

    officialLink: "https://pmkisan.gov.in"
  },

  {
    id: "rythubharosa",
    category: "Telangana",
    image: "rythubharosa",

    name: {
      en: "Rythu Bharosa",
      te: "రైతు భరోసా",
      hi: "रायथु भरोसा"
    },

    benefit: {
      en: "Investment support for Telangana farmers",
      te: "తెలంగాణ రైతులకు పెట్టుబడి సహాయం",
      hi: "तेलंगाना किसानों को निवेश सहायता"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["18-35", "36-59", "60+"],
      occupation: ["farmer"],
      income: ["low", "mid", "high"],
      area: ["rural"],
      disability: ["yes", "no"]
    },

    officialLink: "https://rythubharosa.telangana.gov.in"
  },

  /* ================= WOMEN / FAMILY ================= */

  {
    id: "mahalaxmi",
    category: "Telangana",
    image: "mahalaxmi",

    name: {
      en: "Mahalaxmi Scheme",
      te: "మహాలక్ష్మి పథకం",
      hi: "महालक्ष्मी योजना"
    },

    benefit: {
      en: "₹2,500 per month financial assistance for women",
      te: "మహిళలకు నెలకు ₹2,500 ఆర్థిక సహాయం",
      hi: "महिलाओं को ₹2,500 प्रति माह सहायता"
    },

    eligibility: {
      gender: ["female"],
      ageGroup: ["18-35", "36-59"],
      occupation: ["homemaker", "unemployed"],
      income: ["low"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://telangana.gov.in"
  },

  {
    id: "gruha-jyothi",
    category: "Telangana",
    image: "gruha-jyothi",

    name: {
      en: "Gruha Jyothi",
      te: "గృహ జ్యోతి",
      hi: "गृह ज्योति"
    },

    benefit: {
      en: "Free electricity up to 200 units per month",
      te: "నెలకు 200 యూనిట్ల వరకు ఉచిత విద్యుత్",
      hi: "प्रति माह 200 यूनिट तक मुफ्त बिजली"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["any"],
      occupation: ["homemaker", "unemployed", "elderly"],
      income: ["low", "mid"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://tgspdcl.telangana.gov.in"
  },

  /* ================= ELDERLY / HEALTH ================= */

  {
    id: "aasara",
    category: "Telangana",
    image: "aasara",

    name: {
      en: "Aasara Pension",
      te: "ఆసరా పెన్షన్",
      hi: "आसरा पेंशन"
    },

    benefit: {
      en: "Monthly pension for elderly and disabled citizens",
      te: "వృద్ధులు మరియు వికలాంగులకు నెలవారీ పెన్షన్",
      hi: "वृद्धों और दिव्यांगों के लिए मासिक पेंशन"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["60+"],
      occupation: ["elderly", "unemployed","farmer","homemaker","disabled"],
      income: ["low","high","mid"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://www.aasara.telangana.gov.in"
  },

  {
    id: "ayushman",
    category: "Central",
    image: "ayushman",

    name: {
      en: "Ayushman Bharat – PMJAY",
      te: "ఆయుష్మాన్ భారత్ – పీఎంజేఏవై",
      hi: "आयुष्मान भारत – पीएमजेएवाई"
    },

    benefit: {
      en: "Health insurance coverage up to ₹5 lakh per family",
      te: "ప్రతి కుటుంబానికి ₹5 లక్షల వరకు ఆరోగ్య బీమా",
      hi: "प्रति परिवार ₹5 लाख तक स्वास्थ्य बीमा"
    },

    eligibility: {
      gender: ["male", "female"],
      ageGroup: ["any"],
      occupation: ["elderly", "unemployed"],
      income: ["low"],
      area: ["rural", "urban"],
      disability: ["yes", "no"]
    },

    officialLink: "https://pmjay.gov.in"
  },
  {
  id: "pre-matric",
  category: "Central",
  image: "nsp",

  name: {
    en: "Pre-Matric Scholarship",
    te: "ప్రీ-మెట్రిక్ స్కాలర్‌షిప్",
    hi: "प्री-मैट्रिक छात्रवृत्ति"
  },

  benefit: {
    en: "Financial assistance for school students below class 10",
    te: "పాఠశాల విద్యార్థులకు ఆర్థిక సహాయం",
    hi: "स्कूल छात्रों के लिए वित्तीय सहायता"
  },

  eligibility: {
    gender: ["male", "female"],
    ageGroup: ["below18"],
    occupation: ["student"],
    income: ["low"],
    area: ["rural", "urban"],
    disability: ["yes", "no"]
  },

  officialLink: "https://scholarships.gov.in"
},
{
  id: "pmmudra",
  category: "Women",
  image: "pmmudra",

  name: {
    en: "Pradhan Mantri Mudra Yojana",
    te: "పీఎం ముద్ర యోజన",
    hi: "पीएम मुद्रा योजना"
  },

  benefit: {
    en: "Collateral-free loans up to ₹10 lakh for women entrepreneurs",
    te: "మహిళలకు భరోసా లేని రుణాలు",
    hi: "महिलाओं के लिए बिना गारंटी ऋण"
  },

  eligibility: {
    gender: ["female"],
    ageGroup: ["18-35", "36-59"],
    occupation: ["homemaker", "unemployed"],
    income: ["low", "mid"],
    area: ["rural", "urban"],
    disability: ["yes", "no"]
  },

  officialLink: "https://www.mudra.org.in/"
},
{
  id: "divyang",
  category: "Disability",
  image: "divyang",

  name: {
    en: "Divyang Scholarship",
    te: "వికలాంగుల స్కాలర్‌షిప్",
    hi: "दिव्यांग छात्रवृत्ति"
  },

  benefit: {
    en: "Monthly stipend for students with disabilities (Class 9–12)",
    te: "వికలాంగ విద్యార్థులకు నెలవారీ స్టైపెండ్",
    hi: "दिव्यांग छात्रों के लिए मासिक सहायता"
  },

  eligibility: {
    gender: ["male", "female"],
    ageGroup: ["below18"],
    occupation: ["student"],
    income: ["low"],
    area: ["rural", "urban"],
    disability: ["yes"]
  },

  officialLink: "https://services.india.gov.in"
},
{
  id: "pmcares",
  category: "Central",
  image: "pmcares",

  name: {
    en: "PM CARES for Children",
    te: "పీఎం కేర్స్ ఫర్ చిల్డ్రన్",
    hi: "पीएम केयर्स फॉर चिल्ड्रन"
  },

  benefit: {
    en: "Education, health insurance, monthly support and fixed deposit till age 23 for orphaned children",
    te: "అనాథ పిల్లలకు విద్య, ఆరోగ్య బీమా మరియు ఆర్థిక సహాయం",
    hi: "अनाथ बच्चों को शिक्षा, स्वास्थ्य बीमा और आर्थिक सहायता"
  },

  eligibility: {
    gender: ["male", "female"],
    ageGroup: ["below18"],
    occupation: ["student"],
    income: ["low"],
    area: ["rural", "urban"],
    disability: ["yes", "no"]
  },

  officialLink: "https://pmcaresforchildren.in"
},
{
  id: "e-shram",
  category: "Employment",
  image: "e-shram",

  name: {
    en: "e-Shram",
    te: "ఈ-శ్రమ్",
    hi: "ई-श्रम"
  },

  benefit: {
    en: "Accident insurance up to ₹2 lakh and access to welfare schemes for unorganized workers",
    te: "అసంఘటిత కార్మికులకు ₹2 లక్షల ప్రమాద బీమా మరియు సంక్షేమ పథకాలకు ప్రాప్తి",
    hi: "असंगठित श्रमिकों को ₹2 लाख दुर्घटना बीमा और कल्याण योजनाओं की सुविधा"
  },

  eligibility: {
    gender: ["male", "female"],
    ageGroup: ["18-35", "36-59", "60+"],
    occupation: ["unemployed", "farmer", "daily-wage"],
    income: ["low"],
    area: ["rural", "urban"],
    disability: ["yes", "no"]
  },

  officialLink: "https://eshram.gov.in"
},

 
{
  id: "mgnrega",
  category: "Employment",
  image: "mgnrega",

  name: {
    en: "MGNREGA",
    te: "ఎంజీఎన్ఆర్ఈజీఏ",
    hi: "मनरेगा"
  },

  benefit: {
    en: "100 days of guaranteed wage employment in rural areas",
    te: "గ్రామీణ ప్రాంతాల్లో 100 రోజులు ఉపాధి హామీ",
    hi: "ग्रामीण क्षेत्रों में 100 दिनों की रोजगार गारंटी"
  },

  eligibility: {
    gender: ["male", "female"],
    ageGroup: ["18-35", "36-59", "60+"],
    occupation: ["unemployed", "daily-wage", "farmer"],
    income: ["low"],
    area: ["rural"],
    disability: ["yes", "no"]
  },

  officialLink: "https://nrega.nic.in"
},

];
