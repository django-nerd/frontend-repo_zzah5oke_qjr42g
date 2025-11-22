import { Link } from 'react-router-dom'
import { HardHat, UserCog, ClipboardCheck, Building, Users, Gavel, ShieldAlert, ArrowRight } from 'lucide-react'

const roles = [
  { slug: 'labour', name: 'Labour', icon: HardHat, desc: 'Assigned work, shifts, safety, and updates' },
  { slug: 'site_engineer', name: 'Site Engineer', icon: UserCog, desc: 'On-site execution, QA/QC, RFIs' },
  { slug: 'project_manager', name: 'Project Manager', icon: ClipboardCheck, desc: 'Schedules, risks, reporting' },
  { slug: 'contractor', name: 'Contractor', icon: Building, desc: 'Crews, materials, work orders' },
  { slug: 'client', name: 'Client', icon: Users, desc: 'Progress, approvals, communication' },
  { slug: 'owner', name: 'Owner', icon: Users, desc: 'Portfolio, budgets, health' },
  { slug: 'auditor', name: 'Auditor', icon: Gavel, desc: 'Compliance and audits' },
  { slug: 'admin', name: 'Admin', icon: ShieldAlert, desc: 'Access and settings' },
]

export default function Stakeholders() {
  return (
    <section className="relative py-16 bg-slate-950" id="stakeholders">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Stakeholder Dashboards</h2>
            <p className="text-slate-300 mt-3 max-w-2xl">Each role gets a focused dashboard. Try the labour view for a highly visual, icon-first workspace.</p>
          </div>
          <Link to="/dashboards" className="hidden sm:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
            Browse all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8">
          {roles.slice(0,4).map(({ slug, name, icon: Icon, desc }) => (
            <Link key={slug} to={`/dashboard/${slug}`} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:bg-slate-900/70">
              <Icon className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-3 font-semibold">{name}</h3>
              <p className="text-sm text-slate-400 mt-1">{desc}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300">
                Open <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-4">
          <Link to="/dashboards" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
            Browse all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
