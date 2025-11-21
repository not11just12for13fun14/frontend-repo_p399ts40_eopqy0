import { useEffect, useState } from 'react'

export default function HomeFeed() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/feed`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchFeed()
  }, [])

  if (loading) return <FeedSkeleton />

  return (
    <div className="space-y-4 mt-4">
      {items.map((it) => (
        <article key={it.id} className="bg-slate-800/60 rounded-2xl border border-blue-300/10 overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={it.author_avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(it.author_name||'User')}`} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-white">{it.author_name}</p>
                <p className="text-xs text-slate-300/70">{new Date(it.created_at).toLocaleString()}</p>
              </div>
            </div>
            {it.text && <p className="text-slate-100/90 leading-relaxed">{it.text}</p>}
          </div>
          {it.image_url && <img src={it.image_url} className="w-full max-h-80 object-cover" />}
          <div className="p-4 pt-2 text-slate-300/80 text-sm">❤️ {it.likes} • 💬 {it.comments_count}</div>
        </article>
      ))}
      {items.length === 0 && (
        <div className="text-center text-slate-300/70 py-6">No posts yet.</div>
      )}
    </div>
  )
}

function FeedSkeleton() {
  return (
    <div className="space-y-4 mt-4 animate-pulse">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="bg-slate-800/60 rounded-2xl border border-blue-300/10 p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-slate-700" />
            <div className="h-3 w-24 bg-slate-700 rounded" />
          </div>
          <div className="h-3 w-full bg-slate-700 rounded" />
          <div className="h-3 w-3/5 bg-slate-700 rounded mt-2" />
        </div>
      ))}
    </div>
  )
}
