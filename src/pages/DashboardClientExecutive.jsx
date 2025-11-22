import { Link } from 'react-router-dom'
import { Building2, BarChart3, FileText, Users } from 'lucide-react'

export default function DashboardClientExecutive() {
  const kpis = [
    { title: 'Projects', value: 9, icon: Building2, to: '/projects' },
    { title: 'Spend', value: '₹ 42Cr', icon: BarChart3, to: '#' },
    { title: 'Docs', value: 312, icon: FileText, to: '/documents' },
    { title: 'Vendors', value: 22, icon: Users, to: '#' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Client Executive Dashboard</h1>
          <Link to="/projects" className="text-sm text-blue-400 hover:text-blue-300">Portfolio</Link>
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
      </div>
    </div>
  )
}
