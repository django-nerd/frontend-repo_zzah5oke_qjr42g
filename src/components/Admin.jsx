import { useState } from 'react'
import { Database, RefreshCcw, Play, CheckCircle2 } from 'lucide-react'

function Admin() {
  const [backendUrl] = useState(import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000')
  const [hello, setHello] = useState(null)
  const [seed, setSeed] = useState(null)
  const [schemaCount, setSchemaCount] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const runHello = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${backendUrl}/api/hello`)
      const data = await res.json()
      setHello(data)
    } catch (e) { setError(e.message) } finally { setLoading(false) }
  }

  const runSeed = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${backendUrl}/api/seed`, { method: 'POST', headers: { 'Content-Type': 'application/json' } })
      const data = await res.json()
      setSeed(data)
    } catch (e) { setError(e.message) } finally { setLoading(false) }
  }

  const loadSchema = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${backendUrl}/schema`)
      const json = await res.json()
      setSchemaCount(Object.keys(json || {}).length)
    } catch (e) { setError(e.message) } finally { setLoading(false) }
  }

  return (
    <section className="py-14 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3">
          <Database className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl md:text-3xl font-bold">Test & Seed</h2>
        </div>
        <p className="text-slate-300 mt-2">Run quick checks, seed demo data, and verify schema export. Backend URL: <span className="font-mono text-slate-200">{backendUrl}</span></p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button onClick={runHello} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-lg">
            <Play className="w-4 h-4" /> Ping API
          </button>
          <button onClick={runSeed} className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-3 rounded-lg">
            <CheckCircle2 className="w-4 h-4" /> Seed Demo Data
          </button>
          <button onClick={loadSchema} className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-3 rounded-lg">
            <RefreshCcw className="w-4 h-4" /> Load Schemas
          </button>
        </div>

        {loading && <p className="mt-4 text-slate-300">Working...</p>}
        {error && <p className="mt-4 text-red-400">Error: {error}</p>}

        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Hello</h3>
            <pre className="whitespace-pre-wrap break-all text-slate-300">{hello ? JSON.stringify(hello, null, 2) : '—'}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Seed Result</h3>
            <pre className="whitespace-pre-wrap break-all text-slate-300">{seed ? JSON.stringify(seed, null, 2) : '—'}</pre>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Schema Count</h3>
            <p className="text-slate-300">{schemaCount != null ? `${schemaCount} models` : '—'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admin
