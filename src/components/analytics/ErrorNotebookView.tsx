import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { AlertCircle, CheckCircle2, RotateCcw, Trash2, Filter, Sparkles, BookOpen } from 'lucide-react';

export const ErrorNotebookView: React.FC = () => {
  const { errorLog, updateErrorLogItem, removeErrorLogItem, lang } = useApp();
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedMistakeType, setSelectedMistakeType] = useState<string>('ALL');

  const mistakeTypes = [
    'ALL',
    'Concept gap',
    'Misread question/facts',
    'Wrong inference',
    'Wrong elimination',
    'Calculation error',
    'Wild guess',
    'Vocabulary barrier',
    'Time pressure',
    'Legal principle misapplication',
    'Logical reasoning trap'
  ];

  const filteredLogs = errorLog.filter((item) => {
    if (selectedStatus !== 'ALL' && item.revisionStatus !== selectedStatus) return false;
    if (selectedMistakeType !== 'ALL' && item.mistakeType !== selectedMistakeType) return false;
    return true;
  });

  const masteredCount = errorLog.filter((i) => i.revisionStatus === 'mastered').length;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-rose-300 mb-2 border border-white/10">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Remediation & Spaced Repetition</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Personalized Error Notebook (Mistake Log)
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
            {lang === 'hi' 
              ? 'मॉक टेस्ट और अभ्यास के दौरान गलत हुए प्रश्नों का व्यवस्थित विश्लेषण। 10 त्रुटि श्रेणियों द्वारा वर्गीकरण और पुनरावलोकन।'
              : 'Every missed question from mocks and labs is automatically cataloged here. Categorize root causes and master recurring blind spots.'}
          </p>
        </div>

        {/* Counter */}
        <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center shrink-0 min-w-[160px]">
          <span className="text-[10px] text-rose-200 uppercase font-bold block">
            Logged Weaknesses
          </span>
          <span className="text-2xl font-black text-white">{errorLog.length} Items</span>
          <span className="text-[10px] text-emerald-300 block font-semibold">{masteredCount} Mastered</span>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <div>
            <label className="font-bold text-slate-400 uppercase text-[10px] block mb-0.5">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="needs_review">Needs Review</option>
              <option value="reviewed">Reviewed</option>
              <option value="mastered">Mastered</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-400 uppercase text-[10px] block mb-0.5">Failure Mode</label>
            <select
              value={selectedMistakeType}
              onChange={(e) => setSelectedMistakeType(e.target.value)}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              {mistakeTypes.map((mt) => (
                <option key={mt} value={mt}>{mt}</option>
              ))}
            </select>
          </div>
        </div>

        <span className="text-slate-500 font-medium">
          Showing {filteredLogs.length} of {errorLog.length} items
        </span>
      </div>

      {/* Error Notebook List */}
      <div className="space-y-4">
        {filteredLogs.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 text-slate-500 space-y-2">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No errors logged in this category!
            </h3>
            <p className="text-xs text-slate-400">
              Questions missed during Full Mocks, Speed Labs, or Question Bank practice will automatically populate here.
            </p>
          </div>
        ) : (
          filteredLogs.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                    {item.mistakeType}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {item.exam} • {item.section} • {item.topic}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Status switcher */}
                  <select
                    value={item.revisionStatus}
                    onChange={(e) => updateErrorLogItem(item.id, { revisionStatus: e.target.value as any })}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border outline-none ${
                      item.revisionStatus === 'mastered'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                        : item.revisionStatus === 'reviewed'
                        ? 'bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-300'
                        : 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    <option value="needs_review">Needs Review</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="mastered">Mastered</option>
                  </select>

                  <button
                    onClick={() => removeErrorLogItem(item.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                    title="Remove from notebook"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Question Snippet */}
              <p className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                "{item.questionSnippet}..."
              </p>

              {/* Comparison of answers */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200">
                  <span className="font-bold text-[10px] uppercase block text-rose-600">Your Missed Answer:</span>
                  <span>Option {item.userAnswer >= 0 ? String.fromCharCode(65 + item.userAnswer) : 'Timed Out / Skipped'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200">
                  <span className="font-bold text-[10px] uppercase block text-emerald-600">Correct Official Answer:</span>
                  <span>Option {String.fromCharCode(65 + item.correctAnswer)}</span>
                </div>
              </div>

              {/* Rationale */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white block font-semibold mb-0.5">Explanation:</strong>
                <p>{item.explanation}</p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Date Logged: {item.date}</span>
                <span>Context: {item.notes}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
