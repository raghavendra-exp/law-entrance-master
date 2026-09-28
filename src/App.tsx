import React, { useState } from 'react';
import { AppProvider, useApp } from './hooks/useAppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { BottomNav } from './components/layout/BottomNav';
import { Breadcrumbs } from './components/common/Breadcrumbs';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';

// Views
import { HomeDashboard } from './components/home/HomeDashboard';
import { ExamOverviewView } from './components/exam/ExamOverviewView';
import { ExamComparisonView } from './components/exam/ExamComparisonView';
import { SyllabusView } from './components/exam/SyllabusView';

// Labs
import { PassageLabView } from './components/labs/PassageLabView';
import { RcLabView } from './components/labs/RcLabView';
import { LegalReasoningLabView } from './components/labs/LegalReasoningLabView';
import { LogicalReasoningLabView } from './components/labs/LogicalReasoningLabView';
import { QuantLabView } from './components/labs/QuantLabView';
import { SpeedLabView } from './components/labs/SpeedLabView';

// Practice & Mock
import { PracticeView } from './components/practice/PracticeView';
import { PyqView } from './components/pyq/PyqView';
import { MockEngineView } from './components/mock/MockEngineView';

// Legal & Constitution Hub
import { LegalCurrentAffairsView } from './components/current-affairs/LegalCurrentAffairsView';
import { CaQuizView } from './components/current-affairs/CaQuizView';
import { ConstitutionView } from './components/constitution/ConstitutionView';
import { LegalMaximsView } from './components/legal/LegalMaximsView';
import { LegalTermsView } from './components/legal/LegalTermsView';

// NLUs & Admissions
import { BooksView } from './components/books/BooksView';
import { NluExplorerView } from './components/nlus/NluExplorerView';
import { CounsellingView } from './components/admission/CounsellingView';
import { RoadmapView } from './components/admission/RoadmapView';
import { StudyPlannerView } from './components/admission/StudyPlannerView';

// Analytics & Tools
import { ErrorNotebookView } from './components/analytics/ErrorNotebookView';
import { FlashcardsView } from './components/flashcards/FlashcardsView';
import { NotificationTrackerView } from './components/updates/NotificationTrackerView';

