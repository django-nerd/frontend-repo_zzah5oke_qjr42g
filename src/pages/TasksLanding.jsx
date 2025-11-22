import { Link } from 'react-router-dom'
import { CheckSquare, Plus, Image } from 'lucide-react'

const tasks = [
  { id: 'task-001', title: 'Pour slab - Block A', status: 'In Progress', photos: 6 },
  { id: 'task-002', title: 'Elevator shaft shuttering', status: 'Open', photos: 2 },
]

function TasksLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Tasks</h1>
            <p className="text-slate-300 mt-2">Assign, track, and validate work with photos and checklists.</p>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg">
            <Plus className="w-4 h-4" /> New Task
          </button>
        </div>

        <div className="mt-8 space-y-3">
          {tasks.map((t) => (
            <Link key={t.id} to={`/tasks/${t.id}`} className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CheckSquare className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-slate-400 text-sm">ID: {t.id}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sky-400"><Image className="w-4 h-4"/> {t.photos}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TasksLanding
