import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { User, LogOut, LayoutDashboard } from 'lucide-react'

export default function Topbar() {
  const { user, logout } = useAuth()
  return (
    <div className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold">StronX</Link>
        <div className="flex items-center gap-4">
          <Link to="/dashboards" className="text-slate-300 hover:text-white inline-flex items-center gap-2"><LayoutDashboard className="w-4 h-4"/>Dashboards</Link>
          {user ? (
            <>
              <Link to={`/dashboard/${user.role}`} className="text-slate-300 hover:text-white inline-flex items-center gap-2"><User className="w-4 h-4"/>My space</Link>
              <button onClick={logout} className="inline-flex items-center gap-2 rounded-md bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-sm"><LogOut className="w-4 h-4"/>Sign out</button>
            </>
          ) : (
            <Link to="/login" className="rounded-md bg-blue-600 hover:bg-blue-500 px-3 py-1.5 text-sm">Sign in</Link>
          )}
        </div>
      </div>
    </div>
  )
}
