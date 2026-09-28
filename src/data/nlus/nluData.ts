import { NLUInfo } from '../../types';

export const NLU_DATABASE: NLUInfo[] = [
  {
    id: 'nlu-nlsiu-bengaluru',
    name: 'National Law School of India University',
    shortName: 'NLSIU Bengaluru',
    tier: 1,
    city: 'Bengaluru',
    state: 'Karnataka',
    established: 1987,
    officialWebsite: 'https://www.nls.ac.in',
    brochureUrl: 'https://www.nls.ac.in/admissions/',
    examAccepted: 'CLAT',
    nirfRank2024: 1,
    campusSizeAcres: 23,
    medianPlacementLPA: 16.5,
    source: 'Consortium of NLUs Official Brochure & NLSIU Official Website',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) - 5 Year Integrated',
        seats: 300,
        annualFeeInLakhs: 4.35,
        eligibility: '10+2 with minimum 45% marks (40% for SC/ST)'
      },
      {
        program: 'LL.M. (Master of Laws) - 1 Year',
        seats: 120,
        annualFeeInLakhs: 3.10,
        eligibility: 'LL.B. degree with minimum 50% marks (45% for SC/ST)'
      }
    ],
    reservations: [
      { category: 'General (All India)', percentage: '60%' },
      { category: 'Karnataka Domicile', percentage: '25% (horizontal)' },
      { category: 'Scheduled Castes (SC)', percentage: '15%' },
      { category: 'Scheduled Tribes (ST)', percentage: '7.5%' },
      { category: 'OBC (Non-Creamy Layer)', percentage: '27%' },
      { category: 'EWS', percentage: '10%' },
      { category: 'Persons with Disabilities (PwD)', percentage: '5% (horizontal)' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 1, closingRank: 99, notes: 'HISTORICAL DATA: CLAT 2024 Round 1' },
      { year: 2024, round: 3, category: 'General', openingRank: 1, closingRank: 104, notes: 'HISTORICAL DATA: CLAT 2024 Final Round' },
      { year: 2024, round: 1, category: 'EWS', openingRank: 110, closingRank: 480, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 1, category: 'OBC', openingRank: 140, closingRank: 1100, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 1, category: 'SC', openingRank: 800, closingRank: 2450, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 1, category: 'ST', openingRank: 1800, closingRank: 5400, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-nalsar-hyderabad',
    name: 'NALSAR University of Law',
    shortName: 'NALSAR Hyderabad',
    tier: 1,
    city: 'Hyderabad',
    state: 'Telangana',
    established: 1998,
    officialWebsite: 'https://www.nalsar.ac.in',
    brochureUrl: 'https://www.nalsar.ac.in/admissions',
    examAccepted: 'CLAT',
    nirfRank2024: 3,
    campusSizeAcres: 55,
    medianPlacementLPA: 16.0,
    source: 'Consortium of NLUs Official Brochure & NALSAR Website',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) - 5 Year Integrated',
        seats: 132,
        annualFeeInLakhs: 3.25,
        eligibility: '10+2 with minimum 45% marks (40% for SC/ST)'
      },
      {
        program: 'LL.M. - 1 Year',
        seats: 66,
        annualFeeInLakhs: 2.10,
        eligibility: 'LL.B. degree with minimum 50% marks'
      }
    ],
    reservations: [
      { category: 'General (All India)', percentage: '55%' },
      { category: 'Telangana Domicile', percentage: '25%' },
      { category: 'SC', percentage: '15%' },
      { category: 'ST', percentage: '7.5%' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 100, closingRank: 165, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 3, category: 'General', openingRank: 100, closingRank: 178, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-nujs-kolkata',
    name: 'The West Bengal National University of Juridical Sciences',
    shortName: 'WBNUJS Kolkata',
    tier: 1,
    city: 'Kolkata',
    state: 'West Bengal',
    established: 1999,
    officialWebsite: 'https://www.nujs.edu',
    brochureUrl: 'https://www.nujs.edu/admissions.html',
    examAccepted: 'CLAT',
    nirfRank2024: 4,
    campusSizeAcres: 5,
    medianPlacementLPA: 15.5,
    source: 'Consortium of NLUs & WBNUJS Website',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) / B.Sc., LL.B. (Hons.)',
        seats: 132,
        annualFeeInLakhs: 3.10,
        eligibility: '10+2 with minimum 45% marks'
      },
      {
        program: 'LL.M. - 1 Year',
        seats: 100,
        annualFeeInLakhs: 2.00,
        eligibility: 'LL.B. degree'
      }
    ],
    reservations: [
      { category: 'General (All India)', percentage: '60%' },
      { category: 'West Bengal Domicile', percentage: '20%' },
      { category: 'SC/ST/PwD', percentage: 'As per statutory norms' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 166, closingRank: 265, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-nludelhi',
    name: 'National Law University, Delhi',
    shortName: 'NLU Delhi',
    tier: 1,
    city: 'New Delhi',
    state: 'Delhi',
    established: 2008,
    officialWebsite: 'https://nationallawuniversitydelhi.in',
    brochureUrl: 'https://nationallawuniversitydelhi.in',
    examAccepted: 'AILET',
    nirfRank2024: 2,
    campusSizeAcres: 12.5,
    medianPlacementLPA: 17.0,
    source: 'NLU Delhi Official Admission Notification 2024-2027',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) - 5 Year Integrated',
        seats: 123,
        annualFeeInLakhs: 3.85,
        eligibility: 'Senior Secondary School Examination (10+2 system) or equivalent with minimum 45% marks (40% in case of SC/ST/Persons with Disabilities)'
      },
      {
        program: 'LL.M. - 1 Year',
        seats: 80,
        annualFeeInLakhs: 2.50,
        eligibility: 'LL.B. or equivalent degree with minimum 50% marks (45% for SC/ST/Persons with Disabilities)'
      },
      {
        program: 'Ph.D. in Law',
        seats: 25,
        annualFeeInLakhs: 1.20,
        eligibility: 'Master’s degree in Law or equivalent with minimum 55% marks'
      }
    ],
    reservations: [
      { category: 'General (All India)', percentage: '50 Seats' },
      { category: 'Scheduled Castes (SC)', percentage: '15% (16 Seats)' },
      { category: 'Scheduled Tribes (ST)', percentage: '7.5% (8 Seats)' },
      { category: 'OBCs (Non-Creamy Layer)', percentage: '22% (24 Seats)' },
      { category: 'EWS', percentage: '10% (11 Seats)' },
      { category: 'Persons with Disabilities (PwD)', percentage: '5% (Horizontal)' },
      { category: 'Foreign Nationals / OCI', percentage: '10 Seats (Direct Admission without AILET)' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 1, closingRank: 85, notes: 'HISTORICAL DATA: AILET 2024 Round 1' },
      { year: 2024, round: 2, category: 'General', openingRank: 86, closingRank: 94, notes: 'HISTORICAL DATA: AILET 2024 Round 2' },
      { year: 2024, round: 1, category: 'EWS', openingRank: 100, closingRank: 340, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 1, category: 'OBC', openingRank: 120, closingRank: 620, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 1, category: 'SC', openingRank: 500, closingRank: 1800, notes: 'HISTORICAL DATA' },
      { year: 2024, round: 1, category: 'ST', openingRank: 1100, closingRank: 3200, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-nluj-jodhpur',
    name: 'National Law University, Jodhpur',
    shortName: 'NLU Jodhpur',
    tier: 1,
    city: 'Jodhpur',
    state: 'Rajasthan',
    established: 1999,
    officialWebsite: 'https://www.nlujodhpur.ac.in',
    brochureUrl: 'https://www.nlujodhpur.ac.in',
    examAccepted: 'CLAT',
    nirfRank2024: 8,
    campusSizeAcres: 50,
    medianPlacementLPA: 14.5,
    source: 'Consortium of NLUs & NLU Jodhpur',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) / B.B.A., LL.B. (Hons.)',
        seats: 120,
        annualFeeInLakhs: 2.95,
        eligibility: '10+2 with minimum 45% marks'
      },
      {
        program: 'LL.M. in Corporate / IPR Laws',
        seats: 50,
        annualFeeInLakhs: 1.95,
        eligibility: 'LL.B. degree'
      }
    ],
    reservations: [
      { category: 'General (All India)', percentage: '60%' },
      { category: 'Rajasthan Domicile', percentage: 'Exemption/Category quotas' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 266, closingRank: 375, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-gnlu-gandhinagar',
    name: 'Gujarat National Law University',
    shortName: 'GNLU Gandhinagar',
    tier: 1,
    city: 'Gandhinagar',
    state: 'Gujarat',
    established: 2003,
    officialWebsite: 'https://www.gnlu.ac.in',
    brochureUrl: 'https://www.gnlu.ac.in',
    examAccepted: 'CLAT',
    nirfRank2024: 7,
    campusSizeAcres: 50,
    medianPlacementLPA: 14.0,
    source: 'Consortium of NLUs & GNLU',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A. LL.B., B.Com. LL.B., B.B.A. LL.B., B.Sc. LL.B.',
        seats: 204,
        annualFeeInLakhs: 2.80,
        eligibility: '10+2 with minimum 45% marks'
      }
    ],
    reservations: [
      { category: 'General', percentage: '55%' },
      { category: 'Gujarat Domicile', percentage: '25%' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 376, closingRank: 460, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-nliu-bhopal',
    name: 'National Law Institute University',
    shortName: 'NLIU Bhopal',
    tier: 2,
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    established: 1997,
    officialWebsite: 'https://www.nliu.ac.in',
    brochureUrl: 'https://www.nliu.ac.in',
    examAccepted: 'CLAT',
    nirfRank2024: 15,
    campusSizeAcres: 40,
    medianPlacementLPA: 13.0,
    source: 'Consortium of NLUs & NLIU Bhopal',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) / B.Sc., LL.B. (Cyber Security)',
        seats: 134,
        annualFeeInLakhs: 2.85,
        eligibility: '10+2 with minimum 45% marks'
      }
    ],
    reservations: [
      { category: 'General', percentage: '50%' },
      { category: 'MP Domicile', percentage: '50%' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 400, closingRank: 510, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-mnlu-mumbai',
    name: 'Maharashtra National Law University Mumbai',
    shortName: 'MNLU Mumbai',
    tier: 2,
    city: 'Mumbai',
    state: 'Maharashtra',
    established: 2014,
    officialWebsite: 'https://mnlumumbai.edu.in',
    brochureUrl: 'https://mnlumumbai.edu.in',
    examAccepted: 'CLAT',
    nirfRank2024: 16,
    campusSizeAcres: 10,
    medianPlacementLPA: 12.5,
    source: 'Consortium of NLUs & MNLU Mumbai',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) / B.B.A., LL.B. (Hons.)',
        seats: 120,
        annualFeeInLakhs: 3.15,
        eligibility: '10+2 with minimum 45% marks'
      }
    ],
    reservations: [
      { category: 'General (All India)', percentage: '38%' },
      { category: 'Maharashtra Domicile & Reserved Categories', percentage: '62%' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 480, closingRank: 620, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-rgnul-patiala',
    name: 'Rajiv Gandhi National University of Law',
    shortName: 'RGNUL Patiala',
    tier: 2,
    city: 'Patiala',
    state: 'Punjab',
    established: 2006,
    officialWebsite: 'https://www.rgnul.ac.in',
    brochureUrl: 'https://www.rgnul.ac.in',
    examAccepted: 'CLAT',
    nirfRank2024: 20,
    campusSizeAcres: 50,
    medianPlacementLPA: 9.5,
    source: 'Consortium of NLUs & RGNUL',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) - 5 Year',
        seats: 180,
        annualFeeInLakhs: 2.65,
        eligibility: '10+2 with 45% marks'
      }
    ],
    reservations: [
      { category: 'All India General', percentage: '65%' },
      { category: 'Punjab Domicile', percentage: '10%' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 800, closingRank: 1250, notes: 'HISTORICAL DATA' }
    ]
  },

  {
    id: 'nlu-nluo-cuttack',
    name: 'National Law University Odisha',
    shortName: 'NLUO Cuttack',
    tier: 2,
    city: 'Cuttack',
    state: 'Odisha',
    established: 2008,
    officialWebsite: 'https://www.nluo.ac.in',
    brochureUrl: 'https://www.nluo.ac.in',
    examAccepted: 'CLAT',
    nirfRank2024: 25,
    campusSizeAcres: 50,
    medianPlacementLPA: 10.0,
    source: 'Consortium of NLUs & NLUO',
    lastVerified: '2026-09-28',
    courses: [
      {
        program: 'B.A., LL.B. (Hons.) / B.B.A., LL.B. (Hons.)',
        seats: 180,
        annualFeeInLakhs: 2.50,
        eligibility: '10+2 with 45% marks'
      }
    ],
    reservations: [
      { category: 'All India', percentage: '75%' },
      { category: 'Odisha Domicile', percentage: '25%' }
    ],
    historicalCutoffs: [
      { year: 2024, round: 1, category: 'General', openingRank: 750, closingRank: 1150, notes: 'HISTORICAL DATA' }
    ]
  }
];

