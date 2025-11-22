import { Link } from 'react-router-dom'
import { Briefcase, Wrench, Users, Building2, ShieldCheck, GraduationCap, FileSearch } from 'lucide-react'

const roles = [
  { icon: Briefcase, title: 'Contractor', slug: 'contractor', points: ['Productivity', 'Costs', 'Task status'] },
  { icon: Wrench, title: 'Site Engineer', slug: 'site-engineer', points: ['Checklists', 'Logs', 'Issue reporting'] },
  { icon: Users, title: 'Project Manager', slug: 'project-manager', points: ['Milestones', 'Budget', 'Workflow approval'] },
  { icon: Building2, title: 'Client', slug: 'client', points: ['Progress', 'Cost', 'Compliance', 'Change orders'] },
  { icon: ShieldCheck, title: 'Owner', slug: 'owner', points: ['Portfolio metrics', 'Risk', 'Team details'] },
  { icon: GraduationCap, title: 'Labourer', slug: 'labourer', points: ['Learning', 'Tasks', 'Attendance', 'Safety'] },
  { icon: FileSearch, title: 'Government Auditor', slug: 'auditor', points: ['Regulatory docs', 'Audit logs', 'Compliance'] },
]

function Stakeholders() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Stakeholder interfaces & dashboards</h2>
        <p className="text-slate-300 mt-2 max-w-3xl">Role-based access with tailored dashboards and permissions for every participant — from contractors to auditors — ensuring transparency and compliance.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {roles.map((r) => (
            <Link to={`/stakeholders/${r.slug}`} key={r.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition block">
              <r.icon className="w-7 h-7 text-emerald-400" />
              <h3 className="mt-3 font-semibold text-xl">{r.title}</h3>
              <ul className="mt-3 space-y-1.5 text-slate-300 text-sm">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {p}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-block text-emerald-400">View details →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/stakeholders" className="text-emerald-400 hover:text-emerald-300">Explore all stakeholders →</Link>
        </div>
      </div>
    </section>
  )
}

export default Stakeholders
