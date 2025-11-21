import { useEffect, useState } from 'react'

export default function Lessons() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/lessons`)
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
      {(loading ? Array.from({ length: 3 }) : items).map((it, i) => (
        <div key={i} className="bg-slate-800/60 rounded-xl border border-blue-300/10 p-4">
          <p className="text-sm text-slate-300/70">{loading ? '...' : `${new Date(it.date).toLocaleDateString()} • ${it.subject} • ${it.teacher}`}</p>
          <h3 className="text-white font-semibold mt-1">{loading ? '...' : it.title}</h3>
          <p className="text-slate-200/80 mt-1 text-sm">{loading ? '...' : (it.description || '')}</p>
          {(!loading && it.resources && it.resources.length > 0) && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {it.resources.map((r, idx) => (
                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-300/20">{r}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
