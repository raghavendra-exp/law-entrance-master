import React, { useState, useMemo } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { QUESTION_BANK } from '../../data/questions/questionBank';
import { QuestionSourceType, Difficulty } from '../../types';
import { 
  HelpCircle, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  BookmarkPlus, 
  BookOpen, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const PracticeView: React.FC = () => {
  const { lang, exam, addErrorLogItem, viewPayload } = useApp();

  const [selectedExam, setSelectedExam] = useState<string>(exam || 'ALL');
  const [selectedSection, setSelectedSection] = useState<string>(viewPayload?.section || 'ALL');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>(viewPayload?.topic || '');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});
  const [savedToNotebook, setSavedToNotebook] = useState<Record<string, boolean>>({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtered dataset
  const filteredQuestions = useMemo(() => {
    return QUESTION_BANK.filter((q) => {
      if (selectedExam !== 'ALL' && q.exam !== selectedExam) return false;
      if (selectedSection !== 'ALL' && q.section !== selectedSection) return false;
      if (selectedSourceType !== 'ALL' && q.sourceType !== selectedSourceType) return false;
      if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesText = 
          q.question.toLowerCase().includes(query) ||
          q.topic.toLowerCase().includes(query) ||
          q.chapter.toLowerCase().includes(query) ||
          (q.principle && q.principle.toLowerCase().includes(query)) ||
          q.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesText) return false;
      }
      return true;
    });
  }, [selectedExam, selectedSection, selectedSourceType, selectedDifficulty, searchQuery]);

  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage) || 1;
  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectOption = (qId: string, optIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setRevealedExplanations((prev) => ({ ...prev, [qId]: true }));
  };

  const handleAddToErrorNotebook = (q: typeof QUESTION_BANK[0]) => {
    const userAns = userAnswers[q.id] ?? -1;
    addErrorLogItem({
      questionId: q.id,
      exam: q.exam,
      section: q.section,
      topic: q.topic,
      questionSnippet: q.question.substring(0, 100),
      userAnswer: userAns,
      correctAnswer: q.answer,
      explanation: q.explanation,
      mistakeType: 'Concept gap',
      notes: 'Logged directly from Practice Question Bank',
      revisionStatus: 'needs_review'
    });
    setSavedToNotebook((prev) => ({ ...prev, [q.id]: true }));
  };

  const getSourceBadge = (sourceType: QuestionSourceType, sourceText: string) => {
    switch (sourceType) {
      case 'verified_pyq':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            VERIFIED PYQ
          </span>
        );
      case 'original':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
            ORIGINAL CONTENT
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
            PYQ-STYLE PRACTICE
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-indigo-300 mb-2 border border-white/10">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Verified Question Bank</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {lang === 'hi' ? 'विधि प्रवेश प्रश्न बैंक एवं अभ्यास' : 'Master Law Entrance Question Bank'}
            </h1>
            <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
              {lang === 'hi'
                ? `वास्तविक डेटाबेस से गणना: ${QUESTION_BANK.length} कुल प्रश्न। सत्यापित PYQ, मौलिक प्रश्न और परीक्षा-शैली प्रारूप।`
                : `Accurately calculated from database: ${QUESTION_BANK.length.toLocaleString()} verified questions. Zero fake counts.`}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center shrink-0">
            <span className="text-[10px] text-indigo-200 uppercase font-bold block">
              Active Question Count
            </span>
            <span className="text-2xl font-black text-white">
              {filteredQuestions.length.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-300 block">matching filters</span>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={lang === 'hi' ? "विषय, सिद्धांत या कीवर्ड द्वारा प्रश्न खोजें..." : "Filter by topic, principle, case, or keyword..."}
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-slate-100 focus:border-indigo-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {/* Exam Filter */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">Exam</label>
            <select
              value={selectedExam}
              onChange={(e) => { setSelectedExam(e.target.value); setCurrentPage(1); }}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="ALL">All Exams (CLAT + AILET)</option>
              <option value="CLAT">CLAT Only</option>
              <option value="AILET">AILET Only</option>
            </select>
          </div>

          {/* Section Filter */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">Section</label>
            <select
              value={selectedSection}
              onChange={(e) => { setSelectedSection(e.target.value); setCurrentPage(1); }}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="ALL">All Sections</option>
              <option value="Legal Reasoning">Legal Reasoning</option>
              <option value="Logical Reasoning">Logical Reasoning</option>
              <option value="English Language">English Language</option>
              <option value="Current Affairs including General Knowledge">Current Affairs & GK</option>
              <option value="Quantitative Techniques">Quantitative Techniques</option>
              <option value="Constitutional Law">Constitutional Law (PG)</option>
            </select>
          </div>

          {/* Source Type Filter */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">Source Label</label>
            <select
              value={selectedSourceType}
              onChange={(e) => { setSelectedSourceType(e.target.value); setCurrentPage(1); }}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="ALL">All Sources</option>
              <option value="verified_pyq">Verified PYQ</option>
              <option value="original">Original Content</option>
              <option value="pyq_style">PYQ-Style Practice</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase block mb-1">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => { setSelectedDifficulty(e.target.value); setCurrentPage(1); }}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="ALL">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {currentQuestions.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 text-slate-500">
            <HelpCircle className="w-10 h-10 mx-auto mb-2 text-slate-300" />
            <p className="font-semibold text-slate-700 dark:text-slate-300">No questions match your active filters.</p>
            <p className="text-xs text-slate-400 mt-1">Try resetting the section or search query.</p>
          </div>
        ) : (
          currentQuestions.map((q, qIndex) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice === q.answer;
            const isRevealed = revealedExplanations[q.id];

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded">
                      {q.id}
                    </span>
                    {getSourceBadge(q.sourceType, q.source)}
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {q.section}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className={`capitalize font-bold px-2 py-0.5 rounded ${
                      q.difficulty === 'hard' 
                        ? 'bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400' 
                        : q.difficulty === 'medium'
                        ? 'bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400'
                        : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'
                    }`}>
                      {q.difficulty}
                    </span>
                    <button
                      onClick={() => handleAddToErrorNotebook(q)}
                      disabled={savedToNotebook[q.id]}
                      className="flex items-center gap-1 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition-colors"
                      title="Save to Error Notebook"
                    >
                      <BookmarkPlus className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {savedToNotebook[q.id] ? 'Saved' : 'Save'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Stimulus / Principle (If available) */}
                {q.principle && (
                  <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 text-xs space-y-1">
                    <strong className="font-bold text-indigo-700 dark:text-indigo-300 block uppercase text-[10px]">
                      Legal Principle:
                    </strong>
                    <p className="text-slate-800 dark:text-slate-200 font-serif">
                      "{lang === 'hi' && q.principleHi ? q.principleHi : q.principle}"
                    </p>
                  </div>
                )}

                {/* Facts (If available) */}
                {q.facts && (
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                    <strong className="font-bold text-slate-700 dark:text-slate-300 block uppercase text-[10px]">
                      Fact Situation:
                    </strong>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                      {lang === 'hi' && q.factsHi ? q.factsHi : q.facts}
                    </p>
                  </div>
                )}

                {/* Question */}
                <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                  {lang === 'hi' && q.questionHi ? q.questionHi : q.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    let optStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';

                    if (isRevealed) {
                      if (optIdx === q.answer) {
                        optStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-medium';
                      } else if (userChoice === optIdx) {
                        optStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200';
                      } else {
                        optStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full p-3 rounded-xl border text-xs md:text-sm text-left transition-all flex items-start gap-3 ${optStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">
                          {lang === 'hi' && q.optionsHi ? q.optionsHi[optIdx] : opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Rationale Box */}
                {isRevealed && (
                  <div className={`p-4 rounded-xl border text-xs md:text-sm space-y-1.5 animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50/60 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}>
                    <div className="font-bold flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Correct!</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-4 h-4 text-rose-600" />
                            <span>Incorrect Response</span>
                          </>
                        )}
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                        Source: {q.source}
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      {lang === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500">
            Page {currentPage} of {totalPages} ({filteredQuestions.length} total questions)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { setCurrentPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
              {currentPage}
            </span>
            <button
              onClick={() => { setCurrentPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
