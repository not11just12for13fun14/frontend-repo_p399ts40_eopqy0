import { useState, useMemo } from 'react'
import { Home, CalendarRange, BookOpenText, GraduationCap, ClipboardList, User } from 'lucide-react'

const TABS = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'schedule', label: 'Schedule', icon: CalendarRange },
  { key: 'lessons', label: 'Lessons', icon: BookOpenText },
  { key: 'grades', label: 'Grades', icon: GraduationCap },
  { key: 'assess', label: 'Assess', icon: ClipboardList },
  { key: 'profile', label: 'Profile', icon: User },
]

export default function MobileShell({ initialTab = 'home', header, pages }) {
  const [tab, setTab] = useState(initialTab)

  const Current = useMemo(() => pages[tab] || (() => null), [tab, pages])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
      <div className="relative w-full max-w-[430px] min-h-screen bg-slate-900 text-white shadow-2xl">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/20 via-sky-400/10 to-cyan-300/20 blur-2xl" aria-hidden></div>

        {/* Phone content */}
        <div className="relative z-10 min-h-screen rounded-3xl overflow-hidden">
          {/* Header slot */}
          {header}

          {/* Content */}
          <div className="pb-24 px-4">
            <Current />
          </div>

          {/* Bottom nav */}
          <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px]">
            <div className="mx-3 mb-4 rounded-2xl bg-slate-800/70 backdrop-blur border border-blue-300/10 shadow-lg">
              <div className="grid grid-cols-6">
                {TABS.map(({ key, label, icon: Icon }) => {
                  const active = tab === key
                  return (
                    <button
                      key={key}
                      onClick={() => setTab(key)}
                      className={`flex flex-col items-center justify-center gap-1 py-3 text-xs transition ${active ? 'text-sky-300' : 'text-slate-300/70'}`}
                    >
                      <Icon size={20} className={active ? 'drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]' : ''} />
                      <span>{label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