export interface CounsellingGuide {
  exam: 'CLAT' | 'AILET';
  title: string;
  titleHi: string;
  conductingAuthority: string;
  keySteps: {
    stepNumber: number;
    title: string;
    titleHi: string;
    description: string;
    descriptionHi: string;
    criticalNotes?: string;
  }[];
  seatAllotmentOptions: {
    term: string;
    meaning: string;
    consequence: string;
  }[];
}

export const COUNSELLING_DATA: CounsellingGuide[] = [
  {
    exam: 'CLAT',
    title: 'Consortium of NLUs Centralized Counselling Process',
    titleHi: 'कंसोर्टियम ऑफ एनएलयू केंद्रीयकृत काउंसलिंग प्रक्रिया',
    conductingAuthority: 'Consortium of National Law Universities',
    keySteps: [
      {
        stepNumber: 1,
        title: 'Declaration of Results & Merit List',
        titleHi: 'परिणाम एवं मेरिट सूची की घोषणा',
        description: 'Consortium publishes all-India ranks (AIR) and category ranks on the official portal. Eligible candidates within the invited rank band receive SMS and email notifications.',
        descriptionHi: 'कंसोर्टियम ऑल इंडिया रैंक और श्रेणी रैंक जारी करता है।'
      },
      {
        stepNumber: 2,
        title: 'Counselling Registration & Fee Payment',
        titleHi: 'काउंसलिंग पंजीकरण एवं शुल्क भुगतान',
        description: 'Candidates must log in, verify preferences of 26 NLUs in order of priority, and pay the non-refundable/adjustable counselling registration fee (Rs 30,000 for General; Rs 20,000 for SC/ST/OBC/EWS).',
        descriptionHi: 'अभ्यर्थी 26 एनएलयू की प्राथमिकता सूची भरते हैं और काउंसलिंग शुल्क जमा करते हैं।',
        criticalNotes: 'Once locked, the order of NLU preference cannot be reordered in later rounds!'
      },
      {
        stepNumber: 3,
        title: 'Publication of Allotment Lists (Rounds 1 to 5)',
        titleHi: 'सीट आवंटन सूची का प्रकाशन (चरण 1 से 5)',
        description: 'Seats are allotted strictly by merit-cum-preference. At each round, candidates must exercise one of the mandatory options: Freeze, Float, or Exit.',
        descriptionHi: 'प्रत्येक राउंड में सीट आवंटित होने पर फ्रीज, फ्लोट या एग्जिट का विकल्प चुनना अनिवार्य है।'
      },
      {
        stepNumber: 4,
        title: 'Confirmation Fee Payment & Document Upload',
        titleHi: 'पुष्टि शुल्क भुगतान एवं दस्तावेज़ सत्यापन',
        description: 'Upon choosing Freeze or Float, candidates must pay the university confirmation fee (typically Rs 20,000) and upload qualifying 10+2 marksheets, category certificates, and domicile proofs.',
        descriptionHi: 'आवंटित सीट सुरक्षित करने के लिए शुल्क भुगतान और प्रमाण पत्रों का सत्यापन।'
      }
    ],
    seatAllotmentOptions: [
      {
        term: 'Freeze',
        meaning: 'Accept the currently allotted NLU seat unconditionally.',
        consequence: 'Candidate is confirmed at this NLU and will NOT be considered for higher preferences in subsequent rounds.'
      },
      {
        term: 'Float',
        meaning: 'Accept the allotted seat while holding the option to upgrade to a higher-preference NLU if a vacancy arises in subsequent rounds.',
        consequence: 'If upgraded, the previous seat is released; if not upgraded, the current seat remains securely reserved.'
      },
      {
        term: 'Exit',
        meaning: 'Withdraw entirely from the counselling process.',
        consequence: 'Candidate relinquishes the allotted seat and will not be considered in any further allotment rounds. Refund rules apply as per schedule.'
      }
    ]
  },

  {
    exam: 'AILET',
    title: 'NLU Delhi AILET Individual Admission & Seat Allotment',
    titleHi: 'एनएलयू दिल्ली व्यक्तिगत प्रवेश प्रक्रिया',
    conductingAuthority: 'National Law University, Delhi',
    keySteps: [
      {
        stepNumber: 1,
        title: 'AILET Result & Category-wise Invite Lists',
        titleHi: 'एआईलेट परिणाम एवं श्रेणीवार आमंत्रण सूची',
        description: 'NLU Delhi issues the all-India merit list and invites approximately 3x to 4x candidates per available category seat to register for online counselling.',
        descriptionHi: 'एनएलयू दिल्ली मेरिट सूची जारी कर श्रेणीवार काउंसलिंग के लिए अभ्यर्थियों को आमंत्रित करता है।'
      },
      {
        stepNumber: 2,
        title: 'Online Counselling Fee Deposit',
        titleHi: 'ऑनलाइन काउंसलिंग शुल्क जमा करना',
        description: 'Candidates register on the NLU Delhi portal and deposit the provisional admission fee (Rs 50,000 for General; Rs 25,000 for SC/ST/PwD).',
        descriptionHi: 'प्रवेश पोर्टल पर पंजीकरण और अनंतिम प्रवेश शुल्क जमा करना।'
      },
      {
        stepNumber: 3,
        title: 'Provisional Seat Allotment Lists (Rounds 1, 2, 3, & Spot)',
        titleHi: 'अनंतिम सीट आवंटन सूचियां',
        description: 'Since AILET is for NLU Delhi alone, there is no "Float" between multiple NLUs. The candidate is either provisionally selected, waitlisted, or out of rank band.',
        descriptionHi: 'चूंकि यह केवल एनएलयू दिल्ली के लिए है, इसलिए कई कॉलेजों के बीच फ्लोट विकल्प नहीं होता।'
      },
      {
        stepNumber: 4,
        title: 'Physical Verification & Hostel Registration',
        titleHi: 'भौतिक सत्यापन एवं छात्रावास पंजीकरण',
        description: 'Final admission requires physical reporting at the Sector 14, Dwarka campus with original testimonials and payment of the balance university balance fees.',
        descriptionHi: 'द्वारका परिसर में मूल दस्तावेजों का सत्यापन और शेष शुल्क का भुगतान।'
      }
    ],
    seatAllotmentOptions: [
      {
        term: 'Provisional Offer Acceptance',
        meaning: 'Pay full provisional tuition fee to lock the allotted seat at NLU Delhi.',
        consequence: 'Guarantees seat subject to document verification.'
      },
      {
        term: 'Waitlist Tracking',
        meaning: 'Remain in the active queue for subsequent vacant round releases.',
        consequence: 'If higher-ranked candidates decline or take admission elsewhere, seat is allotted in Round 2 or 3.'
      },
      {
        term: 'Withdrawal / Refund Request',
        meaning: 'Formally withdraw application before the specified university cutoff date.',
        consequence: 'Fee refunded as per UGC / NLU Delhi refund policy after minor processing deduction.'
      }
    ]
  }
];
