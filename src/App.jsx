import Hero from './components/Hero'
import Modules from './components/Modules'
import Stakeholders from './components/Stakeholders'
import Compliance from './components/Compliance'
import Operations from './components/Operations'
import Admin from './components/Admin'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Modules />
      <Stakeholders />
      <Compliance />
      <Operations />
      <Admin />

      <footer className="py-10 text-center text-slate-400 bg-slate-950/80">
        <p>Built for modern construction management — secure, scalable, and compliant.</p>
        <a href="/test" className="inline-block mt-3 text-blue-400 hover:text-blue-300">Backend status</a>
      </footer>
    </div>
  )
}

export default App
