import Spline from '@splinetool/react-spline'
import { ArrowRight, ShieldCheck, Settings } from 'lucide-react'

function Hero() {
  return (
    <section className="relative w-full h-[72vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* overlay gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs mb-4 backdrop-blur">
            <ShieldCheck className="w-4 h-4" />
            Enterprise-grade compliance & audit ready
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm">
            Design and develop a cloud-based single-point-of-contact app for construction
          </h1>
          <p className="mt-4 text-slate-200/90 max-w-2xl">
            From e‑tendering and bids to execution and digital handover — unified modules,
            secure workflows, and role-based dashboards for every stakeholder.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/modules" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow transition-colors">
              Explore Modules
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/request-demo" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg border border-white/20 backdrop-blur transition-colors">
              <Settings className="w-4 h-4" />
              Configure Workflows
            </a>
            <a href="/pricing" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-3 rounded-lg shadow transition-colors">
              Buy
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
