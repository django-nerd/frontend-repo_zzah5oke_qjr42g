import { Link } from 'react-router-dom'
import Admin from '../components/Admin'

export default function AdminLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-2">
        <h1 className="text-4xl md:text-5xl font-black">Admin Tools</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Ping the API, seed demo data and inspect schema exports.</p>
      </header>
      <main>
        <Admin />
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <Link to="/" className="text-slate-300 hover:text-white">← Back to home</Link>
        </div>
      </main>
    </div>
  )
}
