import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, apiLogin } from '../auth/AuthContext'
import { Mail, LockKeyhole, LogIn } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('pm@example.com')
  const [password, setPassword] = useState('changeme')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { setUser, setToken } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const data = await apiLogin(email, password)
      setUser(data.user)
      setToken(data.access_token)
      navigate(`/dashboard/${data.user.role}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <p className="text-slate-400 mt-1">Access your role-based workspace.</p>

        {error && <div className="mt-4 text-red-400 text-sm">{error}</div>}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2">
              <Mail className="w-4 h-4 text-slate-400" />
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-transparent outline-none flex-1" placeholder="you@company.com" />
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-300">Password</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2">
              <LockKeyhole className="w-4 h-4 text-slate-400" />
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-transparent outline-none flex-1" placeholder="••••••••" />
            </div>
          </div>

          <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2">
            <LogIn className="w-4 h-4" />
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
