import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function RequestDemo() {
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 pt-12 pb-6">
        <h1 className="text-4xl md:text-5xl font-black">Request a Demo</h1>
        <p className="text-slate-300 mt-3 max-w-2xl">Tell us a bit about your team and we’ll reach out with a tailored walkthrough.</p>
      </header>
      <main className="max-w-2xl mx-auto px-6 pb-16">
        {!submitted ? (
          <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={onChange} className="w-full bg-slate-900 border border-white/10 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} className="w-full bg-slate-900 border border-white/10 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Company</label>
              <input name="company" value={form.company} onChange={onChange} className="w-full bg-slate-900 border border-white/10 rounded px-3 py-2" />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">Submit</button>
          </form>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-slate-200">Thanks! We’ll be in touch shortly.</p>
          </div>
        )}
        <div className="mt-6">
          <Link to="/" className="text-slate-300 hover:text-white">← Back to home</Link>
        </div>
      </main>
    </div>
  )
}
