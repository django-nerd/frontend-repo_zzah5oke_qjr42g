import { Link, useParams } from 'react-router-dom'
import { Briefcase, Wrench, Users, Building2, ShieldCheck, GraduationCap, FileSearch } from 'lucide-react'

const iconMap = { contractor: Briefcase, 'site-engineer': Wrench, 'project-manager': Users, client: Building2, owner: ShieldCheck, labourer: GraduationCap, auditor: FileSearch }

const details = {
  contractor: { title: 'Contractor', bullets: ['Cost control', 'Productivity tracking', 'Document workflows'] },
  'site-engineer': { title: 'Site Engineer', bullets: ['Checklists', 'Logs', 'Issue reporting'] },
  'project-manager': { title: 'Project Manager', bullets: ['Milestones', 'Budget', 'Approvals'] },
  client: { title: 'Client', bullets: ['Progress visibility', 'Cost transparency', 'Compliance'] },
  owner: { title: 'Owner', bullets: ['Portfolio overview', 'Risk', 'Team performance'] },
  labourer: { title: 'Labourer', bullets: ['Tasks', 'Attendance', 'Safety'] },
  auditor: { title: 'Government Auditor', bullets: ['Regulatory docs', 'Audit logs', 'Evidence packs'] },
}

export default function StakeholderDetail() {
  const { slug } = useParams()
  const Icon = iconMap[slug] || Users
  const meta = details[slug]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <Link to="/stakeholders" className="text-slate-300 hover:text-white">← Back to Stakeholders</Link>
        <div className="mt-6 flex items-center gap-3">
          <Icon className="w-7 h-7 text-emerald-400" />
          <h1 className="text-3xl md:text-4xl font-black">{meta?.title || 'Stakeholder'}</h1>
        </div>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-slate-300">
          {(meta?.bullets || []).map(b => (
            <li key={b} className="bg-white/5 border border-white/10 rounded-lg p-4">{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
