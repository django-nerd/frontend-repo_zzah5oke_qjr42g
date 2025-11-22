import { Link } from 'react-router-dom'
import { Stamp, Plus } from 'lucide-react'

const approvals = [
  { id: 'ap-001', title: 'Concrete mix design approval', step: 'PM Approval' },
  { id: 'ap-002', title: 'Material vendor onboarding', step: 'Legal Review' },
]

function ApprovalsLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Approvals</h1>
            <p className="text-slate-300 mt-2">Multi-step workflows with signatures and immutable logs.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> New Approval
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {approvals.map((a) => (
            <Link key={a.id} to={`/approvals/${a.id}`} className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Stamp className="w-5 h-5 text-pink-400" />
                <div>
                  <p className="font-medium">{a.title}</p>
                  <p className="text-slate-400 text-sm">ID: {a.id}</p>
                </div>
              </div>
              <span className="text-slate-300">{a.step}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApprovalsLanding
