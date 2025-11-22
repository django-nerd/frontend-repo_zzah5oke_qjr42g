import { Link } from 'react-router-dom'
import { FileText, Upload, ShieldCheck } from 'lucide-react'

const docs = [
  { id: 'drg-001', name: 'Structural Drawing - Block A', status: 'Approved' },
  { id: 'ctr-102', name: 'Contract - Civil Works Phase 2', status: 'Pending' },
]

function DocumentsLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Documents</h1>
            <p className="text-slate-300 mt-2">Versioned storage with digital signatures and approvals.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Upload className="w-4 h-4" /> Upload
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {docs.map((d) => (
            <Link key={d.id} to={`/documents/${d.id}`} className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-indigo-400" />
                <div>
                  <p className="font-medium">{d.name}</p>
                  <p className="text-slate-400 text-sm">ID: {d.id}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-emerald-400"><ShieldCheck className="w-4 h-4"/> {d.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DocumentsLanding
