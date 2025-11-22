import { useState } from 'react'
import { PlusCircle, UploadCloud } from 'lucide-react'
import { useAuth } from '../auth/AuthContext'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <label className="block text-sm">
      <span className="text-slate-300">{label}</span>
      <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="mt-1 w-full bg-slate-900/60 border border-slate-800 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600" />
    </label>
  )
}

function Section({ title, children, onSubmit, cta }) {
  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3 py-1.5 rounded-md text-sm" type="submit">
          <PlusCircle className="w-4 h-4"/> {cta}
        </button>
      </div>
      {children}
    </form>
  )
}

export default function CreateForms({ onCreated }) {
  const { token } = useAuth()
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  // Projects
  const [pTitle, setPTitle] = useState('')
  const [pCode, setPCode] = useState('')
  const [pDesc, setPDesc] = useState('')

  // Tasks
  const [tProj, setTProj] = useState('')
  const [tTitle, setTTitle] = useState('')
  const [tDesc, setTDesc] = useState('')

  // RFI
  const [rProj, setRProj] = useState('')
  const [rSubj, setRSubj] = useState('')
  const [rQ, setRQ] = useState('')

  // Approval
  const [aType, setAType] = useState('document')
  const [aId, setAId] = useState('')

  // Document record (metadata-only)
  const [dProj, setDProj] = useState('')
  const [dTitle, setDTitle] = useState('')
  const [dType, setDType] = useState('other')

  // Upload (file + checksum handled server-side)
  const [uProj, setUProj] = useState('')
  const [uTitle, setUTitle] = useState('')
  const [uType, setUType] = useState('other')
  const [uNote, setUNote] = useState('')
  const [uFile, setUFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  async function call(path, body) {
    setMsg('')
    setErr('')
    try {
      const res = await fetch(`${API_BASE}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setMsg(`Saved: ${data.id}`)
      onCreated && onCreated()
    } catch (e) {
      setErr(e.message)
    }
  }

  async function upload() {
    setMsg('')
    setErr('')
    try {
      if (!uFile) throw new Error('Choose a file to upload')
      const fd = new FormData()
      fd.append('project_code', uProj)
      fd.append('title', uTitle)
      fd.append('doc_type', uType)
      if (uNote) fd.append('change_note', uNote)
      fd.append('file', uFile)
      setUploading(true)
      const res = await fetch(`${API_BASE}/api/upload`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Upload failed')
      setMsg(`Uploaded: ${data.id} • checksum ${data.checksum.slice(0,8)}…`)
      onCreated && onCreated()
    } catch (e) {
      setErr(e.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-6">
      {msg && <div className="rounded-md bg-emerald-500/10 border border-emerald-600 text-emerald-300 px-3 py-2 text-sm">{msg}</div>}
      {err && <div className="rounded-md bg-rose-500/10 border border-rose-600 text-rose-300 px-3 py-2 text-sm">{err}</div>}

      <Section title="New Project" cta="Create" onSubmit={(e)=>{e.preventDefault(); call('/api/projects', { title: pTitle, code: pCode, description: pDesc })}}>
        <div className="grid sm:grid-cols-3 gap-3">
          <TextInput label="Title" value={pTitle} onChange={setPTitle} placeholder="Airport Terminal Expansion"/>
          <TextInput label="Code" value={pCode} onChange={setPCode} placeholder="AIR-T2"/>
          <TextInput label="Description" value={pDesc} onChange={setPDesc} placeholder="Optional"/>
        </div>
      </Section>

      <Section title="New Task" cta="Create" onSubmit={(e)=>{e.preventDefault(); call('/api/tasks', { project_code: tProj, title: tTitle, description: tDesc })}}>
        <div className="grid sm:grid-cols-3 gap-3">
          <TextInput label="Project Code" value={tProj} onChange={setTProj} placeholder="AIR-T2"/>
          <TextInput label="Title" value={tTitle} onChange={setTTitle} placeholder="Pour slab S1"/>
          <TextInput label="Description" value={tDesc} onChange={setTDesc} placeholder="Optional"/>
        </div>
      </Section>

      <Section title="New RFI" cta="Create" onSubmit={(e)=>{e.preventDefault(); call('/api/rfis', { project_code: rProj, subject: rSubj, question: rQ })}}>
        <div className="grid sm:grid-cols-3 gap-3">
          <TextInput label="Project Code" value={rProj} onChange={setRProj} placeholder="AIR-T2"/>
          <TextInput label="Subject" value={rSubj} onChange={setRSubj} placeholder="Clarify beam bars"/>
          <TextInput label="Question" value={rQ} onChange={setRQ} placeholder="Type your question"/>
        </div>
      </Section>

      <Section title="New Approval" cta="Create" onSubmit={(e)=>{e.preventDefault(); call('/api/approvals', { related_type: aType, related_id: aId })}}>
        <div className="grid sm:grid-cols-3 gap-3">
          <TextInput label="Related Type" value={aType} onChange={setAType} placeholder="document/task"/>
          <TextInput label="Related ID" value={aId} onChange={setAId} placeholder="ObjectId or Ref"/>
        </div>
      </Section>

      <Section title="New Document (metadata)" cta="Create" onSubmit={(e)=>{e.preventDefault(); call('/api/documents', { project_code: dProj, title: dTitle, doc_type: dType })}}>
        <div className="grid sm:grid-cols-3 gap-3">
          <TextInput label="Project Code" value={dProj} onChange={setDProj} placeholder="AIR-T2"/>
          <TextInput label="Title" value={dTitle} onChange={setDTitle} placeholder="Structural Drawing S1"/>
          <TextInput label="Type" value={dType} onChange={setDType} placeholder="drawing/spec/other"/>
        </div>
      </Section>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Upload File</h3>
          <button type="button" onClick={upload} disabled={uploading} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold px-3 py-1.5 rounded-md text-sm">
            <UploadCloud className="w-4 h-4"/> {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
        <div className="grid sm:grid-cols-4 gap-3">
          <TextInput label="Project Code" value={uProj} onChange={setUProj} placeholder="AIR-T2"/>
          <TextInput label="Title" value={uTitle} onChange={setUTitle} placeholder="QC Photo"/>
          <TextInput label="Type" value={uType} onChange={setUType} placeholder="drawing/spec/other"/>
          <TextInput label="Change Note" value={uNote} onChange={setUNote} placeholder="Optional"/>
          <label className="block text-sm sm:col-span-4">
            <span className="text-slate-300">File</span>
            <input type="file" onChange={(e)=>setUFile(e.target.files?.[0]||null)} className="mt-1 block w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700" />
          </label>
        </div>
        <p className="text-xs text-slate-400">Checksum is calculated automatically during upload for integrity.</p>
      </div>
    </div>
  )
}
