export interface ConstitutionTopic {
  id: string;
  part: string;
  title: string;
  titleHi: string;
  articles: string;
  keyPoints: string[];
  keyPointsHi: string[];
  landmarkCases: {
    caseName: string;
    year: number;
    ratio: string;
  }[];
  clatFocusNotes: string;
  clatFocusNotesHi: string;
}

export const CONSTITUTION_MODULE_DATA: ConstitutionTopic[] = [
  {
    id: 'const-preamble',
    part: 'Preamble',
    title: 'The Preamble to the Constitution of India',
    titleHi: 'भारतीय संविधान की प्रस्तावना',
    articles: 'Non-numbered introductory statement',
    keyPoints: [
      'Source of Authority: "We, the People of India" establishes popular sovereignty.',
      'Nature of the Indian Polity: Sovereign, Socialist, Secular, Democratic, Republic.',
      '42nd Constitutional Amendment Act, 1976 added three words: "SOCIALIST", "SECULAR", and "INTEGRITY".',
      'Core Objectives: JUSTICE (Social, Economic, and Political); LIBERTY (of thought, expression, belief, faith, and worship); EQUALITY (of status and of opportunity); and FRATERNITY (assuring the dignity of the individual and the unity and integrity of the Nation).',
      'Adopted on 26th November 1949 (National Constitution Day); came into full force on 26th January 1950 (Republic Day).'
    ],
    keyPointsHi: [
      'अधिकार का स्रोत: "हम, भारत के लोग" लोकप्रिय संप्रभुता स्थापित करता है।',
      'भारतीय राज्य की प्रकृति: संप्रभु, समाजवादी, पंथनिरपेक्ष, लोकतंत्रात्मक, गणराज्य।',
      '42वें संविधान संशोधन 1976 द्वारा तीन शब्द जोड़े गए: "समाजवादी", "पंथनिरपेक्ष" और "अखंडता"।',
      'उद्देश्य: न्याय (सामाजिक, आर्थिक, राजनीतिक); स्वतंत्रता; समानता; और बंधुता।',
      '26 नवंबर 1949 को अंगीकृत; 26 जनवरी 1950 को पूर्ण रूप से लागू।'
    ],
    landmarkCases: [
      {
        caseName: 'Re: Berubari Union Case',
        year: 1960,
        ratio: 'Held that Preamble is a key to the minds of makers, but is NOT an integral part of the Constitution.'
      },
      {
        caseName: 'Kesavananda Bharati v. State of Kerala',
        year: 1973,
        ratio: 'Overruled Berubari; held that Preamble IS an integral part of the Constitution and forms part of the Basic Structure.'
      },
      {
        caseName: 'S.R. Bommai v. Union of India',
        year: 1994,
        ratio: 'Reaffirmed that Secularism as stated in the Preamble is an inviolable basic feature of the Indian Constitution.'
      }
    ],
    clatFocusNotes: 'CLAT passages test the meaning of "Secular" (Sarva Dharma Sambhava - principled distance/neutrality, unlike strict French laïcité) and "Democratic Republic" (hereditary monarchy excluded; head of state is elected).',
    clatFocusNotesHi: 'CLAT में धर्मनिरपेक्षता और लोकतांत्रिक गणराज्य की सटीक संवैधानिक परिभाषाओं पर प्रश्न पूछे जाते हैं।'
  },

  {
    id: 'const-fundamental-rights-equality',
    part: 'Part III',
    title: 'Right to Equality (Articles 14–18)',
    titleHi: 'समानता का अधिकार (अनुच्छेद 14–18)',
    articles: 'Articles 14, 15, 16, 17, 18',
    keyPoints: [
      'Article 14: Equality before law (British origin, negative concept) and Equal protection of the laws (US origin, positive obligation). Prohibits class legislation, but permits reasonable classification having an intelligible differentia with a rational nexus to the statutory objective.',
      'New Doctrine of Equality (E.P. Royappa & Maneka Gandhi): Equality is dynamic and antithetical to arbitrariness. State action that is arbitrary violates Article 14.',
      'Article 15: Prohibition of discrimination solely on grounds of religion, race, caste, sex, or place of birth. Exceptions: special provisions for women, children, socially & educationally backward classes (SEBC), SCs, STs, and EWS (Art 15(6)).',
      'Article 16: Equality of opportunity in public employment. Art 16(4) empowers reservations for backward classes not adequately represented.',
      'Article 17: Abolition of Untouchability (Absolute right, enforceable against private individuals; Protection of Civil Rights Act 1955).',
      'Article 18: Abolition of aristocratic titles (National awards like Bharat Ratna/Padma Vibhushan are valid decorations under Balaji Raghavan v. UOI, not titles).'
    ],
    keyPointsHi: [
      'अनुच्छेद 14: कानून के समक्ष समानता एवं विधियों का समान संरक्षण। मनमानेपन के विरुद्ध सुरक्षा।',
      'अनुच्छेद 15: केवल धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव का निषेध। महिलाओं, बच्चों और पिछड़े वर्गों के लिए विशेष उपबंध।',
      'अनुच्छेद 16: सार्वजनिक रोजगार में अवसर की समानता एवं आरक्षण के प्रावधान।',
      'अनुच्छेद 17: अस्पृश्यता का पूर्ण उन्मूलन।',
      'अनुच्छेद 18: उपाधियों का अंत।'
    ],
    landmarkCases: [
      {
        caseName: 'E.P. Royappa v. State of Tamil Nadu',
        year: 1974,
        ratio: 'Formulated the non-arbitrariness doctrine: Equality and arbitrariness are sworn enemies.'
      },
      {
        caseName: 'Indra Sawhney v. Union of India (Mandal Case)',
        year: 1992,
        ratio: 'Upheld 27% OBC reservation; introduced Creamy Layer exclusion; capped overall normal reservations at 50%.'
      },
      {
        caseName: 'Jarnail Singh v. Lachhmi Narain Gupta',
        year: 2018,
        ratio: 'Held creamy layer principle applies to SC/ST promotions as well to ensure benefits reach the truly needy.'
      },
      {
        caseName: 'Janki Prasad Parimoo v. State of J&K',
        year: 1973,
        ratio: 'Poverty alone cannot be the sole basis for determining educational backwardness under Article 15(4).'
      }
    ],
    clatFocusNotes: 'Passages frequently revolve around substantive equality vs formal equality: treating unequals equally is itself a form of inequality.',
    clatFocusNotesHi: 'असमानों के साथ समान व्यवहार करना भी एक प्रकार की असमानता है; वास्तविक समानता के सिद्धांत पर ध्यान दें।'
  },

  {
    id: 'const-fundamental-rights-freedoms',
    part: 'Part III',
    title: 'Right to Freedom & Personal Liberty (Articles 19–22)',
    titleHi: 'स्वतंत्रता एवं व्यक्तिगत स्वतंत्रता का अधिकार (अनुच्छेद 19–22)',
    articles: 'Articles 19, 20, 21, 21A, 22',
    keyPoints: [
      'Article 19(1): Six Democratic Freedoms: (a) speech and expression, (b) peaceful assembly without arms, (c) forming associations/unions/cooperatives, (d) moving freely throughout India, (e) residing and settling anywhere in India, (g) practicing any profession, trade, or business.',
      'Reasonable Restrictions under Art 19(2)–19(6): Must be backed by law and strictly fall within enumerated grounds (sovereignty, security of state, friendly relations with foreign states, public order, decency/morality, contempt of court, defamation, incitement to an offense).',
      'Article 20: Protection against retrospective criminal laws (Ex-post facto laws), double jeopardy (tried and punished twice for the same offense), and self-incrimination (compelled to be a witness against oneself).',
      'Article 21: Protection of Life and Personal Liberty: "No person shall be deprived of his life or personal liberty except according to procedure established by law" (transformed into "Due Process of Law" in Maneka Gandhi).',
      'Article 21A: Right to Free and Compulsory Education for children aged 6 to 14 years (inserted by 86th Constitutional Amendment 2002; RTE Act 2009).',
      'Article 22: Safeguards against arbitrary arrest: right to know grounds of arrest, right to consult legal practitioner, production before magistrate within 24 hours.'
    ],
    keyPointsHi: [
      'अनुच्छेद 19: छह मौलिक स्वतंत्रताएं एवं उन पर उचित प्रतिबंध (उचित कानून द्वारा समर्थित)।',
      'अनुच्छेद 20: कार्योत्तर विधियों से संरक्षण, दोहरे दंड से मुक्ति, और आत्म-अभिशंसन से संरक्षण।',
      'अनुच्छेद 21: जीवन और व्यक्तिगत स्वतंत्रता का संरक्षण (विधि द्वारा स्थापित उचित और न्यायसंगत प्रक्रिया)।',
      'अनुच्छेद 21A: 6 से 14 वर्ष के बच्चों के लिए मुफ्त और अनिवार्य शिक्षा का अधिकार।',
      'अनुच्छेद 22: गिरफ्तारी और निवारक निरोध के विरुद्ध संरक्षण।'
    ],
    landmarkCases: [
      {
        caseName: 'Maneka Gandhi v. Union of India',
        year: 1978,
        ratio: 'Expanded Article 21: Procedure depriving life/liberty must be "right, just, and fair", not arbitrary, introducing Due Process into Indian jurisprudence.'
      },
      {
        caseName: 'Justice K.S. Puttaswamy v. Union of India',
        year: 2017,
        ratio: '9-Judge Bench unanimously recognized the Right to Privacy as an intrinsic fundamental right under Article 21.'
      },
      {
        caseName: 'Navtej Singh Johar v. Union of India',
        year: 2018,
        ratio: 'Decriminalized consensual adult same-sex acts under Section 377 IPC on grounds of constitutional morality and Article 21.'
      },
      {
        caseName: 'Anuradha Bhasin v. Union of India',
        year: 2020,
        ratio: 'Held that freedom of speech and expression and freedom to practice trade over the Internet are protected under Article 19(1)(a) and 19(1)(g).'
      }
    ],
    clatFocusNotes: 'The Golden Triangle (Articles 14, 19, and 21) cannot be read in isolation; any law depriving personal liberty must pass the triple test of non-arbitrariness (14), reasonableness (19), and fairness (21).',
    clatFocusNotesHi: 'स्वर्ण त्रिकोण (अनुच्छेद 14, 19, 21): किसी भी व्यक्तिगत स्वतंत्रता पर प्रतिबंध को इन तीनों अनुच्छेदों के परीक्षण पर खरा उतरना होगा।'
  },

  {
    id: 'const-dpsp-duties',
    part: 'Part IV & IV-A',
    title: 'Directive Principles (DPSP) & Fundamental Duties',
    titleHi: 'राज्य के नीति निर्देशक तत्व एवं मौलिक कर्तव्य',
    articles: 'Articles 36–51 (Part IV) & Article 51A (Part IV-A)',
    keyPoints: [
      'DPSP (Part IV, borrowed from Ireland): Non-justiciable guidelines for state policy to establish a social and economic welfare democracy.',
      'Key Articles: Art 39A (Equal justice and free legal aid); Art 40 (Village Panchayats); Art 44 (Uniform Civil Code - UCC); Art 48A (Protection of environment, forests, and wildlife); Art 50 (Separation of judiciary from executive).',
      'Interplay with Fundamental Rights: Minerva Mills (1980) held that the Indian Constitution is founded on the bedrock of the balance between Part III and Part IV.',
      'Fundamental Duties (Part IV-A, Article 51A, borrowed from USSR): Recommended by Swaran Singh Committee; inserted by 42nd Amendment 1976 (10 duties), 11th duty added by 86th Amendment 2002 (duty of parent/guardian to provide education).',
      'Fundamental duties are non-enforceable per se by direct writ, but courts use them to interpret legislative reasonableness under Article 19.'
    ],
    keyPointsHi: [
      'नीति निर्देशक तत्व (आयरलैंड से प्रेरित): गैर-न्यायसंगत कल्याणकारी राज्य के लक्ष्य।',
      'प्रमुख अनुच्छेद: 39A (मुफ्त कानूनी सहायता), 40 (ग्राम पंचायत), 44 (समान नागरिक संहिता), 48A (पर्यावरण संरक्षण), 50 (न्यायपालिका का कार्यपालिका से पृथक्करण)।',
      'मौलिक कर्तव्य (अनुच्छेद 51A, सोवियत संघ से प्रेरित): 42वें संशोधन द्वारा 10 कर्तव्य, 86वें संशोधन द्वारा 11वां कर्तव्य (शिक्षा)।'
    ],
    landmarkCases: [
      {
        caseName: 'Minerva Mills Ltd. v. Union of India',
        year: 1980,
        ratio: 'To give absolute primacy to DPSPs over Fundamental Rights is to destroy the harmony of the Constitution. Both must co-exist in balance.'
      },
      {
        caseName: 'Shayara Bano v. Union of India',
        year: 2017,
        ratio: 'Declared instantaneous Triple Talaq (Talaq-e-Biddat) unconstitutional under Article 14, referencing gender equality and Art 44 spirit.'
      }
    ],
    clatFocusNotes: 'Focus on debates regarding Uniform Civil Code (Article 44) and Free Legal Aid (Article 39A) which led to the creation of NALSA and Legal Services Authorities Act 1987.',
    clatFocusNotesHi: 'समान नागरिक संहिता (अनुच्छेद 44) और मुफ्त कानूनी सहायता (अनुच्छेद 39A - नालसा) पर विशेष ध्यान दें।'
  },

  {
    id: 'const-judiciary-writs',
    part: 'Part V & VI',
    title: 'Judiciary, Jurisdiction & Constitutional Remedies',
    titleHi: 'न्यायपालिका, क्षेत्राधिकार एवं संवैधानिक उपचार',
    articles: 'Articles 32, 131, 136, 141, 142, 143, 226',
    keyPoints: [
      'Article 32: Constitutional remedy for enforcement of Fundamental Rights (described by Dr. B.R. Ambedkar as the "heart and soul of the Constitution"). An absolute fundamental right in itself.',
      'Article 226: High Court writ jurisdiction. Broader in scope than Article 32 because High Courts can issue writs for both Fundamental Rights and "any other legal right".',
      'Original Jurisdiction (Art 131): Exclusive disputes between Government of India and one or more States, or between two or more States.',
      'Special Leave Petition - SLP (Art 136): Discretionary extraordinary appellate power of the Supreme Court against any judgment or decree of any court/tribunal in India.',
      'Law Declared by SC Binding (Art 141): All courts in India are bound by Supreme Court precedents.',
      'Complete Justice (Art 142): Inherent power of the Supreme Court to pass any decree necessary for doing complete justice in any cause or matter.',
      'Advisory Jurisdiction (Art 143): President can refer questions of law or fact of public importance to the Supreme Court for its non-binding opinion.'
    ],
    keyPointsHi: [
      'अनुच्छेद 32: मौलिक अधिकारों के प्रवर्तन के लिए संवैधानिक उपचार (संविधान का हृदय और आत्मा)।',
      'अनुच्छेद 226: उच्च न्यायालय की रिट अधिकारिता (मौलिक अधिकारों और अन्य विधिक अधिकारों दोनों के लिए)।',
      'अनुच्छेद 131: केंद्र-राज्य विवादों में सर्वोच्च न्यायालय का मूल क्षेत्राधिकार।',
      'अनुच्छेद 136: विशेष अनुमति याचिका (SLP)।',
      'अनुच्छेद 141: सर्वोच्च न्यायालय का निर्णय सभी न्यायालयों पर बाध्यकारी।',
      'अनुच्छेद 142: पूर्ण न्याय करने की सर्वोच्च न्यायालय की असाधारण शक्ति।'
    ],
    landmarkCases: [
      {
        caseName: 'L. Chandra Kumar v. Union of India',
        year: 1997,
        ratio: 'Held that judicial review under Articles 32 and 226 is an integral part of the inviolable Basic Structure and cannot be excluded even by constitutional amendment.'
      },
      {
        caseName: 'Supreme Court Advocates-on-Record Association (Second Judges Case)',
        year: 1993,
        ratio: 'Established the Collegium System where CJI and senior-most judges have primacy in judicial appointments.'
      }
    ],
    clatFocusNotes: 'Compare the scope of Article 32 vs Article 226. High Court writ jurisdiction is wider because it covers non-fundamental legal rights as well.',
    clatFocusNotesHi: 'अनुच्छेद 32 और अनुच्छेद 226 की तुलना: उच्च न्यायालय की रिट अधिकारिता अधिक विस्तृत है क्योंकि यह सामान्य विधिक अधिकारों को भी शामिल करती है।'
  },

  {
    id: 'const-basic-structure-amendments',
    part: 'Part XX',
    title: 'Constitutional Amendments & Basic Structure Doctrine',
    titleHi: 'संवैधानिक संशोधन एवं मूल संरचना का सिद्धांत',
    articles: 'Article 368',
    keyPoints: [
      'Article 368: Procedure for amending the Constitution by Parliament: (1) By Special Majority of both Houses, and (2) Special Majority + Ratification by at least half of the State Legislatures for federal provisions.',
      'Basic Structure Doctrine (Kesavananda Bharati, April 24, 1973): Parliament has wide amending powers under Article 368, but CANNOT alter, damage, or emasculate the Basic Structure or framework of the Constitution.',
      'Elements of Basic Structure: Supremacy of the Constitution, Republican and Democratic form of government, Secular character, Separation of Powers, Federalism, Rule of Law, Judicial Review, Free and Fair Elections, Independence of the Judiciary.',
      'Landmark Amendments: 1st (1951 - 9th Schedule), 42nd (1976 - Mini Constitution), 44th (1978 - Restored civil liberties post-emergency), 73rd & 74th (1992 - Panchayats & Municipalities), 86th (2002 - Article 21A), 99th (2014 - NJAC, struck down), 101st (2016 - GST), 103rd (2019 - 10% EWS), 106th (2023 - Nari Shakti Vandan Adhiniyam - 33% Women Reservation in Lok Sabha & Assemblies).'
    ],
    keyPointsHi: [
      'अनुच्छेद 368: संसद की संविधान संशोधन शक्ति एवं प्रक्रिया।',
      'मूल संरचना का सिद्धांत (केशवानंद भारती 1973): संसद संविधान के मूल ढांचे को नष्ट या परिवर्तित नहीं कर सकती।',
      'मूल संरचना के तत्व: संविधान की सर्वोच्चता, धर्मनिरपेक्षता, संघवाद, न्यायिक समीक्षा, स्वतंत्र न्यायपालिका।',
      'प्रमुख संशोधन: 42वां, 44वां, 73वां, 86वां, 101वां (GST), 103वां (EWS), 106वां (नारी शक्ति वंदन अधिनियम - महिला आरक्षण)।'
    ],
    landmarkCases: [
      {
        caseName: 'Kesavananda Bharati v. State of Kerala',
        year: 1973,
        ratio: '13-Judge Bench held by 7:6 majority that Parliament cannot alter the Basic Structure of the Constitution.'
      },
      {
        caseName: 'Indira Nehru Gandhi v. Raj Narain',
        year: 1975,
        ratio: 'Struck down Article 329A(4) (barring judicial scrutiny of Prime Minister election) as violating Rule of Law and Judicial Review.'
      },
      {
        caseName: 'I.R. Coelho v. State of Tamil Nadu',
        year: 2007,
        ratio: 'Held that laws placed in the 9th Schedule after April 24, 1973 are open to judicial review if they violate fundamental rights forming part of the Basic Structure.'
      }
    ],
    clatFocusNotes: 'Master the sequence of Shankari Prasad (1951) -> Sajjan Singh (1965) -> Golaknath (1967) -> 24th Amendment -> Kesavananda Bharati (1973) -> Minerva Mills (1980).',
    clatFocusNotesHi: 'शंकरी प्रसाद से केशवानंद भारती तक न्यायिक विकास की समयरेखा का अध्ययन करें।'
  }
];
