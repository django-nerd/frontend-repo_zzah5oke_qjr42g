import { Link } from 'react-router-dom'
import { Users, Building, DollarSign, ShieldCheck } from 'lucide-react'

export default function DashboardOwner() {
  const kpis = [
    { title: 'Active Projects', value: 4, icon: Building, to: '/projects' },
    { title: 'Budget Utilization', value: '72%', icon: DollarSign, to: '#' },
    { title: 'Compliance Health', value: 'Green', icon: ShieldCheck, to: '/compliance' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Owner Dashboard</h1>
          <Link to="/projects" className="text-sm text-blue-400 hover:text-blue-300">Portfolio</Link>
        </header>

        <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </div>
  )
}
