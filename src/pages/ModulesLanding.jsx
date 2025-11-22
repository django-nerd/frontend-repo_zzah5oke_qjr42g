import { Link } from 'react-router-dom'
import { ClipboardList, CheckCircle2, FileArchive, ArrowRight } from 'lucide-react'

const modules = [
  { icon: ClipboardList, title: 'Pre-Construction', slug: 'pre-construction', blurb: 'E‑tendering, bids, contracts, digital signatures and audit-ready versioning.' },
  { icon: CheckCircle2, title: 'Execution', slug: 'execution', blurb: 'Tasks, resources, quality, safety, RFIs and snag workflows built-in.' },
  { icon: FileArchive, title: 'Post-Handover', slug: 'post-handover', blurb: 'Digital handover packs, warranties, as‑built docs and customer sign‑offs.' },
]

export default function ModulesLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <h1 className="text-4xl md:text-5xl font-black">Modules</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">End‑to‑end lifecycle coverage with strong compliance, audit trails and digital approvals.</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {modules.map(m => (
            <Link to={`/modules/${m.slug}`} key={m.slug} className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition">
              <m.icon className="w-7 h-7 text-blue-400" />
              <h2 className="mt-4 font-semibold text-xl">{m.title}</h2>
              <p className="mt-2 text-slate-300 text-sm">{m.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300">
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
