import { Link } from 'react-router-dom'
import { Briefcase, Wrench, Users, Building2, ShieldCheck, GraduationCap, FileSearch, ArrowRight } from 'lucide-react'

const stakeholders = [
  { icon: Briefcase, title: 'Contractor', slug: 'contractor', blurb: 'Track productivity, control costs, manage tasks and documentation.' },
  { icon: Wrench, title: 'Site Engineer', slug: 'site-engineer', blurb: 'Mobile-first checklists, logs, RFIs and issue reporting.' },
  { icon: Users, title: 'Project Manager', slug: 'project-manager', blurb: 'Milestones, budgets, risks and workflow approvals.' },
  { icon: Building2, title: 'Client', slug: 'client', blurb: 'Transparent progress, costs and compliance oversight.' },
  { icon: ShieldCheck, title: 'Owner', slug: 'owner', blurb: 'Portfolio view across projects, risk and performance.' },
  { icon: GraduationCap, title: 'Labourer', slug: 'labourer', blurb: 'Training, tasks, attendance and safety modules.' },
  { icon: FileSearch, title: 'Government Auditor', slug: 'auditor', blurb: 'Regulatory documentation, audit logs and evidence packs.' },
]

export default function StakeholdersLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <h1 className="text-4xl md:text-5xl font-black">Stakeholders</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Role-based interfaces and permissions with dedicated dashboards for each participant.</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {stakeholders.map(s => (
            <Link to={`/stakeholders/${s.slug}`} key={s.slug} className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
              <s.icon className="w-7 h-7 text-emerald-400" />
              <h2 className="mt-4 font-semibold text-xl">{s.title}</h2>
              <p className="mt-2 text-slate-300 text-sm">{s.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/" className="text-slate-300 hover:text-white">← Back to home</Link>
        </div>
      </main>
    </div>
  )
}
