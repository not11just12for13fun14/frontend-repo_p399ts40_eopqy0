import { Bell, PlusCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20">
      <div className="bg-gradient-to-br from-sky-600 via-sky-500 to-blue-600 text-white px-5 pb-4 pt-10 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-sky-100/90">BlueWave School</p>
            <h1 className="text-2xl font-semibold">Student Portal</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <PlusCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
