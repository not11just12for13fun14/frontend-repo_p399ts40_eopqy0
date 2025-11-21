import { useEffect, useState } from 'react'

export default function Schedule() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/schedule`)
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
      {(loading ? Array.from({ length: 6 }) : items).map((it, i) => (
        <div key={i} className="bg-slate-800/60 rounded-xl border border-blue-300/10 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${loading ? 'bg-slate-700 animate-pulse' : 'bg-gradient-to-br from-sky-500 to-blue-600'}`} />
            <div>
              <p className="font-medium text-white">{loading ? '...' : it.subject}</p>
              <p className="text-xs text-slate-300/70">{loading ? '...': `${it.day} • ${it.room || 'TBA'}`}</p>
            </div>
          </div>
          <div className="text-sky-300 text-sm">{loading ? '...': `${it.start_time} - ${it.end_time}`}</div>
        </div>
      ))}
    </div>
  )
}
