import { Link } from 'react-router-dom'
import { MessageSquare, Plus } from 'lucide-react'

const rfis = [
  { id: 'rfi-001', title: 'Clarify beam reinforcement details', status: 'Open' },
  { id: 'rfi-002', title: 'Material spec deviation request', status: 'Answered' },
]

function RFIsLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">RFIs</h1>
            <p className="text-slate-300 mt-2">Submit queries, attach media, and track responses.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> New RFI
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {rfis.map((r) => (
            <Link key={r.id} to={`/rfis/${r.id}`} className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="font-medium">{r.title}</p>
                  <p className="text-slate-400 text-sm">ID: {r.id}</p>
                </div>
              </div>
              <span className="text-slate-300">{r.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RFIsLanding
