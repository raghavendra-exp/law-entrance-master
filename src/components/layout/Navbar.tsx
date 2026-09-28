import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { 
  Scale, 
  Search, 
  Sun, 
  Moon, 
  Languages, 
  GraduationCap, 
  Menu,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { 
    exam, 
    setExam, 
    program, 
    setProgram, 
    lang, 
    setLang, 
    theme, 
    setTheme, 
    setIsSearchOpen,
    setCurrentView,
    setBreadcrumbs
  } = useApp();

  const handleHomeClick = () => {
    setCurrentView('home');
    setBreadcrumbs([{ label: 'Home', labelHi: 'होम', view: 'home' }]);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 h-16 flex items-center justify-between gap-1 sm:gap-4">
        {/* Left: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div 
            onClick={handleHomeClick}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm md:text-base tracking-tight text-slate-900 dark:text-white uppercase">
                  Law Entrance Master
                </span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  India
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                CLAT • AILET 2027 Official Prep & NLU Portal
              </p>
            </div>
          </div>
        </div>

        {/* Center: Exam & Program Pill Switchers */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Exam Selector */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 text-[11px] sm:text-xs font-semibold">
            <button
              onClick={() => setExam('CLAT')}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg transition-all ${
                exam === 'CLAT'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              CLAT
            </button>
            <button
              onClick={() => setExam('AILET')}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg transition-all ${
                exam === 'AILET'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AILET
            </button>
          </div>

          {/* Program Selector */}
          <div className="hidden lg:flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setProgram('UG')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                program === 'UG'
                  ? 'bg-white dark:bg-purple-600 text-purple-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              UG (5-Yr)
            </button>
            <button
              onClick={() => setProgram('PG')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                program === 'PG'
                  ? 'bg-white dark:bg-purple-600 text-purple-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              PG (LL.M.)
            </button>
          </div>
        </div>

        {/* Right: Search, Language, Theme */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
          {/* Global Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-1 sm:gap-2 p-1.5 sm:px-2.5 sm:py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg sm:rounded-xl text-xs transition-colors border border-slate-200 dark:border-slate-700"
            title="Global Search (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden lg:inline">{lang === 'hi' ? 'खोजें...' : 'Quick Search...'}</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-xs">
              Ctrl+K
            </kbd>
          </button>

          {/* Bilingual Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-[11px] sm:text-xs font-medium transition-colors"
            title="Toggle English / Hindi"
          >
            <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>{lang === 'en' ? 'हिन्दी' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
