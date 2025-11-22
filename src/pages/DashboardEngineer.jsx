import { Link } from 'react-router-dom'
import { UserCog, ClipboardList, Ruler, Wrench, Layers, FileCheck2, GitBranch, MessageSquare } from 'lucide-react'

export default function DashboardEngineer() {
  const widgets = [
    { title: 'Open RFIs', value: 6, icon: MessageSquare, to: '/rfis' },
    { title: 'Pending Inspections', value: 3, icon: Ruler, to: '#' },
    { title: 'QA/QC Checklists', value: 12, icon: FileCheck2, to: '/compliance' },
    { title: 'Workfronts', value: 4, icon: Layers, to: '/projects' },
  ]

  const tasks = [
    { title: 'Inspect rebar before pour', status: 'Due today' },
    { title: 'Respond to RFI #132', status: '2h' },
    { title: 'Approve concrete mix design', status: 'Pending' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Site Engineer Dashboard</h1>
          <Link to="/rfis" className="text-sm text-blue-400 hover:text-blue-300">Open RFIs</Link>
        </header>

        <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {widgets.map(({ title, value, icon: Icon, to }) => (
            <Link key={title} to={to} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:bg-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">{title}</p>
                  <p className="text-2xl font-semibold mt-1">{value}</p>
                </div>
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <h2 className="text-lg font-medium">My Queue</h2>
          <div className="mt-3 divide-y divide-slate-800">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <span>{t.title}</span>
                <span className="text-sm text-slate-400">{t.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
