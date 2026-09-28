import React, { useState } from 'react';
import { useApp } from '../../hooks/useAppContext';
import { NLU_DATABASE } from '../../data/nlus/nluData';
import { NLUInfo } from '../../types';
import { 
  GraduationCap, 
  Search, 
  ExternalLink, 
  Award, 
  MapPin, 
  Building, 
  CheckCircle2, 
  Scale, 
  Layers, 
  AlertTriangle,
  X
} from 'lucide-react';

export const NluExplorerView: React.FC = () => {
  const { lang, exam } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [selectedExam, setSelectedExam] = useState<string>('ALL');
  const [selectedNluForModal, setSelectedNluForModal] = useState<NLUInfo | null>(null);

  // Compare mode: up to 3 NLUs
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const filteredNLUs = NLU_DATABASE.filter((n) => {
    if (selectedTier !== 'ALL' && n.tier.toString() !== selectedTier) return false;
    if (selectedExam !== 'ALL' && n.examAccepted !== selectedExam) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        n.name.toLowerCase().includes(q) ||
        n.shortName.toLowerCase().includes(q) ||
        n.city.toLowerCase().includes(q) ||
        n.state.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleCompare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((cid) => cid !== id));
    } else {
      if (compareIds.length >= 3) {
        alert('You can compare a maximum of 3 NLUs simultaneously.');
        return;
      }
      setCompareIds([...compareIds, id]);
    }
  };

  const compareList = NLU_DATABASE.filter((n) => compareIds.includes(n.id));

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase text-indigo-300 mb-2 border border-white/10">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>National Law University Explorer</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            NLU Master Directory, Admissions & Historical Cutoffs
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
            {lang === 'hi' 
              ? 'भारत के 26 प्रतिभागी राष्ट्रीय विधि विश्वविद्यालय (NLUs) एवं NLU दिल्ली का विस्तृत डेटाबेस।'
              : 'Official university profiles, NIRF rankings, seat matrices, fee structures, and verified historical cutoff archives.'}
          </p>
        </div>

        {/* Compare Toolbar Float */}
        {compareIds.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-white">
              {compareIds.length} / 3 Selected
            </span>
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
            >
              Compare Side-by-Side
            </button>
            <button
              onClick={() => setCompareIds([])}
              className="p-1 rounded-lg text-slate-300 hover:text-white"
              title="Clear comparison selection"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={lang === 'hi' ? "एनएलयू, शहर या राज्य खोजें..." : "Search NLUs by name, city, or state..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs md:text-sm bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl outline-none text-slate-800 dark:text-slate-100"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none"
          >
            <option value="ALL">All Exams</option>
            <option value="CLAT">CLAT (26 NLUs)</option>
            <option value="AILET">AILET (NLU Delhi)</option>
          </select>

          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 outline-none"
          >
            <option value="ALL">All Tiers</option>
            <option value="1">Tier 1 (Top NLUs)</option>
            <option value="2">Tier 2 NLUs</option>
            <option value="3">Tier 3 NLUs</option>
          </select>
        </div>
      </div>

      {/* NLU Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNLUs.map((nlu) => {
          const isSelectedForCompare = compareIds.includes(nlu.id);

          return (
            <div
              key={nlu.id}
              onClick={() => setSelectedNluForModal(nlu)}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-indigo-400 dark:hover:border-indigo-700 cursor-pointer transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    nlu.examAccepted === 'AILET'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                      : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                  }`}>
                    {nlu.examAccepted} • Tier {nlu.tier}
                  </span>

                  {nlu.nirfRank2024 && (
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>NIRF #{nlu.nirfRank2024}</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {nlu.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{nlu.city}, {nlu.state}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">UG Seats</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {nlu.courses[0]?.seats || 'N/A'} Seats
                    </span>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Annual Fee</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      ₹{nlu.courses[0]?.annualFeeInLakhs} Lakhs
                    </span>
                  </div>
                </div>
              </div>

              {/* Compare toggle & Details link */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={(e) => toggleCompare(nlu.id, e)}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                    isSelectedForCompare
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {isSelectedForCompare ? 'Selected to Compare' : '+ Compare'}
                </button>

                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline">
                  View Profile →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Individual NLU Details Modal */}
      {selectedNluForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 my-8">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-indigo-100 text-indigo-700">
                  {selectedNluForModal.examAccepted} • Tier {selectedNluForModal.tier}
                </span>
                <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {selectedNluForModal.name}
                </h2>
                <p className="text-xs text-slate-500">
                  {selectedNluForModal.city}, {selectedNluForModal.state} • Estd. {selectedNluForModal.established}
                </p>
              </div>
              <button
                onClick={() => setSelectedNluForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Academic Programs */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                Academic Programs & Seat Allocations
              </h3>
              <div className="space-y-2">
                {selectedNluForModal.courses.map((c, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex justify-between items-center">
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-semibold">{c.program}</strong>
                      <span className="text-slate-500">Eligibility: {c.eligibility}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 block">{c.seats} Seats</span>
                      <span className="text-slate-500">₹{c.annualFeeInLakhs} L/yr</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Cutoff Archives */}
            {selectedNluForModal.historicalCutoffs && selectedNluForModal.historicalCutoffs.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Verified Historical Cutoffs
                  </h3>
                  <span className="text-[10px] font-black uppercase text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded">
                    HISTORICAL DATA
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold uppercase text-[10px]">
                      <tr>
                        <th className="p-2">Year</th>
                        <th className="p-2">Round</th>
                        <th className="p-2">Category</th>
                        <th className="p-2">Opening Rank</th>
                        <th className="p-2">Closing Rank</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                      {selectedNluForModal.historicalCutoffs.map((hc, idx) => (
                        <tr key={idx}>
                          <td className="p-2 font-mono">{hc.year}</td>
                          <td className="p-2">Round {hc.round}</td>
                          <td className="p-2 font-semibold">{hc.category}</td>
                          <td className="p-2 font-mono text-emerald-600 font-bold">{hc.openingRank}</td>
                          <td className="p-2 font-mono text-indigo-600 font-bold">{hc.closingRank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[10px] text-slate-400 italic">
                  * Historical cutoffs are official past-year allotment figures and do not constitute a guarantee for the upcoming admission cycle.
                </p>
              </div>
            )}

            {/* Official Website Button */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <span className="text-[11px] text-slate-400">
                Source: {selectedNluForModal.source}
              </span>
              <a
                href={selectedNluForModal.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Side-by-Side NLU Comparison Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Side-by-Side NLU Comparison Matrix
                </h2>
                <p className="text-xs text-slate-500">
                  Factual comparison based exclusively on officially published university metrics
                </p>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Parameter</th>
                    {compareList.map((n) => (
                      <th key={n.id} className="p-3 font-bold text-indigo-700 dark:text-indigo-300">
                        {n.shortName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                  <tr>
                    <td className="p-3 font-semibold text-slate-500">Exam Accepted</td>
                    {compareList.map((n) => (
                      <td key={n.id} className="p-3 font-bold">{n.examAccepted}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-500">Location</td>
                    {compareList.map((n) => (
                      <td key={n.id} className="p-3">{n.city}, {n.state}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-500">NIRF 2024 Rank</td>
                    {compareList.map((n) => (
                      <td key={n.id} className="p-3 font-bold text-amber-600">{n.nirfRank2024 ? `#${n.nirfRank2024}` : 'N/A'}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-500">Annual UG Fee</td>
                    {compareList.map((n) => (
                      <td key={n.id} className="p-3 font-mono font-bold">₹{n.courses[0]?.annualFeeInLakhs} Lakhs</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-500">UG Seats</td>
                    {compareList.map((n) => (
                      <td key={n.id} className="p-3 font-mono">{n.courses[0]?.seats} Seats</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-500">Campus Size</td>
                    {compareList.map((n) => (
                      <td key={n.id} className="p-3">{n.campusSizeAcres} Acres</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
