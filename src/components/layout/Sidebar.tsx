import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { 
  Home, 
  Scale, 
  BookOpen, 
  Award, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Zap, 
  BarChart2, 
  GraduationCap, 
  Bookmark, 
  Calendar, 
  Compass, 
  Layers, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  X,
  FileSpreadsheet
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { currentView, setCurrentView, setBreadcrumbs, lang, exam } = useApp();

  const handleNav = (view: string, label: string, labelHi: string, payload?: any) => {
    setCurrentView(view, payload);
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label, labelHi, view, payload }
    ]);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const navGroups = [
    {
      groupTitle: lang === 'hi' ? 'मुख्य डैशबोर्ड' : 'Main Dashboard',
      items: [
        { id: 'home', label: 'Dashboard Home', labelHi: 'डैशबोर्ड होम', icon: <Home className="w-4 h-4" /> },
        { id: 'exam-overview', label: `${exam} 2027 Pattern`, labelHi: `${exam} 2027 परीक्षा प्रारूप`, icon: <Scale className="w-4 h-4 text-indigo-500" /> },
        { id: 'exam-comparison', label: 'CLAT vs AILET Comparison', labelHi: 'CLAT बनाम AILET तुलना', icon: <Layers className="w-4 h-4 text-purple-500" /> }
      ]
    },
    {
      groupTitle: lang === 'hi' ? 'आधिकारिक पाठ्यक्रम' : 'Official Syllabus',
      items: [
        { id: 'syllabus', label: 'Complete Syllabus Matrix', labelHi: 'संपूर्ण पाठ्यक्रम मैट्रिक्स', icon: <Award className="w-4 h-4 text-emerald-500" /> },
        { id: 'syllabus-english', label: 'English Language', labelHi: 'अंग्रेजी भाषा', icon: <FileText className="w-4 h-4" /> },
        { id: 'syllabus-ca', label: 'Current Affairs & GK', labelHi: 'करेंट अफेयर्स एवं सामान्य ज्ञान', icon: <Compass className="w-4 h-4" /> },
        { id: 'syllabus-legal', label: 'Legal Reasoning', labelHi: 'विधिक तर्कशक्ति', icon: <Scale className="w-4 h-4" /> },
        { id: 'syllabus-logical', label: 'Logical Reasoning', labelHi: 'तार्किक तर्कशक्ति', icon: <Sparkles className="w-4 h-4" /> },
        { id: 'syllabus-quant', label: 'Quantitative Techniques', labelHi: 'मात्रात्मक तकनीक (गणित)', icon: <BarChart2 className="w-4 h-4" /> }
      ]
    },
    {
      groupTitle: lang === 'hi' ? 'विशेषज्ञ प्रयोगशालाएं' : 'Specialized Labs',
      items: [
        { id: 'passage-lab', label: 'Passage Lab (~450 Words)', labelHi: 'पैसेज लैब (~450 शब्द)', icon: <BookOpen className="w-4 h-4 text-amber-500" /> },
        { id: 'rc-lab', label: 'Reading Comprehension (WPM)', labelHi: 'पठन गति एवं समझ लैब (WPM)', icon: <Clock className="w-4 h-4 text-blue-500" /> },
        { id: 'legal-lab', label: 'Legal Reasoning 6-Step Lab', labelHi: 'विधिक तर्कशक्ति 6-चरणीय लैब', icon: <Scale className="w-4 h-4 text-red-500" /> },
        { id: 'logical-lab', label: 'Logical Arguments Lab', labelHi: 'तार्किक विश्लेषण लैब', icon: <Sparkles className="w-4 h-4 text-purple-500" /> },
        { id: 'quant-lab', label: 'Quant & DI Formula Lab', labelHi: 'क्वांट एवं डीआई लैब', icon: <FileSpreadsheet className="w-4 h-4 text-cyan-500" /> },
        { id: 'speed-lab', label: 'Rapid-Fire Speed Lab', labelHi: 'रैपिड-फायर स्पीड लैब', icon: <Zap className="w-4 h-4 text-yellow-500" /> }
      ]
    },
    {
      groupTitle: lang === 'hi' ? 'विधिक एवं संवैधानिक केंद्र' : 'Legal & Constitution Hub',
      items: [
        { id: 'legal-affairs', label: 'Legal Current Affairs Tracker', labelHi: 'विधिक समसामयिकी ट्रैकर', icon: <ShieldCheck className="w-4 h-4 text-indigo-500" /> },
        { id: 'constitution', label: 'Indian Constitution Master', labelHi: 'भारतीय संविधान मास्टर', icon: <Compass className="w-4 h-4 text-emerald-500" /> },
        { id: 'legal-maxims', label: 'Legal Maxims Master (Latin)', labelHi: 'विधिक सूत्र (Legal Maxims)', icon: <Bookmark className="w-4 h-4 text-amber-500" /> },
        { id: 'legal-terms', label: 'Important Legal Terms & Writs', labelHi: 'महत्वपूर्ण विधिक शब्द एवं रिट', icon: <FileText className="w-4 h-4 text-teal-500" /> }
      ]
    },
    {
      groupTitle: lang === 'hi' ? 'अभ्यास एवं मॉक टेस्ट' : 'Practice & Mocks',
      items: [
        { id: 'practice', label: 'Question Bank (1,000+ Items)', labelHi: 'प्रश्न बैंक (1,000+ प्रश्न)', icon: <HelpCircle className="w-4 h-4 text-indigo-500" /> },
        { id: 'pyq', label: 'PYQ Master (Past Papers)', labelHi: 'विगत वर्षों के प्रश्न (PYQ)', icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
        { id: 'mock-tests', label: 'Full & Sectional Mocks', labelHi: 'फुल एवं सेक्शनल मॉक टेस्ट', icon: <Clock className="w-4 h-4 text-red-500" /> },
        { id: 'ca-quizzes', label: 'Current Affairs Quizzes', labelHi: 'करेंट अफेयर्स क्विज़ (Daily/Weekly)', icon: <Calendar className="w-4 h-4 text-sky-500" /> },
        { id: 'error-notebook', label: 'Error Notebook (Mistake Log)', labelHi: 'त्रुटि नोटबुक (गलती लॉग)', icon: <AlertCircle className="w-4 h-4 text-rose-500" /> },
        { id: 'flashcards', label: 'Spaced Flashcards (9 Decks)', labelHi: 'फ्लैशकार्ड दोहराव (9 डेक)', icon: <Layers className="w-4 h-4 text-violet-500" /> }
      ]
    },
    {
      groupTitle: lang === 'hi' ? 'एनएलयू एवं प्रवेश केंद्र' : 'NLUs & Admission Center',
      items: [
        { id: 'nlus', label: 'National Law University Explorer', labelHi: '26 राष्ट्रीय विधि विश्वविद्यालय खोजकर्ता', icon: <GraduationCap className="w-4 h-4 text-indigo-600" /> },
        { id: 'counselling', label: 'Counselling & Seat Allocation', labelHi: 'काउंसलिंग एवं सीट आवंटन', icon: <Scale className="w-4 h-4 text-blue-500" /> },
        { id: 'roadmap', label: 'Zero-to-Exam 11-Level Roadmap', labelHi: 'जीरो-टू-एग्जाम 11-लेवल रोडमैप', icon: <Award className="w-4 h-4 text-amber-500" /> },
        { id: 'books', label: 'Law Entrance Book Library', labelHi: 'विधि प्रवेश पुस्तक पुस्तकालय', icon: <BookOpen className="w-4 h-4 text-emerald-500" /> },
        { id: 'notifications', label: 'Live Notification Tracker', labelHi: 'लाइव परीक्षा अधिसूचना ट्रैकर', icon: <Calendar className="w-4 h-4 text-orange-500" /> }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-200 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 space-y-6">
          {/* Close button on mobile */}
          <div className="flex items-center justify-between lg:hidden pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="font-bold text-xs uppercase text-slate-500 tracking-wider">
              {lang === 'hi' ? 'नेविगेशन मेनू' : 'Navigation Menu'}
            </span>
            <button onClick={onClose} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1.5">
              <h3 className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {group.groupTitle}
              </h3>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id, item.label, item.labelHi)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors text-left ${
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      <span className={isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}>
                        {item.icon}
                      </span>
                      <span className="truncate">{lang === 'hi' ? item.labelHi : item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Footer note inside sidebar */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 space-y-1 px-3">
            <p className="font-semibold text-slate-600 dark:text-slate-400">Law Entrance Master India</p>
            <p>Official Curriculum Grounded • Zero Piracy • Open Educational Resource</p>
          </div>
        </div>
      </aside>
    </>
  );
};
