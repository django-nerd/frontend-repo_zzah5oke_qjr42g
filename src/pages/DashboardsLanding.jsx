import { Link } from 'react-router-dom'
import { HardHat, UserCog, Users, ClipboardCheck, Building, ShieldAlert, Briefcase, Gavel } from 'lucide-react'

const roles = [
  { slug: 'labour', name: 'Labour', icon: HardHat, desc: 'Assigned work, shifts, safety, and task updates' },
  { slug: 'site_engineer', name: 'Site Engineer', icon: UserCog, desc: 'On-site execution, QA/QC, RFIs, and inspections' },
  { slug: 'project_manager', name: 'Project Manager', icon: ClipboardCheck, desc: 'Schedules, approvals, risks, and reporting' },
  { slug: 'contractor', name: 'Contractor', icon: Briefcase, desc: 'Crew allocation, materials, and work orders' },
  { slug: 'client', name: 'Client', icon: Building, desc: 'Milestones, progress, approvals, and communication' },
  { slug: 'owner', name: 'Owner', icon: Users, desc: 'Portfolio view, budgets, and compliance health' },
  { slug: 'auditor', name: 'Auditor', icon: Gavel, desc: 'Compliance checks, audits, and evidence trails' },
  { slug: 'admin', name: 'Admin', icon: ShieldAlert, desc: 'Access control, configurations, and security' },
]

export default function DashboardsLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold">Role Dashboards</h1>
        <p className="text-slate-400 mt-2">Choose a role to view a tailored workspace.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {roles.map(({ slug, name, icon: Icon, desc }) => (
            <Link key={slug} to={`/dashboard/${slug}`} className="group rounded-xl border border-slate-800 p-6 bg-slate-900/40 hover:bg-slate-900/70 transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium group-hover:text-white">{name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
