import { Link, useParams } from 'react-router-dom'
import { ClipboardList, CheckCircle2, FileArchive } from 'lucide-react'

const iconMap = { 'pre-construction': ClipboardList, execution: CheckCircle2, 'post-handover': FileArchive }

const details = {
  'pre-construction': {
    title: 'Pre-Construction',
    bullets: ['E‑tendering portal', 'Bid preparation', 'Contract templates', 'Digital signatures', 'Versioning', 'Audit trails']
  },
  'execution': {
    title: 'Execution',
    bullets: ['Task allocation', 'Resource tracking', 'Quality validation', 'Safety workflows', 'Snag management', 'Mobile checklists']
  },
  'post-handover': {
    title: 'Post-Handover',
    bullets: ['Handover packs', 'Warranties & AMC', 'Sign‑offs', 'Document packs', 'As‑built drawings', 'Customer acceptance']
  }
}

export default function ModuleDetail() {
  const { slug } = useParams()
  const Icon = iconMap[slug] || ClipboardList
  const meta = details[slug]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <Link to="/modules" className="text-slate-300 hover:text-white">← Back to Modules</Link>
        <div className="mt-6 flex items-center gap-3">
          <Icon className="w-7 h-7 text-blue-400" />
          <h1 className="text-3xl md:text-4xl font-black">{meta?.title || 'Module'}</h1>
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
