import { Link } from 'react-router-dom'
import { FileSignature, ShieldCheck, History, Lock } from 'lucide-react'

function Compliance() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Documentation & compliance</h2>
            <p className="text-slate-300 mt-3">Secure storage for contracts, drawings, inspections, material tests, daily logs, permits, and handover docs. Digital signatures, versioning, and extensive audit trails accessible to authorized roles.</p>
            <ul className="mt-6 space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><FileSignature className="w-5 h-5 text-blue-400"/> Digital & Aadhaar‑enabled signatures</li>
              <li className="flex items-center gap-2"><History className="w-5 h-5 text-blue-400"/> Version control & immutable trails</li>
              <li className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-400"/> Regulatory templates & workflows</li>
              <li className="flex items-center gap-2"><Lock className="w-5 h-5 text-blue-400"/> Encryption at rest & in transit</li>
            </ul>
            <div className="mt-6">
              <Link to="/compliance" className="text-blue-400 hover:text-blue-300">Open compliance overview →</Link>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-white/5">Quality checklists • Snags • Photos</div>
              <div className="p-4 rounded-lg bg-white/5">Safety incidents • Escalations</div>
              <div className="p-4 rounded-lg bg-white/5">RFIs • Approvals • Workflows</div>
              <div className="p-4 rounded-lg bg-white/5">Handover packs • Warranties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
