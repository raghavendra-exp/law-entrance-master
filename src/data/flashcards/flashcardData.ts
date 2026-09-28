import { Flashcard } from '../../types';

export const FLASHCARDS_DATA: Flashcard[] = [
  // --- Legal Maxims ---
  {
    id: 'fc-maxim-01',
    category: 'Legal Maxims',
    front: 'Audi Alteram Partem',
    frontHi: 'ऑडी अल्टरम पार्टम',
    back: 'No person should be condemned unheard. A fundamental tenet of Natural Justice requiring a fair opportunity of hearing before taking adverse action.',
    backHi: 'किसी भी व्यक्ति को बिना सुने दोषी नहीं ठहराया जाना चाहिए। प्राकृतिक न्याय का मुख्य सिद्धांत।',
    exam: ['CLAT', 'AILET'],
    tags: ['Natural Justice', 'Administrative Law']
  },
  {
    id: 'fc-maxim-02',
    category: 'Legal Maxims',
    front: 'Damnum Sine Injuria',
    frontHi: 'डैमन्नम साइन इंजुरिया',
    back: 'Actual damage or financial loss caused without violation of a legal right. Not actionable in tort (e.g., Gloucester Grammar School case).',
    backHi: 'बिना कानूनी क्षति के वास्तविक नुकसान। इस पर कोई कानूनी वाद नहीं बनता।',
    exam: ['CLAT', 'AILET'],
    tags: ['Torts', 'Civil Wrongs']
  },
  {
    id: 'fc-maxim-03',
    category: 'Legal Maxims',
    front: 'Injuria Sine Damno',
    frontHi: 'इंजुरिया साइन डैमन्नो',
    back: 'Infringement of an absolute legal right without actual tangible or financial loss. Actionable per se (e.g., Ashby v. White voting rights case).',
    backHi: 'बिना वास्तविक नुकसान के कानूनी अधिकार का हनन। यह वाद योग्य है।',
    exam: ['CLAT', 'AILET'],
    tags: ['Torts', 'Constitutional Rights']
  },
  {
    id: 'fc-maxim-04',
    category: 'Legal Maxims',
    front: 'Volenti Non Fit Injuria',
    frontHi: 'वॉलेंटी नॉन फिट इंजुरिया',
    back: 'To a willing person, no injury is done. Voluntary assumption of known risk acts as a complete defense in tort, except in bona fide rescue cases.',
    backHi: 'स्वेच्छा से जोखिम उठाने वाले को कोई विधिक क्षति नहीं होती (बचाव मामलों को छोड़कर)।',
    exam: ['CLAT', 'AILET'],
    tags: ['Torts', 'Defenses']
  },
  {
    id: 'fc-maxim-05',
    category: 'Legal Maxims',
    front: 'Res Ipsa Loquitur',
    frontHi: 'रेस इप्सा लोक्विटुर',
    back: 'The thing speaks for itself. An evidentiary rule where the accident\'s very occurrence creates a prima facie presumption of negligence by the person in control.',
    backHi: 'घटना स्वयं बोलती है। दुर्घटना की प्रकृति ही लापरवाही का प्रमाण बन जाती है।',
    exam: ['CLAT', 'AILET'],
    tags: ['Evidence', 'Negligence']
  },

  // --- Constitutional Articles ---
  {
    id: 'fc-const-01',
    category: 'Constitutional Articles',
    front: 'Article 14',
    frontHi: 'अनुच्छेद 14',
    back: 'Equality before the law and equal protection of the laws within the territory of India. Prohibits arbitrary state action (E.P. Royappa doctrine).',
    backHi: 'विधि के समक्ष समानता एवं विधियों का समान संरक्षण। मनमानेपन के विरुद्ध संरक्षण।',
    exam: ['CLAT', 'AILET'],
    tags: ['Part III', 'Fundamental Rights']
  },
  {
    id: 'fc-const-02',
    category: 'Constitutional Articles',
    front: 'Article 21',
    frontHi: 'अनुच्छेद 21',
    back: 'Protection of Life and Personal Liberty: "No person shall be deprived of his life or personal liberty except according to procedure established by law" (Maneka Gandhi expanded to Just, Fair & Reasonable procedure).',
    backHi: 'प्राण एवं दैहिक स्वतंत्रता का संरक्षण (उचित, न्यायसंगत और तर्कसंगत विधि की प्रक्रिया)।',
    exam: ['CLAT', 'AILET'],
    tags: ['Part III', 'Due Process']
  },
  {
    id: 'fc-const-03',
    category: 'Constitutional Articles',
    front: 'Article 32',
    frontHi: 'अनुच्छेद 32',
    back: 'Remedies for enforcement of Fundamental Rights by the Supreme Court through writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari). Termed "Heart and Soul" of the Constitution by Dr. B.R. Ambedkar.',
    backHi: 'मौलिक अधिकारों के प्रवर्तन के लिए संवैधानिक उपचार (संविधान का हृदय और आत्मा)।',
    exam: ['CLAT', 'AILET'],
    tags: ['Part III', 'Writs']
  },
  {
    id: 'fc-const-04',
    category: 'Constitutional Articles',
    front: 'Article 368',
    frontHi: 'अनुच्छेद 368',
    back: 'Power of Parliament to amend the Constitution and procedure therefor. Bound by the Basic Structure Doctrine established in Kesavananda Bharati (1973).',
    backHi: 'संविधान में संशोधन करने की संसद की शक्ति और प्रक्रिया (मूल संरचना से सीमित)।',
    exam: ['CLAT', 'AILET'],
    tags: ['Part XX', 'Amendments']
  },

  // --- Landmark Cases ---
  {
    id: 'fc-case-01',
    category: 'Landmark Cases',
    front: 'Kesavananda Bharati v. State of Kerala (1973)',
    frontHi: 'केशवानंद भारती बनाम केरल राज्य (1973)',
    back: '13-Judge Bench (7:6 majority) ruled that Parliament can amend any part of the Constitution under Article 368, but cannot alter its "Basic Structure".',
    backHi: '13 न्यायाधीशों की पीठ: संसद संविधान में संशोधन कर सकती है परंतु मूल ढांचे को नहीं बदल सकती।',
    exam: ['CLAT', 'AILET'],
    tags: ['Basic Structure', 'Judicial Review']
  },
  {
    id: 'fc-case-02',
    category: 'Landmark Cases',
    front: 'Justice K.S. Puttaswamy v. Union of India (2017)',
    frontHi: 'न्यायमूर्ति के.एस. पुट्टास्वामी बनाम भारत संघ (2017)',
    back: '9-Judge Bench unanimously recognized the Right to Privacy as an intrinsic fundamental right protected under Article 21 and Part III.',
    backHi: '9 न्यायाधीशों की पीठ ने सर्वसम्मति से निजता के अधिकार को अनुच्छेद 21 के तहत मौलिक अधिकार माना।',
    exam: ['CLAT', 'AILET'],
    tags: ['Privacy', 'Article 21']
  },
  {
    id: 'fc-case-03',
    category: 'Landmark Cases',
    front: 'M.C. Mehta v. Union of India (Oleum Gas Leak, 1987)',
    frontHi: 'एम.सी. मेहता बनाम भारत संघ (ओलियम गैस रिसाव, 1987)',
    back: 'Supreme Court established the doctrine of Absolute Liability for hazardous and inherently dangerous industries, allowing NO defenses (not even Act of God).',
    backHi: 'खतरनाक उद्योगों के लिए बिना किसी अपवाद के पूर्ण दायित्व (Absolute Liability) का सिद्धांत प्रतिपादित किया।',
    exam: ['CLAT', 'AILET'],
    tags: ['Torts', 'Absolute Liability']
  },

  // --- Logical Reasoning ---
  {
    id: 'fc-lr-01',
    category: 'Logical Reasoning',
    front: 'Unstated Assumption',
    frontHi: 'अव्यक्त पूर्वधारणा (Assumption)',
    back: 'An unstated premise that the author must believe to be true for the conclusion to logically follow. Negation Test: If negating the statement breaks the argument, it is an essential assumption.',
    backHi: 'वह अप्रत्यक्ष तर्क जिसे लेखक सत्य मानता है ताकि निष्कर्ष सही साबित हो सके। यदि इसे नकारने पर निष्कर्ष टूट जाए, तो यह अनिवार्य पूर्वधारणा है।',
    exam: ['CLAT', 'AILET'],
    tags: ['Critical Reasoning', 'Assumptions']
  },
  {
    id: 'fc-lr-02',
    category: 'Logical Reasoning',
    front: 'Post Hoc Ergo Propter Hoc (False Cause)',
    frontHi: 'मिथ्या कारण हेत्वाभास',
    back: 'A logical fallacy assuming that because Event Y followed Event X, Event X must have caused Event Y (confusing chronological sequence with causal connection).',
    backHi: 'यह मान लेना कि क्योंकि घटना Y घटना X के बाद हुई, इसलिए X ने ही Y को जन्म दिया। सहसंबंध और कारण में भ्रम।',
    exam: ['CLAT', 'AILET'],
    tags: ['Fallacies', 'Causality']
  },

  // --- Quant Formulas ---
  {
    id: 'fc-quant-01',
    category: 'Quant Formulas',
    front: 'Percentage Change Formula',
    frontHi: 'प्रतिशत परिवर्तन सूत्र',
    back: 'Percentage Change = [(Final Value - Initial Value) / Initial Value] × 100%. If net successive changes of a% and b% occur, Net Change = a + b + (ab / 100)%.',
    backHi: 'प्रतिशत परिवर्तन = [(अंतिम मान - प्रारंभिक मान) / प्रारंभिक मान] × 100%। क्रमिक परिवर्तन = a + b + (ab / 100)%।',
    exam: ['CLAT'],
    tags: ['Arithmetic', 'Percentages']
  },
  {
    id: 'fc-quant-02',
    category: 'Quant Formulas',
    front: 'Average Speed (Harmonic Mean)',
    frontHi: 'औसत गति सूत्र',
    back: 'When equal distances are traversed at speeds v1 and v2, the Average Speed = (2 × v1 × v2) / (v1 + v2). It is the harmonic mean of the two speeds, not arithmetic mean.',
    backHi: 'समान दूरी तय करने पर औसत गति = (2 × v1 × v2) / (v1 + v2)। यह हरात्मक माध्य है।',
    exam: ['CLAT'],
    tags: ['Time Speed Distance']
  }
];
