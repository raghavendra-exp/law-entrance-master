import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { NOTIFICATION_TIMELINE } from '../../data/updates/notificationTracker';
import { Calendar, CheckCircle2, Clock, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const NotificationTrackerView: React.FC = () => {
  const { lang, exam } = useApp();
  const [selectedExam, setSelectedExam] = useState<string>(exam || 'ALL');

  const filteredEvents = NOTIFICATION_TIMELINE.filter((ev) => {
    if (selectedExam !== 'ALL' && ev.exam !== selectedExam) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-orange-300 mb-2 border border-white/10">
          <Calendar className="w-3.5 h-3.5" />
          <span>Official Event Lifecycle</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          CLAT & AILET Official Notification Tracker
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'पंजीकरण, प्रवेश पत्र, परीक्षा तिथि, उत्तर कुंजी, आपत्ति विंडो, और मेरिट सूची की सत्यापित आधिकारिक समयरेखा।'
            : 'Track the complete examination lifecycle verified against Consortium of NLUs and NLU Delhi official notices.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setSelectedExam('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedExam === 'ALL'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          All Notifications (CLAT & AILET)
        </button>
        <button
          onClick={() => setSelectedExam('CLAT')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedExam === 'CLAT'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          CLAT 2027 Timeline
        </button>
        <button
          onClick={() => setSelectedExam('AILET')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            selectedExam === 'AILET'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          AILET 2027 Timeline
        </button>
      </div>

      {/* Timeline Event Cards */}
      <div className="space-y-4">
        {filteredEvents.map((ev, idx) => (
          <div
            key={ev.id}
            className={`p-6 rounded-2xl border transition-all ${
              ev.status === 'active'
                ? 'bg-white dark:bg-slate-900 border-orange-500 ring-2 ring-orange-500/20 shadow-md'
                : ev.status === 'completed'
                ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-90'
                : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  ev.status === 'active'
                    ? 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300'
                    : ev.status === 'completed'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}>
                  {ev.status.toUpperCase()}
                </span>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {ev.exam} {ev.academicYear}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span className="font-semibold">{ev.scheduledDate}</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {lang === 'hi' ? ev.stageNameHi : ev.stageName}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'hi' ? ev.summaryHi : ev.summary}
              </p>

              {ev.actionRequired && (
                <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-xs text-orange-900 dark:text-orange-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span><strong>Candidate Action Required: </strong>{ev.actionRequired}</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Authority: {ev.officialSource}</span>
              <a
                href={ev.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Check Official Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
