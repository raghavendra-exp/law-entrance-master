import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { Calendar, Clock, BookOpen, CheckCircle2, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const StudyPlannerView: React.FC = () => {
  const { lang, exam } = useApp();
  const [targetExam, setTargetExam] = useState<string>(exam || 'CLAT');
  const [dailyHours, setDailyHours] = useState<number>(4);
  const [currentLevel, setCurrentLevel] = useState<'Beginner' | 'Intermediate' | 'Revision'>('Beginner');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
    confetti({ particleCount: 45, spread: 55 });
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-purple-300 mb-2 border border-white/10">
          <Calendar className="w-3.5 h-3.5" />
          <span>Algorithmic Timetable Generator</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Personalized Law Entrance Study Planner
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'आपके दैनिक अध्ययन समय और वर्तमान तैयारी स्तर के आधार पर अनुकूलित दैनिक, साप्ताहिक, और मॉक टेस्ट समय सारणी।'
            : 'Configure your target exam, available daily study bandwidth, and current readiness level to dynamically generate optimized study schedules.'}
        </p>
      </div>

      {/* Planner Configuration Form */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          Step 1: Set Your Preparation Parameters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="font-bold text-slate-400 uppercase block mb-1">Target Examination</label>
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="CLAT">CLAT 2027 (Consortium)</option>
              <option value="AILET">AILET 2027 (NLU Delhi)</option>
              <option value="BOTH">Both CLAT & AILET</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-400 uppercase block mb-1">Daily Study Bandwidth</label>
            <select
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value={2}>2 Hours / Day (School / Working)</option>
              <option value={4}>4 Hours / Day (Standard Rigor)</option>
              <option value={6}>6 Hours / Day (Intensive Preparation)</option>
              <option value={8}>8 Hours / Day (Dedicated Dropper)</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-400 uppercase block mb-1">Current Preparation Phase</label>
            <select
              value={currentLevel}
              onChange={(e) => setCurrentLevel(e.target.value as any)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 outline-none"
            >
              <option value="Beginner">Level 0–3: Beginner / Foundation</option>
              <option value="Intermediate">Level 4–6: Intermediate / Topic Practice</option>
              <option value="Revision">Level 7–10: Advanced / Mocks & Remediation</option>
            </select>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={handleGenerate}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate Customized Timetable</span>
          </button>
        </div>
      </div>

      {/* Generated Schedules */}
      {isGenerated && (
        <div className="space-y-6 animate-fade-in">
          {/* Daily Schedule Blocks */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>Recommended Daily Routine ({dailyHours} Hours Allocation)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 space-y-1.5 text-xs">
                <span className="font-bold text-indigo-700 dark:text-indigo-300 uppercase text-[10px] block">
                  Block 1: Morning Focus (45 Mins)
                </span>
                <strong className="text-slate-900 dark:text-white block text-sm">
                  Current Affairs & Editorials
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Read 2 national newspaper editorials (The Hindu / Indian Express) + review daily legal current affairs judgments.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/60 space-y-1.5 text-xs">
                <span className="font-bold text-purple-700 dark:text-purple-300 uppercase text-[10px] block">
                  Block 2: Core Analytical Slot ({dailyHours >= 4 ? '1.5 to 2.5 Hours' : '45 Mins'})
                </span>
                <strong className="text-slate-900 dark:text-white block text-sm">
                  {targetExam === 'CLAT' ? 'Legal Reasoning & RC Lab' : 'AILET Section C Puzzles & Logic'}
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Practice 3 passage sets or 30 topic questions from the Question Bank. Record any misses in the Error Notebook.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/60 space-y-1.5 text-xs">
                <span className="font-bold text-teal-700 dark:text-teal-300 uppercase text-[10px] block">
                  Block 3: Speed & Retention (45 Mins)
                </span>
                <strong className="text-slate-900 dark:text-white block text-sm">
                  Speed Lab & Spaced Flashcards
                </strong>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Run 1 rapid-fire Speed Lab sprint + flip 20 legal maxims/articles from your flashcard deck.
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Mock & PYQ Rhythm */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>Weekly Milestone & Proctored Mock Blueprint</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <strong className="font-bold text-slate-900 dark:text-white block">Monday & Tuesday</strong>
                <p className="text-slate-500">Legal Reasoning deep dive + Law of Torts/Contracts drills.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <strong className="font-bold text-slate-900 dark:text-white block">Wednesday & Thursday</strong>
                <p className="text-slate-500">Critical Reasoning + Caselet DI tabular math drills.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                <strong className="font-bold text-slate-900 dark:text-white block">Friday</strong>
                <p className="text-slate-500">Weekly 50 Current Affairs Quiz + Sectional Speed Test.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 space-y-1">
                <strong className="font-bold block">Saturday & Sunday</strong>
                <p>Full-Length Mock Test strictly between 2:00 PM – 4:00 PM + 3 hours post-mock audit.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
