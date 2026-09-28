import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { CONSTITUTION_MODULE_DATA, ConstitutionTopic } from '../../data/constitution/constitutionData';
import { Compass, BookOpen, CheckCircle2, Award, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';

export const ConstitutionView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>(CONSTITUTION_MODULE_DATA[0].id);

  const currentTopic = CONSTITUTION_MODULE_DATA.find((t) => t.id === selectedTopicId) || CONSTITUTION_MODULE_DATA[0];

  const handlePracticeQuestions = () => {
    setCurrentView('practice', { topic: currentTopic.title });
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'Constitution', labelHi: 'संविधान', view: 'constitution' },
      { label: currentTopic.title, labelHi: currentTopic.titleHi, view: 'practice' }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-emerald-300 mb-2 border border-white/10">
          <Compass className="w-3.5 h-3.5" />
          <span>Foundational Constitutional Jurisprudence</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Indian Constitution Master for Law Entrance
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'प्रस्तावना, मौलिक अधिकार, नीति निर्देशक तत्व, मौलिक कर्तव्य, न्यायपालिका की रिट अधिकारिता, और मूल संरचना का सिद्धांत।'
            : 'Master the constitutional bedrock of CLAT & AILET. Detailed breakdown of articles, landmark case ratios, and contemporary constitutional interpretations.'}
        </p>
      </div>

      {/* Topics Selector Tabs */}
      <div className="flex overflow-x-auto pb-1 gap-2">
        {CONSTITUTION_MODULE_DATA.map((top) => (
          <button
            key={top.id}
            onClick={() => setSelectedTopicId(top.id)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              selectedTopicId === top.id
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {lang === 'hi' ? top.titleHi : top.title}
          </button>
        ))}
      </div>

      {/* Content Details */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider">
              {currentTopic.part} • {currentTopic.articles}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
              {lang === 'hi' ? currentTopic.titleHi : currentTopic.title}
            </h2>
          </div>

          <button
            onClick={handlePracticeQuestions}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
          >
            <span>Practice Topic Questions</span>
          </button>
        </div>

        {/* Key Constitutional Provisions */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            {lang === 'hi' ? 'मुख्य संवैधानिक प्रावधान एवं सिद्धांत' : 'Key Constitutional Provisions & Core Principles'}
          </h3>
          <div className="space-y-2.5">
            {(lang === 'hi' ? currentTopic.keyPointsHi : currentTopic.keyPoints).map((pt, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs md:text-sm text-slate-800 dark:text-slate-200 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="leading-relaxed">{pt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Landmark Precedents & Ratios */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            {lang === 'hi' ? 'महत्वपूर्ण न्यायिक पूर्व-निर्णय एवं अनुपात (Landmark Cases)' : 'Historic Constitutional Bench Precedents & Ratios'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentTopic.landmarkCases.map((lc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/60 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs md:text-sm text-indigo-950 dark:text-indigo-200">
                    {lc.caseName}
                  </h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                    {lc.year}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-200 font-semibold">Ratio: </strong>
                  {lc.ratio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CLAT Exam Focus Box */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1">
          <span className="font-bold uppercase text-[11px] text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLAT Exam Insight & Perspective:</span>
          </span>
          <p className="leading-relaxed">
            {lang === 'hi' ? currentTopic.clatFocusNotesHi : currentTopic.clatFocusNotes}
          </p>
        </div>
      </div>
    </div>
  );
};
