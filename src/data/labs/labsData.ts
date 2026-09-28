export interface PassageLabSet {
  id: string;
  title: string;
  titleHi: string;
  category: string;
  source: string;
  wordCount: number;
  text: string;
  textHi: string;
  evidenceHighlights: {
    phrase: string;
    note: string;
  }[];
  questionIds: string[];
}

export const PASSAGE_LAB_SETS: PassageLabSet[] = [
  {
    id: 'pl-set-01',
    title: 'Constitutional Proportionality & Privacy in the Age of Digital Surveillance',
    titleHi: 'डिजिटल निगरानी के युग में संवैधानिक आनुपातिकता और निजता',
    category: 'Constitutional Law',
    source: 'Passage Lab Contemporary Legal Analysis based on Puttaswamy & Digital Rights Rulings',
    wordCount: 442,
    text: `The doctrine of proportionality has emerged as the definitive analytical framework for evaluating state intrusions into constitutionally protected fundamental rights. In modern jurisprudence, particularly following the landmark nine-judge Constitution Bench ruling in Justice K.S. Puttaswamy v. Union of India, the state can no longer defend fundamental rights infringements merely by invoking administrative convenience or executive prerogative. Any statutory measure that restricts the fundamental right to privacy under Article 21 must withstand a rigorous four-pronged constitutional inquiry. 

First, the measure must be backed by valid legislation enacted by a competent legislature; executive notifications without statutory foundation cannot abrogate privacy. Second, the restriction must serve a legitimate state aim—such as public order, national security, or prevention of crime. Third, the measure must have a rational nexus to the intended objective, demonstrating that the chosen means will effectively achieve the legislative goal. Fourth, and most crucially, the measure must be the least intrusive means available: the state must prove that no alternative policy could achieve the legitimate purpose with lesser impairment of the fundamental right. Finally, the societal benefits of the measure must disproportionately outweigh the adverse impact upon the individual's civil liberties.

When the state deploys mass algorithmic interception or automated facial recognition technology without transparent statutory oversight, it fails the least intrusive means test. National security undoubtedly represents a legitimate state interest, yet constitutional democracy demands that the pursuit of security does not degenerate into unchecked surveillance. The Constitution does not establish a police state; it constitutes a republic founded on the Rule of Law where state authority is permanently subordinated to fundamental constitutional guarantees.`,
    textHi: `आनुपातिकता का सिद्धांत (Doctrine of Proportionality) मौलिक अधिकारों में राज्य के हस्तक्षेप के मूल्यांकन के लिए सबसे महत्वपूर्ण संवैधानिक ढांचा बन गया है। न्यायमूर्ति के.एस. पुट्टास्वामी फैसले के बाद राज्य केवल प्रशासनिक सुविधा का हवाला देकर मौलिक अधिकारों को सीमित नहीं कर सकता। अनुच्छेद 21 के तहत निजता के अधिकार पर किसी भी प्रतिबंध को चार-चरणीय परीक्षण से गुजरना होगा: (1) विधि की वैधता, (2) वैध राज्य हित, (3) तार्किक संबंध (Rational Nexus), और (4) न्यूनतम हस्तक्षेपकारी साधन (Least Intrusive Means)। जब राज्य बिना संविधिक निगरानी के व्यापक निगरानी तकनीक का उपयोग करता है, तो वह इस संवैधानिक परीक्षण पर विफल हो जाता है।`,
    evidenceHighlights: [
      {
        phrase: 'four-pronged constitutional inquiry',
        note: 'Key test established for Article 21 limitations: Legality, Legitimate Aim, Rational Nexus, and Least Intrusive Means.'
      },
      {
        phrase: 'least intrusive means available',
        note: 'Crucial requirement: if a less intrusive alternative exists, the state measure fails proportionality.'
      },
      {
        phrase: 'executive notifications without statutory foundation cannot abrogate privacy',
        note: 'Rule: Fundamental rights cannot be curtailed by mere executive decree without parliamentary legislation.'
      }
    ],
    questionIds: ['CLAT-LR-CC-001', 'CLAT-LR-CC-002', 'CLAT-ENG-RC-001', 'CLAT-ENG-RC-002']
  },
  {
    id: 'pl-set-02',
    title: 'The Evolution of Absolute Liability in Indian Environmental Jurisprudence',
    titleHi: 'भारतीय पर्यावरण न्यायशास्त्र में पूर्ण दायित्व (Absolute Liability) का विकास',
    category: 'Law of Torts',
    source: 'Oleum Gas Leak Benchmark Study (M.C. Mehta v. Union of India)',
    wordCount: 456,
    text: `The common law doctrine of strict liability, famously articulated by Blackburn J. in Rylands v. Fletcher (1868), was developed in the pastoral setting of nineteenth-century England. Under that classic formulation, a person who brings dangerous substances onto their land is liable for damages caused if the substance escapes, subject to five recognized exceptions: Act of God (vis major), act of a stranger, default of the plaintiff, consent of the plaintiff (volenti non fit injuria), and statutory authority. 

However, in the wake of the catastrophic 1984 Bhopal Gas Tragedy and the 1985 Shriram Oleum Gas Leak in New Delhi, the Supreme Court of India recognized that these colonial-era English exceptions were ill-suited to modern industrialized India. In M.C. Mehta v. Union of India (1987), Chief Justice P.N. Bhagwati boldly departed from English precedent and laid down the indigenously formulated doctrine of Absolute Liability.

The Court held that where an enterprise engages in a hazardous or inherently dangerous industry which poses a potential threat to the health and safety of the community, it owes an absolute and non-delegable duty to ensure that no harm results to anyone. If any damage occurs as a consequence of the hazardous activity, the enterprise is strictly and absolutely liable to compensate all affected persons. Crucially, the enterprise cannot invoke ANY of the exceptions recognized under the Rylands v. Fletcher rule. Whether the escape was caused by an unforeseeable lightning strike, an earthquake, or deliberate sabotage by an unknown third party, the enterprise must pay damages. Furthermore, the measure of compensation is not limited by ordinary tort standards; it is calibrated to the financial capacity of the enterprise to ensure a potent deterrent effect.`,
    textHi: `1868 के रायलैंड्स बनाम फ्लेचर मामले में कठोर दायित्व (Strict Liability) का सिद्धांत प्रतिपादित किया गया था, जिसमें 5 अपवाद (ईश्वरीय कृत्य, तीसरे पक्ष का कृत्य आदि) शामिल थे। परंतु भोपाल गैस त्रासदी और दिल्ली के ओलियम गैस रिसाव के बाद, एम.सी. मेहता बनाम भारत संघ (1987) में सर्वोच्च न्यायालय ने "पूर्ण दायित्व" (Absolute Liability) का एक नया स्वदेशी सिद्धांत स्थापित किया। यदि कोई कंपनी खतरनाक उद्योग चलाती है, तो किसी भी क्षति के लिए उसका दायित्व पूर्ण और गैर-हस्तांतरणीय होता है, और उसे किसी भी अपवाद का लाभ नहीं मिलता।`,
    evidenceHighlights: [
      {
        phrase: 'five recognized exceptions',
        note: 'Strict Liability in English law allows 5 exceptions: Act of God, Stranger, Plaintiff default, Consent, Statutory authority.'
      },
      {
        phrase: 'cannot invoke ANY of the exceptions',
        note: 'Absolute Liability in Indian law allows ZERO exceptions; the enterprise cannot plead Act of God or sabotage.'
      },
      {
        phrase: 'calibrated to the financial capacity of the enterprise',
        note: 'Damages under Absolute Liability are exemplary and directly proportional to the enterprise\'s wealth.'
      }
    ],
    questionIds: ['CLAT-LR-PYQ-2023-01', 'CLAT-CR-ARG-001']
  }
];

