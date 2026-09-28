import React from 'react';
import { useApp } from '../../hooks/useAppContext';
import { Home, Scale, BookOpen, Clock, GraduationCap, Menu } from 'lucide-react';

interface BottomNavProps {
  onOpenSidebar: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onOpenSidebar }) => {
  const { currentView, setCurrentView, setBreadcrumbs, lang } = useApp();

  const handleNav = (view: string, label: string, labelHi: string) => {
    setCurrentView(view);
    setBreadcrumbs([
      { label: 'Home', labelHi: 'होम', view: 'home' },
      { label, labelHi, view }
    ]);
  };

  const navItems = [
    { id: 'home', label: 'Home', labelHi: 'होम', icon: <Home className="w-5 h-5" /> },
    { id: 'exam-overview', label: 'Exams', labelHi: 'परीक्षाएं', icon: <Scale className="w-5 h-5" /> },
    { id: 'passage-lab', label: 'Labs', labelHi: 'लैब', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'mock-tests', label: 'Mocks', labelHi: 'मॉक', icon: <Clock className="w-5 h-5" /> },
    { id: 'nlus', label: 'NLUs', labelHi: 'एनएलयू', icon: <GraduationCap className="w-5 h-5" /> }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-1 px-2 flex items-center justify-around">
      {navItems.map((item) => {
        const isActive = currentView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleNav(item.id, item.label, item.labelHi)}
            className={`flex flex-col items-center justify-center p-1.5 rounded-xl text-[10px] font-medium transition-colors ${
              isActive
                ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {item.icon}
            <span className="mt-0.5">{lang === 'hi' ? item.labelHi : item.label}</span>
          </button>
        );
      })}

      {/* More / Menu Drawer trigger */}
      <button
        onClick={onOpenSidebar}
        className="flex flex-col items-center justify-center p-1.5 rounded-xl text-[10px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
      >
        <Menu className="w-5 h-5" />
        <span className="mt-0.5">{lang === 'hi' ? 'मेनू' : 'More'}</span>
      </button>
    </nav>
  );
};
