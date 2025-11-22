import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, apiRegister } from '../auth/AuthContext'
import { Mail, LockKeyhole, UserPlus, UserCircle2, Building2 } from 'lucide-react'

const roles = [
  { value: 'labour', label: 'Labour' },
  { value: 'site_engineer', label: 'Site Engineer' },
  { value: 'project_manager', label: 'Project Manager' },
  { value: 'contractor', label: 'Contractor' },
  { value: 'client', label: 'Client' },
  { value: 'owner', label: 'Owner' },
  { value: 'auditor', label: 'Auditor' },
  { value: 'admin', label: 'Admin' },
  { value: 'client_executive', label: 'Client Executive' },
]

export default function Register() {
  const [full_name, setFullName] = useState('Pat Morgan')
  const [email, setEmail] = useState('pm@example.com')
  const [password, setPassword] = useState('changeme')
  const [role, setRole] = useState('project_manager')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { setUser, setToken } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const data = await apiRegister({ full_name, email, password, role })
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
        <h1 className="text-xl font-semibold">Create your account</h1>
        <p className="text-slate-400 mt-1">Pick your role to get a tailored workspace.</p>

        {error && <div className="mt-4 text-red-400 text-sm">{error}</div>}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-300">Full name</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2">
              <UserCircle2 className="w-4 h-4 text-slate-400" />
              <input value={full_name} onChange={(e)=>setFullName(e.target.value)} className="bg-transparent outline-none flex-1" placeholder="Your name" />
            </div>
          </div>

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

          <div>
            <label className="text-sm text-slate-300">Role</label>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <select value={role} onChange={(e)=>setRole(e.target.value)} className="col-span-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2 outline-none">
                {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
            </div>
          </div>

          <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2">
            <UserPlus className="w-4 h-4" />
            {loading ? 'Creating...' : 'Create account'}
          </button>

          <p className="text-center text-slate-400 text-sm">Already have an account? <a href="/login" className="text-blue-400 hover:text-blue-300">Sign in</a></p>
        </form>
      </div>
    </div>
  )
}
