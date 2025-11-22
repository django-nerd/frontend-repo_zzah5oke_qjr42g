import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Users, Folder } from 'lucide-react'

function ProjectDetail() {
  const { id } = useParams()
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Link to="/projects" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><ArrowLeft className="w-4 h-4"/> Back to Projects</Link>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold">{id}</h1>
        <p className="text-slate-300 mt-2">Central hub for milestones, documents, RFIs, and tasks.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">At a glance</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-400"/> Due: 2026-03-30</li>
              <li className="flex items-center gap-2"><Users className="w-4 h-4 text-sky-400"/> Team: 18</li>
              <li className="flex items-center gap-2"><Folder className="w-4 h-4 text-indigo-400"/> Docs: Drawings, Contracts</li>
            </ul>
          </div>
          <Link to="/documents" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20">
            <h3 className="font-semibold">Documents</h3>
            <p className="text-slate-300 text-sm mt-1">Manage versions, approvals, and signatures.</p>
            <span className="inline-block mt-2 text-blue-400">Open →</span>
          </Link>
          <Link to="/tasks" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20">
            <h3 className="font-semibold">Tasks</h3>
            <p className="text-slate-300 text-sm mt-1">Daily checklists, assignments, evidence.</p>
            <span className="inline-block mt-2 text-blue-400">Open →</span>
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Link to="/rfis" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20">
            <h3 className="font-semibold">RFIs</h3>
            <p className="text-slate-300 text-sm mt-1">Track queries and resolutions with attachments.</p>
            <span className="inline-block mt-2 text-blue-400">Open →</span>
          </Link>
          <Link to="/approvals" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20">
            <h3 className="font-semibold">Approvals</h3>
            <p className="text-slate-300 text-sm mt-1">Multi-step workflows and audit logs.</p>
            <span className="inline-block mt-2 text-blue-400">Open →</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
