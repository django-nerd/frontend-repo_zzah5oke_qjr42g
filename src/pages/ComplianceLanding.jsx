import { Link } from 'react-router-dom'
import { FileSignature, History, ShieldCheck, Lock } from 'lucide-react'

export default function ComplianceLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <h1 className="text-4xl md:text-5xl font-black">Compliance</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Digital signatures, versioning, approvals and immutable audit trails across all document types.</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-xl mb-2">Digital Signatures</h2>
            <p className="text-slate-300 text-sm">Support for Aadhaar eSign, wet signature capture and digital certificates.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-xl mb-2">Versioning & Approvals</h2>
            <p className="text-slate-300 text-sm">Full DocumentVersion lineage, checksums and multi-step approvals.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-xl mb-2">Audit Logs</h2>
            <p className="text-slate-300 text-sm">Immutable audit events with who, what and when for every change.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="font-semibold text-xl mb-2">Security</h2>
            <p className="text-slate-300 text-sm">Encryption at rest and in transit; least-privilege access by role.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/" className="text-slate-300 hover:text-white">← Back to home</Link>
        </div>
      </main>
    </div>
  )
}
