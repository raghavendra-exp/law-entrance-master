import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { ZERO_TO_EXAM_ROADMAP } from '../../data/admission/studyRoadmap';
import { Award, CheckCircle2, ChevronRight, Circle } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { lang } = useApp();
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('lem_roadmap_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => {
      const updated = { ...prev, [taskId]: !prev[taskId] };
      localStorage.setItem('lem_roadmap_tasks', JSON.stringify(updated));
      return updated;
    });
  };

  const totalTasks = ZERO_TO_EXAM_ROADMAP.reduce((acc, lvl) => acc + lvl.recommendedChecklist.length, 0);
  const finishedTasksCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = Math.round((finishedTasksCount / totalTasks) * 100);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-amber-300 mb-2 border border-white/10">
            <Award className="w-3.5 h-3.5" />
            <span>Master Preparation Progression</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Zero-to-Exam 11-Level Law Entrance Roadmap
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
            {lang === 'hi'
              ? 'लेवल 0 (परीक्षा समझ) से लेवल 10 (अंतिम परीक्षा सिमुलेशन) तक की 11-चरणीय चरणबद्ध तैयारी यात्रा।'
              : 'From foundational orientation to peak exam-day conditioning. Track your milestone completion across all 11 standardized mastery levels.'}
          </p>
        </div>

        {/* Overall Completion Progress */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 min-w-[200px] shrink-0 text-center space-y-1.5">
          <span className="text-[10px] uppercase font-bold text-amber-300 block">
            Roadmap Completion
          </span>
          <span className="text-3xl font-black text-white">{progressPercent}%</span>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-300 block">
            {finishedTasksCount} of {totalTasks} milestones achieved
          </span>
        </div>
      </div>

      {/* Levels Timeline */}
      <div className="space-y-4">
        {ZERO_TO_EXAM_ROADMAP.map((level) => {
          const isAllDone = level.recommendedChecklist.every((t) => completedTasks[`lvl-${level.levelNumber}-${t.task}`]);

          return (
            <div
              key={level.levelNumber}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center ${
                    isAllDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  }`}>
                    {isAllDone ? <CheckCircle2 className="w-5 h-5" /> : `L${level.levelNumber}`}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase text-slate-400">
                        {level.phase} • {level.targetDurationWeeks}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {lang === 'hi' ? level.levelNameHi : level.levelName}
                    </h3>
                  </div>
                </div>

                <span className="text-xs text-slate-400">
                  {level.recommendedChecklist.filter((t) => completedTasks[`lvl-${level.levelNumber}-${t.task}`]).length} / {level.recommendedChecklist.length} Milestones Done
                </span>
              </div>

              {/* Goals */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase text-slate-400 block">
                  Core Objectives:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {(lang === 'hi' ? level.keyGoalsHi : level.keyGoals).map((g, gIdx) => (
                    <li key={gIdx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Milestone Checkboxes */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-[11px] font-bold uppercase text-slate-400 block">
                  Actionable Checklist:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {level.recommendedChecklist.map((task, tIdx) => {
                    const taskKey = `lvl-${level.levelNumber}-${task.task}`;
                    const isChecked = !!completedTasks[taskKey];

                    return (
                      <button
                        key={tIdx}
                        onClick={() => toggleTask(taskKey)}
                        className={`p-3 rounded-xl border text-xs text-left transition-all flex items-start gap-2.5 ${
                          isChecked
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold'
                            : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400'
                        }`}>
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </span>
                        <span className={isChecked ? 'line-through opacity-80' : ''}>
                          {lang === 'hi' ? task.taskHi : task.task}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
