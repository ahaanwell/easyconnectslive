"use client"
import { Zap, Trash2, Wrench, ArrowRight, Sparkles, Clock, HardDrive, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FeatureGrid() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [activeDemo, setActiveDemo] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo(prev => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: 'Lightning Speed Boost',
      desc: 'Optimize startup processes and eliminate bottlenecks for instant 3x performance gains.',
      icon: Zap,
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      accentColor: 'from-blue-400 to-cyan-400',
      bgPattern: 'from-blue-50 to-cyan-50',
      stats: [
        { label: 'Faster Boot', value: '3x', icon: Clock },
        { label: 'CPU Usage', value: '-45%', icon: Sparkles }
      ],
      features: ['Smart startup optimization', 'Background app control', 'Memory management']
    },
    {
      title: 'Deep Clean Engine',
      desc: 'AI-powered cleaning removes gigabytes of hidden junk, temp files, and system clutter.',
      icon: Trash2,
      color: 'from-emerald-500 via-green-600 to-teal-500',
      accentColor: 'from-emerald-400 to-teal-400',
      bgPattern: 'from-emerald-50 to-teal-50',
      stats: [
        { label: 'Space Freed', value: '12GB', icon: HardDrive },
        { label: 'Files Cleaned', value: '50K+', icon: Trash2 }
      ],
      features: ['Duplicate file finder', 'Browser cache cleaner', 'Registry cleanup']
    },
    {
      title: 'Auto-Repair System',
      desc: 'Detect and fix registry errors, missing DLLs, and Windows issues automatically.',
      icon: Wrench,
      color: 'from-orange-500 via-amber-600 to-yellow-500',
      accentColor: 'from-orange-400 to-yellow-400',
      bgPattern: 'from-orange-50 to-yellow-50',
      stats: [
        { label: 'Issues Fixed', value: '250+', icon: Shield },
        { label: 'Success Rate', value: '99%', icon: Wrench }
      ],
      features: ['Registry repair', 'DLL error fixes', 'System stability']
    },
  ]

  return (
    <section id="features" className="relative py-10 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Peak Performance,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Simplified
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your PC with intelligent optimization tools that work seamlessly together
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-500 ${
                activeDemo === i ? 'scale-105 z-10' : 'hover:scale-105 hover:z-10'
              }`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
              
              {/* Card */}
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                activeDemo === i 
                  ? 'shadow-2xl ring-2 ring-blue-500/50' 
                  : 'group-hover:shadow-2xl'
              }`}>
                
                {/* Header with gradient */}
                <div className={`relative bg-gradient-to-br ${feature.bgPattern} p-8 pb-6`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl blur-md"></div>
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Stats Section */}
                <div className="p-6 bg-white border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx} className="relative group/stat">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgPattern} rounded-xl blur-sm opacity-0 group-hover/stat:opacity-100 transition-opacity`}></div>
                        <div className="relative bg-slate-50 rounded-xl p-4 hover:bg-white transition-colors border border-slate-100">
                          <stat.icon className={`w-5 h-5 mb-2 bg-gradient-to-r ${feature.accentColor} bg-clip-text text-transparent`} />
                          <div className={`text-2xl font-black bg-gradient-to-r ${feature.accentColor} bg-clip-text text-transparent mb-1`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.accentColor}`}></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-4 cursor-pointer rounded-xl bg-gradient-to-r ${feature.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}>
                    <span>Explore Feature</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Active indicator */}
                {activeDemo === i && (
                  <div className="absolute top-4 right-4">
                    <div className={`relative w-3 h-3 rounded-full bg-gradient-to-r ${feature.color}`}>
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${feature.color} animate-ping`}></div>
                    </div>
                  </div>
                )}

                {/* Hover border gradient */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${feature.color} p-[2px] -z-10`}>
                  <div className="w-full h-full rounded-3xl bg-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}