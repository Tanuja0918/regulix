import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { Search } from 'lucide-react';

const mockAudits = [
  { id: 1, company: "Central Coal Corp", sector: "Mining", status: "Approved", date: "2026-03-01" },
  { id: 2, company: "Apex Energy Ltd", sector: "Energy", status: "Pending", date: "2026-03-05" },
  { id: 3, company: "Vanguard Minerals", sector: "Mining", status: "Rejected", date: "2026-03-10" },
];

export default function AuditList() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const filteredAudits = mockAudits.filter(item => 
    item.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    item.sector.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-xl font-bold text-slate-800">Audit Registry & Submissions</h2>
        <div className="relative w-full sm:max-w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search company or sector..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 text-sm">
              <th className="pb-3 font-semibold">Company Name</th>
              <th className="pb-3 font-semibold">Sector</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold">Submission Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredAudits.map(audit => (
              <tr key={audit.id} className="hover:bg-slate-50">
                <td className="py-3 font-medium text-slate-800">{audit.company}</td>
                <td className="py-3 text-slate-600">{audit.sector}</td>
                <td className="py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    audit.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                    audit.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {audit.status}
                  </span>
                </td>
                <td className="py-3 text-slate-500">{audit.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}