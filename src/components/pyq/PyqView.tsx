import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { PYQ_PAPERS_CATALOG, PYQ_ANALYTICS_DATA } from '../../data/pyqs/pyqData';
import { 
  CheckCircle2, 
  BarChart2, 
  FileText, 
  Layers, 
  ArrowRight, 
  AlertTriangle,
  Download,
  Clock,
  Sparkles
} from 'lucide-react';

export const PyqView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [activeTab, setActiveTab] = useState<'papers' | 'analytics'>('papers');
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('ALL');

  const filteredPapers = PYQ_PAPERS_CATALOG.filter((p) => {
    if (selectedExamFilter !== 'ALL' && p.exam !== selectedExamFilter) return false;
    return true;
  });

  const handleStartPyqPractice = (examType: string) => {
    setCurrentView('practice', { sourceType: 'verified_pyq' });
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'PYQ Practice', labelHi: 'विगत वर्ष प्रश्न अभ्यास', view: 'practice' }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-emerald-300 mb-2 border border-white/10">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Past Examination Master</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Law Entrance PYQ Master & Historical Analytics
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'CLAT और AILET के आधिकारिक विगत वर्ष प्रश्न पत्र, खंडवार वितरण, और विषय आवृत्ति विश्लेषण।'
            : 'Explore authentic historical exam papers across CLAT & AILET. Analyze recurring legal themes, passage length evolutions, and topic frequency trends.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('papers')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'papers'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {lang === 'hi' ? 'विगत वर्ष प्रश्न पत्र (Papers)' : 'Historical Exam Papers'}
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'analytics'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {lang === 'hi' ? 'ट्रेंड एवं आवृत्ति विश्लेषण (Analytics)' : 'Topic Frequency Analytics'}
          </button>
        </div>

        {activeTab === 'papers' && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 uppercase font-semibold hidden sm:inline">Filter:</span>
            <select
              value={selectedExamFilter}
              onChange={(e) => setSelectedExamFilter(e.target.value)}
              className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="ALL">All Examinations</option>
              <option value="CLAT">CLAT Only</option>
              <option value="AILET">AILET Only</option>
            </select>
          </div>
        )}
      </div>

      {activeTab === 'papers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    {paper.exam} {paper.year} ({paper.program})
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{paper.durationMinutes} mins</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Official {paper.exam} {paper.year} Master Question Paper
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {paper.notableHighlights}
                </p>

                {/* Section breakdown pills */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Section Question Breakdown:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {paper.sections.map((s, idx) => (
                      <div key={idx} className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span className="truncate pr-1">{s.sectionName}</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">{s.questionsCount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400">
                  {paper.totalQuestions} Questions • {paper.totalMarks} Marks
                </span>

                <button
                  onClick={() => handleStartPyqPractice(paper.exam)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                >
                  <span>Practice PYQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          {/* Statutory disclaimer */}
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-800 dark:text-amber-300/90 leading-relaxed">
              <strong className="font-bold block text-sm text-amber-900 dark:text-amber-200 mb-0.5">
                Statutory Analytics Disclaimer (Section 25 Compliance)
              </strong>
              Historical trend metrics analyze frequency of topics across previous examinations. This analysis does NOT claim or guarantee that any specific topic will appear in future papers. Law entrance examination bodies retain full constitutional prerogative to rotate syllabus themes.
            </div>
          </div>

          {/* Analytics Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-500" />
              <span>Historical Topic Frequency Heatmap (2020–2025 Papers)</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase text-[11px] font-bold">
                  <tr>
                    <th className="py-3 px-4 rounded-l-lg">Topic / Core Theme</th>
                    <th className="py-3 px-4">Section & Exam</th>
                    <th className="py-3 px-4">Appearance Frequency</th>
                    <th className="py-3 px-4">Avg Questions / Paper</th>
                    <th className="py-3 px-4 rounded-r-lg">Historical Evolution Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {PYQ_ANALYTICS_DATA.map((t, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                        {t.topic}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-indigo-600 dark:text-indigo-400">
                        {t.exam} • {t.section}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          t.appearanceFrequency === 'Very High'
                            ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                            : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}>
                          {t.appearanceFrequency}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold">
                        {t.averageQuestionsPerPaper}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {t.historicalTrendNotes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
