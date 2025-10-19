"use client"
import { Shield, Zap, Star, Gauge, CheckCircle, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TrustStrip() {
  const [activeCard, setActiveCard] = useState(0)
  const [counters, setCounters] = useState({ users: 0, rating: 0, speed: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const duration = 2000
    const steps = 50
    let step = 0
    
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounters({
        users: Math.floor(progress * 2.5),
        rating: (progress * 4.9).toFixed(1),
        speed: Math.floor(progress * 95)
      })
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: Shield,
      iconColor: 'from-blue-500 via-blue-600 to-cyan-500',
      glowColor: 'group-hover:shadow-blue-500/50',
      title: 'Military-Grade Security',
      desc: 'Bank-level encryption protects your data with zero-knowledge architecture.',
      metric: '256-bit',
      metricLabel: 'Encryption',
    },
    {
      icon: Zap,
      iconColor: 'from-yellow-400 via-orange-500 to-red-500',
      glowColor: 'group-hover:shadow-orange-500/50',
      title: 'Lightning Speed',
      desc: 'AI-powered scanning completes full system analysis in under 10 seconds.',
      metric: '<10s',
      metricLabel: 'Scan Time',
    },
    {
      icon: Star,
      iconColor: 'from-purple-500 via-pink-500 to-rose-500',
      glowColor: 'group-hover:shadow-pink-500/50',
      title: 'Globally Trusted',
      desc: 'Join millions of satisfied users with 4.9★ average rating worldwide.',
      metric: '2.5M+',
      metricLabel: 'Active Users',
    },
    {
      icon: Gauge,
      iconColor: 'from-emerald-500 via-green-500 to-teal-500',
      glowColor: 'group-hover:shadow-green-500/50',
      title: 'Zero Impact',
      desc: 'Runs seamlessly in background using less than 50MB RAM.',
      metric: '<50MB',
      metricLabel: 'RAM Usage',
    },
  ]


  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] bg-[size:24px_24px] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-4">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Trusted Worldwide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Optimizer?
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Industry-leading technology trusted by millions for performance, security, and reliability
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-500 ${
                activeCard === i ? 'scale-105 z-10' : 'hover:scale-105 hover:z-10'
              }`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.iconColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Card */}
              <div className={`relative bg-white/90 backdrop-blur-xl border-2 rounded-3xl p-6 shadow-lg transition-all duration-500 ${
                activeCard === i 
                  ? 'border-blue-500/50 shadow-2xl' 
                  : 'border-slate-200 hover:border-slate-300 group-hover:shadow-2xl'
              } ${feature.glowColor}`}>
                
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl blur-md"></div>
                  <div className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.iconColor} flex items-center justify-center shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {feature.desc}
                </p>

                {/* Metric badge */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                    {feature.metricLabel}
                  </span>
                  <span className={`text-lg font-black bg-gradient-to-r ${feature.iconColor} bg-clip-text text-transparent`}>
                    {feature.metric}
                  </span>
                </div>

                {/* Active indicator */}
                {activeCard === i && (
                  <div className="absolute -top-2 -right-2 w-12 h-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-ping opacity-75"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
          {['Norton Secured', 'McAfee Protected', 'ISO 27001', 'GDPR Compliant', 'SSL Encrypted'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}