import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { EXAM_COMPARISON_DATA } from '../../data/exams/examConfigs';
import { Layers, ArrowRight, Check, X, Clock, AlertCircle } from 'lucide-react';

export const ExamComparisonView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();

  const handleGoToLabs = () => {
    setCurrentView('passage-lab');
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'Passage Lab', labelHi: 'पैसेज लैब', view: 'passage-lab' }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Title Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-indigo-300 mb-3 border border-white/10">
          <Layers className="w-3.5 h-3.5" />
          <span>Dynamic Comparison Matrix</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          CLAT vs AILET: Factual Comparison Dashboard
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'कंसोर्टियम ऑफ एनएलयू और एनएलयू दिल्ली द्वारा जारी नवीनतम आधिकारिक अधिसूचनाओं पर आधारित तुलनात्मक विश्लेषण।'
            : 'Factual, side-by-side analysis derived strictly from the official notifications issued by the Consortium of NLUs and National Law University, Delhi.'}
        </p>
      </div>

      {/* Speed & Pace Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-indigo-200 dark:border-indigo-900 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              CLAT UG (120 Questions / 120 Minutes)
            </span>
            <Clock className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">60 Seconds</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">per question</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {lang === 'hi'
              ? '100% पैसेज आधारित। गहन अध्ययन और समझ (Reading Comprehension) पर जोर, न कि केवल रटने पर।'
              : 'Entirely passage-based (~450 words per set). Requires deep reading endurance, comprehension, and analytical principle application.'}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-purple-200 dark:border-purple-900 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              AILET UG (150 Questions / 120 Minutes)
            </span>
            <Clock className="w-4 h-4 text-purple-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">48 Seconds</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">per question</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {lang === 'hi'
              ? '25% अधिक प्रश्न! तीव्र गति और त्वरित तार्किक निर्णय लेने की क्षमता की आवश्यकता।'
              : '25% more questions in the same 2-hour window! Demands lightning-fast analytical puzzle decoding and quick elimination.'}
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          {lang === 'hi' ? 'आधिकारिक तुलना मैट्रिक्स' : 'Comprehensive Feature Comparison'}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase text-[11px] font-bold tracking-wider">
              <tr>
                <th className="py-3.5 px-4 rounded-l-lg">{lang === 'hi' ? 'विशेषता / पैरामीटर' : 'Feature / Parameter'}</th>
                <th className="py-3.5 px-4 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300">
                  CLAT (Consortium of NLUs)
                </th>
                <th className="py-3.5 px-4 bg-purple-50/50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 rounded-r-lg">
                  AILET (NLU Delhi)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {EXAM_COMPARISON_DATA.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors ${
                    row.highlight ? 'bg-indigo-50/20 dark:bg-indigo-950/10' : ''
                  }`}
                >
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                    {lang === 'hi' ? row.parameterHi || row.parameter : row.parameter}
                  </td>
                  <td className="py-3 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    {row.clat}
                  </td>
                  <td className="py-3 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    {row.ailet}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Takeaway */}
      <div className="bg-slate-100 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            {lang === 'hi' ? 'तैयारी की रणनीति में अंतर' : 'Core Strategic Distinction'}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
            {lang === 'hi'
              ? 'CLAT के लिए लंबे गद्यांशों को समझने और विधिक सिद्धांतों को लागू करने की आदत डालें। AILET के लिए 70 प्रश्नों वाले लॉजिकल रीजनिंग और पहेलियों पर अपनी गति बढ़ाएं।'
              : 'For CLAT, focus on 450-word reading stamina and principle-fact application. For AILET, build puzzle-solving speed and rapid critical reasoning to conquer Section C.'}
          </p>
        </div>
        <button
          onClick={handleGoToLabs}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 shadow-sm transition-colors"
        >
          <span>{lang === 'hi' ? 'पैसेज लैब शुरू करें' : 'Explore Passage Lab'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
