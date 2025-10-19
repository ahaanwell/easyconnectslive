"use client"
import { useEffect, useState } from 'react'
import { Zap, Download, PlayCircle, CheckCircle, Star, TrendingUp } from 'lucide-react'

export default function Hero() {
  const [stats, setStats] = useState({ speed: 0, files: 0, users: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    let step = 0
    
    const counter = setInterval(() => {
      step++
      const progress = step / steps
      setStats({
        speed: Math.floor(progress * 95),
        files: Math.floor(progress * 50),
        users: Math.floor(progress * 2.5)
      })
      if (step >= steps) clearInterval(counter)
    }, duration / steps)

    return () => clearInterval(counter)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-blue-300 font-medium">Trusted by 2.5M+ Users</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                Supercharge
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your PC
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-lg">
              AI-powered optimization that cleans, repairs, and accelerates your system instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 cursor-pointer rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold shadow-2xl shadow-blue-500/50 hover:shadow-cyan-500/50 transition-all hover:scale-105">
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Buy Now
                </span>
              </button>
              
              <button className="px-8 py-4 cursor-pointer rounded-2xl border-2 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white font-bold hover:border-cyan-500 transition-all">
                <span className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stats.speed}%
                </div>
                <div className="text-sm text-slate-400 mt-1">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stats.files}K+
                </div>
                <div className="text-sm text-slate-400 mt-1">Cleaned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {stats.users}M+
                </div>
                <div className="text-sm text-slate-400 mt-1">Users</div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Card */}
          <div className="relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-slate-700/50 shadow-2xl p-8">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">System Status</h3>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs font-semibold text-green-300">Optimal</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Speed Boost', value: '+250%', color: 'from-yellow-400 to-orange-500', icon: Zap },
                    { label: 'Performance', value: 'Peak', color: 'from-green-400 to-emerald-500', icon: TrendingUp },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/30">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-3`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">System Optimization</span>
                    <span className="font-bold text-cyan-400">98%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-700/50 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition-transform">
                  Quick Scan
                </button>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg animate-pulse">
              <div className="text-sm font-semibold text-white">+45% Speed</div>
            </div>
            <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
              <div className="text-sm font-semibold text-white">3.2GB Freed</div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">
          {['Norton Verified', 'McAfee Secured', 'Microsoft Partner', 'ISO Certified'].map((badge, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-slate-400">
              <CheckCircle className="w-5 h-5 text-cyan-500" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}