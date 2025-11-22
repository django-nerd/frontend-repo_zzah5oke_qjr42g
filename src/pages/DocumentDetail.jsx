import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, History, Signature } from 'lucide-react'

function DocumentDetail() {
  const { id } = useParams()
  const versions = [
    { v: 'v3', date: '2025-01-10', by: 'PM (Alice)', status: 'Approved' },
    { v: 'v2', date: '2024-12-20', by: 'Engineer (Ravi)', status: 'Reviewed' },
    { v: 'v1', date: '2024-12-05', by: 'Contractor (Li)', status: 'Draft' },
  ]
  const approvals = [
    { step: 'Engineer Review', by: 'Ravi', at: '2024-12-20' },
    { step: 'PM Approval', by: 'Alice', at: '2025-01-10' },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/documents" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><ArrowLeft className="w-4 h-4"/> Back to Documents</Link>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">Document: {id}</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">Version history</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {versions.map((v) => (
                <li key={v.v} className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2"><History className="w-4 h-4 text-indigo-400"/> {v.v} • {v.by}</span>
                  <span className="inline-flex items-center gap-2 text-slate-400"><Clock className="w-4 h-4"/> {v.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">Approvals & signatures</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {approvals.map((a) => (
                <li key={a.step} className="flex items-center justify-between">
                  <span>{a.step}</span>
                  <span className="inline-flex items-center gap-2 text-emerald-400"><Signature className="w-4 h-4"/> {a.by} • {a.at}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentDetail
