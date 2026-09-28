import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { LAW_ENTRANCE_BOOKS } from '../../data/books/bookRecommendations';
import { BookOpen, ExternalLink, ShieldCheck, CheckCircle2, Layers, Search } from 'lucide-react';

export const BooksView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [activeTab, setActiveTab] = useState<'catalog' | 'mapping'>('catalog');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');

  const subjects = ['ALL', 'Complete Preparation', 'Legal Reasoning', 'English Language', 'Logical Reasoning', 'Quantitative Techniques', 'PYQs & Mock Tests'];

  const filteredBooks = LAW_ENTRANCE_BOOKS.filter((b) => {
    if (selectedSubject !== 'ALL' && b.subject !== selectedSubject) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-emerald-300 mb-2 border border-white/10">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Academic Repository</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Law Entrance Book Library & Syllabus Mapping
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi' 
            ? 'कानूनी और वैध स्रोतों द्वारा अनुशंसित प्रामाणिक पुस्तकें। प्रकाशक, पाठ्यक्रम कवरेज, और प्रत्यक्ष पाठ्यक्रम मैपिंग।'
            : 'Carefully evaluated law entrance books from legitimate publishers. Grounded in copyright safety with direct book-to-syllabus topic mappings.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'catalog'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {lang === 'hi' ? 'पुस्तकालय सूची (Catalog)' : 'Evaluated Book Catalog'}
          </button>
          <button
            onClick={() => setActiveTab('mapping')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
              activeTab === 'mapping'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {lang === 'hi' ? 'पुस्तक → पाठ्यक्रम मैपिंग' : 'Book → Syllabus Mapping'}
          </button>
        </div>

        {activeTab === 'catalog' && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 uppercase font-semibold hidden sm:inline">Subject:</span>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none"
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Copyright safety advisory */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            <strong>Zero Piracy Policy: </strong>
            All references point exclusively to legitimate publishers and official online distributors. We do not host, link to, or distribute pirated PDFs or unauthorized copies.
          </span>
        </div>
      </div>

      {activeTab === 'catalog' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {book.subject}
                  </span>
                  <span className="text-xs text-slate-400">
                    {book.edition} ({book.year})
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    By <span className="font-semibold text-slate-700 dark:text-slate-300">{book.author}</span> • Published by {book.publisher}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div>
                    <strong className="text-slate-500 uppercase text-[10px] block">Syllabus Coverage:</strong>
                    <span className="text-slate-800 dark:text-slate-200">{book.syllabusCoverage}</span>
                  </div>
                  <div>
                    <strong className="text-slate-500 uppercase text-[10px] block">Intended Stage & Use:</strong>
                    <span className="text-slate-800 dark:text-slate-200">{book.intendedUse}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{book.reviewNotes}"
                </p>
              </div>

              {/* Legitimate Purchase / Inspection Links */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Legitimate Official Sources:
                </span>
                <div className="flex flex-wrap gap-2">
                  {book.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-emerald-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'mapping' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-500" />
            <span>Curriculum Topic to Standard Book Mapping Matrix</span>
          </h2>
          <p className="text-xs text-slate-500">
            Identify which verified book covers each core syllabus topic to build your targeted study routine.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 uppercase text-[11px] font-bold">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">Book Title & Author</th>
                  <th className="py-3 px-4">Subject Focus</th>
                  <th className="py-3 px-4 rounded-r-lg">Mapped Syllabus Topics Covered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {LAW_ENTRANCE_BOOKS.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                      {b.title}
                      <span className="block text-[11px] font-normal text-slate-400">{b.author}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-indigo-600 dark:text-indigo-400">
                      {b.subject}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1.5">
                        {b.mappedTopics.map((mt, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-700 dark:text-slate-300 font-medium">
                            {mt}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
