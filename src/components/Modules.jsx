import { ClipboardList, CheckCircle2, ShieldCheck, FileSignature, HardHat, Package, FileArchive } from 'lucide-react'

const modules = [
  {
    icon: ClipboardList,
    title: 'Pre‑Construction',
    items: ['E‑tendering', 'Bid preparation', 'Contract management', 'Digital signatures', 'Templates & versioning', 'Audit trails'],
  },
  {
    icon: CheckCircle2,
    title: 'Execution',
    items: ['Task allocation', 'Resource tracking', 'Quality validation', 'Safety workflows', 'Snag management', 'Mobile checklists'],
  },
  {
    icon: FileArchive,
    title: 'Post‑Handover',
    items: ['Digital handover packs', 'Warranties & AMC', 'Sign‑offs', 'Document packs', 'As‑built drawings', 'Customer acceptance'],
  },
]

function Modules() {
  return (
    <section id="modules" className="relative py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">End‑to‑end lifecycle coverage</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">Standardized templates, digital signatures, version control, and detailed audit trails across every module for regulatory compliance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <m.icon className="w-7 h-7 text-blue-400" />
              <h3 className="mt-4 font-semibold text-xl">{m.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                {m.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {it}
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

export default Modules
