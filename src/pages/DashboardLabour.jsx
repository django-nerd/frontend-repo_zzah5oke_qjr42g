import { Link } from 'react-router-dom'
import { HardHat, ClipboardList, Wrench, Hammer, CalendarClock, AlertTriangle, Shield, MapPin, CheckCircle2, FileText, Camera, MessageSquare } from 'lucide-react'

export default function DashboardLabour() {
  const quickActions = [
    { label: 'My Tasks', icon: ClipboardList, to: '/tasks' },
    { label: 'Clock In/Out', icon: CalendarClock, to: '#' },
    { label: 'Report Issue', icon: AlertTriangle, to: '/rfis' },
    { label: 'Safety Brief', icon: Shield, to: '/compliance' },
    { label: 'Location', icon: MapPin, to: '#' },
    { label: 'Mark Complete', icon: CheckCircle2, to: '/tasks' },
    { label: 'Upload Photo', icon: Camera, to: '/documents' },
    { label: 'View Docs', icon: FileText, to: '/documents' },
    { label: 'Message', icon: MessageSquare, to: '#' },
  ]

  const today = [
    { title: 'Excavate footing trench - Block A', icon: Hammer, color: 'text-emerald-400' },
    { title: 'Install rebar cages - Zone 2', icon: Wrench, color: 'text-blue-400' },
    { title: 'Pour concrete - Slab S1 (4 PM)', icon: HardHat, color: 'text-amber-400' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Labour Dashboard</h1>
          <Link to="/tasks" className="text-sm text-blue-400 hover:text-blue-300">View All Tasks</Link>
        </header>

        <section className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-lg font-medium">Today’s Work</h2>
              <div className="mt-4 space-y-3">
                {today.map(({ title, icon: Icon, color }, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-900/70 p-3 border border-slate-800">
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-lg font-medium">Quick Actions</h2>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {quickActions.map(({ label, icon: Icon, to }) => (
                  <Link key={label} to={to} className="group flex flex-col items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-3 hover:bg-slate-900">
                    <div className="p-2 rounded-md bg-slate-800/60">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs text-slate-300 text-center">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-lg font-medium">Safety Notices</h2>
              <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Mandatory PPE at Block B due to crane operations</li>
                <li>Heat alert: Hydration breaks every hour</li>
                <li>Report any trip hazards immediately</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
