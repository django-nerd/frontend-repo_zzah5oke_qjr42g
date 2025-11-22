import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Paperclip, Send } from 'lucide-react'

function RFIDetail() {
  const { id } = useParams()
  const messages = [
    { by: 'Engineer', text: 'Please share detailed rebar spacing for beam B12.' },
    { by: 'Consultant', text: 'Spacing is 150mm c/c. Attaching sketch.' },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link to="/rfis" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><ArrowLeft className="w-4 h-4"/> Back to RFIs</Link>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">{id}</h1>

        <div className="mt-6 space-y-3">
          {messages.map((m, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-slate-300 text-sm">{m.by}</p>
              <p className="mt-1">{m.text}</p>
              <button className="mt-2 inline-flex items-center gap-2 text-blue-400"><Paperclip className="w-4 h-4"/> Attachment</button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white" placeholder="Type a reply..."/>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg"><Send className="w-4 h-4"/> Send</button>
        </div>
      </div>
    </div>
  )
}

export default RFIDetail
