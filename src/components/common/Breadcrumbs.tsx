import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs, setCurrentView, lang } = useApp();

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 px-4 py-2 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-slate-600 dark:text-slate-400">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'होम' : 'Home'}</span>
        </button>

        {breadcrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            {idx === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-indigo-700 dark:text-indigo-300 truncate max-w-[200px] md:max-w-none">
                {lang === 'hi' ? crumb.labelHi || crumb.label : crumb.label}
              </span>
            ) : (
              <button
                onClick={() => setCurrentView(crumb.view, crumb.payload)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate max-w-[150px] md:max-w-none"
              >
                {lang === 'hi' ? crumb.labelHi || crumb.label : crumb.label}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
