import React, { useState, useEffect } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { PASSAGE_LAB_SETS } from '../../data/labs/labsData';
import { QUESTION_BANK } from '../../data/questions/questionBank';
import { BookOpen, Clock, CheckCircle2, AlertCircle, Highlighter, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PassageLabView: React.FC = () => {
  const { lang, addErrorLogItem } = useApp();
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [secondsSpent, setSecondsSpent] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showEvidence, setShowEvidence] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeSet = PASSAGE_LAB_SETS[selectedSetIndex] || PASSAGE_LAB_SETS[0];
  const setQuestions = QUESTION_BANK.filter((q) => activeSet.questionIds.includes(q.id));

  // Timer
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && !isSubmitted) {
      interval = setInterval(() => {
        setSecondsSpent((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, isSubmitted]);

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimerRunning(false);
    confetti({ particleCount: 50, spread: 60 });

    // Automatically log incorrect answers to Error Notebook
    setQuestions.forEach((q) => {
      const uAns = userAnswers[q.id];
      if (uAns !== undefined && uAns !== q.answer) {
        addErrorLogItem({
          questionId: q.id,
          exam: q.exam,
          section: q.section,
          topic: q.topic,
          questionSnippet: q.question.substring(0, 100),
          userAnswer: uAns,
          correctAnswer: q.answer,
          explanation: q.explanation,
          mistakeType: 'Wrong inference',
          notes: 'Flagged during Passage Lab drill',
          revisionStatus: 'needs_review'
        });
      }
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setSecondsSpent(0);
    setTimerRunning(true);
    setShowEvidence(false);
  };

  const minutes = Math.floor(secondsSpent / 60);
  const seconds = secondsSpent % 60;
  const wpm = secondsSpent > 10 ? Math.round((activeSet.wordCount / secondsSpent) * 60) : 0;

  const correctCount = setQuestions.filter((q) => userAnswers[q.id] === q.answer).length;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-amber-300 mb-2 border border-white/10">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Passage Laboratory (~450 Words)</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            CLAT Passage Lab & Evidence Annotator
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
            {lang === 'hi' 
              ? '450 शब्दों के मानक गद्यांश, साक्ष्य हाइलाइटर, पढ़ने की गति (WPM), और सटीक प्रश्न विश्लेषण।'
              : 'Master CLAT\'s ~450 word passage format. Test comprehension retention, calculate WPM reading pace, and identify critical evidence.'}
          </p>
        </div>

        {/* Live Performance Meter */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 shrink-0">
          <div className="text-center px-2">
            <span className="text-[10px] text-amber-200 uppercase font-bold block">{lang === 'hi' ? 'समय' : 'Timer'}</span>
            <span className="text-lg md:text-xl font-mono font-bold">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center px-2">
            <span className="text-[10px] text-amber-200 uppercase font-bold block">{lang === 'hi' ? 'पठन गति' : 'Reading Speed'}</span>
            <span className="text-lg md:text-xl font-bold text-amber-300">
              {wpm} <span className="text-xs font-normal">WPM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Set Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {PASSAGE_LAB_SETS.map((pSet, idx) => (
          <button
            key={pSet.id}
            onClick={() => {
              setSelectedSetIndex(idx);
              handleReset();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedSetIndex === idx
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {pSet.title.length > 35 ? pSet.title.substring(0, 35) + '...' : pSet.title}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Left Passage | Right Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Passage Text */}
        <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 sticky top-20">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-[11px] font-bold uppercase text-indigo-600 dark:text-indigo-400">
                {activeSet.category}
              </span>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {lang === 'hi' ? activeSet.titleHi : activeSet.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-semibold text-slate-600 dark:text-slate-300">
                {activeSet.wordCount} words
              </span>
              <button
                onClick={() => setShowEvidence((prev) => !prev)}
                className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                  showEvidence
                    ? 'bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-200'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
                title="Highlight critical evidence phrases"
              >
                <Highlighter className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden sm:inline">{lang === 'hi' ? 'साक्ष्य देखें' : 'Evidence'}</span>
              </button>
            </div>
          </div>

          {/* Passage Body */}
          <div className="prose dark:prose-invert max-w-none text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 space-y-3">
            <p className="whitespace-pre-line">
              {lang === 'hi' ? activeSet.textHi : activeSet.text}
            </p>
          </div>

          {/* Evidence Callouts (When toggled) */}
          {showEvidence && (
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2 animate-fade-in text-xs">
              <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Key Evidence Footnotes</span>
              </div>
              <ul className="space-y-1.5 text-amber-800 dark:text-amber-300/90 list-disc list-inside">
                {activeSet.evidenceHighlights.map((ev, idx) => (
                  <li key={idx}>
                    <strong className="underline decoration-amber-400 font-semibold">{ev.phrase}:</strong> {ev.note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-[11px] text-slate-400 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-2">
            <span>Source: {activeSet.source}</span>
          </div>
        </div>

        {/* Right Column: Questions & Solution Key */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? `गद्यांश आधारित प्रश्न (${setQuestions.length})` : `Passage Assessment Questions (${setQuestions.length})`}
            </span>
            {isSubmitted ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {lang === 'hi' ? `स्कोर: ${correctCount}/${setQuestions.length}` : `Score: ${correctCount}/${setQuestions.length}`}
                </span>
                <button
                  onClick={handleReset}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300"
                  title="Try Again"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(userAnswers).length === 0}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 transition-colors shadow-xs"
              >
                {lang === 'hi' ? 'उत्तर सबमिट करें' : 'Submit Answers'}
              </button>
            )}
          </div>

          {/* Question Cards */}
          {setQuestions.map((q, qIndex) => {
            const selectedOpt = userAnswers[q.id];
            const isCorrect = selectedOpt === q.answer;

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded">
                    Q{qIndex + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    {q.topic}
                  </span>
                </div>

                {/* Facts / Principle (If applicable) */}
                {q.facts && (
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    <strong className="block font-bold text-slate-900 dark:text-white mb-1">
                      {lang === 'hi' ? 'तथ्य स्थिति:' : 'Fact Situation:'}
                    </strong>
                    <p>{q.facts}</p>
                  </div>
                )}

                <h3 className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                  {lang === 'hi' ? q.questionHi || q.question : q.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    let optionStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';

                    if (isSubmitted) {
                      if (optIdx === q.answer) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-medium';
                      } else if (selectedOpt === optIdx) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200';
                      } else {
                        optionStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
                      }
                    } else if (selectedOpt === optIdx) {
                      optionStyle = 'bg-indigo-50 dark:bg-indigo-950 border-indigo-600 text-indigo-700 dark:text-indigo-300 font-semibold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full p-3 rounded-xl border text-xs md:text-sm text-left transition-all flex items-start gap-2.5 ${optionStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">
                          {lang === 'hi' && q.optionsHi ? q.optionsHi[optIdx] : opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Key */}
                {isSubmitted && (
                  <div className={`p-3.5 rounded-xl border text-xs space-y-1.5 animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{lang === 'hi' ? 'सही उत्तर!' : 'Correctly Solved!'}</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-rose-600" />
                          <span>{lang === 'hi' ? 'गलत उत्तर (त्रुटि नोटबुक में स्वतः जोड़ा गया)' : 'Incorrect (Auto-logged to Error Notebook)'}</span>
                        </>
                      )}
                    </div>
                    <p className="leading-relaxed">
                      {lang === 'hi' && q.explanationHi ? q.explanationHi : q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
