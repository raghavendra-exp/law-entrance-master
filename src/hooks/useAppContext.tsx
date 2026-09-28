import React, { createContext, useContext, useState, useEffect } from 'react';
import { ExamType, ProgramLevel, Language, ThemeMode, ErrorLogItem, MockResult } from '../types';

export interface BreadcrumbItem {
  label: string;
  labelHi: string;
  view: string;
  payload?: any;
}

interface AppContextType {
  exam: ExamType;
  setExam: (exam: ExamType) => void;
  program: ProgramLevel;
  setProgram: (program: ProgramLevel) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  currentView: string;
  setCurrentView: (view: string, payload?: any) => void;
  viewPayload: any;
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: (crumbs: BreadcrumbItem[]) => void;
  
  // Error Notebook
  errorLog: ErrorLogItem[];
  addErrorLogItem: (item: Omit<ErrorLogItem, 'id' | 'date'>) => void;
  updateErrorLogItem: (id: string, updates: Partial<ErrorLogItem>) => void;
  removeErrorLogItem: (id: string) => void;

  // Mock History
  mockResults: MockResult[];
  saveMockResult: (result: MockResult) => void;

  // Flashcards Mastered Set
  knownFlashcardIds: string[];
  toggleKnownFlashcard: (id: string) => void;

  // Global Search Modal
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [exam, setExamState] = useState<ExamType>(() => {
    return (localStorage.getItem('lem_exam') as ExamType) || 'CLAT';
  });

  const [program, setProgramState] = useState<ProgramLevel>(() => {
    return (localStorage.getItem('lem_program') as ProgramLevel) || 'UG';
  });

  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('lem_lang') as Language) || 'en';
  });

  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem('lem_theme') as ThemeMode) || 'light';
  });

  const [currentView, setCurrentViewState] = useState<string>('home');
  const [viewPayload, setViewPayload] = useState<any>(null);

  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'Home', labelHi: 'होम', view: 'home' }
  ]);

  // Error Notebook
  const [errorLog, setErrorLog] = useState<ErrorLogItem[]>(() => {
    try {
      const saved = localStorage.getItem('lem_error_notebook');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Mock Results History
  const [mockResults, setMockResults] = useState<MockResult[]>(() => {
    try {
      const saved = localStorage.getItem('lem_mock_results');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Flashcard Mastered IDs
  const [knownFlashcardIds, setKnownFlashcardIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lem_known_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync to localStorage
  const setExam = (newExam: ExamType) => {
    setExamState(newExam);
    localStorage.setItem('lem_exam', newExam);
  };

  const setProgram = (newProg: ProgramLevel) => {
    setProgramState(newProg);
    localStorage.setItem('lem_program', newProg);
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lem_lang', newLang);
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('lem_theme', newTheme);
  };

  const setCurrentView = (view: string, payload: any = null) => {
    setCurrentViewState(view);
    setViewPayload(payload);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addErrorLogItem = (item: Omit<ErrorLogItem, 'id' | 'date'>) => {
    const newItem: ErrorLogItem = {
      ...item,
      id: 'err-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      date: new Date().toISOString().split('T')[0]
    };
    const updated = [newItem, ...errorLog];
    setErrorLog(updated);
    localStorage.setItem('lem_error_notebook', JSON.stringify(updated));
  };

  const updateErrorLogItem = (id: string, updates: Partial<ErrorLogItem>) => {
    const updated = errorLog.map((item) => (item.id === id ? { ...item, ...updates } : item));
    setErrorLog(updated);
    localStorage.setItem('lem_error_notebook', JSON.stringify(updated));
  };

  const removeErrorLogItem = (id: string) => {
    const updated = errorLog.filter((item) => item.id !== id);
    setErrorLog(updated);
    localStorage.setItem('lem_error_notebook', JSON.stringify(updated));
  };

  const saveMockResult = (res: MockResult) => {
    const updated = [res, ...mockResults];
    setMockResults(updated);
    localStorage.setItem('lem_mock_results', JSON.stringify(updated));
  };

  const toggleKnownFlashcard = (id: string) => {
    let updated: string[];
    if (knownFlashcardIds.includes(id)) {
      updated = knownFlashcardIds.filter((cardId) => cardId !== id);
    } else {
      updated = [...knownFlashcardIds, id];
    }
    setKnownFlashcardIds(updated);
    localStorage.setItem('lem_known_flashcards', JSON.stringify(updated));
  };

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Theme effect on HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        exam,
        setExam,
        program,
        setProgram,
        lang,
        setLang,
        theme,
        setTheme,
        currentView,
        setCurrentView,
        viewPayload,
        breadcrumbs,
        setBreadcrumbs,
        errorLog,
        addErrorLogItem,
        updateErrorLogItem,
        removeErrorLogItem,
        mockResults,
        saveMockResult,
        knownFlashcardIds,
        toggleKnownFlashcard,
        isSearchOpen,
        setIsSearchOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
