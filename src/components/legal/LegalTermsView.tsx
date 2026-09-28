import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { LEGAL_TERMS_DATA } from '../../data/legal/legalTerms';
import { FileText, Search, Scale, Sparkles } from 'lucide-react';

export const LegalTermsView: React.FC = () => {
  const { lang } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['ALL', 'Constitutional', 'Tort', 'Criminal', 'General Jurisprudence'];

  const filteredTerms = LEGAL_TERMS_DATA.filter((t) => {
    if (selectedCategory !== 'ALL' && t.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        t.term.toLowerCase().includes(q) ||
        t.termHi.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-teal-300 mb-2 border border-white/10">
          <FileText className="w-3.5 h-3.5" />
          <span>Judicial Lexicon & Writs Master</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Important Legal Terms, Writs & Doctrines
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'संवैधानिक रिट (बंदी प्रत्यक्षीकरण, परमादेश, उत्प्रेषण), अपकृत्य विधि, आपराधिक विधि और सामान्य न्यायशास्त्र शब्दावली।'
            : 'Deconstruct fundamental legal nomenclature: Constitutional writs, Ratio Decidendi vs Obiter Dicta, Mens Rea, and Strict vs Absolute Liability.'}
        </p>
      </div>

      {/* Filter toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={lang === 'hi' ? "विधिक शब्द या रिट खोजें..." : "Filter legal terms by title or definition..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-slate-100"
          />
        </div>

        <div className="flex overflow-x-auto gap-1.5 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === c
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((t) => (
          <div
            key={t.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                  {t.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">LEX-{t.id.substring(5, 10).toUpperCase()}</span>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white">
                  {t.term}
                </h3>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {t.termHi}
                </span>
              </div>

              <div className="space-y-1 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>{lang === 'hi' ? t.definitionHi : t.definition}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <strong className="text-slate-900 dark:text-white block font-bold">Practical Example:</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t.example}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span><strong>CLAT Exam Focus: </strong>{t.examRelevance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
