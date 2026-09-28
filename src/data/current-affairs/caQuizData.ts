import { ExamType } from '../../types';

export interface CaQuizItem {
  id: string;
  quizType: 'daily_10' | 'daily_20' | 'weekly_50' | 'monthly_100' | 'clat_ca_test' | 'ailet_ca_test';
  dateOrMonth: string;
  category: string;
  exam: ExamType[];
  question: string;
  questionHi: string;
  options: string[];
  optionsHi: string[];
  answer: number;
  explanation: string;
  explanationHi: string;
}

export const CA_QUIZ_MASTER: CaQuizItem[] = [
  {
    id: 'caq-001',
    quizType: 'daily_10',
    dateOrMonth: '2026-09-28',
    category: 'Supreme Court & Constitution',
    exam: ['CLAT', 'AILET'],
    question: 'The Supreme Court of India in State of Punjab v. Davinder Singh (2024) overruled which of its earlier 5-judge Constitution Bench judgments regarding the sub-classification of Scheduled Castes?',
    questionHi: 'सर्वोच्च न्यायालय ने स्टेट ऑफ पंजाब बनाम देविंदर सिंह (2024) में अनुसूचित जातियों के उप-वर्गीकरण से संबंधित अपने किस पूर्ववर्ती 5-न्यायाधीशों के फैसले को पलट दिया?',
    options: [
      'Indra Sawhney v. Union of India (1992)',
      'E.V. Chinnaiah v. State of Andhra Pradesh (2004)',
      'M. Nagaraj v. Union of India (2006)',
      'Jarnail Singh v. Lachhmi Narain Gupta (2018)'
    ],
    optionsHi: [
      'इंद्रा साहनी बनाम भारत संघ (1992)',
      'ई.वी. चिन्नैया बनाम आंध्र प्रदेश राज्य (2004)',
      'एम. नागराज बनाम भारत संघ (2006)',
      'जरनैल सिंह बनाम लछमी नारायण गुप्ता (2018)'
    ],
    answer: 1,
    explanation: 'A 7-judge Constitution Bench led by CJI D.Y. Chandrachud held (6:1) that E.V. Chinnaiah (2004) was incorrectly decided because Articles 15(4) and 16(4) empower states to create sub-classifications within SC/ST categories based on empirical backwardness.',
    explanationHi: '7-न्यायाधीशों की पीठ ने 2004 के ई.वी. चिन्नैया फैसले को निरस्त करते हुए राज्यों को उप-वर्गीकरण का अधिकार दिया।',
  },
  {
    id: 'caq-002',
    quizType: 'daily_10',
    dateOrMonth: '2026-09-28',
    category: 'New Acts & Bills',
    exam: ['CLAT', 'AILET'],
    question: 'Under the Bharatiya Nyaya Sanhita (BNS), 2023, which of the following novel penal punishments was statutorily introduced for the first time in Indian criminal law for petty offenses?',
    questionHi: 'भारतीय न्याय संहिता (BNS), 2023 के तहत छोटे अपराधों के लिए भारतीय आपराधिक कानून में पहली बार कौन सी नई सजा जोड़ी गई?',
    options: [
      'Exile or transportation across seas',
      'Community Service',
      'Solitary confinement without trial',
      'Loss of citizenship rights'
    ],
    optionsHi: [
      'देश निकाला या काला पानी',
      'सामुदायिक सेवा (Community Service)',
      'बिना मुकदमे के एकांत कारावास',
      'नागरिकता अधिकारों की जब्ती'
    ],
    answer: 1,
    explanation: 'Section 4(f) of the Bharatiya Nyaya Sanhita (BNS) officially added "Community Service" as a recognized statutory punishment for minor offenses such as petty theft, public defamation, and minor public nuisance.',
    explanationHi: 'बीएनएस की धारा 4(f) ने छोटे अपराधों के लिए औपचारिक रूप से "सामुदायिक सेवा" को सजा के रूप में मान्यता दी।',
  },
  {
    id: 'caq-003',
    quizType: 'daily_10',
    dateOrMonth: '2026-09-28',
    category: 'International Treaties & Geopolitics',
    exam: ['CLAT', 'AILET'],
    question: 'Which country formally assumed the rotating Presidency of the G20 for the year 2025 following Brazil\'s 2024 presidency?',
    questionHi: 'ब्राजील के 2024 कार्यकाल के बाद वर्ष 2025 के लिए जी20 की अध्यक्षता किस देश ने संभाली?',
    options: [
      'South Africa',
      'Australia',
      'Germany',
      'Saudi Arabia'
    ],
    optionsHi: [
      'दक्षिण अफ्रीका',
      'ऑस्ट्रेलिया',
      'जर्मनी',
      'सऊदी अरब'
    ],
    answer: 0,
    explanation: 'South Africa hosted the G20 summit in 2025, marking the culmination of the 4-year cycle of developing economies holding the presidency (Indonesia 2022, India 2023, Brazil 2024, South Africa 2025).',
    explanationHi: 'दक्षिण अफ्रीका ने 2025 में जी20 की अध्यक्षता संभाली।',
  },
  {
    id: 'caq-004',
    quizType: 'daily_10',
    dateOrMonth: '2026-09-28',
    category: 'Science, Space & Tech',
    exam: ['CLAT', 'AILET'],
    question: 'India\'s ambitious crewed spaceflight programme aiming to send an Indian crew into Low Earth Orbit (LEO) is officially named:',
    questionHi: 'भारतीय अंतरिक्ष यात्रियों को पृथ्वी की निचली कक्षा में भेजने के भारत के मानव अंतरिक्ष मिशन का आधिकारिक नाम क्या है?',
    options: [
      'Aditya-L1',
      'Gaganyaan',
      'Shukrayaan',
      'Mangalyaan-2'
    ],
    optionsHi: [
      'आदित्य-एल1',
      'गगनयान',
      'शुक्रयान',
      'मंगलयान-2'
    ],
    answer: 1,
    explanation: 'ISRO\'s Gaganyaan project envisions demonstration of human spaceflight capability by launching a crew of 3 members to an orbit of 400 km for a 3-day mission.',
    explanationHi: 'इसरो का गगनयान मिशन भारत का पहला मानव अंतरिक्ष उड़ान कार्यक्रम है।',
  },
  {
    id: 'caq-005',
    quizType: 'daily_10',
    dateOrMonth: '2026-09-28',
    category: 'Environment & Climate',
    exam: ['CLAT', 'AILET'],
    question: 'At which historic COP summit did nations agree on establishing a dedicated "Loss and Damage Fund" to assist climate-vulnerable developing countries?',
    questionHi: 'किस ऐतिहासिक सीओपी (COP) सम्मेलन में जलवायु से प्रभावित विकासशील देशों के लिए "हानि एवं क्षति कोष" (Loss and Damage Fund) स्थापित करने पर सहमति बनी?',
    options: [
      'COP21 (Paris)',
      'COP26 (Glasgow)',
      'COP27 (Sharm el-Sheikh)',
      'COP28 (Dubai)'
    ],
    optionsHi: [
      'सीओपी21 (पेरिस)',
      'सीओपी26 (ग्लासगो)',
      'सीओपी27 (शर्म अल-शेख)',
      'सीओपी28 (दुबई)'
    ],
    answer: 2,
    explanation: 'COP27 held in Sharm el-Sheikh, Egypt (2022) achieved the landmark consensus to establish the Loss and Damage Fund, which was operationalized at COP28 in Dubai (2023).',
    explanationHi: 'मिस्र के शर्म अल-शेख में आयोजित सीओपी27 में इस कोष पर सहमति बनी थी।',
  },
  {
    id: 'caq-006',
    quizType: 'daily_20',
    dateOrMonth: '2026-09-28',
    category: 'Constitutional Amendments',
    exam: ['CLAT', 'AILET'],
    question: 'The 106th Constitutional Amendment Act, 2023 (Nari Shakti Vandan Adhiniyam) provides what percentage of reservation for women in the Lok Sabha, State Legislative Assemblies, and Delhi Assembly?',
    questionHi: '106वें संविधान संशोधन अधिनियम, 2023 (नारी शक्ति वंदन अधिनियम) द्वारा लोकसभा और विधानसभाओं में महिलाओं के लिए कितने प्रतिशत आरक्षण का प्रावधान किया गया है?',
    options: [
      '25%',
      '33% (One-third)',
      '50%',
      '30%'
    ],
    optionsHi: [
      '25%',
      '33% (एक-तिहाई)',
      '50%',
      '30%'
    ],
    answer: 1,
    explanation: 'The Act reserves one-third (33%) of seats for women in the House of the People (Lok Sabha), State Legislative Assemblies, and the Legislative Assembly of the National Capital Territory of Delhi for a 15-year period.',
    explanationHi: 'लोकसभा और राज्य विधानसभाओं में 33% सीटें महिलाओं के लिए आरक्षित की गई हैं।',
  },
  {
    id: 'caq-007',
    quizType: 'daily_20',
    dateOrMonth: '2026-09-28',
    category: 'Economy & Banking',
    exam: ['CLAT', 'AILET'],
    question: 'The Monetary Policy Committee (MPC) of the Reserve Bank of India consists of how many total voting members?',
    questionHi: 'भारतीय रिजर्व बैंक की मौद्रिक नीति समिति (MPC) में कुल कितने मतदान सदस्य होते हैं?',
    options: [
      '5 members',
      '6 members (3 from RBI, 3 appointed by Central Government)',
      '7 members',
      '9 members'
    ],
    optionsHi: [
      '5 सदस्य',
      '6 सदस्य (3 आरबीआई से, 3 केंद्र सरकार द्वारा नियुक्त)',
      '7 सदस्य',
      '9 सदस्य'
    ],
    answer: 1,
    explanation: 'Under Section 45ZB of the amended RBI Act 1934, the MPC consists of 6 members: the RBI Governor (Chairperson), the Deputy Governor in charge of monetary policy, one RBI officer, and three external members appointed by the Central Government.',
    explanationHi: 'एमपीसी में 6 सदस्य होते हैं (3 आरबीआई से और 3 केंद्र सरकार द्वारा नियुक्त)।',
  },
  {
    id: 'caq-008',
    quizType: 'daily_20',
    dateOrMonth: '2026-09-28',
    category: 'Awards & Honors',
    exam: ['CLAT', 'AILET'],
    question: 'Who was conferred the 58th Jnanpith Award (awarded in 2024 for year 2023) for monumental contributions to literature?',
    questionHi: 'साहित्य में योगदान के लिए 58वें ज्ञानपीठ पुरस्कार से किसे सम्मानित किया गया?',
    options: [
      'Damodar Mauzo and Amitav Ghosh',
      'Gulzar (Sampooran Singh Kalra) and Jagadguru Rambhadracharya',
      'Arundhati Roy and Vikram Seth',
      'Geetanjali Shree and Daisy Rockwell'
    ],
    optionsHi: [
      'दामोदर मौजो और अमिताव घोष',
      'गुलज़ार (संपूर्ण सिंह कालरा) और जगद्गुरु रामभद्राचार्य',
      'अरुंधति रॉय और विक्रम सेठ',
      'गीतांजलि श्री और डेज़ी रॉकवेल'
    ],
    answer: 1,
    explanation: 'The 58th Jnanpith Award was jointly conferred on celebrated Urdu poet-lyricist Gulzar and distinguished Sanskrit scholar Jagadguru Rambhadracharya.',
    explanationHi: 'प्रसिद्ध उर्दू कवि गुलज़ार और संस्कृत विद्वान जगद्गुरु रामभद्राचार्य को संयुक्त रूप से प्रदान किया गया।',
  },
  {
    id: 'caq-009',
    quizType: 'weekly_50',
    dateOrMonth: '2026-09-28',
    category: 'International Courts & Law',
    exam: ['CLAT', 'AILET'],
    question: 'The principal judicial organ of the United Nations, the International Court of Justice (ICJ), has its permanent seat at:',
    questionHi: 'संयुक्त राष्ट्र के प्रधान न्यायिक अंग, अंतर्राष्ट्रीय न्यायालय (ICJ) का स्थायी मुख्यालय कहाँ स्थित है?',
    options: [
      'Geneva, Switzerland',
      'New York City, USA',
      'The Hague (Peace Palace), Netherlands',
      'Vienna, Austria'
    ],
    optionsHi: [
      'जिनेवा, स्विट्जरलैंड',
      'न्यूयॉर्क शहर, यूएसए',
      'द हेग (पीस पैलेस), नीदरलैंड्स',
      'विएना, ऑस्ट्रिया'
    ],
    answer: 2,
    explanation: 'The ICJ was established in June 1945 by the Charter of the UN and began work in April 1946 at the Peace Palace in The Hague, Netherlands.',
    explanationHi: 'आईसीजे का मुख्यालय द हेग, नीदरलैंड्स में पीस पैलेस में स्थित है।',
  },
  {
    id: 'caq-010',
    quizType: 'weekly_50',
    dateOrMonth: '2026-09-28',
    category: 'Sports & Culture',
    exam: ['CLAT', 'AILET'],
    question: 'The official motto of the Paris 2024 Olympic Games was:',
    questionHi: 'पेरिस 2024 ओलंपिक खेलों का आधिकारिक आदर्श वाक्य (Motto) क्या था?',
    options: [
      'Faster, Higher, Stronger — Together',
      'Games Wide Open (Ouvrons grand les Jeux)',
      'United by Emotion',
      'Share the Passion'
    ],
    optionsHi: [
      'फास्टर, हायर, स्ट्रॉन्गर — टुगेदर',
      'गेम्स वाइड ओपन (Games Wide Open)',
      'यूनाइटेड बाय इमोशन',
      'शेयर द पैशन'
    ],
    answer: 1,
    explanation: 'The slogan for the 2024 Paris Olympic and Paralympic Games was "Games Wide Open" ("Ouvrons grand les Jeux").',
    explanationHi: 'पेरिस 2024 का आधिकारिक नारा "गेम्स वाइड ओपन" था।',
  }
];
