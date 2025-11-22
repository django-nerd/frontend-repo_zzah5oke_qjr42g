import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { HardHat, ClipboardList, Wrench, Hammer, CalendarClock, AlertTriangle, Shield, MapPin, CheckCircle2, FileText, Camera, MessageSquare, LogIn, LogOut } from 'lucide-react'
import { useAuth } from '../auth/AuthContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function DashboardLabour() {
  const { token, user } = useAuth()
  const [att, setAtt] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState('')
  const [position, setPosition] = useState(null)
  const [geoError, setGeoError] = useState('')
  const [askingGeo, setAskingGeo] = useState(false)

  async function fetchToday() {
    if (!token) return
    try {
      const res = await fetch(`${API_BASE}/api/attendance/today`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setAtt(data)
    } catch (e) {
      // ignore
    }
  }

  async function fetchProjects() {
    try {
      const res = await fetch(`${API_BASE}/api/projects`)
      const data = await res.json()
      setProjects(Array.isArray(data) ? data : [])
    } catch (e) {
      // ignore
    }
  }

  useEffect(() => {
    fetchToday()
    fetchProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  function requestLocation() {
    if (!('geolocation' in navigator)) {
      setGeoError('Geolocation not supported on this device')
      return
    }
    setAskingGeo(true)
    setGeoError('')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setAskingGeo(false)
        const { latitude, longitude, accuracy } = pos.coords
        setPosition({ lat: latitude, lon: longitude, accuracy })
      },
      (err) => {
        setAskingGeo(false)
        setGeoError(err.message || 'Location access denied')
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  const mapUrl = useMemo(() => {
    if (!position) return null
    const { lat, lon } = position
    const delta = 0.01
    const bbox = `${lon - delta}%2C${lat - delta}%2C${lon + delta}%2C${lat + delta}`
    return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`
  }, [position])

  async function clockIn() {
    setLoading(true)
    setError('')
    try {
      if (!selectedProject) throw new Error('Select a project to clock in')
      const body = { project_code: selectedProject, geo_in: position ? { ...position, source: 'navigator' } : null }
      const res = await fetch(`${API_BASE}/api/attendance/clock-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Clock-in failed')
      setAtt(data.attendance)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function clockOut() {
    setLoading(true)
    setError('')
    try {
      const body = { project_code: selectedProject || undefined, geo_out: position ? { ...position, source: 'navigator' } : null }
      const res = await fetch(`${API_BASE}/api/attendance/clock-out`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Clock-out failed')
      setAtt(data.attendance)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const quickActions = [
    { label: 'My Tasks', icon: ClipboardList, to: '/tasks' },
    { label: 'Clock In/Out', icon: CalendarClock, to: '#' },
    { label: 'Report Issue', icon: AlertTriangle, to: '/rfis' },
    { label: 'Safety Brief', icon: Shield, to: '/compliance' },
    { label: 'Location', icon: MapPin, to: '#' },
    { label: 'Mark Complete', icon: CheckCircle2, to: '/tasks' },
    { label: 'Upload Photo', icon: Camera, to: '/documents' },
    { label: 'View Docs', icon: FileText, to: '/documents' },
    { label: 'Message', icon: MessageSquare, to: '#' },
  ]

  const today = [
    { title: 'Excavate footing trench - Block A', icon: Hammer, color: 'text-emerald-400' },
    { title: 'Install rebar cages - Zone 2', icon: Wrench, color: 'text-blue-400' },
    { title: 'Pour concrete - Slab S1 (4 PM)', icon: HardHat, color: 'text-amber-400' },
  ]

  const clockedIn = att && att.check_in && !att.check_out

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Labour Dashboard</h1>
          <Link to="/tasks" className="text-sm text-blue-400 hover:text-blue-300">View All Tasks</Link>
        </header>

        <section className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Today’s Work</h2>
                {user && (
                  <div className="flex items-center gap-3">
                    {!clockedIn ? (
                      <button onClick={clockIn} disabled={loading || !token} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-semibold px-3 py-1.5 rounded-lg text-sm">
                        <LogIn className="w-4 h-4" /> {loading ? '...' : 'Clock In'}
                      </button>
                    ) : (
                      <button onClick={clockOut} disabled={loading || !token} className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 disabled:opacity-60 text-white font-semibold px-3 py-1.5 rounded-lg text-sm">
                        <LogOut className="w-4 h-4" /> {loading ? '...' : 'Clock Out'}
                      </button>
                    )}
                  </div>
                )}
              </div>

              {error && <p className="mt-3 text-sm text-rose-400">{error}</p>}

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {today.map(({ title, icon: Icon, color }, idx) => (
                    <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-900/70 p-3 border border-slate-800">
                      <Icon className={`w-5 h-5 ${color}`} />
                      <span>{title}</span>
                    </div>
                  ))}

                  <div className="rounded-lg bg-slate-900/70 border border-slate-800 p-4">
                    <h3 className="font-medium mb-2">Today’s Attendance</h3>
                    {!token ? (
                      <p className="text-slate-400 text-sm">Sign in to clock your attendance.</p>
                    ) : !att || att.status === 'absent' ? (
                      <p className="text-slate-400 text-sm">No attendance yet for today.</p>
                    ) : (
                      <div className="text-sm text-slate-300 space-y-1">
                        <p>Check in: <span className="text-white">{att.check_in ? new Date(att.check_in).toLocaleTimeString() : '-'}</span></p>
                        <p>Check out: <span className="text-white">{att.check_out ? new Date(att.check_out).toLocaleTimeString() : '-'}</span></p>
                        <p>Project: <span className="text-white">{att.project_code || '-'}</span></p>
                        {att.geo_in && (
                          <p className="text-slate-400">In @ {att.geo_in.lat?.toFixed?.(5)}, {att.geo_in.lon?.toFixed?.(5)} (±{att.geo_in.accuracy || '—'}m)</p>
                        )}
                        {att.geo_out && (
                          <p className="text-slate-400">Out @ {att.geo_out.lat?.toFixed?.(5)}, {att.geo_out.lon?.toFixed?.(5)} (±{att.geo_out.accuracy || '—'}m)</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-900/70 border border-slate-800 p-4">
                    <h3 className="font-medium">Clock-In Options</h3>
                    <div className="mt-3 space-y-3">
                      <label className="block text-sm">
                        <span className="text-slate-300">Select Project</span>
                        <select
                          className="mt-1 w-full bg-slate-900/60 border border-slate-800 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                          value={selectedProject}
                          onChange={(e) => setSelectedProject(e.target.value)}
                          disabled={clockedIn}
                        >
                          <option value="">-- choose project --</option>
                          {projects.map((p) => (
                            <option key={p.id || p._id || p.code} value={p.code}>{p.title} ({p.code})</option>
                          ))}
                        </select>
                      </label>

                      <div className="flex items-center gap-2">
                        <button type="button" onClick={requestLocation} className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-sm">
                          <MapPin className="w-4 h-4"/> {askingGeo ? 'Locating...' : 'Use My Location'}
                        </button>
                        {position && <span className="text-xs text-slate-400">{position.lat.toFixed(5)}, {position.lon.toFixed(5)} (±{Math.round(position.accuracy)}m)</span>}
                      </div>
                      {geoError && <p className="text-xs text-rose-400">{geoError}</p>}

                      {position && (
                        <div className="mt-2 overflow-hidden rounded-md border border-slate-800">
                          <iframe title="map" className="w-full h-48" src={mapUrl} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-lg font-medium">Quick Actions</h2>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {quickActions.map(({ label, icon: Icon, to }) => (
                  <Link key={label} to={to} className="group flex flex-col items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 p-3 hover:bg-slate-900">
                    <div className="p-2 rounded-md bg-slate-800/60">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs text-slate-300 text-center">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-lg font-medium">Safety Notices</h2>
              <ul className="mt-3 list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Mandatory PPE at Block B due to crane operations</li>
                <li>Heat alert: Hydration breaks every hour</li>
                <li>Report any trip hazards immediately</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
