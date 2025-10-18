"use client"
import { Download, Settings, Rocket, CheckCircle, ArrowRight, Sparkles, Play, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(stepInterval)
  }, [])

  useEffect(() => {
    setProgress(0)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCompletedSteps(prev => [...new Set([...prev, activeStep])])
          return 100
        }
        return prev + 2
      })
    }, 50)
    return () => clearInterval(progressInterval)
  }, [activeStep])

  const steps = [
    {
      title: "Download & Install",
      desc: "Get our lightweight installer and set up in under 60 seconds with zero hassle.",
      icon: Download,
      color: "from-blue-500 via-blue-600 to-indigo-600",
      accentColor: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      features: ["One-click install", "No bloatware", "Safe & secure"],
      time: "30 sec",
      stat: "5MB"
    },
    {
      title: "Smart Scan",
      desc: "Our AI analyzes your system in seconds, detecting issues and optimization opportunities.",
      icon: Settings,
      color: "from-cyan-500 via-teal-600 to-emerald-600",
      accentColor: "from-cyan-400 to-emerald-500",
      bgColor: "from-cyan-50 to-emerald-50",
      features: ["Deep system scan", "AI-powered", "Real-time analysis"],
      time: "10 sec",
      stat: "250+"
    },
    {
      title: "Optimize & Enjoy",
      desc: "Watch your PC transform with automatic fixes, cleaning, and performance boosts.",
      icon: Rocket,
      color: "from-violet-500 via-purple-600 to-fuchsia-600",
      accentColor: "from-violet-400 to-fuchsia-500",
      bgColor: "from-violet-50 to-fuchsia-50",
      features: ["Auto-optimize", "Instant results", "Always protected"],
      time: "2 min",
      stat: "3x"
    },
  ]

  return (
    <section id="how" className="relative py-10 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] bg-[size:32px_32px] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Simple Process</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Get Started in{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                3 Easy Steps
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transform your PC performance in minutes with our intelligent optimization process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting lines - desktop only */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-1 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 opacity-20"></div>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 transition-all duration-1000"
              style={{ width: `${(activeStep / 2) * 100}%` }}
            ></div>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${
                activeStep === i ? 'scale-105 z-20' : 'hover:scale-105 hover:z-10'
              }`}
              onMouseEnter={() => setActiveStep(i)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${step.color} rounded-3xl blur-2xl opacity-0 transition-all duration-500 ${
                activeStep === i ? 'opacity-40' : 'group-hover:opacity-20'
              }`}></div>
              
              {/* Card */}
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 ${
                activeStep === i ? 'shadow-2xl ring-2 ring-offset-2 ring-blue-500/50' : 'hover:shadow-2xl'
              }`}>
                
                {/* Header section */}
                <div className={`relative bg-gradient-to-br ${step.bgColor} p-8 pb-6`}>
                  {/* Step number badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-lg shadow-lg ${
                      activeStep === i ? 'animate-pulse' : ''
                    }`}>
                      {i + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl blur-lg"></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl transition-all duration-500 ${
                      activeStep === i ? 'rotate-6 scale-110' : ''
                    }`}>
                      <step.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Progress bar - only on active */}
                  {activeStep === i && (
                    <div className="mt-4">
                      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${step.accentColor} transition-all duration-100 rounded-full`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-8 pt-6 space-y-6">
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${step.accentColor} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className={`w-4 h-4 bg-gradient-to-r ${step.accentColor} bg-clip-text text-transparent`} />
                      <span className="text-sm text-slate-500 font-medium">{step.time}</span>
                    </div>
                    <div className={`text-2xl font-black bg-gradient-to-r ${step.accentColor} bg-clip-text text-transparent`}>
                      {step.stat}
                    </div>
                  </div>
                </div>

                {/* Completed checkmark */}
                {completedSteps.includes(i) && (
                  <div className="absolute top-4 left-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg animate-bounce`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}