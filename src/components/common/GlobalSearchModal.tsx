import React, { useState, useMemo } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { Search, X, BookOpen, Scale, Award, HelpCircle, GraduationCap, Compass } from 'lucide-react';
import { QUESTION_BANK } from '../../data/questions/questionBank';
import { OFFICIAL_SYLLABUS } from '../../data/syllabus/syllabusData';
import { LEGAL_CURRENT_AFFAIRS } from '../../data/legal/legalCurrentAffairs';
import { CONSTITUTION_MODULE_DATA } from '../../data/constitution/constitutionData';
import { LEGAL_MAXIMS_DATA } from '../../data/legal/legalMaxims';
import { LEGAL_TERMS_DATA } from '../../data/legal/legalTerms';
import { NLU_DATABASE } from '../../data/nlus/nluData';
import { LAW_ENTRANCE_BOOKS } from '../../data/books/bookRecommendations';

interface SearchResult {
  id: string;
  type: 'Question' | 'Syllabus' | 'Legal Judgment' | 'Constitution' | 'Legal Maxim' | 'Legal Term' | 'NLU' | 'Book';
  title: string;
  subtitle: string;
  targetView: string;
  payload?: any;
}

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setCurrentView, setBreadcrumbs, lang } = useApp();
  const [query, setQuery] = useState('');

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase();
    const hits: SearchResult[] = [];

    // Search Legal Maxims
    LEGAL_MAXIMS_DATA.forEach((m) => {
      if (
        m.maxim.toLowerCase().includes(q) ||
        m.meaning.toLowerCase().includes(q) ||
        m.meaningHi.toLowerCase().includes(q)
      ) {
        hits.push({
          id: m.id,
          type: 'Legal Maxim',
          title: m.maxim,
          subtitle: m.meaning,
          targetView: 'legal-maxims',
          payload: { maximId: m.id }
        });
      }
    });

    // Search Legal Terms
    LEGAL_TERMS_DATA.forEach((t) => {
      if (
        t.term.toLowerCase().includes(q) ||
        t.termHi.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      ) {
        hits.push({
          id: t.id,
          type: 'Legal Term',
          title: t.term + (t.termHi ? ` (${t.termHi})` : ''),
          subtitle: t.definition,
          targetView: 'legal-terms',
          payload: { termId: t.id }
        });
      }
    });

    // Search Legal Judgments
    LEGAL_CURRENT_AFFAIRS.forEach((c) => {
      if (
        c.headline.toLowerCase().includes(q) ||
        c.headlineHi.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        (c.caseCitation && c.caseCitation.toLowerCase().includes(q))
      ) {
        hits.push({
          id: c.id,
          type: 'Legal Judgment',
          title: c.headline,
          subtitle: `${c.courtOrAuthority || ''} | ${c.caseCitation || ''}`,
          targetView: 'legal-affairs',
          payload: { affairId: c.id }
        });
      }
    });

    // Search Constitution Topics
    CONSTITUTION_MODULE_DATA.forEach((c) => {
      if (
        c.title.toLowerCase().includes(q) ||
        c.titleHi.toLowerCase().includes(q) ||
        c.articles.toLowerCase().includes(q)
      ) {
        hits.push({
          id: c.id,
          type: 'Constitution',
          title: c.title,
          subtitle: `${c.part} • ${c.articles}`,
          targetView: 'constitution',
          payload: { topicId: c.id }
        });
      }
    });

    // Search NLUs
    NLU_DATABASE.forEach((n) => {
      if (
        n.name.toLowerCase().includes(q) ||
        n.shortName.toLowerCase().includes(q) ||
        n.city.toLowerCase().includes(q) ||
        n.state.toLowerCase().includes(q)
      ) {
        hits.push({
          id: n.id,
          type: 'NLU',
          title: `${n.name} (${n.shortName})`,
          subtitle: `${n.city}, ${n.state} • Exam: ${n.examAccepted}`,
          targetView: 'nlus',
          payload: { nluId: n.id }
        });
      }
    });

    // Search Books
    LAW_ENTRANCE_BOOKS.forEach((b) => {
      if (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.subject.toLowerCase().includes(q)
      ) {
        hits.push({
          id: b.id,
          type: 'Book',
          title: b.title,
          subtitle: `By ${b.author} (${b.publisher}) • ${b.subject}`,
          targetView: 'books',
          payload: { bookId: b.id }
        });
      }
    });

    // Search Syllabus Topics
    OFFICIAL_SYLLABUS.forEach((s) => {
      s.topics.forEach((t) => {
        if (
          t.name.toLowerCase().includes(q) ||
          t.nameHi.toLowerCase().includes(q) ||
          t.subtopics.some((st) => st.toLowerCase().includes(q))
        ) {
          hits.push({
            id: t.id,
            type: 'Syllabus',
            title: t.name,
            subtitle: `${s.title} • ${s.section}`,
            targetView: 'syllabus',
            payload: { topicId: t.id }
          });
        }
      });
    });

    // Search Sample Questions (first 10 matches)
    for (const quest of QUESTION_BANK) {
      if (hits.length > 35) break;
      if (
        quest.question.toLowerCase().includes(q) ||
        (quest.principle && quest.principle.toLowerCase().includes(q)) ||
        quest.topic.toLowerCase().includes(q)
      ) {
        hits.push({
          id: quest.id,
          type: 'Question',
          title: quest.question.length > 80 ? quest.question.substring(0, 80) + '...' : quest.question,
          subtitle: `${quest.exam} ${quest.section} • ${quest.topic} [${quest.sourceType.toUpperCase()}]`,
          targetView: 'practice',
          payload: { questionId: quest.id }
        });
      }
    }

    return hits.slice(0, 30);
  }, [query]);

  if (!isSearchOpen) return null;

  const handleSelectResult = (res: SearchResult) => {
    setCurrentView(res.targetView, res.payload);
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label: res.type, labelHi: res.type, view: res.targetView },
      { label: res.title, labelHi: res.title, view: res.targetView, payload: res.payload }
    ]);
    setIsSearchOpen(false);
    setQuery('');
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Legal Maxim':
      case 'Legal Term':
      case 'Legal Judgment':
        return <Scale className="w-4 h-4 text-amber-500" />;
      case 'Constitution':
        return <Compass className="w-4 h-4 text-emerald-500" />;
      case 'NLU':
        return <GraduationCap className="w-4 h-4 text-indigo-500" />;
      case 'Book':
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case 'Syllabus':
        return <Award className="w-4 h-4 text-purple-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder={lang === 'hi' ? "CLAT, AILET, सिद्धांत, निर्णय, धारा, NLU, पुस्तकें खोजें..." : "Search CLAT, AILET, principles, judgments, articles, NLUs, books..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-base"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800">
          {query.trim().length < 2 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              <p className="font-medium text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'hi' ? 'खोज शुरू करने के लिए कम से कम 2 अक्षर टाइप करें' : 'Type at least 2 characters to search across the entire master platform'}
              </p>
              <p className="text-xs text-slate-400">
                {lang === 'hi' ? 'उदाहरण: "Audi Alteram Partem", "Article 21", "NLSIU", "Torts", "Negligence"' : 'Examples: "Audi Alteram Partem", "Article 21", "NLSIU", "Torts", "Negligence", "Ranjitsinh"'}
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              {lang === 'hi' ? `"${query}" के लिए कोई परिणाम नहीं मिला` : `No matching results found for "${query}"`}
            </div>
          ) : (
            results.map((res) => (
              <div
                key={res.id}
                onClick={() => handleSelectResult(res)}
                className="p-3 hover:bg-indigo-50 dark:hover:bg-slate-800/80 rounded-xl cursor-pointer transition-colors flex items-start gap-3"
              >
                <div className="mt-1 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                  {getIconForType(res.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {res.type}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {res.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {res.subtitle}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between px-4">
          <span>{results.length} {lang === 'hi' ? 'परिणाम' : 'results found'}</span>
          <span>{lang === 'hi' ? 'नेविगेट करने के लिए क्लिक करें' : 'Click any result to jump directly to section'}</span>
        </div>
      </div>
    </div>
  );
};
