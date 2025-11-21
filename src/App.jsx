import Hero from './components/Hero'
import Header from './components/Header'
import MobileShell from './components/MobileShell'
import HomeFeed from './components/HomeFeed'
import Schedule from './components/Schedule'
import Lessons from './components/Lessons'
import Grades from './components/Grades'
import Assessments from './components/Assessments'

function App() {
  const pages = {
    home: HomeFeed,
    schedule: Schedule,
    lessons: Lessons,
    grades: Grades,
    assess: Assessments,
    profile: () => (
      <div className="mt-6 text-center text-slate-300/80">
        Profile coming soon
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Hero />
      <MobileShell
        header={<Header />}
        pages={pages}
      />
    </div>
  )
}

export default App
