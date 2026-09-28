import { ExamConfig } from '../../types';

export const EXAM_CONFIGS: Record<string, ExamConfig> = {
  'CLAT-2027-UG': {
    examId: 'CLAT-2027-UG',
    name: 'CLAT',
    year: 2027,
    program: 'UG',
    durationMinutes: 120,
    questions: 120,
    marks: 120,
    negativeMark: 0.25,
    offlineOrOnline: 'Offline (Pen & Paper)',
    officialAuthority: 'Consortium of National Law Universities',
    officialWebsite: 'https://consortiumofnlus.ac.in',
    brochureUrl: 'https://consortiumofnlus.ac.in/clat-2027/',
    lastVerified: '2026-09-28',
    keyHighlights: [
      '120 Multiple Choice Questions (reduced from 150 since CLAT 2024)',
      'Total duration is 2 hours (120 minutes)',
      '+1 mark for each correct answer; -0.25 marks for each wrong answer',
      'Completely passage-based examination (passages of ~450 words each)',
      'No prior legal knowledge is required for Legal Reasoning section',
      'Quantitative Techniques tests Class 10 level mathematical operations'
    ],
    sections: [
      {
        name: 'English Language',
        questionCountApprox: '22–26 questions (~20% weightage)',
        marks: 24,
        description: 'Passages of ~450 words from contemporary or historically significant fiction and non-fiction. Tests comprehension, main point, inferences, vocabulary in context.'
      },
      {
        name: 'Current Affairs including General Knowledge',
        questionCountApprox: '28–32 questions (~25% weightage)',
        marks: 30,
        description: 'Passages of ~450 words derived from news, journalistic sources and non-fiction. Tests contemporary events of national/international importance, arts, culture, history.'
      },
      {
        name: 'Legal Reasoning',
        questionCountApprox: '28–32 questions (~25% weightage)',
        marks: 30,
        description: 'Passages of ~450 words relating to legal matters, public policy, and moral philosophies. Prior knowledge of law is not required; rules must be identified from the passage and applied to facts.'
      },
      {
        name: 'Logical Reasoning',
        questionCountApprox: '22–26 questions (~20% weightage)',
        marks: 24,
        description: 'Short passages of ~300-450 words followed by questions testing ability to identify arguments, premises, conclusions, assumptions, strengthen/weaken arguments, and draw inferences.'
      },
      {
        name: 'Quantitative Techniques',
        questionCountApprox: '10–14 questions (~10% weightage)',
        marks: 12,
        description: 'Short sets of facts, propositions, graphs, or pictorial representations followed by MCQs testing mathematical operations at Class 10 level (ratios, percentages, mensuration, DI).'
      }
    ]
  },

  'CLAT-2027-PG': {
    examId: 'CLAT-2027-PG',
    name: 'CLAT',
    year: 2027,
    program: 'PG',
    durationMinutes: 120,
    questions: 120,
    marks: 120,
    negativeMark: 0.25,
    offlineOrOnline: 'Offline (Pen & Paper)',
    officialAuthority: 'Consortium of National Law Universities',
    officialWebsite: 'https://consortiumofnlus.ac.in',
    brochureUrl: 'https://consortiumofnlus.ac.in/clat-2027/',
    lastVerified: '2026-09-28',
    keyHighlights: [
      '120 Multiple Choice Questions testing LL.B. curriculum',
      'Passage-based questions from primary legal materials (statutes, landmark rulings, judgments)',
      'Duration is 2 hours (120 minutes)',
      '+1 mark for each correct answer; -0.25 marks for each wrong answer',
      'Major weightage on Constitutional Law, Jurisprudence, and core statutory subjects'
    ],
    sections: [
      {
        name: 'Constitutional Law',
        questionCountApprox: '40–50 questions',
        marks: 45,
        description: 'Preamble, Fundamental Rights, Directive Principles, Judiciary, Emergency Provisions, Center-State Relations, and Landmark Constitutional Bench judgments.'
      },
      {
        name: 'Jurisprudence & Legal Theory',
        questionCountApprox: '20–25 questions',
        marks: 22,
        description: 'Schools of jurisprudence (Analytical, Historical, Sociological, Natural Law), Rights and Duties, Possession, Ownership, Liability, and Legal Personhood.'
      },
      {
        name: 'Other Law Subjects (Contracts, Torts, Criminal Law, International Law, IPR)',
        questionCountApprox: '50–55 questions',
        marks: 53,
        description: 'Passages from judgments and statutory provisions in Law of Contracts, Torts, Bharatiya Nyaya Sanhita / IPC, Family Law, Public International Law, and IPR.'
      }
    ]
  },

  'AILET-2027-UG': {
    examId: 'AILET-2027-UG',
    name: 'AILET',
    year: 2027,
    program: 'UG',
    durationMinutes: 120,
    questions: 150,
    marks: 150,
    negativeMark: 0.25,
    offlineOrOnline: 'Offline (Pen & Paper)',
    officialAuthority: 'National Law University, Delhi (NLU Delhi)',
    officialWebsite: 'https://nationallawuniversitydelhi.in',
    brochureUrl: 'https://nationallawuniversitydelhi.in',
    lastVerified: '2026-09-28',
    keyHighlights: [
      '150 Multiple Choice Questions across 3 sections',
      'Section A: English Language (50 marks, 50 questions)',
      'Section B: Current Affairs & General Knowledge (30 marks, 30 questions)',
      'Section C: Logical Reasoning (70 marks, 70 questions)',
      'Note: Legal principles may be used in Section C to test logical aptitude, but no technical legal knowledge is required',
      'No separate Mathematics/Quantitative section',
      'No separate Legal Aptitude section'
    ],
    sections: [
      {
        name: 'English Language',
        questionCountApprox: '50 questions',
        marks: 50,
        description: 'Reading comprehension, vocabulary in context, grammar, sentence correction, idioms, para jumbles, contextual usage, and critical reading.'
      },
      {
        name: 'Current Affairs & General Knowledge',
        questionCountApprox: '30 questions',
        marks: 30,
        description: 'National and international contemporary events, legal developments, constitution, sports, appointments, science & environment, culture, and awards.'
      },
      {
        name: 'Logical Reasoning',
        questionCountApprox: '70 questions',
        marks: 70,
        description: 'Critical reasoning (arguments, premises, conclusions, assumptions, strengthen/weaken), analytical puzzles, syllogisms, and principle-based reasoning.'
      }
    ]
  },

  'AILET-2027-PG': {
    examId: 'AILET-2027-PG',
    name: 'AILET',
    year: 2027,
    program: 'PG',
    durationMinutes: 120,
    questions: 100,
    marks: 100,
    negativeMark: 0.25,
    offlineOrOnline: 'Offline (Pen & Paper)',
    officialAuthority: 'National Law University, Delhi (NLU Delhi)',
    officialWebsite: 'https://nationallawuniversitydelhi.in',
    brochureUrl: 'https://nationallawuniversitydelhi.in',
    lastVerified: '2026-09-28',
    keyHighlights: [
      '100 Multiple Choice Questions for LL.M. admission',
      '100 marks total in 120 minutes',
      '+1 mark for correct; -0.25 mark for incorrect',
      'Covers core LLB subjects with strong emphasis on Constitutional Law and Criminal Law'
    ],
    sections: [
      {
        name: 'Core LLB Law Subjects',
        questionCountApprox: '100 questions',
        marks: 100,
        description: 'Constitutional Law, Jurisprudence, Criminal Law, Law of Contract, Torts, International Law, Intellectual Property Law, and Contemporary Legal Issues.'
      }
    ]
  }
};

