import { Link } from 'react-router-dom'
import { ClipboardCheck, Calendar, BarChart3, AlertTriangle, Users, CheckCircle2, FileSignature, DollarSign } from 'lucide-react'

export default function DashboardProjectManager() {
  const kpis = [
    { title: 'Milestones', value: '8/12', icon: CheckCircle2, to: '/projects' },
    { title: 'Approvals', value: 5, icon: FileSignature, to: '/approvals' },
    { title: 'Risks', value: 2, icon: AlertTriangle, to: '#' },
    { title: 'Budget', value: '78%', icon: DollarSign, to: '#' },
  ]

  const schedule = [
    { time: '09:00', what: 'Daily standup' },
    { time: '11:30', what: 'Client progress review' },
    { time: '16:00', what: 'Risk workshop' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Project Manager Dashboard</h1>
          <Link to="/approvals" className="text-sm text-blue-400 hover:text-blue-300">Go to Approvals</Link>
        </header>

        <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map(({ title, value, icon: Icon, to }) => (
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

        <section className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h2 className="text-lg font-medium">Today’s Schedule</h2>
            <div className="mt-3 space-y-3">
              {schedule.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-300 w-20">{s.time}</span>
                  <span>{s.what}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h2 className="text-lg font-medium">Team</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Site Engineer — RFIs backlog reduced to 6</li>
              <li>Contractor — Concrete pour rescheduled</li>
              <li>QA/QC — Inspection pending for rebar</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
