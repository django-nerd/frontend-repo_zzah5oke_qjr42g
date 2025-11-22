import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('auth_user')
    return raw ? JSON.parse(raw) : null
  })
  const [token, setToken] = useState(() => localStorage.getItem('auth_token'))
  const navigate = useNavigate()

  useEffect(() => {
    if (user) localStorage.setItem('auth_user', JSON.stringify(user))
    else localStorage.removeItem('auth_user')
  }, [user])

  useEffect(() => {
    if (token) localStorage.setItem('auth_token', token)
    else localStorage.removeItem('auth_token')
  }, [token])

  const logout = () => {
    setUser(null)
    setToken(null)
    navigate('/')
  }

  const value = useMemo(() => ({ user, token, setUser, setToken, logout }), [user, token])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function RequireAuth({ children, allowRoles }) {
  const { user } = useAuth()
  if (!user) {
    return children.type.name === 'Login' ? children : <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6"><div className="max-w-md w-full text-center space-y-4"><h2 className="text-xl font-semibold">Sign in required</h2><p className="text-slate-400">Please sign in to continue.</p><a className="inline-block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500" href="/login">Go to Sign in</a></div></div>
  }
  if (allowRoles && !allowRoles.includes(user.role)) {
    return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6"><div className="max-w-md w-full text-center space-y-4"><h2 className="text-xl font-semibold">Access restricted</h2><p className="text-slate-400">Your role does not have access to this view.</p><a className="inline-block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500" href={`/dashboard/${user.role}`}>Go to my dashboard</a></div></div>
  }
  return children
}

export async function apiLogin(email, password) {
  const body = new URLSearchParams()
  body.append('username', email)
  body.append('password', password)
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) throw new Error((await res.json()).detail || 'Login failed')
  return res.json()
}

export async function apiRegister({ full_name, email, password, role }) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ full_name, email, password, role }),
  })
  if (!res.ok) throw new Error((await res.json()).detail || 'Registration failed')
  return res.json()
}

export async function apiFetch(path, { token, method = 'GET', body } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error((await res.json()).detail || 'Request failed')
  return res.json()
}
