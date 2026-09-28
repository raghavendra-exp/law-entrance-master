import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { EXAM_CONFIGS } from '../../data/exams/examConfigs';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  AlertTriangle, 
  ExternalLink, 
  Layers, 
  Award,
  BookOpen
} from 'lucide-react';

export const ExamOverviewView: React.FC = () => {
  const { exam, setExam, program, setProgram, setCurrentView, setBreadcrumbs, lang } = useApp();
  const configKey = `${exam}-2027-${program}`;
  const config = EXAM_CONFIGS[configKey] || EXAM_CONFIGS['CLAT-2027-UG'];

  const handleStartMock = () => {
    setCurrentView('mock-tests');
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'Mock Tests', labelHi: 'मॉक टेस्ट', view: 'mock-tests' }
    ]);
  };

  const handleViewSyllabus = () => {
    setCurrentView('syllabus');
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'Syllabus', labelHi: 'पाठ्यक्रम', view: 'syllabus' }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none flex items-center pr-8">
          <Award className="w-64 h-64 text-white" />
        </div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-indigo-200 border border-white/10">
            <span>Official Versioned Blueprint</span>
            <span>•</span>
            <span>{config.year} Cycle</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            {config.name} {config.year} {config.program} Examination Engine
          </h1>

          <p className="text-slate-200 text-sm md:text-base leading-relaxed">
            {lang === 'hi' 
              ? `${config.officialAuthority} द्वारा संचालित आधिकारिक परीक्षा संरचना, मार्किंग स्कीम और विस्तृत खंड वितरण।`
              : `Official examination structure, syllabus breakdown, scoring metrics, and participating institutions governed by the ${config.officialAuthority}.`}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-xs text-indigo-200 block">{lang === 'hi' ? 'कुल प्रश्न' : 'Total Questions'}</span>
              <span className="text-xl md:text-2xl font-bold">{config.questions} MCQs</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-xs text-indigo-200 block">{lang === 'hi' ? 'कुल अंक' : 'Total Marks'}</span>
              <span className="text-xl md:text-2xl font-bold">{config.marks} Marks</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-xs text-indigo-200 block">{lang === 'hi' ? 'परीक्षा अवधि' : 'Duration'}</span>
              <span className="text-xl md:text-2xl font-bold">{config.durationMinutes} Mins</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10">
              <span className="text-xs text-indigo-200 block">{lang === 'hi' ? 'नकारात्मक अंक' : 'Negative Marking'}</span>
              <span className="text-xl md:text-2xl font-bold text-rose-300">-{config.negativeMark}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Switcher & Authority Details */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase">{lang === 'hi' ? 'परीक्षा चुनें:' : 'Target Exam:'}</span>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setExam('CLAT')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                exam === 'CLAT' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              CLAT
            </button>
            <button
              onClick={() => setExam('AILET')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                exam === 'AILET' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              AILET
            </button>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg ml-2">
            <button
              onClick={() => setProgram('UG')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                program === 'UG' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              UG
            </button>
            <button
              onClick={() => setProgram('PG')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                program === 'PG' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              PG
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={config.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          >
            <span>{lang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official Portal'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
          </a>
          <button
            onClick={handleStartMock}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'मॉक टेस्ट दें' : 'Take Mock Test'}</span>
          </button>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          <span>{lang === 'hi' ? 'प्रमुख आधिकारिक दिशा-निर्देश एवं विशेषताएं' : 'Key Official Examination Highlights'}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {config.keyHighlights.map((hl, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">
                {hl}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Distribution Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-500" />
            <span>{lang === 'hi' ? 'खंडवार प्रश्न एवं अंक वितरण' : 'Sectional Question & Marks Distribution'}</span>
          </h2>
          <button 
            onClick={handleViewSyllabus}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'पूरा सिलेबस देखें' : 'View Full Syllabus'}</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3 px-4 rounded-l-lg">{lang === 'hi' ? 'खंड का नाम' : 'Section Name'}</th>
                <th className="py-3 px-4">{lang === 'hi' ? 'प्रश्नों की संख्या' : 'Approx Questions'}</th>
                <th className="py-3 px-4">{lang === 'hi' ? 'अंक' : 'Marks'}</th>
                <th className="py-3 px-4 rounded-r-lg">{lang === 'hi' ? 'आधिकारिक विवरण' : 'Official Description & Scope'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {config.sections.map((sec, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    {sec.name}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-indigo-600 dark:text-indigo-400">
                    {sec.questionCountApprox}
                  </td>
                  <td className="py-3.5 px-4 font-bold">
                    {sec.marks}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {sec.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Negative Marking Advisory */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-5 flex items-start gap-3.5">
        <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-amber-900 dark:text-amber-200">
            {lang === 'hi' ? 'नकारात्मक अंकन चेतावनी (-0.25 अंक)' : 'Critical Scoring Advisory: Negative Marking Rule (-0.25 marks)'}
          </h4>
          <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
            {lang === 'hi'
              ? 'प्रत्येक गलत उत्तर के लिए 0.25 अंक काटे जाते हैं। 4 गलत उत्तर आपके 1 पूरे सही अंक को निष्प्रभावी कर देते हैं। अनुमान लगाने से बचें और विकल्प उन्मूलन तकनीक का उपयोग करें।'
              : 'Every incorrect answer deducts 0.25 marks. Four wrong answers cancel out one entirely correct answer (+1). Never indulge in blind guessing; use our Speed and Elimination Labs to train calculated decision making.'}
          </p>
        </div>
      </div>
    </div>
  );
};