export interface ExamComparisonRow {
  parameter: string;
  parameterHi: string;
  clat: string;
  ailet: string;
  highlight?: boolean;
}

export const EXAM_COMPARISON_DATA: ExamComparisonRow[] = [
  {
    parameter: 'Full Form',
    parameterHi: 'पूरा नाम',
    clat: 'Common Law Admission Test',
    ailet: 'All India Law Entrance Test'
  },
  {
    parameter: 'Conducting Body',
    parameterHi: 'आयोजक संस्था',
    clat: 'Consortium of National Law Universities',
    ailet: 'National Law University, Delhi (NLU Delhi)'
  },
  {
    parameter: 'Scope of Admission',
    parameterHi: 'प्रवेश का दायरा',
    clat: '26 Participating NLUs across India + other affiliated colleges',
    ailet: 'Exclusively for National Law University, Delhi (NLU Delhi)',
    highlight: true
  },
  {
    parameter: 'Total Questions (UG)',
    parameterHi: 'कुल प्रश्न (UG)',
    clat: '120 Questions (since 2024)',
    ailet: '150 Questions',
    highlight: true
  },
  {
    parameter: 'Total Marks (UG)',
    parameterHi: 'कुल अंक (UG)',
    clat: '120 Marks',
    ailet: '150 Marks'
  },
  {
    parameter: 'Exam Duration',
    parameterHi: 'परीक्षा अवधि',
    clat: '120 Minutes (2 Hours)',
    ailet: '120 Minutes (2 Hours)'
  },
  {
    parameter: 'Time per Question',
    parameterHi: 'प्रति प्रश्न समय',
    clat: '60 seconds per question (120 Q / 120 min)',
    ailet: '48 seconds per question (150 Q / 120 min) — Faster pace needed',
    highlight: true
  },
  {
    parameter: 'Marking Scheme',
    parameterHi: 'अंक योजना',
    clat: '+1 for correct, -0.25 for incorrect, 0 for unattempted',
    ailet: '+1 for correct, -0.25 for incorrect, 0 for unattempted'
  },
  {
    parameter: 'Number of Sections',
    parameterHi: 'खंडों की संख्या',
    clat: '5 Sections (English, CA/GK, Legal, Logical, Quant)',
    ailet: '3 Sections (English, CA/GK, Logical Reasoning)',
    highlight: true
  },
  {
    parameter: 'Legal Section',
    parameterHi: 'विधिक खंड',
    clat: 'Separate section (28-32 questions, passage-based)',
    ailet: 'No separate legal section; legal principles tested in Logical Reasoning'
  },
  {
    parameter: 'Mathematics / Quant',
    parameterHi: 'गणित / मात्रात्मक तकनीक',
    clat: 'Separate section (10-14 questions, Class 10 DI sets)',
    ailet: 'No Mathematics section',
    highlight: true
  },
  {
    parameter: 'Question Format',
    parameterHi: 'प्रश्न प्रारूप',
    clat: '100% Passage-based (~450 word passages with 4-6 MCQs each)',
    ailet: 'Mix of passage-based reading comprehension and standalone MCQs'
  },
  {
    parameter: 'Negative Marking Penalty',
    parameterHi: 'नकारात्मक अंकन',
    clat: '25% (0.25 mark deducted per wrong answer)',
    ailet: '25% (0.25 mark deducted per wrong answer)'
  },
  {
    parameter: 'Exam Mode',
    parameterHi: 'परीक्षा माध्यम',
    clat: 'Offline Pen & Paper (OMR sheet)',
    ailet: 'Offline Pen & Paper (OMR sheet)'
  },
  {
    parameter: 'Typical Exam Date',
    parameterHi: 'सामान्य परीक्षा तिथि',
    clat: 'First Sunday of December (for next academic year)',
    ailet: 'Second Sunday of December (one week after CLAT)'
  }
];
