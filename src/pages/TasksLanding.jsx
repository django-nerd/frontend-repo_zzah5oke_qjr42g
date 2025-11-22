import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckSquare, Plus, Image } from 'lucide-react'
import CreateForms from '../components/CreateForms'
import { RequireAuth } from '../auth/AuthContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function TasksLanding() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`${API_BASE}/api/tasks`)
        const data = await res.json()
        if (!cancelled) setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!cancelled) setError('Failed to load tasks')
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
            <h1 className="text-3xl md:text-4xl font-bold">Tasks</h1>
            <p className="text-slate-300 mt-2">Assign, track, and validate work with photos and checklists.</p>
          </div>
          <a href="#create" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> New Task
          </a>
        </div>

        {error && <p className="mt-4 text-rose-400 text-sm">{error}</p>}
        {loading ? (
          <p className="mt-6 text-slate-400">Loading...</p>
        ) : (
          <div className="mt-8 space-y-3">
            {items.map((t) => (
              <Link key={t.id || t._id} to={`/tasks/${t.id || t._id}`} className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="font-medium">{t.title}</p>
                    <p className="text-slate-400 text-sm">Project: {t.project_code}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-sky-400"><Image className="w-4 h-4"/> —</span>
              </Link>
            ))}
            {items.length === 0 && (
              <div className="text-slate-400">No tasks yet. Create one below.</div>
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

export default TasksLanding
