import { Link } from 'react-router-dom'
import { Plus, Calendar, Users, MapPinned } from 'lucide-react'

const demoProjects = [
  { id: 'metro-blue-line', name: 'Metro Blue Line - Phase 2', status: 'Execution', due: '2026-03-30', team: 18 },
  { id: 'hospital-east', name: 'City Hospital - East Wing', status: 'Pre-Construction', due: '2025-11-10', team: 12 },
]

function ProjectsLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <p className="text-slate-300 mt-2">Create, assign, and monitor delivery across your portfolio.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p) => (
            <Link to={`/projects/${p.id}`} key={p.id} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-6 block">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="mt-3 flex items-center gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-1"><MapPinned className="w-4 h-4 text-emerald-400"/> {p.status}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400"/> {p.due}</span>
                <span className="inline-flex items-center gap-1"><Users className="w-4 h-4 text-sky-400"/> {p.team}</span>
              </div>
              <span className="mt-4 inline-block text-blue-400">Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsLanding
