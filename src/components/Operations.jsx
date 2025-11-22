import { Link } from 'react-router-dom'
import { FolderKanban, ClipboardCheck, FileText, Stamp, LayoutGrid } from 'lucide-react'

const ops = [
  { icon: LayoutGrid, title: 'Projects', desc: 'Create projects, assign teams, track milestones', to: '/projects', color: 'text-sky-400' },
  { icon: FileText, title: 'Documents', desc: 'Drawings, contracts, SOPs with versioning', to: '/documents', color: 'text-indigo-400' },
  { icon: FolderKanban, title: 'RFIs', desc: 'Submit queries, attach photos, route approvals', to: '/rfis', color: 'text-amber-400' },
  { icon: ClipboardCheck, title: 'Tasks', desc: 'Daily tasks, checklists, snags, evidence', to: '/tasks', color: 'text-emerald-400' },
  { icon: Stamp, title: 'Approvals', desc: 'Multi-step workflows with audit trails', to: '/approvals', color: 'text-pink-400' },
]

function Operations() {
  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Operational hubs</h2>
          <p className="text-slate-300 mt-2 max-w-3xl">Jump straight into key workflows. Each hub has its own lists, filters, and detail views ready to extend.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ops.map((o) => (
            <Link key={o.title} to={o.to} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-5 transition block">
              <o.icon className={`w-7 h-7 ${o.color}`} />
              <h3 className="mt-3 font-semibold">{o.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{o.desc}</p>
              <span className="inline-block mt-3 text-blue-400">Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Operations
