import { Link } from 'react-router-dom'
import { Gavel, FileSearch, ShieldAlert, ClipboardCheck } from 'lucide-react'

export default function DashboardAuditor() {
  const widgets = [
    { title: 'Open Audits', value: 4, icon: Gavel, to: '/compliance' },
    { title: 'Evidence Requests', value: 11, icon: FileSearch, to: '/documents' },
    { title: 'Alerts', value: 2, icon: ShieldAlert, to: '#' },
    { title: 'Checklists', value: 18, icon: ClipboardCheck, to: '/compliance' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Auditor Dashboard</h1>
          <Link to="/compliance" className="text-sm text-blue-400 hover:text-blue-300">Compliance Hub</Link>
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
      </div>
    </div>
  )
}
