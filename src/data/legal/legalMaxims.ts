import { LegalMaxim } from '../../types';

export const LEGAL_MAXIMS_DATA: LegalMaxim[] = [
  {
    id: 'max-audi-alteram-partem',
    maxim: 'Audi Alteram Partem',
    pronunciation: 'OW-dee ahl-teh-rahm PAHR-tem',
    meaning: 'Hear the other side; no person should be condemned unheard.',
    meaningHi: 'दूसरे पक्ष को भी सुनो; किसी भी व्यक्ति को बिना सुने दोषी या दंडित नहीं ठहराया जाना चाहिए।',
    example: 'A university suspends a student accused of malpractice without granting them a chance to present their explanation. The order violates Audi Alteram Partem and will be quashed by the High Court.',
    exampleHi: 'विश्वविद्यालय ने बिना छात्र का स्पष्टीकरण सुने उसे निष्कासित कर दिया। यह प्राकृतिक न्याय के नियम का उल्लंघन है।',
    legalContext: 'A cornerstone pillar of the Principles of Natural Justice, derived from common law and embodied in Article 14 and Article 21 of the Indian Constitution.',
    relevanceToSyllabus: 'Crucial for CLAT Legal Reasoning and Administrative Law questions testing administrative fairness.',
    practiceQuestion: {
      question: 'Principle: Any administrative authority taking an adverse decision affecting an individual\'s rights must provide a fair hearing to the affected person. Facts: The Municipal Corporation demolished Mr. Rao\'s shop alleging encroachment, without issuing any show-cause notice or giving him an opportunity to produce his title documents. Is the action lawful?',
      options: [
        'Yes, because municipal encroachment removal requires swift administrative speed.',
        'No, because the failure to grant a prior hearing violates the maxim Audi Alteram Partem.',
        'Yes, provided Mr. Rao is allowed to appeal after the demolition is complete.',
        'No, but only if Mr. Rao pays a compliance fine to the corporation.'
      ],
      answer: 1,
      explanation: 'Under the principle of Audi Alteram Partem, no punitive or detrimental action can be taken without first giving the person a reasonable opportunity to be heard.'
    }
  },
  {
    id: 'max-nemo-judex-in-causa-sua',
    maxim: 'Nemo Judex In Causa Sua',
    pronunciation: 'NEE-moh JOO-deks in KAW-zuh SOO-uh',
    meaning: 'No one should be a judge in their own cause (Rule against bias).',
    meaningHi: 'कोई भी व्यक्ति अपने ही मामले में न्यायाधीश नहीं हो सकता (पक्षपात के विरुद्ध नियम)।',
    example: 'An inquiry panel investigating allegations of financial misappropriation against a company director includes the director\'s own sibling as a presiding adjudicator.',
    exampleHi: 'कंपनी निदेशक पर जांच के लिए गठित समिति में निदेशक के सगे भाई को ही मुख्य निर्णायक नियुक्त किया जाना पक्षपात है।',
    legalContext: 'The second fundamental pillar of Natural Justice. Ensures that justice must not only be done, but manifestly and undoubtedly be seen to be done.',
    relevanceToSyllabus: 'Frequently tested in CLAT principle-fact questions involving pecuniary bias, personal bias, or official bias.',
    practiceQuestion: {
      question: 'Principle: A decision-maker who has a personal interest or relationship with a disputant is disqualified from adjudicating the dispute. Facts: In a university faculty promotion interview, the department head was on the selection panel while his daughter was one of the candidates. The daughter was ranked first. A rival candidate challenges the selection.',
      options: [
        'The selection is valid if the daughter was demonstrably the most qualified candidate.',
        'The selection is void due to reasonable likelihood of bias under Nemo Judex In Causa Sua.',
        'The selection is valid because the head of department is legally obligated to attend all interviews.',
        'The selection is void only if direct bribery is proven.'
      ],
      answer: 1,
      explanation: 'Actual proof of corruption is not required; the mere presence of a parent on the selection panel creates a disqualifying reasonable apprehension of bias.'
    }
  },
  {
    id: 'max-damnum-sine-injuria',
    maxim: 'Damnum Sine Injuria',
    pronunciation: 'DAHM-num SEE-neh in-JOO-ree-uh',
    meaning: 'Damage without legal injury; actual financial or physical loss suffered without the violation of a legally recognized right.',
    meaningHi: 'बिना कानूनी क्षति के वास्तविक नुकसान; किसी कानूनी अधिकार का उल्लंघन हुए बिना आर्थिक या शारीरिक नुकसान होना।',
    example: 'Gloucester Grammar School Case: A teacher opens a rival school charging lower fees. The existing school suffers severe financial loss as students migrate. No legal action lies because setting up lawful business is a right, not a legal wrong.',
    exampleHi: 'प्रतिद्वंद्वी विद्यालय खोलने से पहले विद्यालय को घाटा हुआ, परंतु यह किसी विधिक अधिकार का हनन नहीं है।',
    legalContext: 'Core doctrine in the Law of Torts separating actionable legal wrongs from uncompensated competitive economic harm.',
    relevanceToSyllabus: 'A high-frequency classic concept tested in CLAT and AILET legal reasoning scenarios.',
    practiceQuestion: {
      question: 'Principle: A person is liable in tort only when they infringe a legal right of the plaintiff. Mere financial loss without violation of a legal right is not actionable (Damnum Sine Injuria). Facts: Maya opened a boutique next to Sunita\'s existing boutique and offered massive discounts. Sunita lost 70% of her customers and suffered Rs 5 lakh losses. Sunita sues Maya for damages.',
      options: [
        'Maya is liable because causing Rs 5 lakh financial loss is malicious.',
        'Maya is not liable because lawful commercial competition does not violate any legal right of Sunita.',
        'Maya is liable to pay 50% of Sunita\'s operating losses.',
        'Sunita can obtain an injunction preventing any competing business within a 5 km radius.'
      ],
      answer: 1,
      explanation: 'Sunita suffered damnum (damage) but no injuria (legal injury). Lawful competition is protected, so no tort was committed.'
    }
  },
  {
    id: 'max-injuria-sine-damno',
    maxim: 'Injuria Sine Damno',
    pronunciation: 'in-JOO-ree-uh SEE-neh DAHM-noh',
    meaning: 'Legal injury without actual financial or physical damage; an infringement of an absolute private legal right that is actionable even without proof of pecuniary loss.',
    meaningHi: 'बिना वास्तविक नुकसान के कानूनी क्षति; किसी कानूनी अधिकार का उल्लंघन होना, भले ही कोई वित्तीय या शारीरिक नुकसान न हुआ हो।',
    example: 'Ashby v. White (1703): The returning officer wrongfully prevented Ashby from casting his vote in a parliamentary election. Even though the candidate Ashby intended to vote for won the election anyway, the court held the returning officer liable for infringing the legal right to vote.',
    exampleHi: 'मतदाता को गैर-कानूनी तरीके से वोट डालने से रोका गया। भले ही उसका पसंदीदा प्रत्याशी जीत गया, पर वोट देने के विधिक अधिकार का हनन हुआ।',
    legalContext: 'Establishes that torts like trespass, assault, and denial of voting rights are actionable per se (without requiring proof of actual harm).',
    relevanceToSyllabus: 'Fundamental benchmark principle in CLAT tort law passages.',
    practiceQuestion: {
      question: 'Principle: Any violation of a person\'s legal right entitles them to nominal damages, even if they suffered no tangible loss (Injuria Sine Damno). Facts: Police Officer Verma wrongfully detained Rahul at the police station for two hours. Rahul missed no appointments and suffered no illness or financial loss. Rahul sues Verma.',
      options: [
        'Verma is not liable because Rahul suffered zero tangible or pecuniary loss.',
        'Verma is liable because wrongful detention is a direct infringement of Rahul\'s fundamental personal liberty.',
        'Verma is liable only if Rahul was subjected to physical violence.',
        'The suit is dismissed as frivolous under de minimis non curat lex.'
      ],
      answer: 1,
      explanation: 'Wrongful detention violates the absolute legal right to personal liberty. Infringement of an absolute right is actionable per se without proving economic loss.'
    }
  },
  {
    id: 'max-volenti-non-fit-injuria',
    maxim: 'Volenti Non Fit Injuria',
    pronunciation: 'voh-LEN-tee non fit in-JOO-ree-uh',
    meaning: 'To a willing person, no injury is done; harm suffered with free, voluntary consent is not actionable in tort.',
    meaningHi: 'सहमति से उठाए गए जोखिम पर कोई विधिक क्षति नहीं होती; स्वेच्छा से स्वीकार किए गए जोखिम के लिए हर्जाना नहीं मिलता।',
    example: 'A spectator at a cricket match is hit by a ball hit for six into the stands. The player and stadium owners are protected because spectators voluntarily assume standard game hazards.',
    exampleHi: 'क्रिकेट मैच देख रहे दर्शक को गेंद लगने पर खिलाड़ी या स्टेडियम प्रबंधन उत्तरदायी नहीं होते क्योंकि दर्शक खेल के सामान्य जोखिमों को स्वीकार करके बैठता है।',
    legalContext: 'General defense in tort law, applicable when the plaintiff possessed full knowledge of the risk (scienti) and freely consented to encounter it (volenti).',
    relevanceToSyllabus: 'Appears frequently in sports injuries, medical procedures, and hazardous recreation scenarios in CLAT.',
    practiceQuestion: {
      question: 'Principle: One who voluntarily consents to a known risk cannot claim damages for harm resulting from that risk (Volenti Non Fit Injuria). However, consent must be free and with full knowledge of the danger. Facts: Rohit went on a certified roller coaster. The ride experienced normal expected g-forces and inversions, causing Rohit to feel nausea and sprain his wrist while gripping the safety bar. He sues the amusement park.',
      options: [
        'The park is liable for operating dangerous machinery.',
        'The park is not liable because Rohit freely consented to the standard, known thrills and physical sensations of the ride.',
        'The park is liable because amusement rides have absolute liability.',
        'Rohit is entitled to medical expenses because he bought a valid ticket.'
      ],
      answer: 1,
      explanation: 'By voluntarily boarding the roller coaster, Rohit assumed the inherent, ordinary risks of the ride. There was no mechanical defect or negligence by the park.'
    }
  },
  {
    id: 'max-res-ipsa-loquitur',
    maxim: 'Res Ipsa Loquitur',
    pronunciation: 'rez IP-suh loh-KWIH-tur',
    meaning: 'The thing speaks for itself; the accident itself raises an inescapable presumption of negligence against the defendant who had sole management of the situation.',
    meaningHi: 'घटना स्वयं बोलती है; दुर्घटना की प्रकृति ही यह दर्शाती है कि प्रतिवादी की लापरवाही के बिना ऐसा नहीं हो सकता था।',
    example: 'Byrne v. Boadle (1863): A barrel of flour rolled out of a warehouse second-story window and struck a pedestrian on the street below. Barrels do not roll out of windows without negligence.',
    exampleHi: 'इमारत की खिड़की से आटे का पीपा नीचे गिरना; साधारण परिस्थितियों में बिना लापरवाही ऐसा नहीं हो सकता।',
    legalContext: 'Evidentiary rule of convenience shifting the burden of proof from the plaintiff onto the defendant to demonstrate absence of negligence.',
    relevanceToSyllabus: 'Key in medical negligence and industrial mishap passages.',
    practiceQuestion: {
      question: 'Principle: Where an accident occurs that ordinarily does not happen without negligence, and the instrumentality is under the exclusive control of the defendant, negligence is presumed (Res Ipsa Loquitur). Facts: Mrs. Das undergoes routine gallbladder surgery. Post-surgery, she suffers severe abdominal pain. An X-ray reveals a 10-inch surgical sponge left inside her abdomen. The hospital claims she must prove exactly which nurse made the mistake.',
      options: [
        'Mrs. Das must produce eyewitness testimony from inside the operating room.',
        'Res Ipsa Loquitur applies; leaving a surgical sponge inside a patient speaks for itself, placing the burden on the surgical team to disprove negligence.',
        'The hospital is immune under the doctrine of sovereign state service.',
        'Mrs. Das cannot sue because she signed a general surgical consent form.'
      ],
      answer: 1,
      explanation: 'Sponges are not left inside bodies in the absence of negligence. The surgical theater was in the exclusive control of the team, so negligence is presumed.'
    }
  },
  {
    id: 'max-ignorantia-juris-non-excusat',
    maxim: 'Ignorantia Juris Non Excusat',
    pronunciation: 'ig-nuh-RAN-shee-uh JOO-ris non eks-KYOO-zaht',
    meaning: 'Ignorance of the law excuses no one; a person unaware of a law may not escape liability for violating that law merely because they were unaware of its content.',
    meaningHi: 'कानून की अज्ञानता कोई बहाना नहीं है; किसी कानून की जानकारी न होना उसके उल्लंघन के दायित्व से मुक्त नहीं करता।',
    example: 'A foreign tourist carries a satellite phone into India without mandatory statutory licensing. Claiming they did not know Indian telecommunications law does not exempt them from seizure and penal proceedings.',
    exampleHi: 'विदेशी नागरिक द्वारा प्रतिबंधित उपग्रह फोन लाना; यह दावा करना कि उसे भारतीय कानून की जानकारी नहीं थी, मान्य नहीं होगा।',
    legalContext: 'Presumption that laws published in the official gazette are known to all persons within the territorial jurisdiction of the sovereign.',
    relevanceToSyllabus: 'Regularly applied in criminal liability and regulatory compliance questions.',
    practiceQuestion: {
      question: 'Principle: Ignorance of the law is not an excuse for breaking it (Ignorantia Juris Non Excusat). However, honest mistake of fact is an excuse. Facts: Anand drives his commercial truck on an expressway during restricted morning hours recently prohibited by a city municipal gazette notification. Anand argues he had not read that morning\'s gazette notification.',
      options: [
        'Anand is excused because municipal notices take 6 months to become widely known.',
        'Anand is liable because ignorance of a validly published traffic law is not a legal defense.',
        'Anand is excused because his mistake was an honest mistake of fact.',
        'Anand is liable only if police warned him in person earlier.'
      ],
      answer: 1,
      explanation: 'Failure to read a published regulation is a mistake of law (ignorantia juris), not a mistake of fact. Hence, it offers no defense.'
    }
  },
  {
    id: 'max-mens-rea',
    maxim: 'Actus Non Facit Reum Nisi Mens Sit Rea',
    pronunciation: 'AHK-toos non FAH-kit REH-oom NEE-see mens sit REH-uh',
    meaning: 'An act does not make a person guilty unless the mind is also guilty; a crime requires both a prohibited physical act (Actus Reus) and a culpable mental state (Mens Rea).',
    meaningHi: 'केवल कृत्य किसी को अपराधी नहीं बनाता जब तक कि मन भी अपराधी न हो; अपराध के लिए कृत्य और दूषित मन दोनों आवश्यक हैं।',
    example: 'R v. Tolson: A woman remarries believing in good faith and on reasonable grounds that her husband was lost at sea after 7 years. She lacked mens rea for bigamy.',
    exampleHi: 'सद्भावपूर्वक यह विश्वास करके पुनर्विवाह करना कि पहला पति जीवित नहीं है; दूषित मन के अभाव में अपराध नहीं बनता।',
    legalContext: 'Fundamental canon of criminal jurisprudence across common law jurisdictions, embodied in statutory penal codes.',
    relevanceToSyllabus: 'Primary concept for CLAT criminal law questions involving intention, knowledge, recklessness, and negligence.',
    practiceQuestion: {
      question: 'Principle: To constitute a criminal offense, there must be concurrence of a prohibited act (Actus Reus) and a guilty mental intention (Mens Rea). Facts: Karan entered a crowded restaurant cloakroom and mistakenly picked up a black umbrella that was identical to his own umbrella, leaving his own on the rack. He is charged with theft.',
      options: [
        'Karan is guilty of theft because he physically took another person\'s property.',
        'Karan is not guilty because he took the umbrella under an honest, mistaken belief, thus lacking any dishonest intention (Mens Rea).',
        'Karan is guilty because umbrellas are personal chattel.',
        'Karan is liable for criminal trespass.'
      ],
      answer: 1,
      explanation: 'Theft requires dishonest intention at the time of taking. Because Karan honestly believed the umbrella was his, there was no guilty mind (Mens Rea).'
    }
  },
  {
    id: 'max-ubi-jus-ibi-remedium',
    maxim: 'Ubi Jus Ibi Remedium',
    pronunciation: 'OO-bee joos EE-bee reh-MEH-dee-oom',
    meaning: 'Where there is a legal right, there is a remedy; the law will not suffer a wrong to be without a remedy.',
    meaningHi: 'जहाँ अधिकार है, वहाँ उपचार भी है; कानून किसी विधिक अधिकार के उल्लंघन को बिना उपचार के नहीं छोड़ता।',
    example: 'The foundation of the writ jurisdiction of the Supreme Court (Article 32) and High Courts (Article 226) to provide constitutional remedies whenever a fundamental right is violated.',
    exampleHi: 'संवैधानिक उपचारों का अधिकार (अनुच्छेद 32); किसी भी मौलिक अधिकार के हनन पर न्यायपालिका उपचार प्रदान करती है।',
    legalContext: 'Origin of equitable remedies, common law actions for tortious infringements, and constitutional writs.',
    relevanceToSyllabus: 'Linked to fundamental rights enforcement and the principle of effective judicial protection.',
    practiceQuestion: {
      question: 'Principle: Every recognized legal right has an accompanying remedy for its violation (Ubi Jus Ibi Remedium). Facts: A new state statute created a statutory right for senior citizens to receive subsidized medicines from district hospitals. When the district hospital refused to dispense subsidized medicine to 72-year-old Raman, the state argued no specific court or tribunal was named in the Act to enforce the benefit.',
      options: [
        'Raman has no remedy because the statute forgot to create an enforcement tribunal.',
        'Raman can approach the civil court or High Court because wherever a legal right exists, courts must provide a remedy.',
        'Raman must wait until Parliament amends the Act to add an inspector.',
        'The hospital has sovereign immunity against old-age welfare claims.'
      ],
      answer: 1,
      explanation: 'Under Ubi Jus Ibi Remedium, the absence of a designated tribunal does not extinguish the remedy; ordinary courts have inherent jurisdiction to enforce established rights.'
    }
  },
  {
    id: 'max-stare-decisis',
    maxim: 'Stare Decisis Et Non Quieta Movere',
    pronunciation: 'STAH-ray deh-SEE-sis et non KWY-eh-tuh moh-VAIR-ay',
    meaning: 'To stand by decisions and not disturb settled points; the legal doctrine of judicial precedent where past judicial rulings bind lower courts.',
    meaningHi: 'पूर्व निर्णयों पर टिके रहना और स्थापित सिद्धांतों को न बदलना; न्यायिक पूर्व-निर्णय का सिद्धांत।',
    example: 'Under Article 141 of the Indian Constitution, the law declared by the Supreme Court shall be binding on all courts within the territory of India.',
    exampleHi: 'अनुच्छेद 141: सर्वोच्च न्यायालय द्वारा घोषित कानून भारत के सभी न्यायालयों पर बाध्यकारी होता है।',
    legalContext: 'Maintains certainty, predictability, and stability in legal jurisprudence.',
    relevanceToSyllabus: 'Essential for understanding how Supreme Court judgments establish binding law in India.',
    practiceQuestion: {
      question: 'Principle: Lower courts are strictly bound by the legal principles established in decisions of higher courts on identical questions of law (Stare Decisis). Facts: A 3-judge bench of the Supreme Court held in 2021 that cryptocurrency trading is not inherently illegal under existing financial laws. In 2024, a District Court magistrate convicts an entrepreneur solely for trading cryptocurrency, claiming the magistrate personal view differs from the Supreme Court.',
      options: [
        'The magistrate conviction is valid because trial courts have independent conscience.',
        'The magistrate order is illegal because the Supreme Court precedent is strictly binding on all lower courts under Stare Decisis and Article 141.',
        'The magistrate decision prevails within that local district only.',
        'The entrepreneur must wait for Parliament to pass a crypto statute.'
      ],
      answer: 1,
      explanation: 'The doctrine of Stare Decisis and Article 141 make Supreme Court decisions binding on every magistrate and court across India.'
    }
  }
];
