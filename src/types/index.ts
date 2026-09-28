// Core Type Definitions for Law Entrance Master India

export type ExamType = 'CLAT' | 'AILET';
export type ProgramLevel = 'UG' | 'PG';
export type Language = 'en' | 'hi';
export type ThemeMode = 'light' | 'dark' | 'system';

export type QuestionSourceType = 'verified_pyq' | 'original' | 'pyq_style';
export type Difficulty = 'easy' | 'medium' | 'hard';

export type ClatSection = 
  | 'English Language'
  | 'Current Affairs including General Knowledge'
  | 'Legal Reasoning'
  | 'Logical Reasoning'
  | 'Quantitative Techniques';

export type AiletSection = 
  | 'English Language'
  | 'Current Affairs & General Knowledge'
  | 'Logical Reasoning';

export type PgSubject = 
  | 'Constitutional Law'
  | 'Jurisprudence'
  | 'Administrative Law'
  | 'Law of Contract'
  | 'Law of Torts'
  | 'Family Law'
  | 'Criminal Law'
  | 'International Law'
  | 'Property Law'
  | 'Intellectual Property Law'
  | 'Company Law';

export interface ExamConfig {
  examId: string;
  name: ExamType;
  year: number;
  program: ProgramLevel;
  durationMinutes: number;
  questions: number;
  marks: number;
  negativeMark: number;
  sections: {
    name: string;
    questionCountApprox: string;
    marks: number;
    description: string;
  }[];
  officialAuthority: string;
  officialWebsite: string;
  brochureUrl?: string;
  lastVerified: string;
  offlineOrOnline: 'Offline (Pen & Paper)' | 'Computer Based';
  keyHighlights: string[];
}

export interface SyllabusNode {
  id: string;
  title: string;
  titleHi: string;
  section: string;
  exam: ExamType[];
  program: ProgramLevel[];
  description: string;
  descriptionHi: string;
  officialWeightage?: string;
  topics: {
    id: string;
    name: string;
    nameHi: string;
    subtopics: string[];
    officialGuidance: string;
    officialGuidanceHi: string;
  }[];
}

export interface PassageItem {
  id: string;
  text: string;
  textHi?: string;
  wordCount: number;
  source: string;
  category: string;
  examRelevance: ExamType[];
  difficulty: Difficulty;
  summary?: string;
}

export interface Question {
  id: string;
  exam: ExamType;
  program?: ProgramLevel;
  year?: number;
  section: string;
  chapter: string;
  topic: string;
  subtopic?: string;
  difficulty: Difficulty;
  type: 'MCQ' | 'Passage-MCQ';
  passageId?: string;
  passage?: string; // Inline passage or stimulus
  passageHi?: string;
  question: string;
  questionHi?: string;
  options: string[];
  optionsHi?: string[];
  answer: number; // 0, 1, 2, 3
  explanation: string;
  explanationHi?: string;
  sourceType: QuestionSourceType;
  source: string;
  tags: string[];
  principle?: string; // For legal reasoning
  principleHi?: string;
  facts?: string; // For legal reasoning
  factsHi?: string;
}

export interface LegalCurrentAffair {
  id: string;
  date: string;
  headline: string;
  headlineHi: string;
  category: 'Supreme Court' | 'High Courts' | 'Constitutional Law' | 'New Acts & Bills' | 'Amendments' | 'Legal Policies' | 'Appointments' | 'International Law';
  summary: string;
  summaryHi: string;
  legalRelevance: string;
  legalRelevanceHi: string;
  exam: ExamType[];
  source: string;
  courtOrAuthority?: string;
  caseCitation?: string;
  benchMembers?: string;
  relatedArticleOrAct?: string;
  lastVerified: string;
  practiceQuestionId?: string;
}

export interface BookRecommendation {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  year: number;
  exam: ExamType[];
  subject: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  syllabusCoverage: string;
  pyqCoverage: string;
  practiceQuality: string;
  intendedUse: string;
  reviewNotes: string;
  links: {
    label: string;
    url: string;
    type: 'Amazon' | 'Flipkart' | 'Google Books' | 'Publisher';
  }[];
  mappedTopics: string[];
}

export interface NLUInfo {
  id: string;
  name: string;
  shortName: string;
  tier: 1 | 2 | 3;
  city: string;
  state: string;
  established: number;
  officialWebsite: string;
  brochureUrl?: string;
  examAccepted: ExamType;
  courses: {
    program: string;
    seats: number;
    annualFeeInLakhs: number;
    eligibility: string;
  }[];
  reservations: {
    category: string;
    percentage: string;
  }[];
  nirfRank2024?: number;
  campusSizeAcres?: number;
  medianPlacementLPA?: number;
  source: string;
  lastVerified: string;
  historicalCutoffs?: {
    year: number;
    round: number;
    category: 'General' | 'EWS' | 'OBC' | 'SC' | 'ST';
    openingRank: number;
    closingRank: number;
    notes?: string;
  }[];
}

export interface LegalMaxim {
  id: string;
  maxim: string;
  pronunciation: string;
  meaning: string;
  meaningHi: string;
  example: string;
  exampleHi: string;
  legalContext: string;
  relevanceToSyllabus: string;
  practiceQuestion?: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  };
}

export interface LegalTerm {
  id: string;
  term: string;
  termHi: string;
  category: 'Constitutional' | 'Tort' | 'Criminal' | 'Contract' | 'General Jurisprudence';
  definition: string;
  definitionHi: string;
  example: string;
  examRelevance: string;
}

export interface Flashcard {
  id: string;
  category: 'Legal Maxims' | 'Legal Terms' | 'Constitutional Articles' | 'Current Affairs' | 'Vocabulary' | 'Logical Reasoning' | 'Quant Formulas' | 'Landmark Cases' | 'Important Acts';
  front: string;
  frontHi?: string;
  back: string;
  backHi?: string;
  exam: ExamType[];
  tags: string[];
}

export interface ErrorLogItem {
  id: string;
  questionId: string;
  exam: ExamType;
  section: string;
  topic: string;
  questionSnippet: string;
  userAnswer: number;
  correctAnswer: number;
  explanation: string;
  mistakeType: 
    | 'Concept gap'
    | 'Misread question/facts'
    | 'Wrong inference'
    | 'Wrong elimination'
    | 'Calculation error'
    | 'Wild guess'
    | 'Vocabulary barrier'
    | 'Time pressure'
    | 'Legal principle misapplication'
    | 'Logical reasoning trap';
  notes: string;
  date: string;
  revisionStatus: 'needs_review' | 'reviewed' | 'mastered';
}

export interface MockTestConfig {
  id: string;
  title: string;
  titleHi: string;
  exam: ExamType;
  program: ProgramLevel;
  type: 'Full Mock' | 'Sectional Test' | 'Diagnostic';
  durationMinutes: number;
  totalQuestions: number;
  totalMarks: number;
  negativeMark: number;
  sections: {
    name: string;
    questionCount: number;
    timeLimitMinutes?: number;
  }[];
  questionIds: string[];
}

export interface MockResult {
  id: string;
  mockId: string;
  exam: ExamType;
  date: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  maxScore: number;
  timeSpentSeconds: number;
  sectionWise: {
    section: string;
    total: number;
    attempted: number;
    correct: number;
    incorrect: number;
    score: number;
    timeSpentSeconds: number;
  }[];
  errorLogAddedCount: number;
}
