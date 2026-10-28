export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-slate-500 text-sm font-medium">Total Submissions</h3>
        <p className="text-3xl font-bold text-slate-800 mt-2">24</p>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-slate-500 text-sm font-medium">Pending Reviews</h3>
        <p className="text-3xl font-bold text-amber-600 mt-2">5</p>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-slate-500 text-sm font-medium">Compliance Rate</h3>
        <p className="text-3xl font-bold text-emerald-600 mt-2">92.4%</p>
      </div>
    </div>
  );
}