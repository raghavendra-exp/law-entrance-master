import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { FLASHCARDS_DATA } from '../../data/flashcards/flashcardData';
import { Layers, RotateCcw, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FlashcardsView: React.FC = () => {
  const { lang, knownFlashcardIds, toggleKnownFlashcard } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const categories = [
    'ALL',
    'Legal Maxims',
    'Constitutional Articles',
    'Landmark Cases',
    'Logical Reasoning',
    'Quant Formulas'
  ];

  const filteredCards = FLASHCARDS_DATA.filter((c) => {
    if (selectedCategory !== 'ALL' && c.category !== selectedCategory) return false;
    return true;
  });

  const card = filteredCards[currentCardIndex] || filteredCards[0];
  const isKnown = card ? knownFlashcardIds.includes(card.id) : false;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => Math.min(filteredCards.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => Math.max(0, prev - 1));
  };

  const handleToggleKnown = () => {
    if (!card) return;
    toggleKnownFlashcard(card.id);
    if (!isKnown) {
      confetti({ particleCount: 30, spread: 45 });
    }
  };

  const knownCount = filteredCards.filter((c) => knownFlashcardIds.includes(c.id)).length;

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-violet-300 mb-2 border border-white/10">
            <Layers className="w-3.5 h-3.5" />
            <span>Spaced Repetition System</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Law Entrance Flashcard Decks
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
            {lang === 'hi' 
              ? 'विधिक सूत्र, संवैधानिक अनुच्छेद, ऐतिहासिक वाद, और क्वांट सूत्रों का 3डी फ्लिप कार्ड रिवीजन।'
              : 'Interactive 3D flashcard decks covering Latin maxims, constitutional bench landmarks, reasoning concepts, and math formulas.'}
          </p>
        </div>

        {/* Counter */}
        <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center shrink-0 min-w-[160px]">
          <span className="text-[10px] text-violet-200 uppercase font-bold block">Mastery Progress</span>
          <span className="text-2xl font-black text-white">{knownCount} / {filteredCards.length}</span>
          <span className="text-[10px] text-emerald-300 block font-semibold">Cards Mastered</span>
        </div>
      </div>

      {/* Categories Toolbar */}
      <div className="flex overflow-x-auto pb-1 gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setSelectedCategory(cat); setCurrentCardIndex(0); setIsFlipped(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-violet-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat === 'ALL' ? (lang === 'hi' ? 'सभी डेक' : 'All Decks') : cat}
          </button>
        ))}
      </div>

      {/* Main Flashcard Card */}
      {card && (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-2">
            <span className="font-semibold uppercase text-violet-600 dark:text-violet-400">
              {card.category}
            </span>
            <span>Card {currentCardIndex + 1} of {filteredCards.length}</span>
          </div>

          {/* 3D Flip Card Container */}
          <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="w-full min-h-[300px] bg-white dark:bg-slate-900 rounded-3xl p-8 border-2 border-slate-200 dark:border-slate-800 shadow-xl cursor-pointer hover:border-violet-400 dark:hover:border-violet-600 transition-all flex flex-col justify-between text-center select-none"
          >
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span className="font-mono">{card.id}</span>
              <span className="text-[11px] font-semibold flex items-center gap-1 text-slate-500">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Click to Flip Card</span>
              </span>
            </div>

            {/* Front / Back Toggle Display */}
            <div className="my-auto py-6 space-y-3">
              {!isFlipped ? (
                <div className="space-y-2 animate-fade-in">
                  <span className="text-[11px] uppercase font-bold text-violet-600 dark:text-violet-400 block tracking-widest">
                    FRONT (TERM / PRINCIPLE)
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight font-serif">
                    {lang === 'hi' && card.frontHi ? card.frontHi : card.front}
                  </h2>
                </div>
              ) : (
                <div className="space-y-3 animate-fade-in">
                  <span className="text-[11px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block tracking-widest">
                    BACK (EXPLANATION & RATIO)
                  </span>
                  <p className="text-sm md:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-sans max-w-lg mx-auto">
                    {lang === 'hi' && card.backHi ? card.backHi : card.back}
                  </p>
                </div>
              )}
            </div>

            {/* Tags footer inside card */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              {card.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Navigation Controls */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={handlePrev}
              disabled={currentCardIndex === 0}
              className="flex items-center gap-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleToggleKnown}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                isKnown
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isKnown ? 'Mastered (Click to Unmark)' : 'Mark as Mastered'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentCardIndex === filteredCards.length - 1}
              className="flex items-center gap-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
