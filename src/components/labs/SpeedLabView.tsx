import React, { useState, useEffect } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { QUESTION_BANK } from '../../data/questions/questionBank';
import { Zap, Clock, CheckCircle2, RotateCcw, Award, Flame, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SpeedLabView: React.FC = () => {
  const { lang, addErrorLogItem } = useApp();
  const [drillActive, setDrillActive] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(45);
  const [timeLeft, setTimeLeft] = useState(45);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedbackState, setFeedbackState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Select 20 fast questions from question bank
  const [drillQuestions] = useState(() => {
    return [...QUESTION_BANK].sort(() => 0.5 - Math.random()).slice(0, 20);
  });

  const currentQ = drillQuestions[currentQIndex];

  // Countdown timer
  useEffect(() => {
    let timer: any = null;
    if (drillActive && timeLeft > 0 && feedbackState === 'idle') {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeExpiry();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [drillActive, timeLeft, feedbackState]);

  const handleTimeExpiry = () => {
    setFeedbackState('wrong');
    setAttempts((a) => a + 1);
    setStreak(0);

    addErrorLogItem({
      questionId: currentQ.id,
      exam: currentQ.exam,
      section: currentQ.section,
      topic: currentQ.topic,
      questionSnippet: currentQ.question.substring(0, 80),
      userAnswer: -1,
      correctAnswer: currentQ.answer,
      explanation: currentQ.explanation,
      mistakeType: 'Time pressure',
      notes: 'Timer expired in Speed Lab',
      revisionStatus: 'needs_review'
    });

    setTimeout(() => advanceToNext(), 1400);
  };

  const handleSelectOption = (idx: number) => {
    if (feedbackState !== 'idle') return;
    setSelectedOption(idx);
    setAttempts((a) => a + 1);

    if (idx === currentQ.answer) {
      setFeedbackState('correct');
      setScore((s) => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);
      if (newStreak % 5 === 0) confetti({ particleCount: 30, spread: 45 });
    } else {
      setFeedbackState('wrong');
      setStreak(0);

      addErrorLogItem({
        questionId: currentQ.id,
        exam: currentQ.exam,
        section: currentQ.section,
        topic: currentQ.topic,
        questionSnippet: currentQ.question.substring(0, 80),
        userAnswer: idx,
        correctAnswer: currentQ.answer,
        explanation: currentQ.explanation,
        mistakeType: 'Time pressure',
        notes: 'Speed Lab rapid-fire error',
        revisionStatus: 'needs_review'
      });
    }

    setTimeout(() => advanceToNext(), 1200);
  };

  const advanceToNext = () => {
    setSelectedOption(null);
    setFeedbackState('idle');
    if (currentQIndex < drillQuestions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setTimeLeft(secondsPerQuestion);
    } else {
      setDrillActive(false);
      confetti({ particleCount: 60, spread: 70 });
    }
  };

  const handleStartDrill = () => {
    setDrillActive(true);
    setCurrentQIndex(0);
    setScore(0);
    setAttempts(0);
    setStreak(0);
    setTimeLeft(secondsPerQuestion);
    setFeedbackState('idle');
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-yellow-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-yellow-300 mb-2 border border-white/10">
            <Zap className="w-3.5 h-3.5" />
            <span>Rapid Elimination & Reflexes</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Law Entrance Rapid-Fire Speed Lab
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
            {lang === 'hi' 
              ? 'समय के दबाव में सटीक निर्णय लेने की क्षमता विकसित करें। स्ट्रीक काउंटर, त्वरित विकल्प उन्मूलन, और गति परीक्षण।'
              : 'Condition your reflexes to eliminate options swiftly under countdown pressure. Ideal for building AILET 48-second pacing and CLAT speed.'}
          </p>
        </div>

        {/* Real-time stats bar */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shrink-0">
          <div className="text-center px-2">
            <span className="text-[10px] text-yellow-300 uppercase font-bold block flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Streak</span>
            </span>
            <span className="text-xl font-black text-amber-300">{streak}</span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center px-2">
            <span className="text-[10px] text-slate-300 uppercase font-bold block">Score</span>
            <span className="text-xl font-bold">{score}/{attempts}</span>
          </div>
        </div>
      </div>

      {!drillActive && attempts === 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs text-center space-y-5 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-yellow-50 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400 mx-auto flex items-center justify-center">
            <Zap className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Configure Your Speed Drill
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Select your seconds-per-question countdown limit. Questions advance automatically when answered or when time expires.
            </p>
          </div>

          {/* Time Selector */}
          <div className="flex justify-center gap-3">
            {[30, 45, 60].map((sec) => (
              <button
                key={sec}
                onClick={() => setSecondsPerQuestion(sec)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                  secondsPerQuestion === sec
                    ? 'bg-yellow-500 border-yellow-600 text-slate-950 font-black shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {sec} Seconds ({sec === 48 || sec === 45 ? 'AILET Pace' : sec === 60 ? 'CLAT Pace' : 'Sprint Pace'})
              </button>
            ))}
          </div>

          <button
            onClick={handleStartDrill}
            className="px-8 py-3 rounded-xl font-extrabold text-sm bg-yellow-500 hover:bg-yellow-400 text-slate-950 shadow-md shadow-yellow-500/20 transition-all"
          >
            Launch 20-Question Speed Sprint
          </button>
        </div>
      )}

      {drillActive && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5 max-w-3xl mx-auto">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">
                Question {currentQIndex + 1} of {drillQuestions.length}
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                {currentQ.section}
              </span>
            </div>

            {/* Countdown Badge */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
              timeLeft <= 10
                ? 'bg-rose-100 dark:bg-rose-950 text-rose-600 animate-pulse'
                : 'bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-300'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{timeLeft}s</span>
            </div>
          </div>

          {/* Principle if available */}
          {currentQ.principle && (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs">
              <strong className="block font-bold text-indigo-600 dark:text-indigo-400 mb-0.5">Principle:</strong>
              <p className="text-slate-700 dark:text-slate-300 font-serif">"{currentQ.principle}"</p>
            </div>
          )}

          {/* Question Text */}
          <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2">
            {currentQ.options.map((opt, idx) => {
              let optStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';

              if (feedbackState !== 'idle') {
                if (idx === currentQ.answer) {
                  optStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-semibold';
                } else if (selectedOption === idx) {
                  optStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={feedbackState !== 'idle'}
                  className={`w-full p-3 rounded-xl border text-xs md:text-sm text-left transition-all flex items-start gap-2.5 ${optStyle}`}
                >
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Status Message */}
          {feedbackState === 'correct' && (
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Correct! +1 point (Advancing...)</span>
            </div>
          )}
          {feedbackState === 'wrong' && (
            <div className="p-2 rounded-lg bg-rose-100 text-rose-800 text-xs font-bold text-center animate-fade-in flex items-center justify-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Incorrect / Time Out! Streak reset. (Advancing...)</span>
            </div>
          )}
        </div>
      )}

      {!drillActive && attempts > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-xs text-center space-y-6 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Speed Sprint Completed!
            </h2>
            <p className="text-xs text-slate-500">
              Here is your final rapid-fire performance audit
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Accuracy</span>
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                {Math.round((score / attempts) * 100)}%
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Final Score</span>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                {score} / {attempts}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Best Streak</span>
              <span className="text-xl font-bold text-amber-500 flex items-center justify-center gap-1">
                <Flame className="w-4 h-4" />
                <span>{highestStreak}</span>
              </span>
            </div>
          </div>

          <button
            onClick={handleStartDrill}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 mx-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Start Another Speed Drill</span>
          </button>
        </div>
      )}
    </div>
  );
};
