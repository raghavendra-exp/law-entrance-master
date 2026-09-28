import { ExamType, ProgramLevel } from '../../types';

export interface PyqPaperSummary {
  id: string;
  exam: ExamType;
  program: ProgramLevel;
  year: number;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  officialPaperAvailable: boolean;
  sections: {
    sectionName: string;
    questionsCount: number;
  }[];
  notableHighlights: string;
  officialDownloadNote: string;
}

export const PYQ_PAPERS_CATALOG: PyqPaperSummary[] = [
  {
    id: 'pyq-clat-ug-2025',
    exam: 'CLAT',
    program: 'UG',
    year: 2025,
    totalQuestions: 120,
    totalMarks: 120,
    durationMinutes: 120,
    officialPaperAvailable: true,
    sections: [
      { sectionName: 'English Language', questionsCount: 24 },
      { sectionName: 'Current Affairs & GK', questionsCount: 28 },
      { sectionName: 'Legal Reasoning', questionsCount: 32 },
      { sectionName: 'Logical Reasoning', questionsCount: 24 },
      { sectionName: 'Quantitative Techniques', questionsCount: 12 }
    ],
    notableHighlights: 'Featured passages on Supreme Court sub-classification ruling, environmental fundamental rights, international humanitarian law, and economic data caselets.',
    officialDownloadNote: 'Available on Consortium of NLUs Candidate Portal & Official Archives'
  },
  {
    id: 'pyq-clat-ug-2024',
    exam: 'CLAT',
    program: 'UG',
    year: 2024,
    totalQuestions: 120,
    totalMarks: 120,
    durationMinutes: 120,
    officialPaperAvailable: true,
    sections: [
      { sectionName: 'English Language', questionsCount: 24 },
      { sectionName: 'Current Affairs & GK', questionsCount: 28 },
      { sectionName: 'Legal Reasoning', questionsCount: 32 },
      { sectionName: 'Logical Reasoning', questionsCount: 24 },
      { sectionName: 'Quantitative Techniques', questionsCount: 12 }
    ],
    notableHighlights: 'Historic first year of the 120-question pattern (reduced from 150 questions). Passages emphasized contemporary public law, constitutional morality, and digital rights.',
    officialDownloadNote: 'Verified Consortium of NLUs Master Question Booklet with Final Answer Key'
  },
  {
    id: 'pyq-clat-ug-2023',
    exam: 'CLAT',
    program: 'UG',
    year: 2023,
    totalQuestions: 150,
    totalMarks: 150,
    durationMinutes: 120,
    officialPaperAvailable: true,
    sections: [
      { sectionName: 'English Language', questionsCount: 30 },
      { sectionName: 'Current Affairs & GK', questionsCount: 35 },
      { sectionName: 'Legal Reasoning', questionsCount: 40 },
      { sectionName: 'Logical Reasoning', questionsCount: 30 },
      { sectionName: 'Quantitative Techniques', questionsCount: 15 }
    ],
    notableHighlights: 'Legacy 150-question format. Tested reading speed endurance with lengthy legal reasoning passages on surrogacy, electoral law, and consumer protection.',
    officialDownloadNote: 'Verified Consortium of NLUs Master Paper'
  },
  {
    id: 'pyq-ailet-ug-2025',
    exam: 'AILET',
    program: 'UG',
    year: 2025,
    totalQuestions: 150,
    totalMarks: 150,
    durationMinutes: 120,
    officialPaperAvailable: true,
    sections: [
      { sectionName: 'English Language', questionsCount: 50 },
      { sectionName: 'Current Affairs & GK', questionsCount: 30 },
      { sectionName: 'Logical Reasoning', questionsCount: 70 }
    ],
    notableHighlights: 'Extensive Section C containing 70 questions blending critical reasoning, principle-based deductions, and complex seating arrangement puzzles.',
    officialDownloadNote: 'NLU Delhi Official Examination Archive'
  },
  {
    id: 'pyq-ailet-ug-2024',
    exam: 'AILET',
    program: 'UG',
    year: 2024,
    totalQuestions: 150,
    totalMarks: 150,
    durationMinutes: 120,
    officialPaperAvailable: true,
    sections: [
      { sectionName: 'English Language', questionsCount: 50 },
      { sectionName: 'Current Affairs & GK', questionsCount: 30 },
      { sectionName: 'Logical Reasoning', questionsCount: 70 }
    ],
    notableHighlights: 'Section C tested syllogistic logic and fact-principle reasoning without requiring prior legal doctrine. GK balanced international treaties and constitutional developments.',
    officialDownloadNote: 'NLU Delhi Master Question Booklet'
  },
  {
    id: 'pyq-clat-pg-2024',
    exam: 'CLAT',
    program: 'PG',
    year: 2024,
    totalQuestions: 120,
    totalMarks: 120,
    durationMinutes: 120,
    officialPaperAvailable: true,
    sections: [
      { sectionName: 'Constitutional Law', questionsCount: 48 },
      { sectionName: 'Jurisprudence & Legal Theory', questionsCount: 24 },
      { sectionName: 'Commercial, Criminal & International Law', questionsCount: 48 }
    ],
    notableHighlights: 'Deep textual extracts from recent Supreme Court Constitution Bench judgments and leading juristic commentaries on Rule of Recognition and Grundnorm.',
    officialDownloadNote: 'Consortium of NLUs Official PG Archive'
  }
];

