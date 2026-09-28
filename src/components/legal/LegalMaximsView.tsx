import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { LEGAL_MAXIMS_DATA } from '../../data/legal/legalMaxims';
import { Bookmark, Search, CheckCircle2, AlertCircle, Volume2, Sparkles, HelpCircle } from 'lucide-react';

export const LegalMaximsView: React.FC = () => {
  const { lang, viewPayload } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showPractice, setShowPractice] = useState<Record<string, boolean>>({});

  const filteredMaxims = LEGAL_MAXIMS_DATA.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.maxim.toLowerCase().includes(q) ||
      m.meaning.toLowerCase().includes(q) ||
      m.meaningHi.toLowerCase().includes(q)
    );
  });

  const handleSelectPractice = (maximId: string, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [maximId]: optIdx }));
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-amber-300 mb-2 border border-white/10">
          <Bookmark className="w-3.5 h-3.5" />
          <span>Latin Legal Maxims Master</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Essential Legal Maxims with Phonetics & Application
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'लैटिन विधिक सूत्र (Legal Maxims), उच्चारण, हिंदी अर्थ, व्यावहारिक उदाहरण, और परीक्षा प्रासंगिकता।'
            : 'Explore standard Latin legal maxims, phonetic pronunciation guides, bilingual meanings, practical jurisprudence contexts, and targeted principle-fact drills.'}
        </p>
      </div>

      {/* Search Input */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={lang === 'hi' ? "मैक्सिम या अर्थ द्वारा खोजें..." : "Filter legal maxims by name, pronunciation, or meaning..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Maxims Grid */}
      <div className="space-y-4">
        {filteredMaxims.map((m) => {
          const userAns = selectedAnswers[m.id];
          const hasPracticed = userAns !== undefined;
          const isPracticeOpen = showPractice[m.id];

          return (
            <div
              key={m.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg md:text-xl font-black text-indigo-700 dark:text-indigo-400 font-serif italic">
                    {m.maxim}
                  </h2>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Volume2 className="w-3 h-3 text-amber-500" />
                    <span>/{m.pronunciation}/</span>
                  </span>
                </div>

                <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  {m.relevanceToSyllabus}
                </span>
              </div>

              {/* Meanings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <strong className="text-slate-500 uppercase text-[10px] block">English Meaning:</strong>
                  <p className="font-semibold text-slate-900 dark:text-white leading-relaxed">{m.meaning}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                  <strong className="text-slate-500 uppercase text-[10px] block">हिंदी अर्थ:</strong>
                  <p className="font-semibold text-slate-900 dark:text-white leading-relaxed">{m.meaningHi}</p>
                </div>
              </div>

              {/* Practical Example & Jurisprudential Context */}
              <div className="space-y-2 text-xs md:text-sm">
                <div className="p-3.5 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-1">
                  <strong className="text-indigo-900 dark:text-indigo-200 uppercase text-[10px] block font-bold">
                    Illustrative Precedent / Scenario:
                  </strong>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
                    {lang === 'hi' ? m.exampleHi : m.example}
                  </p>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <strong className="text-slate-700 dark:text-slate-300">Legal Context:</strong> {m.legalContext}
                </p>
              </div>

              {/* Practice Question (Expandable) */}
              {m.practiceQuestion && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setShowPractice((p) => ({ ...p, [m.id]: !p[m.id] }))}
                    className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{isPracticeOpen ? 'Hide Practice Question' : 'Test Your Understanding with Sample Question'}</span>
                  </button>

                  {isPracticeOpen && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-3 animate-fade-in text-xs md:text-sm">
                      <p className="font-semibold text-slate-900 dark:text-white leading-relaxed">
                        {m.practiceQuestion.question}
                      </p>

                      <div className="space-y-2">
                        {m.practiceQuestion.options.map((opt, optIdx) => {
                          const isCorrect = optIdx === m.practiceQuestion!.answer;
                          let btnStyle = 'border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800';

                          if (hasPracticed) {
                            if (isCorrect) {
                              btnStyle = 'bg-emerald-100 dark:bg-emerald-950 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-semibold';
                            } else if (userAns === optIdx) {
                              btnStyle = 'bg-rose-100 dark:bg-rose-950 border-rose-500 text-rose-800 dark:text-rose-200';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectPractice(m.id, optIdx)}
                              className={`w-full p-2.5 rounded-lg border text-left text-xs transition-colors flex items-start gap-2 ${btnStyle}`}
                            >
                              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {hasPracticed && (
                        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs space-y-1">
                          <strong>Rationale: </strong>
                          <span>{m.practiceQuestion.explanation}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
