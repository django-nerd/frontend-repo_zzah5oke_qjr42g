import { Link } from 'react-router-dom'

export default function PricingLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <h1 className="text-4xl md:text-5xl font-black">Pricing</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Simple, transparent tiers for teams of any size. Start with essentials and scale up as you go.</p>
      </header>
      <main className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold">Starter</h2>
          <p className="text-slate-300 mt-2">Core modules, up to 2 projects, basic support.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold">Growth</h2>
          <p className="text-slate-300 mt-2">Unlimited projects, role-based access, priority support.</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="text-slate-300 mt-2">SLA, SSO, on-prem options, dedicated success manager.</p>
        </div>
        <div className="md:col-span-3 mt-6">
          <Link to="/" className="text-slate-300 hover:text-white">← Back to home</Link>
        </div>
      </main>
    </div>
  )
}
