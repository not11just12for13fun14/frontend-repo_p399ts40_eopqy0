import { useEffect, useState } from 'react'

export default function Assessments() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/assessments`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [])

  return (
    <div className="mt-4 space-y-3">
      {(loading ? Array.from({ length: 4 }) : items).map((it, i) => (
        <div key={i} className="bg-slate-800/60 rounded-xl border border-blue-300/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300/70">{loading ? '...' : it.subject}</p>
              <h3 className="text-white font-semibold mt-1">{loading ? '...' : it.title}</h3>
            </div>
            <div className="text-right">
              <p className="text-sky-300">{loading ? '...' : new Date(it.due_date).toLocaleString()}</p>
              {!loading && <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-300/20">{it.status}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
