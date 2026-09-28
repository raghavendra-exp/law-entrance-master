import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { COUNSELLING_DATA } from '../../data/nlus/nluData';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const CounsellingView: React.FC = () => {
  const { lang, exam } = useApp();
  const [activeExam, setActiveExam] = useState<'CLAT' | 'AILET'>((exam as 'CLAT' | 'AILET') || 'CLAT');

  const guide = COUNSELLING_DATA.find((g) => g.exam === activeExam) || COUNSELLING_DATA[0];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-blue-300 mb-2 border border-white/10">
          <Scale className="w-3.5 h-3.5" />
          <span>Centralized Allocation Protocol</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          CLAT & AILET Counselling & Seat Allocation Master
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'कंसोर्टियम ऑफ एनएलयू और एनएलयू दिल्ली की आधिकारिक सीट आवंटन नियमावली। फ्रीज, फ्लोट, और एग्जिट के सटीक नियम।'
            : 'Deconstruct the official multi-round counselling systems. Master the tactical rules of Freeze, Float, and Exit to secure your dream NLU seat.'}
        </p>
      </div>

      {/* Switcher */}
      <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs max-w-md">
        <button
          onClick={() => setActiveExam('CLAT')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeExam === 'CLAT'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          CLAT Consortium Counselling (26 NLUs)
        </button>
        <button
          onClick={() => setActiveExam('AILET')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
            activeExam === 'AILET'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          NLU Delhi AILET Admission Process
        </button>
      </div>

      {/* Step by step stages */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400">
            {guide.conductingAuthority}
          </span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            {lang === 'hi' ? guide.titleHi : guide.title}
          </h2>
        </div>

        <div className="space-y-4">
          {guide.keySteps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2 relative"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {step.stepNumber}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {lang === 'hi' ? step.titleHi : step.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 pl-10 leading-relaxed">
                {lang === 'hi' ? step.descriptionHi : step.description}
              </p>

              {step.criticalNotes && (
                <div className="ml-10 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Important: </strong>{step.criticalNotes}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Seat Allotment Choice Terminology (Freeze, Float, Exit) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          {activeExam === 'CLAT' ? 'Understanding Freeze, Float & Exit Options' : 'NLU Delhi Seat Acceptance Protocol'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guide.seatAllotmentOptions.map((opt, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2"
            >
              <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full inline-block ${
                opt.term === 'Freeze' || opt.term === 'Provisional Offer Acceptance'
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : opt.term === 'Float' || opt.term === 'Waitlist Tracking'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
              }`}>
                {opt.term}
              </span>

              <p className="text-xs font-semibold text-slate-900 dark:text-white">
                {opt.meaning}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2">
                <strong>Consequence: </strong>{opt.consequence}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