import { Scale, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { currentView, lang, setCurrentView, setBreadcrumbs } = useApp();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeDashboard />;
      case 'exam-overview':
        return <ExamOverviewView />;
      case 'exam-comparison':
        return <ExamComparisonView />;
      case 'syllabus':
      case 'syllabus-english':
      case 'syllabus-ca':
      case 'syllabus-legal':
      case 'syllabus-logical':
      case 'syllabus-quant':
        return <SyllabusView />;
      case 'passage-lab':
        return <PassageLabView />;
      case 'rc-lab':
        return <RcLabView />;
      case 'legal-lab':
      case 'legal-reasoning-lab':
        return <LegalReasoningLabView />;
      case 'logical-lab':
      case 'logical-reasoning-lab':
        return <LogicalReasoningLabView />;
      case 'quant-lab':
        return <QuantLabView />;
      case 'speed-lab':
        return <SpeedLabView />;
      case 'practice':
        return <PracticeView />;
      case 'pyq':
        return <PyqView />;
      case 'mock-tests':
      case 'mock-engine':
        return <MockEngineView />;
      case 'legal-affairs':
      case 'legal-current-affairs':
        return <LegalCurrentAffairsView />;
      case 'ca-quizzes':
      case 'ca-quiz':
        return <CaQuizView />;
      case 'constitution':
        return <ConstitutionView />;
      case 'legal-maxims':
        return <LegalMaximsView />;
      case 'legal-terms':
        return <LegalTermsView />;
      case 'books':
        return <BooksView />;
      case 'nlus':
      case 'nlu-explorer':
        return <NluExplorerView />;
      case 'counselling':
        return <CounsellingView />;
      case 'roadmap':
        return <RoadmapView />;
      case 'study-planner':
        return <StudyPlannerView />;
      case 'error-notebook':
        return <ErrorNotebookView />;
      case 'flashcards':
        return <FlashcardsView />;
      case 'notifications':
      case 'notification-tracker':
        return <NotificationTrackerView />;
      default:
        return <HomeDashboard />;
    }
  };

  const navigateFooter = (view: string, label: string, labelHi: string) => {
    setCurrentView(view);
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label, labelHi, view }
    ]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

      {/* Global Search Modal */}
      <GlobalSearchModal />

      {/* Desktop Persistent / Mobile Collapsible Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex-1 flex flex-col pt-2 pb-20 lg:pb-8 transition-all">
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-4">
          {/* Breadcrumb Navigation on Every View */}
          <Breadcrumbs />

          {/* View Container */}
          <div className="mt-4">
            {renderCurrentView()}
          </div>
        </main>

        {/* Professional Footer */}
        <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-4 md:px-8 py-10 transition-colors">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Col 1: Brand & Identity */}
              <div className="space-y-3 md:col-span-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm tracking-tight uppercase">
                      Law Entrance Master India
                    </span>
                    <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold">
                      2027 Ready
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                  {lang === 'hi'
                    ? 'सीएलएटी (CLAT) एवं एआईएलईटी (AILET) परीक्षा के लिए भारत का संपूर्ण, द्विभाषी एवं आधिकारिक पाठ्यक्रम-आधारित डिजिटल तैयारी मंच।'
                    : 'India\'s comprehensive, bilingual, and official curriculum-grounded digital preparation and NLU admission platform for CLAT and AILET.'}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>{lang === 'hi' ? 'शून्य पायरेसी • 100% कॉपीराइट सुरक्षित' : 'Zero Piracy • 100% Copyright Safe'}</span>
                </div>
              </div>

              {/* Col 2: High Yield Hubs */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {lang === 'hi' ? 'तैयारी केंद्र' : 'Prep Hubs'}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <li>
                    <button onClick={() => navigateFooter('passage-lab', 'Passage Lab', 'पैसेज लैब')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Passage Lab (~450 W)
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigateFooter('legal-affairs', 'Legal Current Affairs', 'विधिक समसामयिकी')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Supreme Court Judgments
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigateFooter('constitution', 'Indian Constitution', 'भारतीय संविधान')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Constitution Articles & Writs
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigateFooter('mock-tests', 'Mock Tests', 'मॉक टेस्ट')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Full & Sectional Mocks
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigateFooter('error-notebook', 'Error Notebook', 'त्रुटि नोटबुक')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Error Notebook (10 Types)
                    </button>
                  </li>
                </ul>
              </div>

              {/* Col 3: Admissions & Official Links */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {lang === 'hi' ? 'एनएलयू एवं आधिकारिक' : 'NLUs & Official'}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <li>
                    <button onClick={() => navigateFooter('nlus', 'NLU Explorer', 'एनएलयू खोजकर्ता')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      26 NLUs Cutoff & Fees
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigateFooter('counselling', 'Counselling Guide', 'काउंसलिंग गाइड')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Freeze / Float / Exit Guide
                    </button>
                  </li>
                  <li>
                    <button onClick={() => navigateFooter('books', 'Book Library', 'पुस्तक पुस्तकालय')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      Legitimate Book Recommendations
                    </button>
                  </li>
                  <li>
                    <a href="https://consortiumofnlus.ac.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                      <span>Consortium Official</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://nationallawuniversitydelhi.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                      <span>NLU Delhi Official</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-2 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> Law Entrance Master India is an independent educational platform created for student preparation, guidance, and research. It is not affiliated with, endorsed by, or in any way officially connected with the Consortium of National Law Universities (Consortium of NLUs) or National Law University Delhi (NLU Delhi). All official trademarks, logos, and exam names belong to their respective authorities.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[10px] text-slate-400">
                <p>© {new Date().getFullYear()} Law Entrance Master India • Open Educational Web Platform</p>
                <p className="flex items-center gap-1">
                  Built for Future Advocates & Jurists of India <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav onOpenSidebar={() => setIsSidebarOpen(true)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
