import { Link } from 'react-router-dom'
import { Briefcase, Users, Package, ClipboardList, Wrench, Truck } from 'lucide-react'

export default function DashboardContractor() {
  const widgets = [
    { title: 'Crews On Site', value: 5, icon: Users, to: '/tasks' },
    { title: 'Material Requests', value: 7, icon: Package, to: '/documents' },
    { title: 'Work Orders', value: 12, icon: ClipboardList, to: '/projects' },
    { title: 'Equipment', value: 9, icon: Wrench, to: '#' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Contractor Dashboard</h1>
          <Link to="/projects" className="text-sm text-blue-400 hover:text-blue-300">View Workfronts</Link>
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
          <h2 className="text-lg font-medium">Logistics</h2>
          <div className="mt-3 flex items-center gap-3 text-slate-300">
            <Truck className="w-5 h-5 text-amber-400" />
            <span>3 deliveries scheduled today</span>
          </div>
        </section>
      </div>
    </div>
  )
}
