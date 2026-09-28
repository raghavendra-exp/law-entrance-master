import { ExamType } from '../../types';

export interface ExamEventTracker {
  id: string;
  exam: ExamType;
  academicYear: string;
  stageName: string;
  stageNameHi: string;
  status: 'completed' | 'active' | 'upcoming';
  scheduledDate: string;
  officialSource: string;
  officialUrl: string;
  summary: string;
  summaryHi: string;
  actionRequired?: string;
  actionRequiredHi?: string;
}

export const NOTIFICATION_TIMELINE: ExamEventTracker[] = [
  // CLAT Timeline
  {
    id: 'clat-notif-01',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Official Notification & Information Brochure Release',
    stageNameHi: 'आधिकारिक अधिसूचना एवं सूचना विवरणिका जारी',
    status: 'completed',
    scheduledDate: 'July 2026',
    officialSource: 'Consortium of NLUs',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Consortium released the admission brochure for 5-Year Integrated B.A./B.B.A. LL.B. (Hons.) and LL.M. programs across 26 participating NLUs.',
    summaryHi: 'कंसोर्टियम ने 26 प्रतिभागी एनएलयू के लिए आधिकारिक विवरणिका जारी की।'
  },
  {
    id: 'clat-notif-02',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Online Registration & Application Portal Opening',
    stageNameHi: 'ऑनलाइन पंजीकरण एवं आवेदन पोर्टल प्रारंभ',
    status: 'completed',
    scheduledDate: 'July – October 2026',
    officialSource: 'Consortium of NLUs Portal',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Online registration open. Fee: Rs 4,000 for General/OBC/NRI; Rs 3,500 for SC/ST/BPL.',
    summaryHi: 'ऑनलाइन आवेदन पत्र भरना और शुल्क भुगतान।'
  },
  {
    id: 'clat-notif-03',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Application Correction Window',
    stageNameHi: 'आवेदन पत्र सुधार विंडो',
    status: 'completed',
    scheduledDate: 'Late October 2026',
    officialSource: 'Consortium of NLUs Notice',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Opportunity to update test city preferences and verify reservation documents.',
    summaryHi: 'परीक्षा केंद्र और आरक्षण दस्तावेजों में सुधार।'
  },
  {
    id: 'clat-notif-04',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Admit Card / Hall Ticket Download',
    stageNameHi: 'प्रवेश पत्र (Admit Card) डाउनलोड',
    status: 'completed',
    scheduledDate: 'Mid November 2026',
    officialSource: 'Consortium Candidate Portal',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Release of official admit cards with allocated test center address and reporting guidelines.',
    summaryHi: 'परीक्षा केंद्र विवरण के साथ प्रवेश पत्र जारी।'
  },
  {
    id: 'clat-notif-05',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'CLAT 2027 Examination Day (Pen & Paper OMR)',
    stageNameHi: 'CLAT 2027 परीक्षा दिवस (ऑफ़लाइन ओएमआर)',
    status: 'active',
    scheduledDate: 'First Sunday of December 2026 (2:00 PM – 4:00 PM)',
    officialSource: 'Consortium Calendar of Events',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Nationwide offline examination: 120 MCQs across 5 sections. 0.25 negative marking.',
    summaryHi: 'राष्ट्रव्यापी ऑफ़लाइन परीक्षा: 120 प्रश्न, 2 घंटे की अवधि, -0.25 नकारात्मक अंकन।',
    actionRequired: 'Report to examination center by 1:00 PM with Admit Card, Original Government Photo ID, and transparent Black Ballpoint Pens.',
    actionRequiredHi: 'दोपहर 1:00 बजे तक परीक्षा केंद्र पर एडमिट कार्ड, मूल पहचान पत्र और काले बॉलपॉइंट पेन के साथ पहुंचें।'
  },
  {
    id: 'clat-notif-06',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Provisional Answer Key & Objections Filing',
    stageNameHi: 'अनंतिम उत्तर कुंजी एवं आपत्ति दर्ज करना',
    status: 'upcoming',
    scheduledDate: 'Within 24 Hours Post-Exam',
    officialSource: 'Consortium Grievance Portal',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Release of provisional answer key. Candidates can submit question objections with statutory fee.',
    summaryHi: 'अनंतिम उत्तर कुंजी जारी होने के बाद आधिकारिक आपत्तियां दर्ज करना।'
  },
  {
    id: 'clat-notif-07',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Final Answer Key & Declaration of Results (AIR)',
    stageNameHi: 'अंतिम उत्तर कुंजी एवं परीक्षा परिणाम (AIR) घोषणा',
    status: 'upcoming',
    scheduledDate: 'Mid December 2026',
    officialSource: 'Consortium of NLUs',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Publication of final scores, All India Ranks (AIR), category merit lists, and invitations for centralized counselling.',
    summaryHi: 'अंतिम अंक, ऑल इंडिया रैंक और काउंसलिंग आमंत्रण जारी।'
  },
  {
    id: 'clat-notif-08',
    exam: 'CLAT',
    academicYear: '2027',
    stageName: 'Centralized Counselling & Seat Allotment (Rounds 1–5)',
    stageNameHi: 'केंद्रीयकृत काउंसलिंग एवं सीट आवंटन (चरण 1 से 5)',
    status: 'upcoming',
    scheduledDate: 'January – May 2027',
    officialSource: 'Consortium Counselling Portal',
    officialUrl: 'https://consortiumofnlus.ac.in',
    summary: 'Seat allocation strictly on merit-cum-preference. Exercising Freeze, Float, or Exit options across 5 allotment lists.',
    summaryHi: 'मेरिट और वरीयता के आधार पर 5 चरणों में फ्रीज, फ्लोट या एग्जिट द्वारा सीट आवंटन।'
  },

  // AILET Timeline
  {
    id: 'ailet-notif-01',
    exam: 'AILET',
    academicYear: '2027',
    stageName: 'AILET Official Admission Notification & Prospectus',
    stageNameHi: 'एआईलेट आधिकारिक अधिसूचना एवं प्रॉस्पेक्टस',
    status: 'completed',
    scheduledDate: 'August 2026',
    officialSource: 'NLU Delhi Official Portal',
    officialUrl: 'https://nationallawuniversitydelhi.in',
    summary: 'Release of notification for B.A. LL.B. (Hons.), LL.M., and Ph.D. programs at NLU Delhi.',
    summaryHi: 'एनएलयू दिल्ली द्वारा प्रवेश अधिसूचना जारी।'
  },
  {
    id: 'ailet-notif-02',
    exam: 'AILET',
    academicYear: '2027',
    stageName: 'AILET 2027 Examination (Offline Pen & Paper)',
    stageNameHi: 'AILET 2027 परीक्षा (ऑफ़लाइन ओएमआर)',
    status: 'active',
    scheduledDate: 'Second Sunday of December 2026 (11:00 AM – 1:00 PM / 2:00 PM – 4:00 PM)',
    officialSource: 'NLU Delhi Examination Cell',
    officialUrl: 'https://nationallawuniversitydelhi.in',
    summary: '150 questions in 120 minutes across English, Current Affairs & GK, and Logical Reasoning.',
    summaryHi: '150 प्रश्न, 120 मिनट, 3 खंड।',
    actionRequired: 'Reach test venue with printed Hall Ticket and valid Photo ID card.',
    actionRequiredHi: 'हॉल टिकट और मूल फोटो पहचान पत्र के साथ उपस्थित हों।'
  },
  {
    id: 'ailet-notif-03',
    exam: 'AILET',
    academicYear: '2027',
    stageName: 'AILET Results & NLU Delhi Counselling Rounds',
    stageNameHi: 'एआईलेट परिणाम एवं एनएलयू दिल्ली काउंसलिंग',
    status: 'upcoming',
    scheduledDate: 'December 2026 – January 2027',
    officialSource: 'NLU Delhi Registrar Office',
    officialUrl: 'https://nationallawuniversitydelhi.in',
    summary: 'Rank list release, seat confirmation deposit, category waitlist operations, and final admission.',
    summaryHi: 'मेरिट सूची और शुल्क जमा कर एनएलयू दिल्ली में सीट सुरक्षित करना।'
  }
];
