import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { QUESTION_BANK } from '../../data/questions/questionBank';
import { NLU_DATABASE } from '../../data/nlus/nluData';
import { LEGAL_CURRENT_AFFAIRS } from '../../data/legal/legalCurrentAffairs';
import { 
  Scale, 
  BookOpen, 
  Award, 
  GraduationCap, 
  Clock, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Compass,
  FileSpreadsheet
} from 'lucide-react';

export const HomeDashboard: React.FC = () => {
  const { lang, exam, setExam, setCurrentView, setBreadcrumbs } = useApp();

  const handleNav = (view: string, label: string, labelHi: string, payload?: any) => {
    setCurrentView(view, payload);
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label, labelHi, view, payload }
    ]);
  };

  const featuredJudicialAffair = LEGAL_CURRENT_AFFAIRS[0];

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden border border-indigo-900/50">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Scale className="w-96 h-96 text-white" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-indigo-300 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>National Law Entrance Ecosystem • CLAT & AILET 2027</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            LAW ENTRANCE MASTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">INDIA</span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
            {lang === 'hi'
              ? 'CLAT • AILET — संपूर्ण विधि प्रवेश परीक्षा की तैयारी, पाठ्यक्रम, पुस्तकें, PYQ, अभ्यास प्रश्न, मॉक टेस्ट एवं NLU प्रवेश मंच।'
              : 'CLAT • AILET — Complete Law Entrance Preparation, Official Syllabus, Legitimate Books, PYQs, Passage Labs, Mock Tests & NLU Admission Ecosystem.'}
          </p>

          {/* Master Learning Pipeline */}
          <div className="pt-2 pb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 block mb-1.5">
              THE COMPLETE ACADEMIC PIPELINE:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono font-semibold text-slate-300">
              <span className="px-2 py-0.5 rounded bg-white/10">SYLLABUS</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">CONCEPT</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">BOOKS</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">CURRENT AFFAIRS</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">PRACTICE</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">PYQ</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">MOCK</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">ANALYSIS</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-white/10">COUNSELLING</span>
              <span>→</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 font-bold">NLU SEAT</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => handleNav('passage-lab', 'Passage Lab', 'पैसेज लैब')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs md:text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-102"
            >
              <BookOpen className="w-4 h-4" />
              <span>{lang === 'hi' ? 'पैसेज लैब शुरू करें' : 'Launch Passage Lab'}</span>
            </button>

            <button
              onClick={() => handleNav('mock-tests', 'Mock Tests', 'मॉक टेस्ट')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs md:text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
            >
              <Clock className="w-4 h-4" />
              <span>{lang === 'hi' ? 'फुल मॉक टेस्ट दें' : 'Take Proctored Mock'}</span>
            </button>

            <button
              onClick={() => handleNav('practice', 'Question Bank', 'प्रश्न बैंक')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-indigo-300 hover:text-white transition-colors"
            >
              <span>{lang === 'hi' ? '1,000+ प्रश्न बैंक ब्राउज़ करें →' : 'Explore 1,000+ Question Bank →'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Live Verified Telemetry Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div 
          onClick={() => handleNav('practice', 'Question Bank', 'प्रश्न बैंक')}
          className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 cursor-pointer transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <HelpCircle className="w-5 h-5" />
          </div>
          <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            {QUESTION_BANK.length.toLocaleString()}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">
            Verified Question Bank
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block mt-0.5">
            PYQ + Original Items
          </span>
        </div>

        <div 
          onClick={() => handleNav('nlus', 'NLU Directory', 'एनएलयू डायरेक्टरी')}
          className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 cursor-pointer transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            {NLU_DATABASE.length} NLUs
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">
            National Law Universities
          </span>
          <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold block mt-0.5">
            26 Consortium + NLU Delhi
          </span>
        </div>

        <div 
          onClick={() => handleNav('legal-affairs', 'Legal Affairs', 'विधिक समसामयिकी')}
          className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 cursor-pointer transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            {LEGAL_CURRENT_AFFAIRS.length} Bench
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">
            Landmark SC Verdicts
          </span>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold block mt-0.5">
            BNS, BNSS & Art 21 Tracked
          </span>
        </div>

        <div 
          onClick={() => handleNav('passage-lab', 'Passage Lab', 'पैसेज लैब')}
          className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 cursor-pointer transition-all group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            6 Labs
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">
            Specialized Speed Labs
          </span>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block mt-0.5">
            Passage, RC, Legal, Logic, Quant
          </span>
        </div>
      </div>

      {/* Two Engine Pillars: CLAT vs AILET Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CLAT Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-indigo-200 dark:border-indigo-900 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                CLAT 2027 UG & PG Engine
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">120 Qs • 120 Mins</span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Common Law Admission Test (Consortium of NLUs)
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Admission route for 26 National Law Universities. 100% passage-based assessment (~450 words per passage) across English, Current Affairs, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">No prior law needed</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Class 10 Quant</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">-0.25 Negative Marking</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => { setExam('CLAT'); handleNav('exam-overview', 'CLAT Overview', 'CLAT विवरण'); }}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <span>Explore Official CLAT Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setExam('CLAT'); handleNav('mock-tests', 'CLAT Mocks', 'CLAT मॉक'); }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-xs"
            >
              Take CLAT Mock
            </button>
          </div>
        </div>

        {/* AILET Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border-2 border-purple-200 dark:border-purple-900 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                AILET 2027 UG & PG Engine
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">150 Qs • 120 Mins</span>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              All India Law Entrance Test (NLU Delhi Exclusive)
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Exclusively for National Law University, Delhi. Rapid 48-second pacing across English Language (50 Qs), Current Affairs & GK (30 Qs), and Logical Reasoning (70 Qs).
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">No Quant Section</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">70 Logical Reasoning</span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">High Speed Pressure</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => { setExam('AILET'); handleNav('exam-overview', 'AILET Overview', 'AILET विवरण'); }}
              className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
            >
              <span>Explore Official AILET Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { setExam('AILET'); handleNav('mock-tests', 'AILET Mocks', 'AILET मॉक'); }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-xs"
            >
              Take AILET Mock
            </button>
          </div>
        </div>
      </div>

      {/* Featured Landmark Judgment of the Day */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Landmark Judicial Development of the Day
            </h3>
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer hover:underline" onClick={() => handleNav('legal-affairs', 'Legal Affairs', 'विधिक मामले')}>
            View All 8+ Landmark Verdicts →
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
            {featuredJudicialAffair.courtOrAuthority}
          </span>
          <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
            {lang === 'hi' ? featuredJudicialAffair.headlineHi : featuredJudicialAffair.headline}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
            {lang === 'hi' ? featuredJudicialAffair.summaryHi : featuredJudicialAffair.summary}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-200">
          <strong>CLAT & AILET Legal Reasoning Relevance: </strong>
          <span>{lang === 'hi' ? featuredJudicialAffair.legalRelevanceHi : featuredJudicialAffair.legalRelevance}</span>
        </div>
      </div>

      {/* Quick Launchpad to All Academic Modules */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Core Academic Learning Modules
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => handleNav('legal-lab', 'Legal Lab', 'लीगल लैब')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-400 text-center space-y-2 transition-all hover:shadow-xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 text-red-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Scale className="w-5 h-5" />
            </div>
            <span className="font-bold text-xs text-slate-900 dark:text-white block">Legal Lab</span>
            <span className="text-[10px] text-slate-400 block">6-Step Rule Drill</span>
          </button>

          <button
            onClick={() => handleNav('rc-lab', 'RC Lab', 'आरसी लैब')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-center space-y-2 transition-all hover:shadow-xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-bold text-xs text-slate-900 dark:text-white block">RC Lab</span>
            <span className="text-[10px] text-slate-400 block">WPM Reading Speed</span>
          </button>

          <button
            onClick={() => handleNav('logical-lab', 'Logic Lab', 'लॉजिक लैब')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-400 text-center space-y-2 transition-all hover:shadow-xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xs text-slate-900 dark:text-white block">Logic Lab</span>
            <span className="text-[10px] text-slate-400 block">Premise / Conclusion</span>
          </button>

          <button
            onClick={() => handleNav('quant-lab', 'Quant Lab', 'क्वांट लैब')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 text-center space-y-2 transition-all hover:shadow-xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <span className="font-bold text-xs text-slate-900 dark:text-white block">Quant Lab</span>
            <span className="text-[10px] text-slate-400 block">Caselet DI Matrix</span>
          </button>

          <button
            onClick={() => handleNav('constitution', 'Constitution', 'संविधान')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 text-center space-y-2 transition-all hover:shadow-xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-bold text-xs text-slate-900 dark:text-white block">Constitution</span>
            <span className="text-[10px] text-slate-400 block">Articles & Writs</span>
          </button>

          <button
            onClick={() => handleNav('speed-lab', 'Speed Lab', 'स्पीड लैब')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-yellow-400 text-center space-y-2 transition-all hover:shadow-xs group"
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-950 text-yellow-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xs text-slate-900 dark:text-white block">Speed Lab</span>
            <span className="text-[10px] text-slate-400 block">Rapid Elimination</span>
          </button>
        </div>
      </div>
    </div>
  );
};
