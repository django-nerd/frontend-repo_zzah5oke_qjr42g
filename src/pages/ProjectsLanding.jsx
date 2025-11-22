import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Calendar, Users, MapPinned } from 'lucide-react'
import CreateForms from '../components/CreateForms'
import { RequireAuth } from '../auth/AuthContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProjectsLanding() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`${API_BASE}/api/projects`)
        const data = await res.json()
        if (!cancelled) setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!cancelled) setError('Failed to load projects')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
            <p className="text-slate-300 mt-2">Create, assign, and monitor delivery across your portfolio.</p>
          </div>
          <a href="#create" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> New Project
          </a>
        </div>

        {error && <p className="mt-4 text-rose-400 text-sm">{error}</p>}
        {loading ? (
          <p className="mt-6 text-slate-400">Loading...</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <Link to={`/projects/${p.id || p._id || p.code}`} key={p.id || p._id || p.code} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-6 block">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-1"><MapPinned className="w-4 h-4 text-emerald-400"/> {p.status || 'Execution'}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400"/> —</span>
                  <span className="inline-flex items-center gap-1"><Users className="w-4 h-4 text-sky-400"/> —</span>
                </div>
                <span className="mt-4 inline-block text-blue-400">Open →</span>
              </Link>
            ))}
            {items.length === 0 && (
              <div className="text-slate-400">No projects yet. Create one below.</div>
            )}
          </div>
        )}

        <div id="create" className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Quick Create</h2>
          <RequireAuth>
            <CreateForms onCreated={() => window.location.reload()} />
          </RequireAuth>
        </div>
      </div>
    </div>
  )
}

export default ProjectsLanding