export interface PyqTrendMetric {
  topic: string;
  section: string;
  exam: ExamType;
  appearanceFrequency: 'High' | 'Very High' | 'Medium';
  averageQuestionsPerPaper: string;
  historicalTrendNotes: string;
}

export const PYQ_ANALYTICS_DATA: PyqTrendMetric[] = [
  {
    topic: 'Principle-Fact Application (Constitutional & Public Law)',
    section: 'Legal Reasoning',
    exam: 'CLAT',
    appearanceFrequency: 'Very High',
    averageQuestionsPerPaper: '12–15 questions',
    historicalTrendNotes: 'Appears in every single CLAT paper since the 2020 passage pattern overhaul. Emphasizes Fundamental Rights, Judicial Review, and Environmental Jurisprudence.'
  },
  {
    topic: 'Torts & Civil Liability (Negligence, Strict & Absolute Liability)',
    section: 'Legal Reasoning',
    exam: 'CLAT',
    appearanceFrequency: 'Very High',
    averageQuestionsPerPaper: '6–8 questions',
    historicalTrendNotes: 'Consistently tested through contemporary factual contexts such as consumer electronic harms, industrial disasters, and hospital negligence.'
  },
  {
    topic: 'Critical Reasoning (Strengthening & Weakening Arguments)',
    section: 'Logical Reasoning',
    exam: 'CLAT',
    appearanceFrequency: 'Very High',
    averageQuestionsPerPaper: '8–10 questions',
    historicalTrendNotes: 'Central component of CLAT LR passages. Requires identifying unstated premises and counteracting author bias.'
  },
  {
    topic: 'Analytical Puzzles & Seating Arrangements',
    section: 'Logical Reasoning',
    exam: 'AILET',
    appearanceFrequency: 'High',
    averageQuestionsPerPaper: '15–20 questions',
    historicalTrendNotes: 'Exclusive hallmark of AILET Section C. Tests fast spatial and sequential constraint tracking under time pressure.'
  },
  {
    topic: 'Caselet Tabular Data Interpretation',
    section: 'Quantitative Techniques',
    exam: 'CLAT',
    appearanceFrequency: 'Very High',
    averageQuestionsPerPaper: '8–12 questions (2 to 3 caselets)',
    historicalTrendNotes: 'CLAT rarely asks standalone math problems; almost all quant questions are presented as narrative caselets requiring tabular translation.'
  },
  {
    topic: 'Reading Comprehension (Inference & Tone Extraction)',
    section: 'English Language',
    exam: 'CLAT',
    appearanceFrequency: 'Very High',
    averageQuestionsPerPaper: '16–20 questions',
    historicalTrendNotes: 'Passages selected from literary non-fiction, philosophy of law, and socio-economic essays of approximately 450 words.'
  },
  {
    topic: 'Supreme Court Landmark Rulings & Statutory Enactments',
    section: 'Current Affairs & GK',
    exam: 'CLAT',
    appearanceFrequency: 'Very High',
    averageQuestionsPerPaper: '12–16 questions',
    historicalTrendNotes: 'Consortium draws heavily from the legal affairs of the preceding 12-month window.'
  }
];
