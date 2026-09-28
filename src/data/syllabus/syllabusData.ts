import { SyllabusNode } from '../../types';

export const OFFICIAL_SYLLABUS: SyllabusNode[] = [
  {
    id: 'syl-clat-english',
    title: 'English Language',
    titleHi: 'अंग्रेजी भाषा',
    section: 'English Language',
    exam: ['CLAT', 'AILET'],
    program: ['UG'],
    officialWeightage: 'CLAT: 22–26 Questions (~20%) | AILET: 50 Questions (~33.3%)',
    description: 'In CLAT, passages of ~450 words derived from contemporary or historically significant fiction and non-fiction. Tests comprehension, language skills, inferential thinking, and contextual vocabulary rather than rote grammar memorization. In AILET, covers comprehension passages, grammar, contextual vocabulary, idioms, sentence correction, and verbal ability.',
    descriptionHi: 'CLAT में समकालीन या ऐतिहासिक रूप से महत्वपूर्ण कथा और गैर-कथा साहित्य से लगभग 450 शब्दों के गद्यांश। यह रटने के बजाय समझ, निष्कर्ष निकालने की क्षमता और संदर्भात्मक शब्दावली का परीक्षण करता है। AILET में गद्यांश, व्याकरण, शब्दावली और वाक्य शुद्धि शामिल हैं।',
    topics: [
      {
        id: 'eng-reading-comp',
        name: 'Reading Comprehension & Passage Analysis',
        nameHi: 'अपठित गद्यांश एवं विश्लेषण',
        subtopics: [
          'Passage Structure & Flow',
          'Main Idea & Central Theme Extraction',
          'Author\'s Tone & Perspective (Objective, Sarcastic, Critical, Analytic)',
          'Fact vs Opinion Identification',
          'Implicit vs Explicit Information'
        ],
        officialGuidance: 'Consortium guideline: Passages will be of Class 12 standard. Read critically to extract the central argument and differentiate premises from author opinions.',
        officialGuidanceHi: 'कक्षा 12 स्तर के गद्यांश। केंद्रीय तर्क को समझने और लेखक के विचार एवं तथ्यों में अंतर करने के लिए आलोचनात्मक अध्ययन करें।'
      },
      {
        id: 'eng-inference-arguments',
        name: 'Inferences, Conclusions & Argument Evaluation',
        nameHi: 'निष्कर्ष, अनुमान एवं तर्क मूल्यांकन',
        subtopics: [
          'Drawing Logical Inferences from Given Text',
          'Identifying Unstated Assumptions in the Passage',
          'Strengthening or Weakening Author Claims',
          'Predicting Logical Conclusions',
          'Evaluating Evidence Provided in Context'
        ],
        officialGuidance: 'Do not import external knowledge; base all inferences strictly on what is stated or strongly implied in the ~450 word text.',
        officialGuidanceHi: 'बाहरी जानकारी का उपयोग न करें; सभी निष्कर्ष दिए गए 450 शब्दों के पाठ पर आधारित होने चाहिए।'
      },
      {
        id: 'eng-vocab-context',
        name: 'Vocabulary in Context & Lexical Nuances',
        nameHi: 'संधर्भ में शब्दावली एवं शब्दार्थ',
        subtopics: [
          'Contextual Word Meaning in Passage',
          'Idiomatic & Metaphorical Expressions',
          'Synonyms and Antonyms in Specific Sentences',
          'Tone-Indicating Words',
          'Foreign Legal/Literary Phrases in English'
        ],
        officialGuidance: 'Questions test what a word or phrase means in the exact context of the paragraph, not just dictionary definitions.',
        officialGuidanceHi: 'प्रश्न केवल शब्दकोश परिभाषाओं का नहीं, बल्कि अनुच्छेद के संदर्भ में शब्द के सटीक अर्थ का परीक्षण करते हैं।'
      },
      {
        id: 'eng-summary-comparison',
        name: 'Summary, Comparison & Viewpoint Contrast',
        nameHi: 'सारांश, तुलना एवं दृष्टिकोण भिन्नता',
        subtopics: [
          'Identifying Best Summary/Paraphrase',
          'Comparing Conflicting Arguments within Text',
          'Identifying Counterarguments Anticipated by Author',
          'Structural Transition Words & Logical Connectors'
        ],
        officialGuidance: 'Effective summaries capture both the core thesis and the primary supporting argument without redundant examples.',
        officialGuidanceHi: 'प्रभावी सारांश मुख्य विचार और प्राथमिक तर्कों को बिना अनावश्यक उदाहरणों के संक्षेप में प्रस्तुत करता है।'
      }
    ]
  },

  {
    id: 'syl-clat-ca-gk',
    title: 'Current Affairs including General Knowledge',
    titleHi: 'समसामयिक मामले एवं सामान्य ज्ञान',
    section: 'Current Affairs including General Knowledge',
    exam: ['CLAT', 'AILET'],
    program: ['UG'],
    officialWeightage: 'CLAT: 28–32 Questions (~25%) | AILET: 30 Questions (~20%)',
    description: 'In CLAT, passage-based questions (~450 words) from journalistic sources, government releases, and historical context. Questions test knowledge of contemporary events in India and the world, arts and culture, international affairs, and historically significant events. In AILET, standalone MCQs testing current affairs, statutory developments, constitutional updates, and static GK.',
    descriptionHi: 'CLAT में समाचार पत्रों, सरकारी रिपोर्टों और ऐतिहासिक संदर्भों से 450 शब्दों के गद्यांश आधारित प्रश्न। राष्ट्रीय और अंतर्राष्ट्रीय समसामयिक घटनाओं, कला-संस्कृति, और ऐतिहासिक महत्व की घटनाओं का परीक्षण। AILET में बहुविकल्पीय प्रश्न।',
    topics: [
      {
        id: 'ca-national-legal',
        name: 'National Affairs, Constitution & Legal Developments',
        nameHi: 'राष्ट्रीय मामले, संविधान एवं विधिक विकास',
        subtopics: [
          'Landmark Supreme Court & High Court Rulings',
          'Constitutional Bench Verdicts & Interpretations',
          'New Acts & Parliamentary Bills (BNS, BNSS, BSA, DPDP)',
          'Key Government Policies, Schemes & Welfare Programs',
          'Law Commission Recommendations & Judicial Appointments'
        ],
        officialGuidance: 'Pay special attention to legal developments, key committee recommendations, and constitutional amendments of the preceding 12 months.',
        officialGuidanceHi: 'पिछले 12 महीनों के विधिक विकास, समिति की सिफारिशों और संवैधानिक संशोधनों पर विशेष ध्यान दें।'
      },
      {
        id: 'ca-international-geopolitics',
        name: 'International Affairs & Global Geopolitics',
        nameHi: 'अंतर्राष्ट्रीय मामले एवं वैश्विक भू-राजनीति',
        subtopics: [
          'Bilateral Summits & Multilateral Treaties (G20, BRICS, Quad, SCO)',
          'United Nations, ICJ, ICC Resolutions & Conventions',
          'Global Conflicts, Peace Accords & Territorial Disputes',
          'Global Indices (Human Development, Hunger, Press Freedom, Rule of Law)',
          'Major International Elections & Leadership Shifts'
        ],
        officialGuidance: 'Questions connect current international events with their historical origins and governing international treaties.',
        officialGuidanceHi: 'अंतर्राष्ट्रीय घटनाओं को उनके ऐतिहासिक मूल और संबंधित अंतरराष्ट्रीय संधियों के साथ जोड़कर प्रश्न पूछे जाते हैं।'
      },
      {
        id: 'ca-economy-banking',
        name: 'Economy, Banking & Regulatory Frameworks',
        nameHi: 'अर्थव्यवस्था, बैंकिंग एवं नियामक ढांचा',
        subtopics: [
          'Union Budget & Economic Survey Highlights',
          'RBI Monetary Policy Decisions & Inflation Metrics',
          'SEBI, Competition Commission of India (CCI) Decisions',
          'Insolvency & Bankruptcy Code (IBC) Major Developments',
          'World Bank, IMF, WTO Reports & Global Trade Trends'
        ],
        officialGuidance: 'Focus on macroeconomic fundamentals and regulatory shifts with broad citizen or corporate impacts.',
        officialGuidanceHi: 'मैक्रोइकॉनॉमिक बुनियादी बातों और बड़े नियामक बदलावों पर ध्यान केंद्रित करें।'
      },
      {
        id: 'ca-science-environment',
        name: 'Science, Technology, Climate & Environment',
        nameHi: 'विज्ञान, प्रौद्योगिकी, जलवायु एवं पर्यावरण',
        subtopics: [
          'ISRO Space Missions & Global Space Milestones',
          'COP Climate Summits, Carbon Targets & IPCC Reports',
          'Artificial Intelligence, Cyber Law & Digital Governance',
          'Wildlife Protection, Biodiversity & National Parks Updates',
          'Health Policies, Medical Discoveries & Nobel Prizes'
        ],
        officialGuidance: 'Environmental law agreements and scientific milestones regularly appear as stimulus passages in CLAT.',
        officialGuidanceHi: 'पर्यावरण कानून समझौते और वैज्ञानिक मील के पत्थर नियमित रूप से CLAT गद्यांशों में आते हैं।'
      },
      {
        id: 'ca-culture-history-sports',
        name: 'Art, Culture, Historical Anniversaries & Sports',
        nameHi: 'कला, संस्कृति, ऐतिहासिक वर्षगांठ एवं खेल',
        subtopics: [
          'UNESCO World Heritage Sites & Intangible Cultural Heritage',
          'Centenary & Sesquicentenary of Historical Events',
          'Major National & International Sports Tournaments',
          'Prominent Literary Awards (Jnanpith, Booker, Sahitya Akademi)',
          'Influential Figures & Obituaries of Global Stature'
        ],
        officialGuidance: 'Historical significance connects contemporary milestones to foundational Indian and world history.',
        officialGuidanceHi: 'ऐतिहासिक महत्व वर्तमान घटनाओं को भारतीय और विश्व इतिहास की नींव से जोड़ता है।'
      }
    ]
  },

  {
    id: 'syl-clat-legal-reasoning',
    title: 'Legal Reasoning',
    titleHi: 'विधिक तर्कशक्ति',
    section: 'Legal Reasoning',
    exam: ['CLAT'],
    program: ['UG'],
    officialWeightage: 'CLAT: 28–32 Questions (~25%)',
    description: 'Passages of ~450 words relating to legal matters, public policy questions, or moral philosophies. CRITICAL OFFICIAL NOTE: Prior knowledge of law is NOT required. Candidates must identify the legal rule or principle stated in the passage and apply it strictly to the fact situations presented without imposing outside legal doctrine.',
    descriptionHi: 'विधिक मामलों, सार्वजनिक नीति और नैतिक दर्शन से संबंधित 450 शब्दों के गद्यांश। महत्वपूर्ण आधिकारिक नियम: कानून के पूर्व ज्ञान की आवश्यकता नहीं है। परीक्षार्थी को गद्यांश में दिए गए नियम को पहचानना होगा और दिए गए तथ्यों पर उसका निष्पक्ष अनुप्रयोग करना होगा।',
    topics: [
      {
        id: 'legal-principle-fact',
        name: 'Principle-Fact Application & Statutory Rules',
        nameHi: 'सिद्धांत-तथ्य अनुप्रयोग एवं संविधिक नियम',
        subtopics: [
          'Extraction of the Exact Legal Principle from Passage Text',
          'Identifying Operative Pre-conditions (If-Then Logic)',
          'Handling Exceptions and Provisos in Legal Rules',
          'Strict Fact-Bounded Application (No Personal Biases)',
          'Dealing with Multiple Conflicting Principles'
        ],
        officialGuidance: 'Even if a principle contradicts real-world legal doctrine, you must treat the principle stated in the passage as absolute truth for answering the question.',
        officialGuidanceHi: 'यदि सिद्धांत वास्तविक कानून के विपरीत भी हो, तब भी गद्यांश में दिए गए सिद्धांत को ही पूर्ण सत्य मानकर प्रश्न हल करें।'
      },
      {
        id: 'legal-constitutional-public-policy',
        name: 'Constitutional Principles & Public Policy Dilemmas',
        nameHi: 'संवैधानिक सिद्धांत एवं लोक नीति',
        subtopics: [
          'Fundamental Rights & Reasonable Restrictions',
          'Equality Before Law & Non-Discrimination (Article 14 & 15)',
          'Right to Life, Liberty & Privacy (Article 21)',
          'Freedom of Speech, Expression & Assembly (Article 19)',
          'Public Interest Litigation (PIL) & Judicial Review Standards'
        ],
        officialGuidance: 'Passages frequently explore constitutional trade-offs: individual privacy vs state security, freedom of speech vs public order.',
        officialGuidanceHi: 'गद्यांश अक्सर संवैधानिक संतुलनों पर आधारित होते हैं: व्यक्तिगत निजता बनाम राज्य सुरक्षा, अभिव्यक्ति की स्वतंत्रता बनाम लोक व्यवस्था।'
      },
      {
        id: 'legal-torts-negligence',
        name: 'Law of Torts & Civil Wrongs in Contemporary Context',
        nameHi: 'अपकृत्य विधि एवं दीवानी दायित्व',
        subtopics: [
          'Negligence, Duty of Care & Breach Standards',
          'Strict Liability vs Absolute Liability (Bhopal Gas / Oleum Gas doctrine)',
          'Vicarious Liability (Employer-Employee relations)',
          'Defamation (Libel, Slander, Fair Comment)',
          'Nuisance, Trespass & Volenti Non Fit Injuria'
        ],
        officialGuidance: 'Tort principles are framed around practical civil disputes, consumer harms, and corporate environmental responsibility.',
        officialGuidanceHi: 'अपकृत्य के सिद्धांत व्यावहारिक नागरिक विवादों, उपभोक्ता क्षति और कॉर्पोरेट पर्यावरण जिम्मेदारी पर आधारित होते हैं।'
      },
      {
        id: 'legal-contracts-obligations',
        name: 'Contractual Principles & Commercial Obligations',
        nameHi: 'संविदा सिद्धांत एवं वाणिज्यिक दायित्व',
        subtopics: [
          'Offer, Acceptance, Consideration & Free Consent',
          'Minor\'s Agreement & Capacity to Contract',
          'Breach of Contract, Damages & Liquidated Clauses',
          'Frustration of Contract (Force Majeure events)',
          'Public Policy and Void Agreements'
        ],
        officialGuidance: 'Analyze online click-wrap agreements, e-commerce terms, and contractual performance disputes.',
        officialGuidanceHi: 'ई-कॉमर्स अनुबंध, सहमति और संविदा उल्लंघन के व्यावहारिक मामलों का विश्लेषण करें।'
      },
      {
        id: 'legal-crimes-statutory-offences',
        name: 'Criminal Law Principles (BNS / IPC Foundations)',
        nameHi: 'आपराधिक विधि के सिद्धांत',
        subtopics: [
          'Actus Reus (Guilty Act) & Mens Rea (Guilty Mind)',
          'General Exceptions (Private Defence, Insanity, Mistake of Fact)',
          'Culpable Homicide vs Murder Distinctions',
          'Theft, Extortion, Criminal Breach of Trust & Cheating',
          'Strict Liability Criminal Offenses'
        ],
        officialGuidance: 'Focus on whether the factual evidence proves both the intention and the physical conduct required by the passage rule.',
        officialGuidanceHi: 'ध्यान दें कि क्या तथ्य नियम द्वारा अपेक्षित इरादे और शारीरिक कृत्य दोनों को साबित करते हैं।'
      }
    ]
  },

  {
    id: 'syl-clat-logical-reasoning',
    title: 'Logical Reasoning',
    titleHi: 'तार्किक तर्कशक्ति',
    section: 'Logical Reasoning',
    exam: ['CLAT', 'AILET'],
    program: ['UG'],
    officialWeightage: 'CLAT: 22–26 Questions (~20%) | AILET: 70 Questions (~46.7%)',
    description: 'In CLAT, passage-based critical reasoning evaluating arguments, premises, assumptions, inference, and fallacies. In AILET, extensive critical reasoning PLUS analytical reasoning, logical puzzles, syllogisms, analogies, and reasoning with legal principles.',
    descriptionHi: 'CLAT में गद्यांश आधारित आलोचनात्मक तर्कशक्ति (कथन, निष्कर्ष, पूर्वधारणा, दुर्बल/सबल तर्क)। AILET में विस्तृत क्रिटिकल रीजनिंग के साथ एनालिटिकल पहेलियां, युक्तिवाक्य, सादृश्य और विधिक सिद्धांतों पर आधारित तार्किक प्रश्न।',
    topics: [
      {
        id: 'lr-critical-arguments',
        name: 'Critical Reasoning & Argument Deconstruction',
        nameHi: 'आलोचनात्मक तर्कशक्ति एवं तर्क विखंडन',
        subtopics: [
          'Identifying the Core Premise and Main Conclusion',
          'Uncovering Hidden/Unstated Assumptions',
          'Strengthening the Author\'s Argument with New Evidence',
          'Weakening/Undermining the Author\'s Argument',
          'Identifying Counter-premises and Concessions'
        ],
        officialGuidance: 'Master the distinction between necessary assumptions and mere supporting premises. Watch out for extreme answer choices.',
        officialGuidanceHi: 'अनिवार्य पूर्वधारणाओं और केवल सहायक तर्कों के बीच के अंतर को समझें। अत्यधिक चरम विकल्पों से सावधान रहें।'
      },
      {
        id: 'lr-inferences-conclusions',
        name: 'Inference, Deduction & Logical Entailment',
        nameHi: 'अनुमान, निगमन एवं तार्किक परिणाम',
        subtopics: [
          'Must Be True vs Might Be True Statements',
          'Parallel Reasoning & Argument Analogies',
          'Detecting Logical Contradictions & Inconsistencies',
          'Evaluating Evidence & Resolving Apparent Paradoxes',
          'Cause-and-Effect vs Correlation Traps'
        ],
        officialGuidance: 'An inference must be 100% supported by the text without requiring any outside conjecture.',
        officialGuidanceHi: 'एक वैध निष्कर्ष को पाठ द्वारा 100% समर्थित होना चाहिए बिना किसी बाहरी अनुमान के।'
      },
      {
        id: 'lr-fallacies-argument-flaws',
        name: 'Logical Fallacies & Flaws in Reasoning',
        nameHi: 'तार्किक हेत्वाभास एवं तर्कों में त्रुटियां',
        subtopics: [
          'Ad Hominem (Attacking the Speaker)',
          'Post Hoc Ergo Propter Hoc (False Cause)',
          'Straw Man (Misrepresenting the Opponent\'s View)',
          'Slippery Slope & False Dilemma (Either/Or fallacy)',
          'Circular Reasoning (Begging the Question)'
        ],
        officialGuidance: 'Questions ask: "Which of the following best describes the flaw in the author\'s reasoning?"',
        officialGuidanceHi: 'प्रश्न पूछते हैं: "निम्नलिखित में से कौन सा विकल्प लेखक के तर्क में मुख्य दोष का सबसे अच्छा वर्णन करता है?"'
      },
      {
        id: 'lr-ailet-analytical',
        name: 'AILET Analytical Reasoning & Puzzles (AILET Specific)',
        nameHi: 'AILET विश्लेषणात्मक तर्क एवं पहेलियां',
        subtopics: [
          'Linear & Circular Seating Arrangements',
          'Blood Relations & Family Tree Deduction',
          'Direction Sense & Spatial Tracking',
          'Syllogisms & Categorical Propositions (Venn logic)',
          'Coding-Decoding & Sequential Input-Output'
        ],
        officialGuidance: 'AILET Section C contains both critical reasoning and fast analytical deduction. Practice speed-puzzle mapping.',
        officialGuidanceHi: 'AILET खंड C में क्रिटिकल और एनालिटिकल दोनों शामिल हैं। समय सीमा में पहेली हल करने का अभ्यास करें।'
      }
    ]
  },

  {
    id: 'syl-clat-quant',
    title: 'Quantitative Techniques',
    titleHi: 'मात्रात्मक तकनीक (गणित)',
    section: 'Quantitative Techniques',
    exam: ['CLAT'],
    program: ['UG'],
    officialWeightage: 'CLAT: 10–14 Questions (~10%) | AILET: None',
    description: 'Official CLAT UG specification: Short sets of facts or propositions, graphs, or other textual, pictorial or diagrammatic representations of numerical information, followed by a series of questions. Derive, infer, and manipulate numerical information using Class 10 mathematical operations: Ratios and proportions, basic algebra, mensuration, and statistical estimation.',
    descriptionHi: 'CLAT UG आधिकारिक विनिर्देश: तथ्यों, तालिकाओं, रेखाचित्रों या अनुच्छेदों के रूप में संख्यात्मक जानकारी। कक्षा 10 स्तर के गणितीय अनुप्रयोग: अनुपात-समानुपात, प्रतिशत, साधारण बीजगणित, क्षेत्रमिति और सांख्यिकीय अनुमान।',
    topics: [
      {
        id: 'qt-caselet-di',
        name: 'Caselet Data Interpretation & Tabular Analysis',
        nameHi: 'केसलेट डेटा व्याख्या एवं सारणीबद्ध विश्लेषण',
        subtopics: [
          'Converting Dense Paragraph Data into Structured Tables',
          'Multi-Variable Comparative Data Extraction',
          'Missing Value Computation in Cross-Tabulations',
          'Percentage Change vs Percentage Point Difference',
          'Ratio Comparisons across Demographic Categories'
        ],
        officialGuidance: 'CLAT Quant is almost entirely Caselet DI. Read the paragraph, construct the table first, then answer all questions in one go.',
        officialGuidanceHi: 'CLAT गणित लगभग पूरी तरह से केसलेट डीआई है। पहले गद्यांश पढ़कर तालिका बनाएं, फिर प्रश्नों के उत्तर दें।'
      },
      {
        id: 'qt-percentages-profit-loss',
        name: 'Percentages, Profit, Loss & Discount',
        nameHi: 'प्रतिशत, लाभ, हानि एवं बट्टा',
        subtopics: [
          'Fraction-to-Percentage Conversions (1/2 to 1/20 tricks)',
          'Successive Percentage Changes and Net Effects',
          'Cost Price, Selling Price & Marked Price Equations',
          'Discount Schemes and True Profit Calculations',
          'Weighted Average Percentages in Mixtures'
        ],
        officialGuidance: 'Speed in mental calculation of common percentage fractions saves critical minutes in the exam.',
        officialGuidanceHi: 'मानसिक गणना की गति परीक्षा में बहुमूल्य समय बचाती है।'
      },
      {
        id: 'qt-ratios-averages-proportions',
        name: 'Ratios, Proportions & Averages',
        nameHi: 'अनुपात, समानुपात एवं औसत',
        subtopics: [
          'Compound and Inverse Ratios',
          'Partnership Investments & Profit Distribution',
          'Weighted Average & Combined Mean Formulas',
          'Alligation Principles applied to Blends',
          'Age Word Problems in Ratio Form'
        ],
        officialGuidance: 'Express relations in common multipliers (x) to quickly resolve composite ratio word problems.',
        officialGuidanceHi: 'संयुक्त अनुपात की समस्याओं को हल करने के लिए साझा गुणक (x) का प्रयोग करें।'
      },
      {
        id: 'qt-time-speed-work',
        name: 'Time, Speed, Distance & Time-Work',
        nameHi: 'समय, गति, दूरी एवं कार्य-समय',
        subtopics: [
          'Relative Speed (Trains, Opposing/Same Directions)',
          'Average Speed Formulas (Harmonic vs Arithmetic Mean)',
          'Boats and Streams (Upstream vs Downstream Rates)',
          'Unit Work Method & Man-Days Calculations',
          'Pipes and Cisterns Inflow/Outflow Rates'
        ],
        officialGuidance: 'Focus on unitary rate principles: if a pipe fills in 4 hours, it fills 1/4th per hour.',
        officialGuidanceHi: 'इकाई दर विधि पर ध्यान दें: यदि कोई पाइप 4 घंटे में भरता है, तो प्रति घंटे 1/4 भरेगा।'
      },
      {
        id: 'qt-mensuration-algebra',
        name: 'Mensuration & Class 10 Statistical Estimation',
        nameHi: 'क्षेत्रमिति एवं कक्षा 10 सांख्यिकीय अनुमान',
        subtopics: [
          '2D Perimeter and Area (Rectangles, Triangles, Circles, Polygons)',
          '3D Surface Area & Volume (Cubes, Cylinders, Cones, Spheres)',
          'Linear Equations in Two Variables (Class 10 level)',
          'Mean, Median, Mode & Range of Frequency Distributions',
          'Graphical Approximations from Bar and Pie Charts'
        ],
        officialGuidance: 'Strictly Class 10 formulas. Memorize standard mensuration relations and units conversion.',
        officialGuidanceHi: 'कक्षा 10 के बुनियादी सूत्र। मानक क्षेत्रमिति संबंधों और इकाई रूपांतरण को याद रखें।'
      }
    ]
  },

  {
    id: 'syl-pg-law-master',
    title: 'CLAT PG & AILET PG Core Law Curriculum',
    titleHi: 'CLAT PG एवं AILET PG विधि पाठ्यक्रम',
    section: 'PG Law Core Subjects',
    exam: ['CLAT', 'AILET'],
    program: ['PG'],
    officialWeightage: 'CLAT PG: 120 Questions | AILET PG: 100 Questions',
    description: 'Primary legal materials (extracts from Supreme Court judgments, statutory provisions, constitutional amendments) followed by objective questions testing deep understanding of LL.B. curriculum.',
    descriptionHi: 'प्राथमिक विधिक सामग्री (सर्वोच्च न्यायालय के निर्णयों के अंश, संविधिक प्रावधान, संवैधानिक संशोधन) के बाद बहुविकल्पीय प्रश्न।',
    topics: [
      {
        id: 'pg-constitutional-law',
        name: 'Constitutional Law of India & Administrative Law',
        nameHi: 'भारत का संवैधानिक कानून एवं प्रशासनिक विधि',
        subtopics: [
          'Basic Structure Doctrine Evolution (Kesavananda to present)',
          'Fundamental Rights Interplay (Golden Triangle: Articles 14, 19, 21)',
          'Judicial Review, Writs & Public Interest Litigation Jurisprudence',
          'Federalism, Legislative Relations & Emergency Powers',
          'Principles of Natural Justice, Delegated Legislation & Tribunals'
        ],
        officialGuidance: 'Primary emphasis in CLAT PG (~40-50 questions). Study full extracts of landmark Constitutional Bench rulings.',
        officialGuidanceHi: 'CLAT PG में प्राथमिक महत्व (~40-50 प्रश्न)। संविधान पीठ के निर्णयों के मूल अंशों का अध्ययन करें।'
      },
      {
        id: 'pg-jurisprudence',
        name: 'Jurisprudence & Legal Theory',
        nameHi: 'विधि शास्त्र एवं विधिक सिद्धांत',
        subtopics: [
          'Analytical Positivism (Bentham, Austin, Hart, Kelsen)',
          'Natural Law Theory & Revival in Modern Constitutionalism',
          'Historical & Sociological Schools (Savigny, Pound, Ehrlich)',
          'Realist Movement (American & Scandinavian Realism)',
          'Concepts: Rights, Duties, Ownership, Possession, Personhood, Liability'
        ],
        officialGuidance: 'Direct quotes from jurists and philosophical questions on legal validity and moral obligation.',
        officialGuidanceHi: 'विधि शास्त्रियों के सीधे उद्धरण और कानून की वैधता पर दार्शनिक प्रश्न।'
      },
      {
        id: 'pg-criminal-law',
        name: 'Criminal Law & Procedure (BNS & BNSS Transition)',
        nameHi: 'आपराधिक विधि एवं प्रक्रिया',
        subtopics: [
          'General Principles of Criminal Liability (Mens Rea & Actus Reus)',
          'General Exceptions & Justifications',
          'Offenses against Human Body (Homicide, Kidnapping, Assault)',
          'Offenses against Property (Theft, Extortion, Robbery, Dacoity)',
          'New Criminal Enactments (BNS, BNSS, BSA) & Statutory Transpositions'
        ],
        officialGuidance: 'Both traditional IPC jurisprudence and corresponding new statutory provisions under BNS 2023.',
        officialGuidanceHi: 'पारंपरिक आईपीसी और बीएनएस 2023 के तहत संबंधित नए संविधिक प्रावधान दोनों।'
      },
      {
        id: 'pg-contracts-torts',
        name: 'Law of Contracts, Mercantile Law & Torts',
        nameHi: 'संविदा विधि, व्यापारिक विधि एवं अपकृत्य',
        subtopics: [
          'Formation, Consideration, Capacity & Vitiating Factors',
          'Contingent Contracts, Quasi-Contracts & Specific Relief',
          'Breach of Contract, Remoteness of Damages (Hadley v Baxendale)',
          'General Principles of Tortious Liability, Strict & Absolute Liability',
          'Consumer Protection Act 2019 & Cyber Torts'
        ],
        officialGuidance: 'Leading Indian and English common law precedents on commercial dispute resolution.',
        officialGuidanceHi: 'वाणिज्यिक विवाद समाधान पर प्रमुख भारतीय और सामान्य विधि के पूर्व-निर्णय।'
      },
      {
        id: 'pg-international-ipr',
        name: 'Public International Law & Intellectual Property Rights',
        nameHi: 'अंतर्राष्ट्रीय विधि एवं बौद्धिक संपदा अधिकार',
        subtopics: [
          'Sources of International Law (Custom, Treaties, General Principles)',
          'State Recognition, Succession, Jurisdiction & Extradition',
          'United Nations Organs, ICJ Statute & Advisory Opinions',
          'Patents, Copyrights, Trademarks & Geographical Indications',
          'TRIPS Agreement, Berne Convention & Paris Convention'
        ],
        officialGuidance: 'Contemporary treaties, cross-border jurisdiction, and IPR enforcement in the digital era.',
        officialGuidanceHi: 'समकालीन संधियां, सीमा पार क्षेत्राधिकार और डिजिटल युग में आईपीआर प्रवर्तन।'
      }
    ]
  }
];
