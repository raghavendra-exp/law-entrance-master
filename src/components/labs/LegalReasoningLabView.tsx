import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { LEGAL_REASONING_LAB_STEPS } from '../../data/labs/labsData';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LegalReasoningLabView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [drillCompleted, setDrillCompleted] = useState(false);

  const sampleDrill = {
    title: 'The Doctrine of Vicarious Liability in Employment Course',
    principle: 'An employer is liable for the wrongful acts or omissions of an employee done in the ordinary course of employment. An act is considered to be within the course of employment if it is either authorized by the employer or is an unauthorized mode of doing some act authorized by the employer. However, if an employee undertakes an independent frolic of their own, completely disconnected from the employer\'s business, the employer is exempt.',
    facts: 'Suresh is employed as a corporate driver for Delta Logistics Ltd. His duty is to deliver sensitive legal documents across the city in the company van between 9 AM and 5 PM. At 1:30 PM, after completing a delivery in Sector 18, Suresh took a 20-kilometer detour across town to attend a private family lunch at a relative\'s home. On his way back from the private lunch at 2:45 PM, Suresh negligently collided with and damaged Ramesh\'s parked vehicle. Ramesh sues Delta Logistics Ltd. for compensation.',
    question: 'Applying strictly the principle stated above, is Delta Logistics Ltd. liable for the damage caused by Suresh?',
    options: [
      {
        text: 'Yes, because Suresh was driving the company vehicle during normal working hours (between 9 AM and 5 PM).',
        isCorrect: false,
        trapAnalysis: 'Trap: Mere possession of company vehicle during working hours does not suffice if the employee is on an independent private detour ("independent frolic of his own").'
      },
      {
        text: 'No, because Suresh was on an independent personal detour completely disconnected from the company business at the time of the accident.',
        isCorrect: true,
        trapAnalysis: 'Correct: The principle explicitly provides that when an employee undertakes an independent frolic of their own, the employer is exempt.'
      },
      {
        text: 'Yes, because an employer has absolute liability for all vehicular accidents caused by its fleet.',
        isCorrect: false,
        trapAnalysis: 'Trap: Importing outside "Absolute Liability" concepts not authorized in the given text.'
      },
      {
        text: 'No, but Suresh must be sentenced to criminal imprisonment for three years.',
        isCorrect: false,
        trapAnalysis: 'Trap: Introducing penal criminal punishments into a purely civil tort dispute.'
      }
    ]
  };

  const currentStep = LEGAL_REASONING_LAB_STEPS[activeStepIndex];

  const handleNextStep = () => {
    if (activeStepIndex < LEGAL_REASONING_LAB_STEPS.length - 1) {
      setActiveStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((prev) => prev - 1);
    }
  };

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setDrillCompleted(true);
    if (sampleDrill.options[idx].isCorrect) {
      confetti({ particleCount: 50, spread: 60 });
    }
  };

  const handleReset = () => {
    setActiveStepIndex(0);
    setSelectedOption(null);
    setDrillCompleted(false);
  };

  const handleGoToPractice = () => {
    setCurrentView('practice', { section: 'Legal Reasoning' });
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'Practice', labelHi: 'अभ्यास', view: 'practice' },
      { label: 'Legal Reasoning', labelHi: 'विधिक तर्कशक्ति', view: 'practice' }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-red-300 mb-2 border border-white/10">
          <Scale className="w-3.5 h-3.5" />
          <span>Principle → Fact → Application Lab</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          CLAT Legal Reasoning 6-Step Mastery Lab
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'आधिकारिक नियम: पूर्व कानूनी ज्ञान की आवश्यकता नहीं है। गद्यांश में दिए गए सिद्धांत को पहचानना और तथ्यों पर लागू करना सीखें।'
            : 'Consortium Rule: Prior legal knowledge is NOT required. Learn how to extract operative principles, deconstruct conditions, and eliminate traps.'}
        </p>
      </div>

      {/* 6-Step Stepper Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs overflow-x-auto">
        <div className="flex items-center justify-between min-w-[600px] gap-2">
          {LEGAL_REASONING_LAB_STEPS.map((step, idx) => {
            const isCompleted = activeStepIndex > idx;
            const isCurrent = activeStepIndex === idx;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 flex flex-col items-center text-center p-2 rounded-xl transition-all ${
                  isCurrent
                    ? 'bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 font-bold'
                    : isCompleted
                    ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                    : 'text-slate-400'
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1 ${
                  isCurrent
                    ? 'bg-red-600 text-white'
                    : isCompleted
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : step.stepNumber}
                </div>
                <span className="text-[11px] truncate max-w-[90px]">
                  {lang === 'hi' ? step.titleHi : step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Step Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold text-sm flex items-center justify-center">
              {currentStep.stepNumber}
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {lang === 'hi' ? currentStep.titleHi : currentStep.title}
              </h2>
              <span className="text-xs text-slate-400">Step {currentStep.stepNumber} of 6</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevStep}
              disabled={activeStepIndex === 0}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextStep}
              disabled={activeStepIndex === LEGAL_REASONING_LAB_STEPS.length - 1}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Guidance and Common Trap Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'hi' ? 'रणनीतिक मार्गदर्शन' : 'Methodology & Strategy'}</span>
            </span>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {lang === 'hi' ? currentStep.guidanceHi : currentStep.guidance}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>{lang === 'hi' ? 'सामान्य परीक्षा जाल (Common Trap)' : 'Common Examination Trap'}</span>
            </span>
            <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
              {currentStep.commonTrap}
            </p>
          </div>
        </div>

        {/* Live Example Application Box */}
        <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 text-xs md:text-sm text-slate-800 dark:text-slate-200 space-y-1.5">
          <strong className="text-indigo-700 dark:text-indigo-300 font-bold block uppercase text-[11px]">
            Concrete Rule Application Demonstration:
          </strong>
          <p className="font-mono text-xs bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-indigo-100 dark:border-indigo-900">
            {currentStep.exampleSnippet}
          </p>
        </div>
      </div>

      {/* Interactive Case Drill Box */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[11px] uppercase font-bold text-red-600 dark:text-red-400">
              Interactive Drill Session
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {sampleDrill.title}
            </h3>
          </div>
          {drillCompleted && (
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Principle */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Legal Principle (Binding on you):
          </span>
          <p className="text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
            "{sampleDrill.principle}"
          </p>
        </div>

        {/* Facts */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Fact Situation (Closed reality):
          </span>
          <p className="text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {sampleDrill.facts}
          </p>
        </div>

        <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2">
          {sampleDrill.question}
        </h4>

        {/* Options */}
        <div className="space-y-3">
          {sampleDrill.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            let btnStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';

            if (drillCompleted) {
              if (opt.isCorrect) {
                btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-semibold';
              } else if (isSelected) {
                btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200';
              } else {
                btnStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
              }
            }

            return (
              <div key={idx} className="space-y-1.5">
                <button
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-3.5 rounded-xl border text-xs md:text-sm text-left transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{opt.text}</span>
                </button>

                {drillCompleted && (
                  <div className="pl-8 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Trap Analysis: </span>
                    {opt.trapAnalysis}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Bottom */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {lang === 'hi' ? 'विधि तर्कशक्ति में 100% सटीकता के लिए नियमित अभ्यास करें' : 'Practice regularly to build mechanical, unbiased principle-fact deduction'}
          </span>
          <button
            onClick={handleGoToPractice}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-sm"
          >
            <span>{lang === 'hi' ? '300+ विधिक प्रश्न हल करें' : 'Practice 300+ Legal Questions'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
