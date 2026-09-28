import { MockTestConfig } from '../../types';

export const MOCK_TESTS_CONFIGS: MockTestConfig[] = [
  {
    id: 'mock-clat-full-01',
    title: 'CLAT 2027 Full-Length Official Simulation Mock #1',
    titleHi: 'CLAT 2027 संपूर्ण आधिकारिक सिमुलेशन मॉक #1',
    exam: 'CLAT',
    program: 'UG',
    type: 'Full Mock',
    durationMinutes: 120,
    totalQuestions: 120,
    totalMarks: 120,
    negativeMark: 0.25,
    sections: [
      { name: 'English Language', questionCount: 24 },
      { name: 'Current Affairs including General Knowledge', questionCount: 28 },
      { name: 'Legal Reasoning', questionCount: 32 },
      { name: 'Logical Reasoning', questionCount: 24 },
      { name: 'Quantitative Techniques', questionCount: 12 }
    ],
    questionIds: [] // Populated dynamically by mock engine from question bank
  },
  {
    id: 'mock-ailet-full-01',
    title: 'AILET 2027 Full-Length Official Simulation Mock #1',
    titleHi: 'AILET 2027 संपूर्ण आधिकारिक सिमुलेशन मॉक #1',
    exam: 'AILET',
    program: 'UG',
    type: 'Full Mock',
    durationMinutes: 120,
    totalQuestions: 150,
    totalMarks: 150,
    negativeMark: 0.25,
    sections: [
      { name: 'English Language', questionCount: 50 },
      { name: 'Current Affairs & General Knowledge', questionCount: 30 },
      { name: 'Logical Reasoning', questionCount: 70 }
    ],
    questionIds: []
  },
  {
    id: 'mock-clat-sec-legal',
    title: 'CLAT Sectional Speed Drill: Legal Reasoning',
    titleHi: 'CLAT अनुभागीय स्पीड ड्रिल: विधिक तर्कशक्ति',
    exam: 'CLAT',
    program: 'UG',
    type: 'Sectional Test',
    durationMinutes: 32,
    totalQuestions: 32,
    totalMarks: 32,
    negativeMark: 0.25,
    sections: [
      { name: 'Legal Reasoning', questionCount: 32 }
    ],
    questionIds: []
  },
  {
    id: 'mock-clat-sec-logical',
    title: 'CLAT Sectional Speed Drill: Logical Reasoning',
    titleHi: 'CLAT अनुभागीय स्पीड ड्रिल: तार्किक तर्कशक्ति',
    exam: 'CLAT',
    program: 'UG',
    type: 'Sectional Test',
    durationMinutes: 24,
    totalQuestions: 24,
    totalMarks: 24,
    negativeMark: 0.25,
    sections: [
      { name: 'Logical Reasoning', questionCount: 24 }
    ],
    questionIds: []
  },
  {
    id: 'mock-clat-sec-quant',
    title: 'CLAT Sectional Drill: Quantitative Techniques Caselets',
    titleHi: 'CLAT अनुभागीय टेस्ट: केसलेट डेटा व्याख्या (गणित)',
    exam: 'CLAT',
    program: 'UG',
    type: 'Sectional Test',
    durationMinutes: 15,
    totalQuestions: 12,
    totalMarks: 12,
    negativeMark: 0.25,
    sections: [
      { name: 'Quantitative Techniques', questionCount: 12 }
    ],
    questionIds: []
  },
  {
    id: 'mock-diag-30',
    title: 'Law Entrance Diagnostic Assessment (30 Questions)',
    titleHi: 'विधि प्रवेश डायग्नोस्टिक मूल्यांकन (30 प्रश्न)',
    exam: 'CLAT',
    program: 'UG',
    type: 'Diagnostic',
    durationMinutes: 30,
    totalQuestions: 30,
    totalMarks: 30,
    negativeMark: 0.25,
    sections: [
      { name: 'English Language', questionCount: 6 },
      { name: 'Current Affairs including General Knowledge', questionCount: 6 },
      { name: 'Legal Reasoning', questionCount: 8 },
      { name: 'Logical Reasoning', questionCount: 6 },
      { name: 'Quantitative Techniques', questionCount: 4 }
    ],
    questionIds: []
  }
];
