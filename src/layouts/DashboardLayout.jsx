import { Outlet, Link } from 'react-router-dom';
import { LayoutDashboard, FileText, ShieldCheck } from 'lucide-react';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 md:h-screen md:flex-row md:overflow-hidden">
      <aside className="flex w-full shrink-0 flex-col bg-slate-900 text-slate-300 md:w-64">
        <div className="border-b border-slate-800 p-4 text-xl font-bold tracking-wider text-white sm:p-5">
          Regulix <span className="text-blue-500 text-xs">Enterprise</span>
        </div>
        <nav className="flex gap-2 overflow-x-auto p-3 md:flex-1 md:flex-col md:gap-2 md:overflow-visible md:p-4">
          <Link to="/" className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-800 hover:text-white">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link to="/compliance/new" className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-800 hover:text-white">
            <FileText size={18} /> New Compliance Form
          </Link>
          <Link to="/audits" className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-800 hover:text-white">
            <ShieldCheck size={18} /> Audit Registry
          </Link>
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col md:overflow-hidden">
        <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-6 lg:px-8">
          <h1 className="m-0 text-lg font-semibold text-slate-700">Audit & Compliance Portal</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600">Tanuja Dewangan (Admin)</span>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">TD</div>
          </div>
        </header>
        <main className="min-w-0 flex-1 p-4 sm:p-6 md:overflow-y-auto lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}