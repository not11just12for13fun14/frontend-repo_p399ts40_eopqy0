import { useEffect, useState } from 'react'

export default function Grades() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/grades`)
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

  const calcPct = (g) => Math.round((g.score / g.total) * 100)

  return (
    <div className="mt-4 space-y-3">
      {(loading ? Array.from({ length: 4 }) : items).map((it, i) => (
        <div key={i} className="bg-slate-800/60 rounded-xl border border-blue-300/10 p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-300/70">{loading ? '...' : `${new Date(it.date).toLocaleDateString()} • ${it.subject}`}</p>
            <h3 className="text-white font-semibold mt-1">{loading ? '...' : it.assignment}</h3>
          </div>
          <div className="text-right">
            <p className="text-sky-300 font-semibold">{loading ? '...' : `${it.score}/${it.total}`} <span className="text-slate-300/70">({!loading && calcPct(it)}%)</span></p>
            {!loading && it.letter && <p className="text-slate-300/80 text-sm">{it.letter}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
