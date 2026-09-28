import { LegalTerm } from '../../types';

export const LEGAL_TERMS_DATA: LegalTerm[] = [
  {
    id: 'term-habeas-corpus',
    term: 'Habeas Corpus',
    termHi: 'बंदी प्रत्यक्षीकरण',
    category: 'Constitutional',
    definition: 'Literally "to have the body". A high prerogative writ issued by the Supreme Court (Art 32) or High Courts (Art 226) commanding a person or authority holding another in custody to produce the detainee before the court to determine the legality of detention.',
    definitionHi: 'शाब्दिक अर्थ "शरीर को प्रस्तुत करना"। किसी गैर-कानूनी रूप से हिरासत में लिए गए व्यक्ति को न्यायालय के समक्ष प्रस्तुत करने का आदेश।',
    example: 'If an individual is detained by the police without production before a judicial magistrate within 24 hours as mandated by Article 22(2), a writ of Habeas Corpus can be immediately filed.',
    examRelevance: 'The most celebrated writ for protecting personal liberty under Article 21. High-frequency topic in CLAT Legal Reasoning.'
  },
  {
    id: 'term-mandamus',
    term: 'Mandamus',
    termHi: 'परमादेश',
    category: 'Constitutional',
    definition: 'Literally "we command". A judicial writ issued to any government agency, public official, corporation, or inferior court commanding the performance of a specific public or statutory duty that they have refused or neglected to perform.',
    definitionHi: 'शाब्दिक अर्थ "हम आदेश देते हैं"। किसी सार्वजनिक अधिकारी या संस्था को अपने विधिक कर्तव्य का पालन करने का न्यायिक निर्देश।',
    example: 'Directing a municipal water department to restore potable water supply to a locality where the department had a statutory duty to provide water and had arbitrarily refused to do so.',
    examRelevance: 'Tested on scenarios involving public duties vs discretionary/private obligations (cannot be issued against a purely private entity).'
  },
  {
    id: 'term-certiorari',
    term: 'Certiorari',
    termHi: 'उत्प्रेषण',
    category: 'Constitutional',
    definition: 'Literally "to be certified / to be informed". A curative writ issued by a superior court to quash or set aside an order already passed by an inferior court, tribunal, or quasi-judicial authority when it acted without jurisdiction, exceeded jurisdiction, or violated natural justice.',
    definitionHi: 'अधीनस्थ न्यायालय या अधिकरण द्वारा क्षेत्राधिकार से बाहर या प्राकृतिक न्याय के विरुद्ध दिए गए आदेश को रद्द करने वाली रिट।',
    example: 'Quashing an administrative tribunal\'s termination order against a civil servant because the inquiry officer refused to let the employee cross-examine witnesses.',
    examRelevance: 'Differentiated from Prohibition: Certiorari is curative (issued after order), whereas Prohibition is preventive (issued during ongoing proceedings).'
  },
  {
    id: 'term-prohibition',
    term: 'Prohibition',
    termHi: 'प्रतिषेध',
    category: 'Constitutional',
    definition: 'Literally "to forbid". A preventive writ issued by a superior court to an inferior court or quasi-judicial body to prevent it from usurping a jurisdiction with which it is not legally vested or from continuing proceedings in excess of jurisdiction.',
    definitionHi: 'निचली अदालत या अधिकरण को अपने अधिकार क्षेत्र से बाहर जाकर सुनवाई करने से रोकने वाला निषेधाज्ञा आदेश।',
    example: 'Restraining a state tax tribunal from hearing a maritime admiralty dispute that belongs exclusively to the High Court.',
    examRelevance: 'Distinguished from Certiorari: Prohibition stops the proceedings before final order is made.'
  },
  {
    id: 'term-quo-warranto',
    term: 'Quo Warranto',
    termHi: 'अधिकार-पृच्छा',
    category: 'Constitutional',
    definition: 'Literally "by what authority". A writ issued to inquire into the legality of the claim which a party asserts to a public office, and to oust an unauthorized usurper from that office.',
    definitionHi: 'यह पूछना कि "आपका क्या प्राधिकार है"। किसी व्यक्ति द्वारा गैर-कानूनी तरीके से सार्वजनिक पद धारण करने की जांच और उसे पदमुक्त करने का आदेश।',
    example: 'Challenging the appointment of a Vice Chancellor of a state university who does not meet the minimum UGC statutory eligibility criteria of 10 years experience as a professor.',
    examRelevance: 'Only issued for substantive public offices created by statute or constitution, not for private corporate offices.'
  },
  {
    id: 'term-ratio-decidendi',
    term: 'Ratio Decidendi',
    termHi: 'निर्णय का आधार / विधिक तर्क',
    category: 'General Jurisprudence',
    definition: 'The underlying principle, rule of law, or core legal rationale on which the judicial decision is founded. This is the portion of a judgment that creates binding precedent (stare decisis) for future cases.',
    definitionHi: 'निर्णय का वह विधिक सिद्धांत जिस पर फैसला आधारित होता है; यही हिस्सा भविष्य के मामलों के लिए बाध्यकारी होता है।',
    example: 'In Donoghue v. Stevenson, the ratio decidendi was that manufacturers owe a duty of care to ultimate consumers to ensure products do not contain defects causing injury.',
    examRelevance: 'Central to CLAT legal reasoning: distinguishing the binding rule (ratio) from mere illustrative commentary.'
  },
  {
    id: 'term-obiter-dicta',
    term: 'Obiter Dicta',
    termHi: 'प्रसंगाभिकथन / प्रासंगिक टिप्पणी',
    category: 'General Jurisprudence',
    definition: 'Literally "things said by the way". Remarks, observations, or hypothetical analogies made by a judge in a judgment that are not strictly necessary for the resolution of the dispute. Obiter dicta have persuasive value, but are not binding precedents.',
    definitionHi: 'न्यायाधीश द्वारा निर्णय देते समय की गई सामान्य या प्रासंगिक टिप्पणियां; यह केवल मार्गदर्शक होती हैं, बाध्यकारी नहीं।',
    example: 'A judge hearing a contract dispute writes a paragraph philosophizing on the future impact of artificial intelligence on trade. This observation is obiter dictum.',
    examRelevance: 'Tested in questions asking students whether a judicial comment creates a binding rule of law or merely an opinion.'
  },
  {
    id: 'term-absolute-liability',
    term: 'Absolute Liability',
    termHi: 'पूर्ण दायित्व',
    category: 'Tort',
    definition: 'The legal rule established in India by the Supreme Court in the Oleum Gas Leak Case (M.C. Mehta v. Union of India, 1987) that an enterprise engaged in a hazardous or inherently dangerous industry owes an absolute, non-delegable duty to the community, with NO EXCEPTIONS whatsoever (not even Act of God or third-party sabotage).',
    definitionHi: 'खतरनाक उद्योग चलाने वाली कंपनी का बिना किसी अपवाद के पूर्ण उत्तरदायित्व (ईश्वरीय कृत्य या तीसरे पक्ष का बहाना मान्य नहीं)।',
    example: 'If toxic gas leaks from a chemical manufacturing plant causing injuries to neighbors, the factory cannot escape liability by claiming a freak earthquake or lightning caused the pipe to rupture.',
    examRelevance: 'Differentiated from English Strict Liability (Rylands v Fletcher) which permitted 5 exceptions. Indian Absolute Liability permits ZERO exceptions.'
  },
  {
    id: 'term-strict-liability',
    term: 'Strict Liability (Rule in Rylands v. Fletcher)',
    termHi: 'कठोर दायित्व',
    category: 'Tort',
    definition: 'A person who brings on his land and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril, and is prima facie liable for all the natural consequences of its escape, subject to recognized exceptions (Act of God, consent of plaintiff, default of plaintiff, statutory authority, act of third party).',
    definitionHi: 'अपनी भूमि पर खतरनाक वस्तु का संग्रह करने वाले का उत्तरदायित्व, यदि वह वस्तु भाग जाए और क्षति करे; इसमें कुछ अपवाद मान्य होते हैं।',
    example: 'A reservoir constructed on a mill owner\'s land bursts through hidden disused mine shafts and floods a neighbor\'s coal mine.',
    examRelevance: 'Standard CLAT tort law testing understanding of the 5 traditional exceptions.'
  },
  {
    id: 'term-judicial-review',
    term: 'Judicial Review',
    termHi: 'न्यायिक समीक्षा',
    category: 'Constitutional',
    definition: 'The power of the judiciary (Supreme Court under Art 32 & 136; High Courts under Art 226 & 227) to examine the constitutionality of legislative enactments and executive actions, and declare them null and void if they violate the Constitution.',
    definitionHi: 'न्यायपालिका की संसद या कार्यपालिका के किसी कानून या आदेश की संवैधानिकता की जांच करने और उल्लंघन पाए जाने पर उसे निरस्त करने की शक्ति।',
    example: 'Striking down the 99th Constitutional Amendment Act (National Judicial Appointments Commission - NJAC) as violative of judicial independence and the Basic Structure.',
    examRelevance: 'Recognized as an inviolable part of the Basic Structure of the Indian Constitution in Kesavananda Bharati (1973).'
  },
  {
    id: 'term-pil',
    term: 'Public Interest Litigation (PIL)',
    termHi: 'जनहित याचिका',
    category: 'Constitutional',
    definition: 'A relaxed procedural doctrine of Locus Standi introduced by Justices P.N. Bhagwati and V.R. Krishna Iyer permitting any public-spirited citizen or NGO to approach the constitutional court on behalf of disadvantaged or marginalized groups whose rights are infringed.',
    definitionHi: 'कमजोर या वंचित वर्ग के अधिकारों के संरक्षण के लिए किसी भी नागरिक द्वारा न्यायालय का दरवाजा खटखटाने की विशेष प्रक्रिया।',
    example: 'Bandhua Mukti Morcha filing a petition in the Supreme Court to identify, release, and rehabilitate bonded laborers working in brick kilns and stone quarries.',
    examRelevance: 'Frequently appears in passages examining social justice and accessibility of courts.'
  },
  {
    id: 'term-mens-rea-actus-reus',
    term: 'Actus Reus & Mens Rea',
    termHi: 'कृत्य और आपराधिक मनःस्थिति',
    category: 'Criminal',
    definition: 'The physical component of a crime (the prohibited act or omission) paired with the mental state (intention, knowledge, or recklessness) required by law to impose criminal culpability.',
    definitionHi: 'अपराध का शारीरिक कृत्य (एक्टस रियस) और उस कृत्य के पीछे की आपराधिक भावना या इरादा (मेन्स रिया)।',
    example: 'Taking another person\'s coat by honest mistake is an Actus Reus without Mens Rea, and therefore not criminal theft.',
    examRelevance: 'Core bedrock of all criminal law questions in CLAT and AILET.'
  }
];
