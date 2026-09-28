import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArgumentLabExercise {
  id: string;
  stimulus: string;
  components: {
    premises: string[];
    conclusion: string;
    hiddenAssumption: string;
  };
  strengthenOption: string;
  weakenOption: string;
  fallacyName: string;
  fallacyExplanation: string;
}

export const LogicalReasoningLabView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [activeTab, setActiveTab] = useState<'deconstruct' | 'strengthen' | 'weaken' | 'fallacy'>('deconstruct');
  const [showAnswer, setShowAnswer] = useState(false);

  const sampleExercise: ArgumentLabExercise = {
    id: 'lr-lab-01',
    stimulus: `Cities that invested aggressively in dedicated bicycle lane infrastructure between 2020 and 2024 reported a 45% decline in commuter traffic congestion compared to peer metropolitan cities that built elevated vehicular flyovers. Therefore, any municipal corporation seeking to resolve morning peak-hour highway gridlock should immediately reallocate highway road expansion budgets toward constructing protected bicycle corridors.`,
    components: {
      premises: [
        'Cities with aggressive bicycle lane infrastructure reported a 45% drop in commuter traffic congestion.',
        'Peer cities that constructed elevated flyovers did not experience comparable congestion relief.'
      ],
      conclusion: 'Any municipality seeking to resolve highway gridlock should reallocate highway expansion funds toward bicycle corridors.',
      hiddenAssumption: 'The observed decline in traffic congestion was caused by bicycle usage rather than confounding variables (such as concurrent work-from-home shifts or mass transit expansions), and suburban highway commuters can realistically commute via bicycles.'
    },
    strengthenOption: 'A multi-year urban transit study proves that over 60% of vehicle commuters switched to bicycles specifically because protected lanes made cycling safe and faster than driving.',
    weakenOption: 'In the cities that built bicycle lanes, the 45% congestion drop was almost entirely due to a simultaneous corporate mandate where 70% of white-collar workers permanently transitioned to remote work.',
    fallacyName: 'False Cause / Post Hoc Ergo Propter Hoc & False Analogy',
    fallacyExplanation: 'Confuses statistical correlation with direct causation, and falsely equates suburban highway commuters (who travel 25+ kilometers daily) with dense inner-city cyclists.'
  };

  const handleReveal = () => {
    setShowAnswer(true);
    confetti({ particleCount: 35, spread: 50 });
  };

  const handleReset = () => {
    setShowAnswer(false);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-purple-300 mb-2 border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Critical Reasoning Argument Lab</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Logical Reasoning & Argument Deconstruction Lab
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'कथन, आधार (Premise), निष्कर्ष (Conclusion), अव्यक्त पूर्वधारणा (Assumption), और तार्किक त्रुटियों का विच्छेदन करना सीखें।'
            : 'Isolate premises from conclusions, uncover vulnerable unstated assumptions, and neutralize logical traps in critical reasoning.'}
        </p>
      </div>

      {/* Target Stimulus Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Target Argument Stimulus
          </span>
          <span className="text-xs text-slate-400">CLAT / AILET Passage Format</span>
        </div>
        <p className="text-xs md:text-base font-serif text-slate-800 dark:text-slate-200 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
          "{sampleExercise.stimulus}"
        </p>
      </div>

      {/* Lab Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => { setActiveTab('deconstruct'); setShowAnswer(false); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'deconstruct'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          {lang === 'hi' ? '1. तर्क विखंडन (Premise & Conclusion)' : '1. Deconstruct Anatomy'}
        </button>
        <button
          onClick={() => { setActiveTab('strengthen'); setShowAnswer(false); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'strengthen'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          {lang === 'hi' ? '2. तर्क सुदृढ़ीकरण (Strengthen)' : '2. Strengthen Argument'}
        </button>
        <button
          onClick={() => { setActiveTab('weaken'); setShowAnswer(false); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'weaken'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          {lang === 'hi' ? '3. तर्क दुर्बलीकरण (Weaken)' : '3. Weaken Argument'}
        </button>
        <button
          onClick={() => { setActiveTab('fallacy'); setShowAnswer(false); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
            activeTab === 'fallacy'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          {lang === 'hi' ? '4. तार्किक हेत्वाभास (Fallacies)' : '4. Flaw in Reasoning'}
        </button>
      </div>

      {/* Tab Panel Content */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        {activeTab === 'deconstruct' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Anatomy of the Argument: Premises vs. Conclusion vs. Unstated Assumption
            </h3>
            <p className="text-xs text-slate-500">
              Try to isolate the factual premises and author's ultimate claim before checking the breakdown.
            </p>

            {!showAnswer ? (
              <button
                onClick={handleReveal}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
              >
                Reveal Anatomical Breakdown
              </button>
            ) : (
              <div className="space-y-3 animate-fade-in text-xs md:text-sm">
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200 space-y-1">
                  <strong className="font-bold uppercase text-[11px] block text-blue-700 dark:text-blue-300">
                    Factual Supporting Premises (Given as true):
                  </strong>
                  <ul className="list-disc list-inside space-y-1">
                    {sampleExercise.components.premises.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900 text-purple-900 dark:text-purple-200 space-y-1">
                  <strong className="font-bold uppercase text-[11px] block text-purple-700 dark:text-purple-300">
                    Main Conclusion (The author's contested recommendation):
                  </strong>
                  <p className="font-medium">{sampleExercise.components.conclusion}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 space-y-1">
                  <strong className="font-bold uppercase text-[11px] block text-amber-700 dark:text-amber-300">
                    Unstated Necessary Assumption (The silent bridge):
                  </strong>
                  <p>{sampleExercise.components.hiddenAssumption}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'strengthen' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Strengthening the Argument: Introducing Supporting Evidence
            </h3>
            <p className="text-xs text-slate-500">
              A strengthener validates the unstated bridge between bicycle lanes and actual congestion reduction.
            </p>

            {!showAnswer ? (
              <button
                onClick={handleReveal}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
              >
                Reveal Model Strengthener
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs md:text-sm space-y-2 animate-fade-in">
                <span className="font-bold flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Valid Strengthener Statement:</span>
                </span>
                <p className="leading-relaxed">"{sampleExercise.strengthenOption}"</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs border-t border-emerald-100 dark:border-emerald-900/60 pt-2">
                  <strong>Why it works:</strong> Directly proves the causal mechanism by verifying that commuters abandoned driving specifically because of bicycle lanes.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'weaken' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Weakening the Argument: Exposing Alternative Explanations
            </h3>
            <p className="text-xs text-slate-500">
              A weakener introduces a third confounding variable or proves the proposed solution cannot work for the targeted group.
            </p>

            {!showAnswer ? (
              <button
                onClick={handleReveal}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
              >
                Reveal Model Weakener
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-xs md:text-sm space-y-2 animate-fade-in">
                <span className="font-bold flex items-center gap-1.5 text-rose-700 dark:text-rose-300">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Potent Weakener Statement:</span>
                </span>
                <p className="leading-relaxed">"{sampleExercise.weakenOption}"</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs border-t border-rose-100 dark:border-rose-900/60 pt-2">
                  <strong>Why it breaks the conclusion:</strong> If remote work caused the 45% decline, then reallocating highway funds to bicycle lanes will NOT solve highway congestion.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'fallacy' && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Identifying Flaws & Fallacies in Reasoning
            </h3>
            <p className="text-xs text-slate-500">
              What classic formal or informal reasoning fallacy did the author commit?
            </p>

            {!showAnswer ? (
              <button
                onClick={handleReveal}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm"
              >
                Identify Flaw in Reasoning
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs md:text-sm space-y-2 animate-fade-in">
                <strong className="text-amber-700 dark:text-amber-300 block font-bold text-sm">
                  {sampleExercise.fallacyName}
                </strong>
                <p className="leading-relaxed">{sampleExercise.fallacyExplanation}</p>
              </div>
            )}
          </div>
        )}

        {showAnswer && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Hide Answer</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
