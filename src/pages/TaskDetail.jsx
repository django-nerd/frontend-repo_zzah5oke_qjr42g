import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Check, Camera, AlertCircle } from 'lucide-react'

function TaskDetail() {
  const { id } = useParams()
  const checklist = [
    { id: 'c1', text: 'Formwork aligned and braced', done: true },
    { id: 'c2', text: 'Rebar spacing 150mm c/c', done: true },
    { id: 'c3', text: 'Electrical conduit laid', done: false },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link to="/tasks" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><ArrowLeft className="w-4 h-4"/> Back to Tasks</Link>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">{id}</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">Checklist</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {checklist.map((c) => (
                <li key={c.id} className="flex items-center gap-2">
                  <span className={`w-5 h-5 rounded-full border ${c.done ? 'bg-emerald-500 border-emerald-500' : 'border-white/20'}`} />
                  <span className={c.done ? 'line-through text-slate-400' : ''}>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">Evidence</h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="aspect-square bg-white/5 rounded-lg flex items-center justify-center text-slate-400">
                  <Camera className="w-6 h-6"/>
                </div>
              ))}
            </div>
            <button className="mt-3 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"><Check className="w-4 h-4"/> Mark Complete</button>
            <div className="mt-3 flex items-center gap-2 text-amber-400 text-sm"><AlertCircle className="w-4 h-4"/> Pending: Electrical check</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetail
