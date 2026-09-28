import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { BarChart2, Calculator, CheckCircle2, ChevronRight, FileSpreadsheet, Sparkles } from 'lucide-react';

interface FormulaCard {
  title: string;
  category: string;
  formula: string;
  clatShortcut: string;
  example: string;
}

export const QuantLabView: React.FC = () => {
  const { lang, setCurrentView, setBreadcrumbs } = useApp();
  const [activeTab, setActiveTab] = useState<'caselet' | 'formulas' | 'converter'>('caselet');
  const [fractionInput, setFractionInput] = useState<string>('1/8');

  const formulaDeck: FormulaCard[] = [
    {
      title: 'Successive Percentage Changes',
      category: 'Percentages',
      formula: 'Net Change % = a + b + (ab / 100)%',
      clatShortcut: 'For discount followed by markup: Net = Markup - Discount - (Markup × Discount / 100).',
      example: 'Price increased by 20% then decreased by 10%: Net = 20 - 10 - 2 = +8% increase.'
    },
    {
      title: 'Fraction to Percentage Conversions',
      category: 'Mental Arithmetic',
      formula: '1/2=50%, 1/3=33.33%, 1/4=25%, 1/5=20%, 1/6=16.66%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/12=8.33%, 1/16=6.25%',
      clatShortcut: 'Memorizing fractions up to 1/20 eliminates 80% of multiplication work in Caselet DIs.',
      example: '12.5% of 640 = (1/8) × 640 = 80 instantly.'
    },
    {
      title: 'Compound Ratio & Common Multiplier',
      category: 'Ratios & Proportions',
      formula: 'If A : B = x : y and B : C = p : q, then A : B : C = xp : yp : yq',
      clatShortcut: 'Align B\'s value by taking LCM of the common variable.',
      example: 'A:B = 2:3, B:C = 4:5. LCM(3,4)=12. Multiply first by 4, second by 3 -> A:B:C = 8:12:15.'
    },
    {
      title: 'Weighted Average (Alligation)',
      category: 'Averages',
      formula: 'Combined Average = (N1 × A1 + N2 × A2) / (N1 + N2)',
      clatShortcut: 'Use the difference ratio: (A1 - A_avg) / (A_avg - A2) = N2 / N1.',
      example: '30 students avg 60, 20 students avg 70: Combined = (1800 + 1400) / 50 = 64.'
    },
    {
      title: 'Harmonic Average Speed',
      category: 'Time Speed Distance',
      formula: 'Average Speed = (2 × S1 × S2) / (S1 + S2) [for equal distance traveled]',
      clatShortcut: 'NEVER take arithmetic average (S1 + S2)/2. Average speed is always biased toward the slower speed.',
      example: 'Going at 40 km/h and returning at 60 km/h: Avg = (2 × 40 × 60) / 100 = 48 km/h.'
    },
    {
      title: 'Mensuration: Cylinder & Sphere',
      category: 'Class 10 Mensuration',
      formula: 'Cylinder Volume = πr²h; Total Surface Area = 2πr(r + h). Sphere Volume = (4/3)πr³; Surface Area = 4πr².',
      clatShortcut: 'Ratio of volumes of two similar 3D solids is the cube of the ratio of their linear dimensions: V1/V2 = (r1/r2)³.',
      example: 'If radius of sphere doubles, its volume increases 2³ = 8 times (700% increase).'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-teal-300 mb-2 border border-white/10">
          <Calculator className="w-3.5 h-3.5" />
          <span>Class 10 Arithmetic Engine</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          CLAT Quantitative Techniques Lab & Formula Vault
        </h1>
        <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-2xl leading-relaxed">
          {lang === 'hi'
            ? 'कंसोर्टियम विनिर्देश: कक्षा 10 स्तर के अंकगणितीय संचालन (अनुपात, प्रतिशत, क्षेत्रमिति, और केसलेट डेटा व्याख्या)।'
            : 'Consortium Specification: Class 10 arithmetic operations, tabular data extraction, Caselet DI translation, and statistical estimation.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('caselet')}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === 'caselet'
              ? 'bg-teal-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          {lang === 'hi' ? 'केसलेट डीआई अनुवादक' : 'Caselet DI Translator'}
        </button>
        <button
          onClick={() => setActiveTab('formulas')}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
            activeTab === 'formulas'
              ? 'bg-teal-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          {lang === 'hi' ? 'कक्षा 10 फॉर्मूला शीट' : 'Class 10 Formula Vault'}
        </button>
      </div>

      {activeTab === 'caselet' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Methodology Guide: How to Solve CLAT Caselets
            </span>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              The Paragraph-to-Matrix Translation Strategy
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              In CLAT, never answer Quant questions directly from paragraph sentences. First build the master cross-tabulation table on your scrap sheet, fill in all variables, and then crack all 4–5 questions in under 90 seconds.
            </p>
          </div>

          {/* Demonstration Case */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">
              Sample Caselet Paragraph:
            </span>
            <p className="text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic font-serif">
              "In an entrance coaching institute, 500 aspirants prepare for CLAT or AILET. 60% of aspirants are female. 70% of female aspirants prepare for CLAT, while the remaining females prepare for AILET. Among male aspirants, the ratio of those preparing for CLAT to AILET is 3 : 2."
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-2">
                Derived Master Tabular Matrix:
              </span>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold">
                    <tr>
                      <th className="p-2.5">Category</th>
                      <th className="p-2.5">CLAT Aspirants</th>
                      <th className="p-2.5">AILET Aspirants</th>
                      <th className="p-2.5">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="p-2.5 font-semibold">Females (60% of 500)</td>
                      <td className="p-2.5 font-mono">210 (70% of 300)</td>
                      <td className="p-2.5 font-mono">90 (300 - 210)</td>
                      <td className="p-2.5 font-bold">300</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Males (40% of 500)</td>
                      <td className="p-2.5 font-mono">120 (3/5 of 200)</td>
                      <td className="p-2.5 font-mono">80 (2/5 of 200)</td>
                      <td className="p-2.5 font-bold">200</td>
                    </tr>
                    <tr className="bg-teal-50 dark:bg-teal-950/40 font-bold text-teal-900 dark:text-teal-200">
                      <td className="p-2.5">Combined Total</td>
                      <td className="p-2.5 font-mono">330</td>
                      <td className="p-2.5 font-mono">170</td>
                      <td className="p-2.5 font-mono">500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-700">
              ✓ Once this 6-cell table is complete, any question regarding percentages, ratios, or differences is answered effortlessly without recalculating.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'formulas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formulaDeck.map((f, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                  {f.category}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-mono text-indigo-700 dark:text-indigo-300 font-semibold border border-slate-100 dark:border-slate-700">
                {f.formula}
              </div>

              <div className="space-y-1 text-xs">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">
                  CLAT Exam Shortcut:
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {f.clatShortcut}
                </p>
              </div>

              <div className="p-2 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 text-xs text-amber-900 dark:text-amber-200">
                <strong>Solved Drill: </strong> {f.example}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
