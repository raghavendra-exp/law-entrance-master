import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { CA_QUIZ_MASTER, CaQuizItem } from '../../data/current-affairs/caQuizData';
import { Calendar, CheckCircle2, AlertCircle, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CaQuizView: React.FC = () => {
  const { lang, addErrorLogItem } = useApp();
  const [selectedQuizType, setSelectedQuizType] = useState<string>('daily_10');
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quizTypes = [
    { id: 'daily_10', label: 'Daily 10 Sprint', labelHi: 'दैनिक 10 क्विज़' },
    { id: 'daily_20', label: 'Daily 20 Power Drill', labelHi: 'दैनिक 20 पावर ड्रिल' },
    { id: 'weekly_50', label: 'Weekly 50 Review', labelHi: 'साप्ताहिक 50 दोहराव' },
    { id: 'monthly_100', label: 'Monthly 100 Mega Test', labelHi: 'मासिक 100 महा टेस्ट' },
    { id: 'clat_ca_test', label: 'CLAT Current Affairs Test', labelHi: 'CLAT करेंट अफेयर्स टेस्ट' },
    { id: 'ailet_ca_test', label: 'AILET GK Test', labelHi: 'AILET सामान्य ज्ञान टेस्ट' }
  ];

  const currentQuestions = CA_QUIZ_MASTER.filter(
    (q) => q.quizType === selectedQuizType || selectedQuizType === 'clat_ca_test' || selectedQuizType === 'ailet_ca_test'
  );

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    confetti({ particleCount: 50, spread: 60 });

    currentQuestions.forEach((q) => {
      const uAns = userAnswers[q.id];
      if (uAns !== undefined && uAns !== q.answer) {
        addErrorLogItem({
          questionId: q.id,
          exam: 'CLAT',
          section: 'Current Affairs including General Knowledge',
          topic: q.category,
          questionSnippet: q.question.substring(0, 80),
          userAnswer: uAns,
          correctAnswer: q.answer,
          explanation: q.explanation,
          mistakeType: 'Concept gap',
          notes: 'Current Affairs Quiz Error',
          revisionStatus: 'needs_review'
        });
      }
    });
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const correctCount = currentQuestions.filter((q) => userAnswers[q.id] === q.answer).length;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-sky-300 mb-2 border border-white/10">
          <Calendar className="w-3.5 h-3.5" />
          <span>Interactive Quiz Engine</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Current Affairs & General Knowledge Quiz Engine
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'दैनिक 10, दैनिक 20, साप्ताहिक 50, और मासिक 100 बहुविकल्पीय प्रश्नोत्तरी। विस्तृत उत्तर व्याख्या और स्वचालित त्रुटि लॉगिंग।'
            : 'Structured drills across National, International, Legal, Economy, S&T, and Constitutional events with instant explanatory rationales.'}
        </p>
      </div>

      {/* Quiz Type Selector Tabs */}
      <div className="flex overflow-x-auto pb-1 gap-2">
        {quizTypes.map((qt) => (
          <button
            key={qt.id}
            onClick={() => { setSelectedQuizType(qt.id); handleReset(); }}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
              selectedQuizType === qt.id
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {lang === 'hi' ? qt.labelHi : qt.label}
          </button>
        ))}
      </div>

      {/* Questions Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase text-sky-600 dark:text-sky-400">
              Active Assessment
            </span>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              {quizTypes.find((t) => t.id === selectedQuizType)?.label} ({currentQuestions.length} Questions)
            </h2>
          </div>

          {isSubmitted ? (
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Score: {correctCount} / {currentQuestions.length}
              </span>
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                title="Restart Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(userAnswers).length === 0}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white disabled:opacity-40 transition-colors shadow-xs"
            >
              Submit Quiz
            </button>
          )}
        </div>

        {/* Questions list */}
        <div className="space-y-6">
          {currentQuestions.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice === q.answer;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-950 px-2 py-0.5 rounded">
                    Q{idx + 1} • {q.category}
                  </span>
                  <span className="text-slate-400">{q.dateOrMonth}</span>
                </div>

                <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                  {lang === 'hi' ? q.questionHi : q.question}
                </h3>

                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    let optStyle = 'border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';

                    if (isSubmitted) {
                      if (optIdx === q.answer) {
                        optStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-semibold';
                      } else if (userChoice === optIdx) {
                        optStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200';
                      } else {
                        optStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
                      }
                    } else if (userChoice === optIdx) {
                      optStyle = 'bg-sky-50 dark:bg-sky-950 border-sky-600 text-sky-900 dark:text-sky-200 font-semibold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full p-3 rounded-xl border text-xs md:text-sm text-left transition-all flex items-start gap-2.5 ${optStyle}`}
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

                {/* Solution Rationale */}
                {isSubmitted && (
                  <div className={`p-3.5 rounded-xl border text-xs space-y-1 animate-fade-in ${
                    isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}>
                    <strong className="block font-bold">
                      {isCorrect ? '✓ Correct Answer' : '✕ Incorrect Answer'}
                    </strong>
                    <p className="leading-relaxed">
                      {lang === 'hi' ? q.explanationHi : q.explanation}
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
