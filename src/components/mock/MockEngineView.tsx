import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { MOCK_TESTS_CONFIGS } from '../../data/exams/mockConfigs';
import { QUESTION_BANK } from '../../data/questions/questionBank';
import { MockTestConfig, MockResult, Question } from '../../types';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Bookmark, 
  RotateCcw, 
  Layers, 
  Award,
  ChevronRight,
  ChevronLeft,
  X,
  Play,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MockEngineView: React.FC = () => {
  const { lang, exam, saveMockResult, addErrorLogItem, setCurrentView } = useApp();

  // Selected mock configuration
  const defaultMock = MOCK_TESTS_CONFIGS.find((m) => m.exam === exam) || MOCK_TESTS_CONFIGS[0];
  const [selectedMock, setSelectedMock] = useState<MockTestConfig>(defaultMock);
  
  // Test state: 'setup' | 'active' | 'completed'
  const [testState, setTestState] = useState<'setup' | 'active' | 'completed'>('setup');
  
  // Test runtime states
  const [secondsRemaining, setSecondsRemaining] = useState(selectedMock.durationMinutes * 60);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<number, boolean>>({ 0: true });
  const [activeSection, setActiveSection] = useState<string>('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [finalResult, setFinalResult] = useState<MockResult | null>(null);

  // Generate test questions from database dynamically according to exam sections
  const mockQuestions = useMemo<Question[]>(() => {
    const list: Question[] = [];
    selectedMock.sections.forEach((sec) => {
      const available = QUESTION_BANK.filter(
        (q) => q.exam === selectedMock.exam && q.section.toLowerCase().includes(sec.name.toLowerCase().substring(0, 5))
      );
      const chosen = available.length >= sec.questionCount
        ? available.slice(0, sec.questionCount)
        : [...available, ...QUESTION_BANK.slice(0, sec.questionCount - available.length)];
      list.push(...chosen);
    });
    return list.slice(0, selectedMock.totalQuestions);
  }, [selectedMock]);

  // Section tracking
  const currentQ = mockQuestions[activeQuestionIndex] || mockQuestions[0];

  useEffect(() => {
    if (selectedMock.sections.length > 0 && !activeSection) {
      setActiveSection(selectedMock.sections[0].name);
    }
  }, [selectedMock, activeSection]);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (testState === 'active' && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, secondsRemaining]);

  const handleStartTest = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setVisitedQuestions({ 0: true });
    setActiveQuestionIndex(0);
    setSecondsRemaining(selectedMock.durationMinutes * 60);
    setTestState('active');
  };

  const handleSelectOption = (optIdx: number) => {
    setUserAnswers((prev) => ({ ...prev, [activeQuestionIndex]: optIdx }));
  };

  const handleClearResponse = () => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[activeQuestionIndex];
      return copy;
    });
  };

  const handleToggleMarkReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [activeQuestionIndex]: !prev[activeQuestionIndex]
    }));
  };

  const handleJumpToQuestion = (idx: number) => {
    setActiveQuestionIndex(idx);
    setVisitedQuestions((prev) => ({ ...prev, [idx]: true }));
  };

  const handleAutoSubmit = () => {
    processSubmission();
  };

  const processSubmission = () => {
    setShowSubmitModal(false);
    setTestState('completed');
    confetti({ particleCount: 70, spread: 80 });

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    let totalScore = 0;

    const sectionWise: MockResult['sectionWise'] = selectedMock.sections.map((s) => ({
      section: s.name,
      total: s.questionCount,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      score: 0,
      timeSpentSeconds: 0
    }));

    mockQuestions.forEach((q, idx) => {
      const uAns = userAnswers[idx];
      const secObj = sectionWise.find((sw) => sw.section.toLowerCase().includes(q.section.toLowerCase().substring(0, 5))) || sectionWise[0];

      if (uAns === undefined) {
        unattempted++;
      } else if (uAns === q.answer) {
        correct++;
        totalScore += 1;
        if (secObj) {
          secObj.attempted++;
          secObj.correct++;
          secObj.score += 1;
        }
      } else {
        incorrect++;
        totalScore -= selectedMock.negativeMark;
        if (secObj) {
          secObj.attempted++;
          secObj.incorrect++;
          secObj.score -= selectedMock.negativeMark;
        }

        // Add to Error Notebook
        addErrorLogItem({
          questionId: q.id,
          exam: q.exam,
          section: q.section,
          topic: q.topic,
          questionSnippet: q.question.substring(0, 80),
          userAnswer: uAns,
          correctAnswer: q.answer,
          explanation: q.explanation,
          mistakeType: 'Concept gap',
          notes: `Failed in ${selectedMock.title}`,
          revisionStatus: 'needs_review'
        });
      }
    });

    const result: MockResult = {
      id: 'res-' + Date.now(),
      mockId: selectedMock.id,
      exam: selectedMock.exam,
      date: new Date().toISOString().split('T')[0],
      totalQuestions: selectedMock.totalQuestions,
      attempted: correct + incorrect,
      correct,
      incorrect,
      unattempted,
      score: Math.max(0, Math.round(totalScore * 100) / 100),
      maxScore: selectedMock.totalMarks,
      timeSpentSeconds: selectedMock.durationMinutes * 60 - secondsRemaining,
      sectionWise,
      errorLogAddedCount: incorrect
    };

    setFinalResult(result);
    saveMockResult(result);
  };

  const getQuestionPaletteColor = (idx: number) => {
    const isAns = userAnswers[idx] !== undefined;
    const isMarked = markedForReview[idx];
    const isVisited = visitedQuestions[idx];

    if (isMarked) return 'bg-purple-600 text-white';
    if (isAns) return 'bg-emerald-600 text-white';
    if (isVisited) return 'bg-rose-500 text-white';
    return 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
  };

  const formatTimer = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Setup Screen */}
      {testState === 'setup' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-red-300 mb-2 border border-white/10">
              <Clock className="w-3.5 h-3.5" />
              <span>Full-Scale Simulation Engine</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Official CLAT & AILET Mock Test Center
            </h1>
            <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
              Experience the actual high-stakes examination interface. Real countdown timers, accurate 4-state question palettes, section switching, and correct negative marking (-0.25 per incorrect answer).
            </p>
          </div>

          {/* Mock Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MOCK_TESTS_CONFIGS.map((m) => {
              const isSelected = selectedMock.id === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedMock(m)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-indigo-50/50 dark:bg-indigo-950/40 border-indigo-600 ring-2 ring-indigo-500/20 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        {m.exam} {m.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {m.durationMinutes} mins
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {lang === 'hi' ? m.titleHi : m.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-lg">
                        <span className="text-[10px] text-slate-400 uppercase block">Questions</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{m.totalQuestions} Qs</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded-lg">
                        <span className="text-[10px] text-slate-400 uppercase block">Penalty</span>
                        <span className="font-bold text-rose-500">-{m.negativeMark} per wrong</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedMock(m); handleStartTest(); }}
                    className="w-full py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'परीक्षा शुरू करें' : 'Start Simulation'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Proctored Simulation Screen */}
      {testState === 'active' && currentQ && (
        <div className="space-y-4">
          {/* Sticky Top Status Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 sticky top-16 z-30">
            <div>
              <span className="text-[11px] font-bold uppercase text-slate-400 block">
                {selectedMock.exam} {selectedMock.type}
              </span>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-xs md:max-w-md">
                {selectedMock.title}
              </h2>
            </div>

            {/* Countdown Badge */}
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-sm md:text-base font-bold shadow-xs ${
              secondsRemaining < 600
                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 animate-pulse'
                : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTimer(secondsRemaining)}</span>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
            >
              {lang === 'hi' ? 'पेपर सबमिट करें' : 'Submit Exam'}
            </button>
          </div>

          {/* Main 2-Column Test Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Question Area */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs font-black">
                    Q{activeQuestionIndex + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {currentQ.section} • {currentQ.topic}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  +1.00 / -{selectedMock.negativeMark}
                </span>
              </div>

              {/* Principle / Passage */}
              {currentQ.principle && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <strong className="text-indigo-600 dark:text-indigo-400 uppercase text-[10px] block font-bold">
                    Legal Principle:
                  </strong>
                  <p className="text-slate-800 dark:text-slate-200 font-serif leading-relaxed">
                    "{currentQ.principle}"
                  </p>
                </div>
              )}

              {/* Fact Situation */}
              {currentQ.facts && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <strong className="text-slate-600 dark:text-slate-400 uppercase text-[10px] block font-bold">
                    Fact Situation:
                  </strong>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                    {currentQ.facts}
                  </p>
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = userAnswers[activeQuestionIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full p-3.5 rounded-xl border text-xs md:text-sm text-left transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/80 border-indigo-600 text-indigo-900 dark:text-indigo-200 font-semibold ring-1 ring-indigo-500'
                          : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleMarkReview}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      markedForReview[activeQuestionIndex]
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{markedForReview[activeQuestionIndex] ? 'Unmark Review' : 'Mark for Review'}</span>
                  </button>

                  <button
                    onClick={handleClearResponse}
                    disabled={userAnswers[activeQuestionIndex] === undefined}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-40 transition-colors"
                  >
                    Clear Response
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleJumpToQuestion(Math.max(0, activeQuestionIndex - 1))}
                    disabled={activeQuestionIndex === 0}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={() => handleJumpToQuestion(Math.min(mockQuestions.length - 1, activeQuestionIndex + 1))}
                    disabled={activeQuestionIndex === mockQuestions.length - 1}
                    className="px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 shadow-sm"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Question Palette */}
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Question Palette ({mockQuestions.length} Total)
              </h3>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 text-[11px] pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 shrink-0" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-rose-500 shrink-0" />
                  <span>Not Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-purple-600 shrink-0" />
                  <span>Marked Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0" />
                  <span>Not Visited</span>
                </div>
              </div>

              {/* Number Grid */}
              <div className="grid grid-cols-5 gap-2 max-h-[50vh] overflow-y-auto pr-1">
                {mockQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-9 rounded-xl font-bold text-xs transition-transform hover:scale-105 ${getQuestionPaletteColor(idx)} ${
                      activeQuestionIndex === idx ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Are you sure you want to submit your exam?
            </h3>
            <p className="text-xs text-slate-500">
              You still have {formatTimer(secondsRemaining)} remaining. Once submitted, your score will be computed instantly.
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs py-2">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 font-semibold">
                Answered: {Object.keys(userAnswers).length}
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50 text-rose-800 font-semibold">
                Unattempted: {mockQuestions.length - Object.keys(userAnswers).length}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
              >
                Return to Exam
              </button>
              <button
                onClick={processSubmission}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Completed Performance Scorecard */}
      {testState === 'completed' && finalResult && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mx-auto flex items-center justify-center">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Mock Test Performance Report
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {selectedMock.title} • Completed on {finalResult.date}
            </p>
          </div>

          {/* High-Level Score Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900 text-center">
              <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 block">Final Score</span>
              <span className="text-2xl md:text-3xl font-black text-indigo-700 dark:text-indigo-300">
                {finalResult.score}
              </span>
              <span className="text-[10px] text-slate-400 block">out of {finalResult.maxScore}</span>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-center">
              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block">Correct</span>
              <span className="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-300">
                {finalResult.correct}
              </span>
              <span className="text-[10px] text-slate-400 block">+{finalResult.correct} marks</span>
            </div>

            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-center">
              <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 block">Incorrect</span>
              <span className="text-2xl md:text-3xl font-black text-rose-700 dark:text-rose-300">
                {finalResult.incorrect}
              </span>
              <span className="text-[10px] text-rose-500 block">-{finalResult.incorrect * selectedMock.negativeMark} marks</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Accuracy</span>
              <span className="text-2xl md:text-3xl font-black text-slate-800 dark:text-slate-200">
                {finalResult.attempted > 0 ? Math.round((finalResult.correct / finalResult.attempted) * 100) : 0}%
              </span>
              <span className="text-[10px] text-slate-400 block">{finalResult.unattempted} skipped</span>
            </div>
          </div>

          {/* Section-Wise Breakdown Table */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Sectional Score & Accuracy Audit
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase text-[11px]">
                  <tr>
                    <th className="py-2.5 px-3 rounded-l-lg">Section Name</th>
                    <th className="py-2.5 px-3">Questions</th>
                    <th className="py-2.5 px-3">Attempted</th>
                    <th className="py-2.5 px-3">Correct</th>
                    <th className="py-2.5 px-3">Incorrect</th>
                    <th className="py-2.5 px-3 rounded-r-lg">Section Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {finalResult.sectionWise.map((sw, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-3 px-3 font-semibold text-slate-900 dark:text-white">{sw.section}</td>
                      <td className="py-3 px-3 font-mono">{sw.total}</td>
                      <td className="py-3 px-3 font-mono">{sw.attempted}</td>
                      <td className="py-3 px-3 text-emerald-600 font-bold">{sw.correct}</td>
                      <td className="py-3 px-3 text-rose-500 font-bold">{sw.incorrect}</td>
                      <td className="py-3 px-3 font-bold text-indigo-600 dark:text-indigo-400">{sw.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Error Notebook Notification */}
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
            <div>
              <strong>Auto-Remediation: </strong>
              <span>{finalResult.errorLogAddedCount} incorrect questions were automatically transferred to your personal Error Notebook for spaced repetition revision.</span>
            </div>
            <button
              onClick={() => setCurrentView('error-notebook')}
              className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold shrink-0 ml-4"
            >
              Open Error Notebook
            </button>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setTestState('setup')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Mock Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
