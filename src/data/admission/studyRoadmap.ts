export interface RoadmapLevel {
  levelNumber: number;
  levelName: string;
  levelNameHi: string;
  phase: string;
  targetDurationWeeks: string;
  keyGoals: string[];
  keyGoalsHi: string[];
  recommendedChecklist: {
    task: string;
    taskHi: string;
  }[];
}

export const ZERO_TO_EXAM_ROADMAP: RoadmapLevel[] = [
  {
    levelNumber: 0,
    levelName: 'Understand Exam & Pattern',
    levelNameHi: 'परीक्षा प्रारूप एवं नियम समझें',
    phase: 'Orientation',
    targetDurationWeeks: 'Week 1',
    keyGoals: [
      'Compare CLAT (120 Q, 5 sections, passage-based) vs AILET (150 Q, 3 sections).',
      'Understand the negative marking formula (-0.25 mark per incorrect response).',
      'Download and read the official notification and sample question booklets from Consortium & NLU Delhi.',
      'Take a 30-minute diagnostic test to establish a baseline score.'
    ],
    keyGoalsHi: [
      'CLAT (120 प्रश्न) बनाम AILET (150 प्रश्न) की तुलना समझें।',
      'नकारात्मक अंकन योजना (-0.25 अंक) को समझें।',
      'कंसोर्टियम और एनएलयू दिल्ली की आधिकारिक अधिसूचना पढ़ें।',
      'बेसलाइन स्कोर जानने के लिए डायग्नोस्टिक टेस्ट दें।'
    ],
    recommendedChecklist: [
      { task: 'Analyze the CLAT 2024–2027 official 120-question notification', taskHi: 'CLAT आधिकारिक अधिसूचना का विश्लेषण करें' },
      { task: 'Check eligibility criteria (45% in 10+2, no upper age limit)', taskHi: 'पात्रता मानदंडों की पुष्टि करें' },
      { task: 'Complete the Diagnostic Assessment Test', taskHi: 'डायग्नोस्टिक मूल्यांकन टेस्ट पूरा करें' }
    ]
  },
  {
    levelNumber: 1,
    levelName: 'Core Foundations & Mental Conditioning',
    levelNameHi: 'मूलभूत आधार एवं मानसिक तैयारी',
    phase: 'Foundation',
    targetDurationWeeks: 'Weeks 2–4',
    keyGoals: [
      'Build vocabulary foundations using Norman Lewis Word Power Made Easy root words.',
      'Read 2 long-form editorial essays daily (The Hindu / Indian Express / Project Syndicate).',
      'Familiarize with the Indian Constitutional architecture: Preamble, Fundamental Rights, and Writs.',
      'Learn the 50 high-frequency legal maxims.'
    ],
    keyGoalsHi: [
      'रूट वर्ड के माध्यम से शब्दावली का निर्माण करें।',
      'दैनिक रूप से 2 प्रमुख संपादकीय निबंध पढ़ें।',
      'भारतीय संविधान की प्रस्तावना, मौलिक अधिकार और रिट का अध्ययन करें।',
      '50 महत्वपूर्ण विधिक सूत्रों (Legal Maxims) को याद करें।'
    ],
    recommendedChecklist: [
      { task: 'Complete Word Power Made Easy Sessions 1 to 15', taskHi: 'वर्ड पावर मेड ईजी के 1-15 सत्र पूरे करें' },
      { task: 'Memorize top 25 Legal Maxims with pronunciation and application', taskHi: 'शीर्ष 25 लीगल मैक्सिम्स को याद करें' },
      { task: 'Study Articles 12 to 35 of the Constitution', taskHi: 'संविधान के अनुच्छेद 12 से 35 का अध्ययन करें' }
    ]
  },
  {
    levelNumber: 2,
    levelName: 'Reading Speed & Comprehension Lab',
    levelNameHi: 'पठन गति एवं समझ प्रयोगशाला',
    phase: 'Skilling',
    targetDurationWeeks: 'Weeks 5–7',
    keyGoals: [
      'Target reading speed of 250 to 300 words per minute with >80% comprehension retention.',
      'Eliminate subvocalization (mental whispering) during passage reading.',
      'Practice identifying authorial tone (analytical, polemical, reverent, satirical) across 450-word passages.',
      'Master the art of skimming data-heavy paragraphs without losing central context.'
    ],
    keyGoalsHi: [
      '80% से अधिक समझ के साथ 250-300 शब्द प्रति मिनट की पढ़ने की गति का लक्ष्य रखें।',
      'गद्यांश पढ़ते समय मन में बुदबुदाने की आदत बंद करें।',
      '450 शब्दों के गद्यांशों में लेखक के स्वर और दृष्टिकोण की पहचान करें।'
    ],
    recommendedChecklist: [
      { task: 'Run 10 sessions in the Reading Comprehension Lab', taskHi: 'आरसी लैब में 10 सत्र पूरे करें' },
      { task: 'Track average Words Per Minute (WPM) progress', taskHi: 'अपनी औसत पठन गति (WPM) को ट्रैक करें' }
    ]
  },
  {
    levelNumber: 3,
    levelName: 'Concept Building in Core Subjects',
    levelNameHi: 'मुख्य विषयों में अवधारणा निर्माण',
    phase: 'Core Theory',
    targetDurationWeeks: 'Weeks 8–12',
    keyGoals: [
      'Legal Reasoning: Master Principle -> Fact -> Application mechanics. Learn Torts, Contracts, Crimes, and Constitutional Principles.',
      'Logical Reasoning: Understand Premises, Conclusions, and Assumptions. Learn Strengthening and Weakening rules.',
      'Quantitative Techniques: Review Class 10 Arithmetic (Ratios, Percentages, Averages, Profit/Loss, Mensuration).',
      'Current Affairs: Create monthly compilations categorized into Supreme Court rulings, Acts, and International events.'
    ],
    keyGoalsHi: [
      'विधिक तर्कशक्ति: सिद्धांत -> तथ्य -> अनुप्रयोग पद्धति में निपुणता प्राप्त करें।',
      'तार्किक तर्कशक्ति: कथन, निष्कर्ष और पूर्वधारणाओं के नियम समझें।',
      'मात्रात्मक तकनीक: कक्षा 10 अंकगणित (अनुपात, प्रतिशत, औसत) का पुनरावलोकन करें।',
      'समसामयिक घटनाक्रम: उच्चतम न्यायालय के निर्णयों और नए कानूनों की मासिक डायरी बनाएं।'
    ],
    recommendedChecklist: [
      { task: 'Complete Legal Reasoning Lab 6-step walkthroughs', taskHi: 'लीगल रीजनिंग लैब के 6-चरणीय मॉड्यूल पूरे करें' },
      { task: 'Complete Critical Reasoning argument deconstruction drills', taskHi: 'क्रिटिकल रीजनिंग तर्क विखंडन अभ्यास पूरा करें' }
    ]
  },
  {
    levelNumber: 4,
    levelName: 'Topic Practice & Elimination Drills',
    levelNameHi: 'विषयवार अभ्यास एवं विकल्प उन्मूलन तकनीक',
    phase: 'Targeted Practice',
    targetDurationWeeks: 'Weeks 13–16',
    keyGoals: [
      'Solve at least 50 questions per topic from the question bank.',
      'Train option elimination: eliminate obviously extreme choices (using words like "never", "always", "solely").',
      'Practice AILET Section C analytical puzzles (seating arrangements and blood relation syllogisms).',
      'Convert narrative caselet paragraphs into structured 2x2 or 3x3 data tables.'
    ],
    keyGoalsHi: [
      'प्रत्येक विषय से कम से कम 50 प्रश्नों का अभ्यास करें।',
      'विकल्प उन्मूलन तकनीक: अत्यधिक चरम विकल्पों को तुरंत हटाएं।',
      'AILET विश्लेषणात्मक पहेलियों (बैठक व्यवस्था) का अभ्यास करें।'
    ],
    recommendedChecklist: [
      { task: 'Attempt 300+ topic-wise questions in the practice engine', taskHi: 'प्रैक्टिस इंजन में 300+ प्रश्नों का प्रयास करें' },
      { task: 'Log every incorrect answer in the Error Notebook', taskHi: 'त्रुटि नोटबुक में सभी गलत उत्तर दर्ज करें' }
    ]
  },
  {
    levelNumber: 5,
    levelName: 'Previous Years Papers (PYQs) Deep Dive',
    levelNameHi: 'विगत वर्षों के प्रश्न पत्रों (PYQ) का गहन विश्लेषण',
    phase: 'Benchmarking',
    targetDurationWeeks: 'Weeks 17–20',
    keyGoals: [
      'Solve CLAT UG 2024 and 2025 papers in strict 2-hour offline simulated conditions.',
      'Solve AILET UG 2024 and 2025 papers under 120-minute timed pressure.',
      'Analyze recurring thematic patterns: which types of legal principles recur most frequently.',
      'Benchmark score vs historic opening/closing cutoffs for Tier 1 NLUs.'
    ],
    keyGoalsHi: [
      'CLAT 2024 और 2025 के प्रश्नपत्र 2 घंटे की समय सीमा में हल करें।',
      'AILET 2024 और 2025 के प्रश्नपत्र 120 मिनट में हल करें।',
      'पुनरावृत्त होने वाले विधिक सिद्धांतों और विषयों का विश्लेषण करें।'
    ],
    recommendedChecklist: [
      { task: 'Complete CLAT 2024 & 2025 official paper review', taskHi: 'CLAT 2024 एवं 2025 का आधिकारिक पेपर हल करें' },
      { task: 'Complete AILET 2024 & 2025 official paper review', taskHi: 'AILET 2024 एवं 2025 का आधिकारिक पेपर हल करें' }
    ]
  },
  {
    levelNumber: 6,
    levelName: 'Sectional Speed Drills',
    levelNameHi: 'अनुभागीय गति एवं समय प्रबंधन ड्रिल',
    phase: 'Speed Optimization',
    targetDurationWeeks: 'Weeks 21–24',
    keyGoals: [
      'Legal Reasoning: 30 questions in 32 minutes (~64 seconds per question).',
      'English Language: 24 questions in 25 minutes (~62 seconds per question).',
      'Current Affairs & GK: 28 questions in 10 minutes (~21 seconds per question).',
      'Logical Reasoning: 24 questions in 25 minutes (~62 seconds per question).',
      'Quantitative Techniques: 12 questions in 15 minutes (~75 seconds per question).'
    ],
    keyGoalsHi: [
      'विधिक तर्क: 32 मिनट में 30 प्रश्न।',
      'अंग्रेजी भाषा: 25 मिनट में 24 प्रश्न।',
      'करेंट अफेयर्स: 10 मिनट में 28 प्रश्न (तीव्र गति)।',
      'तार्किक तर्क: 25 मिनट में 24 प्रश्न।',
      'मात्रात्मक तकनीक: 15 मिनट में 12 प्रश्न।'
    ],
    recommendedChecklist: [
      { task: 'Take all 5 Sectional Speed Tests in the Mock Engine', taskHi: 'मॉक इंजन में सभी 5 अनुभागीय स्पीड टेस्ट दें' },
      { task: 'Achieve >85% accuracy in the Speed Lab', taskHi: 'स्पीड लैब में 85% से अधिक सटीकता प्राप्त करें' }
    ]
  },
  {
    levelNumber: 7,
    levelName: 'Full-Length Proctored Mocks',
    levelNameHi: 'संपूर्ण मॉक टेस्ट सिमुलेशन',
    phase: 'Simulation',
    targetDurationWeeks: 'Weeks 25–28',
    keyGoals: [
      'Take at least 2 full-length mocks per week strictly between 2:00 PM and 4:00 PM (actual exam time).',
      'Practice with physical OMR sheets to build bubbling speed and avoid misalignment errors.',
      'Develop personal sectional ordering (e.g., GK -> English -> Legal -> Logical -> Quant).',
      'Never review a mock superficially; spend 3 hours analyzing every question.'
    ],
    keyGoalsHi: [
      'सप्ताह में कम से कम 2 संपूर्ण मॉक दोपहर 2:00 से 4:00 बजे के बीच दें।',
      'ओएमआर शीट पर गोले भरने का अभ्यास करें।',
      'अपना व्यक्तिगत सेक्शन क्रम तय करें (जैसे: जीके -> अंग्रेजी -> लीगल -> लॉजिकल -> क्वांट)।'
    ],
    recommendedChecklist: [
      { task: 'Complete CLAT Simulation Mock #1 and AILET Mock #1', taskHi: 'CLAT मॉक #1 और AILET मॉक #1 पूरा करें' },
      { task: 'Conduct 3-hour post-mock diagnostic review', taskHi: 'मॉक के बाद 3 घंटे का गहन विश्लेषण करें' }
    ]
  },
  {
    levelNumber: 8,
    levelName: 'Error Notebook Remediation',
    levelNameHi: 'त्रुटि नोटबुक सुधार एवं कमियों का निवारण',
    phase: 'Error Correction',
    targetDurationWeeks: 'Weeks 29–30',
    keyGoals: [
      'Categorize all recorded mistakes into the 10 failure modes (Concept gap, Misread, Trap, Time pressure, etc.).',
      'Re-attempt all missed questions after 7 days without looking at the answer key.',
      'Identify recurring blind spots: is legal principle misapplication happening on complex exceptions?',
      'Ensure zero repeat errors on identical logical fallacy patterns.'
    ],
    keyGoalsHi: [
      'अपनी सभी गलतियों को 10 श्रेणियों (अवधारणा की कमी, गलत पढ़ना, समय का दबाव आदि) में बांटें।',
      '7 दिनों बाद गलत हुए प्रश्नों को पुनः हल करें।',
      'समान त्रुटियों की पुनरावृत्ति को शून्य पर लाएं।'
    ],
    recommendedChecklist: [
      { task: 'Review 100% of items marked \'needs_review\' in Error Notebook', taskHi: 'त्रुटि नोटबुक के सभी समीक्षाधीन प्रश्नों को हल करें' },
      { task: 'Mark mastered concepts and verify retention', taskHi: 'सुधारे गए विषयों को मास्टर के रूप में चिह्नित करें' }
    ]
  },
  {
    levelNumber: 9,
    levelName: 'Consolidation & Spaced Revision',
    levelNameHi: 'अंतिम दोहराव एवं स्पेसड रिवीजन',
    phase: 'Revision',
    targetDurationWeeks: 'Weeks 31–32',
    keyGoals: [
      'Run rapid spaced-repetition sessions across all 9 flashcard categories.',
      'Review the Legal Current Affairs Tracker: all 7-judge and 5-judge Supreme Court rulings of the year.',
      'Quick-fire recap of all Constitutional Articles (Part I to Part XX) and major Amendments.',
      'Consolidate arithmetic formulas and mental calculation shortcuts in Quant.'
    ],
    keyGoalsHi: [
      'फ्लैशकार्ड डेक के माध्यम से सभी 9 श्रेणियों का त्वरित रिवीजन करें।',
      'विधिक समसामयिकी ट्रैकर: वर्ष के सभी प्रमुख संविधान पीठ के फैसलों का पुनरावलोकन।',
      'संविधान के सभी महत्वपूर्ण अनुच्छेदों और संशोधनों का सार देखें।'
    ],
    recommendedChecklist: [
      { task: 'Complete Spaced Repetition Flashcard Review', taskHi: 'फ्लैशकार्ड रिवीजन पूरा करें' },
      { task: 'Review Legal Current Affairs Timeline', taskHi: 'विधिक समसामयिकी समयरेखा का अध्ययन करें' }
    ]
  },
  {
    levelNumber: 10,
    levelName: 'Final Exam Simulation & Readiness',
    levelNameHi: 'अंतिम परीक्षा सिमुलेशन एवं मानसिक स्थिरता',
    phase: 'Exam Week',
    targetDurationWeeks: 'Exam Week',
    keyGoals: [
      'Maintain stable circadian rhythm: wake up early, ensure peak alertness between 2:00 PM and 4:00 PM.',
      'Prepare exam day kit: Admit card, original photo ID proof, transparent black ballpoint pens, analog watch.',
      'Do not start new unfamiliar reference books in the final 72 hours.',
      'Approach the exam with calm confidence, focusing on high accuracy and disciplined negative-marking avoidance.'
    ],
    keyGoalsHi: [
      'परीक्षा समय (दोपहर 2 से 4 बजे) पर मानसिक सतर्कता बनाए रखें।',
      'परीक्षा किट तैयार करें: एडमिट कार्ड, मूल पहचान पत्र, काले बॉलपॉइंट पेन।',
      'अंतिम 72 घंटों में कोई नया विषय न शुरू करें। शांत मन से परीक्षा दें।'
    ],
    recommendedChecklist: [
      { task: 'Verify Exam Center location and Admit Card details', taskHi: 'एडमिट कार्ड और परीक्षा केंद्र की पुष्टि करें' },
      { task: 'Complete final mental simulation and rest well', taskHi: 'अंतिम मानसिक सिमुलेशन पूरा करें और पर्याप्त विश्राम लें' }
    ]
  }
];
