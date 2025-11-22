import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Upload } from 'lucide-react'
import CreateForms from '../components/CreateForms'
import { RequireAuth } from '../auth/AuthContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function DocumentsLanding() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`${API_BASE}/api/documents`)
        const data = await res.json()
        if (!cancelled) setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        if (!cancelled) setError('Failed to load documents')
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
            <h1 className="text-3xl md:text-4xl font-bold">Documents</h1>
            <p className="text-slate-300 mt-2">Versioned storage with digital signatures and approvals.</p>
          </div>
          <a href="#create" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Upload className="w-4 h-4" /> Upload
          </a>
        </div>

        {error && <p className="mt-4 text-rose-400 text-sm">{error}</p>}
        {loading ? (
          <p className="mt-6 text-slate-400">Loading...</p>
        ) : (
          <div className="mt-8 space-y-3">
            {items.map((d) => (
              <Link key={d.id || d._id} to={`/documents/${d.id || d._id}`} className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="font-medium">{d.title}</p>
                    <p className="text-slate-400 text-sm">Project: {d.project_code}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 text-slate-300">{d.doc_type}</span>
              </Link>
            ))}
            {items.length === 0 && (
              <div className="text-slate-400">No documents yet. Create one below.</div>
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

export default DocumentsLanding