export interface LegalLabStep {
  stepNumber: number;
  title: string;
  titleHi: string;
  guidance: string;
  guidanceHi: string;
  exampleSnippet: string;
  commonTrap: string;
}

export const LEGAL_REASONING_LAB_STEPS: LegalLabStep[] = [
  {
    stepNumber: 1,
    title: 'Extract the Legal Principle',
    titleHi: 'विधिक सिद्धांत को पहचानें',
    guidance: 'Read the principle with laser focus. Ignore outside law you memorized from textbooks. If the passage principle says "Minors are liable for intentional contracts", accept it as absolute truth for this question.',
    guidanceHi: 'गद्यांश में दिए गए सिद्धांत को ही अंतिम सत्य मानें, भले ही वह वास्तविक कानून से भिन्न हो।',
    exampleSnippet: 'Principle: "An employer is liable for unauthorized intentional assaults committed by an employee during duty hours."',
    commonTrap: 'Importing real-life legal knowledge that contradicts the principle stated on screen.'
  },
  {
    stepNumber: 2,
    title: 'Deconstruct Operative Conditions & Exceptions',
    titleHi: 'शर्तों और अपवादों का विखंडन करें',
    guidance: 'Break down the principle into an algebraic IF-THEN statement: IF (Condition 1 + Condition 2) AND NOT (Exception A) -> THEN (Result).',
    guidanceHi: 'सिद्धांत को शर्तों में विभाजित करें: यदि (शर्त 1 + शर्त 2) और अपवाद नहीं है -> तो परिणाम होगा।',
    exampleSnippet: 'Conditions: (1) Must be an employee, (2) Act occurred during duty hours, (3) Assault was intentional.',
    commonTrap: 'Ignoring restrictive qualifying words like "solely", "unless", "provided that", or "intentional".'
  },
  {
    stepNumber: 3,
    title: 'Read and Anchor to the Facts',
    titleHi: 'तथ्यों को पढ़ें और रेखांकित करें',
    guidance: 'Read the factual scenario strictly as given. Do not speculate what happened before or after. Treat the stated facts as closed, undisputed reality.',
    guidanceHi: 'तथ्यों को वैसा ही स्वीकार करें जैसा दिया गया है; अपने मन से कोई काल्पनिक स्थिति न जोड़ें।',
    exampleSnippet: 'Facts: Guard Ramesh struck a visitor inside the factory premises at 3:00 PM while on active security shift.',
    commonTrap: 'Assuming unstated facts (e.g., assuming the visitor insulted the guard when the text says nothing about provocation).'
  },
  {
    stepNumber: 4,
    title: 'Apply Rule to Facts Mechanically',
    titleHi: 'नियम को तथ्यों पर लागू करें',
    guidance: 'Map each factual element to the operative conditions identified in Step 2. Does Ramesh qualify as an employee? Yes. Was it 3:00 PM during his shift? Yes. Was it an assault? Yes.',
    guidanceHi: 'पहचाने गए प्रत्येक तथ्य का नियम की शर्तों से मिलान करें।',
    exampleSnippet: 'Mapping: Ramesh = Employee; 3:00 PM = Duty hours; Physical strike = Assault. Result = Employer is liable.',
    commonTrap: 'Emotional reasoning: Feeling sorry for the employer or visitor rather than following rule logic.'
  },
  {
    stepNumber: 5,
    title: 'Eliminate Wrong Answer Traps',
    titleHi: 'गलत उत्तर विकल्पों को हटाएं',
    guidance: 'Eliminate choices that: (a) reach the right conclusion for the wrong legal reason, (b) cite outside legal principles, or (c) rely on subjective morality ("It is unfair").',
    guidanceHi: 'उन विकल्पों को हटाएं जो गलत कारण बताते हैं या बाहरी नैतिक निर्णयों पर निर्भर हैं।',
    exampleSnippet: 'Option A says "Not liable because guards should be gentle" (Subjective morality trap -> Eliminate!).',
    commonTrap: 'Selecting an option just because the final "Yes" or "No" matches, without checking if the explanation matches the principle.'
  },
  {
    stepNumber: 6,
    title: 'Confirm the Legally Grounded Choice',
    titleHi: 'अंतिम सही विकल्प का चयन करें',
    guidance: 'Select the option whose conclusion AND underlying legal rationale mirror the exact words and logic of the given principle.',
    guidanceHi: 'उस विकल्प का चयन करें जिसका निष्कर्ष और कानूनी कारण दोनों सिद्धांत से मेल खाते हों।',
    exampleSnippet: 'Option B: "The factory employer is liable because Ramesh committed an intentional assault during active duty hours."',
    commonTrap: 'Rushing in the last 10 seconds and bubbling the wrong option number.'
  }
];
