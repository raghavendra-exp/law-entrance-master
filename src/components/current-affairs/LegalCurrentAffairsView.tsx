import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { LEGAL_CURRENT_AFFAIRS } from '../../data/legal/legalCurrentAffairs';
import { ShieldCheck, Scale, Calendar, ExternalLink, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const LegalCurrentAffairsView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Supreme Court',
    'Constitutional Law',
    'New Acts & Bills',
    'High Courts',
    'Appointments'
  ];

  const filteredAffairs = LEGAL_CURRENT_AFFAIRS.filter((item) => {
    if (selectedCategory !== 'ALL' && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-indigo-300 mb-2 border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Judicial & Statutory Intelligence</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Legal Current Affairs & Landmark Judgments Tracker
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'सर्वोच्च न्यायालय के ऐतिहासिक फैसले, नए आपराधिक कानून (BNS, BNSS, BSA), संवैधानिक संशोधन, और विधि आयोग की सिफारिशें।'
            : 'Track 7-judge and 5-judge Supreme Court Constitution Bench verdicts, new parliamentary criminal enactments, and constitutional developments with verified legal relevance.'}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex overflow-x-auto pb-1 gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat === 'ALL' ? (lang === 'hi' ? 'सभी विधिक श्रेणियां' : 'All Legal Categories') : cat}
          </button>
        ))}
      </div>

      {/* Judgments & Statutory Items List */}
      <div className="space-y-4">
        {filteredAffairs.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
          >
            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {item.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span>Verified: {item.lastVerified}</span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {lang === 'hi' ? item.headlineHi : item.headline}
            </h2>

            {/* Judicial Bench & Citation metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
              {item.courtOrAuthority && (
                <div>
                  <strong className="text-slate-500 uppercase text-[10px] block">Forum / Bench:</strong>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item.courtOrAuthority}</span>
                </div>
              )}
              {item.caseCitation && (
                <div>
                  <strong className="text-slate-500 uppercase text-[10px] block">Official Citation:</strong>
                  <span className="font-mono text-slate-800 dark:text-slate-200">{item.caseCitation}</span>
                </div>
              )}
              {item.benchMembers && (
                <div className="md:col-span-2">
                  <strong className="text-slate-500 uppercase text-[10px] block">Bench Members:</strong>
                  <span className="text-slate-700 dark:text-slate-300">{item.benchMembers}</span>
                </div>
              )}
              {item.relatedArticleOrAct && (
                <div className="md:col-span-2">
                  <strong className="text-slate-500 uppercase text-[10px] block">Related Articles / Acts:</strong>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">{item.relatedArticleOrAct}</span>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="space-y-1 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-bold block">Summary & Ratio Decidendi:</strong>
              <p>{lang === 'hi' ? item.summaryHi : item.summary}</p>
            </div>

            {/* Legal Relevance for CLAT / AILET */}
            <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-indigo-800 dark:text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CLAT & AILET Legal Reasoning Relevance:</span>
              </div>
              <p className="text-indigo-900 dark:text-indigo-200 leading-relaxed">
                {lang === 'hi' ? item.legalRelevanceHi : item.legalRelevance}
              </p>
            </div>

            {/* Footer source attribution */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span>Authority Source: {item.source}</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                Target Exams: {item.exam.join(' & ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
