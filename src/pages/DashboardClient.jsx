import { Link } from 'react-router-dom'
import { Building2, Flag, FileCheck2, MessageSquare, TrendingUp, BadgeCheck } from 'lucide-react'

export default function DashboardClient() {
  const cards = [
    { title: 'Progress', value: '62%', icon: TrendingUp, to: '/projects' },
    { title: 'Approvals', value: 3, icon: BadgeCheck, to: '/approvals' },
    { title: 'Documents', value: 27, icon: FileCheck2, to: '/documents' },
    { title: 'Messages', value: 9, icon: MessageSquare, to: '/rfis' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Client Dashboard</h1>
          <Link to="/projects" className="text-sm text-blue-400 hover:text-blue-300">View Projects</Link>
        </header>

        <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ title, value, icon: Icon, to }) => (
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
          <h2 className="text-lg font-medium">Highlights</h2>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
            <li>Milestone M4 delivered two days ahead</li>
            <li>Change order #18 pending approval</li>
            <li>Compliance health: Green</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
