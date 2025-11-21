import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <div className="relative h-64">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative h-full bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900 pointer-events-none" />
    </div>
  )
}
