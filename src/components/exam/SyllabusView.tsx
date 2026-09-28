import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { OFFICIAL_SYLLABUS } from '../../data/syllabus/syllabusData';
import { Award, ChevronDown, ChevronRight, CheckCircle2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const SyllabusView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs, exam } = useApp();
  const [selectedSectionId, setSelectedSectionId] = useState<string>(OFFICIAL_SYLLABUS[0].id);
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({
    'eng-reading-comp': true,
    'legal-principle-fact': true
  });

  const toggleTopic = (id: string) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentSection = OFFICIAL_SYLLABUS.find((s) => s.id === selectedSectionId) || OFFICIAL_SYLLABUS[0];

  const handlePracticeTopic = (topicName: string) => {
    setCurrentView('practice', { topic: topicName });
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: 'Practice', labelHi: 'अभ्यास', view: 'practice' },
      { label: topicName, labelHi: topicName, view: 'practice', payload: { topic: topicName } }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-emerald-300 mb-3 border border-white/10">
          <Award className="w-3.5 h-3.5" />
          <span>Official Syllabus Engine</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {lang === 'hi' ? 'आधिकारिक विस्तृत पाठ्यक्रम मैट्रिक्स' : 'Comprehensive Official Syllabus Matrix'}
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'कंसोर्टियम ऑफ एनएलयू और एनएलयू दिल्ली द्वारा निर्धारित आधिकारिक पाठ्यक्रम, विषयवार वेटेज और तैयारी मार्गदर्शन।'
            : 'Granular curriculum breakdown mapped directly to official Consortium of NLUs and NLU Delhi examination guidelines.'}
        </p>
      </div>

      {/* Section Tabs */}
      <div className="flex overflow-x-auto pb-2 gap-2 border-b border-slate-200 dark:border-slate-800 scrollbar-none">
        {OFFICIAL_SYLLABUS.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setSelectedSectionId(sec.id)}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedSectionId === sec.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <span>{lang === 'hi' ? sec.titleHi : sec.title}</span>
          </button>
        ))}
      </div>

      {/* Active Section Overview */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
              {currentSection.section}
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
              {lang === 'hi' ? currentSection.titleHi : currentSection.title}
            </h2>
          </div>
          {currentSection.officialWeightage && (
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {currentSection.officialWeightage}
            </span>
          )}
        </div>

        <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {lang === 'hi' ? currentSection.descriptionHi : currentSection.description}
        </p>

        {/* Topics Accordion */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {lang === 'hi' ? 'पाठ्यक्रम के प्रमुख अध्याय एवं विषय' : 'Curriculum Chapters & Subtopics'}
          </h3>

          <div className="space-y-3">
            {currentSection.topics.map((topic) => {
              const isExpanded = !!expandedTopics[topic.id];
              return (
                <div
                  key={topic.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800/40 transition-colors"
                >
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {lang === 'hi' ? topic.nameHi || topic.name : topic.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {topic.subtopics.length} {lang === 'hi' ? 'उप-विषय' : 'subtopics included'}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0 space-y-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      {/* Official Guidance Note */}
                      <div className="mt-3 p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-200">
                        <strong className="font-bold flex items-center gap-1.5 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>{lang === 'hi' ? 'कंसोर्टियम आधिकारिक दिशा-निर्देश:' : 'Consortium Official Guidance:'}</span>
                        </strong>
                        <p>{lang === 'hi' ? topic.officialGuidanceHi : topic.officialGuidance}</p>
                      </div>

                      {/* Subtopics Checklist */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {lang === 'hi' ? 'विस्तृत उप-विषय सूची:' : 'Subtopic Breakdown:'}
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {topic.subtopics.map((st, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-2 flex items-center justify-end gap-2">
                        <button
                          onClick={() => handlePracticeTopic(topic.name)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                        >
                          <span>{lang === 'hi' ? 'इस विषय का अभ्यास करें' : 'Practice Questions'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
