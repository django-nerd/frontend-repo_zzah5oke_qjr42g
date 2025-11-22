import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BadgeCheck, CheckCircle2 } from 'lucide-react'

function ApprovalDetail() {
  const { id } = useParams()
  const steps = [
    { name: 'Engineer Review', by: 'Ravi', at: '2024-12-20' },
    { name: 'PM Approval', by: 'Alice', at: '2025-01-10' },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link to="/approvals" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><ArrowLeft className="w-4 h-4"/> Back to Approvals</Link>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">{id}</h1>

        <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-5">
          <h3 className="font-semibold">Workflow</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {steps.map((s) => (
              <li key={s.name} className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400"/> {s.name}</span>
                <span className="inline-flex items-center gap-2 text-emerald-400"><BadgeCheck className="w-4 h-4"/> {s.by} • {s.at}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ApprovalDetail
