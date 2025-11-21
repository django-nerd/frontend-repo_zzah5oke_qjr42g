import { Briefcase, Wrench, ShieldCheck, Users, Building2, ClipboardCheck, FileSearch, GraduationCap } from 'lucide-react'

const roles = [
  { icon: Briefcase, title: 'Contractor', points: ['Productivity', 'Costs', 'Task status'] },
  { icon: Wrench, title: 'Site Engineer', points: ['Checklists', 'Logs', 'Issue reporting'] },
  { icon: Users, title: 'Project Manager', points: ['Milestones', 'Budget', 'Workflow approval'] },
  { icon: Building2, title: 'Client', points: ['Progress', 'Cost', 'Compliance', 'Change orders'] },
  { icon: ShieldCheck, title: 'Owner', points: ['Portfolio metrics', 'Risk', 'Team details'] },
  { icon: GraduationCap, title: 'Labourer', points: ['Learning', 'Tasks', 'Attendance', 'Safety'] },
  { icon: FileSearch, title: 'Government Auditor', points: ['Regulatory docs', 'Audit logs', 'Compliance'] },
]

function Stakeholders() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Stakeholder interfaces & dashboards</h2>
        <p className="text-slate-300 mt-2 max-w-3xl">Role-based access with tailored dashboards and permissions for every participant — from contractors to auditors — ensuring transparency and compliance.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {roles.map((r) => (
            <div key={r.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <r.icon className="w-7 h-7 text-emerald-400" />
              <h3 className="mt-3 font-semibold text-xl">{r.title}</h3>
              <ul className="mt-3 space-y-1.5 text-slate-300 text-sm">
                {r.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stakeholders
