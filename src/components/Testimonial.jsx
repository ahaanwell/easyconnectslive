"use client"
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp, Verified, ThumbsUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      text: "This optimizer completely transformed my 5-year-old laptop. It boots in seconds now and runs smoother than when it was new. Absolutely incredible!",
      name: "John Doe",
      role: "Small Business Owner",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 5,
      verified: true,
      metric: "3x Faster",
      beforeAfter: { before: "2m 15s", after: "45s" }
    },
    {
      text: "As a designer working with heavy files, performance is critical. This tool freed up 15GB and my workflow is seamless. Best investment ever!",
      name: "Priya Sharma",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/100?img=5",
      rating: 5,
      verified: true,
      metric: "15GB Freed",
      beforeAfter: { before: "82% Full", after: "45% Full" }
    },
    {
      text: "Skeptical at first, but wow! Fixed registry errors I didn't even know existed. My development environment runs buttery smooth now. Highly recommended!",
      name: "Alex Kim",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/100?img=7",
      rating: 5,
      verified: true,
      metric: "250+ Issues Fixed",
      beforeAfter: { before: "Unstable", after: "Perfect" }
    },
    {
      text: "Gaming performance improved dramatically! No more lag spikes or stuttering. This optimizer is a must-have for any serious gamer.",
      name: "Marcus Chen",
      role: "Professional Gamer",
      image: "https://i.pravatar.cc/100?img=12",
      rating: 5,
      verified: true,
      metric: "+85 FPS",
      beforeAfter: { before: "45 FPS", after: "130 FPS" }
    },
    {
      text: "Simple, effective, and safe. Been using it for 6 months and my PC still runs like day one. Customer support is fantastic too!",
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://i.pravatar.cc/100?img=9",
      rating: 5,
      verified: true,
      metric: "99% Uptime",
      beforeAfter: { before: "Weekly Crashes", after: "Zero Issues" }
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: Star },
    { value: "2.5M+", label: "Happy Users", icon: ThumbsUp },
    { value: "99%", label: "Satisfaction", icon: TrendingUp },
  ]

  return (
    <section id="reviews" className="relative py-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Loved by Millions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Real Results,{' '}
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Real Stories
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who've transformed their PC performance
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/50 to-orange-200/50 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative overflow-hidden">
            {/* Featured testimonial */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
              
              <div className="relative bg-gradient-to-br from-white via-white to-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                {/* Quote decoration */}
                <div className="absolute top-8 left-8 opacity-10">
                  <Quote className="w-32 h-32 text-slate-900" fill="currentColor" />
                </div>

                <div className="relative p-12 md:p-16">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 transition-all duration-300 ${
                          i < testimonials[activeSlide].rating 
                            ? 'text-yellow-500 fill-yellow-500 scale-100' 
                            : 'text-slate-300 scale-90'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-2xl md:text-3xl font-semibold text-slate-900 text-center leading-relaxed mb-8 min-h-[120px]">
                    "{testimonials[activeSlide].text}"
                  </blockquote>

                  {/* Before/After Metrics */}
                  <div className="max-w-md mx-auto mb-8">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                      <div className="text-center flex-1">
                        <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Before</div>
                        <div className="text-lg font-bold text-slate-700">{testimonials[activeSlide].beforeAfter.before}</div>
                      </div>
                      <div className="px-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-xs text-slate-500 font-semibold uppercase mb-1">After</div>
                        <div className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {testimonials[activeSlide].beforeAfter.after}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-lg opacity-50"></div>
                      <img
                        src={testimonials[activeSlide].image}
                        alt={testimonials[activeSlide].name}
                        className="relative w-16 h-16 rounded-full border-4 border-white shadow-lg"
                      />
                      {testimonials[activeSlide].verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center border-2 border-white">
                          <Verified className="w-3 h-3 text-white" fill="white" />
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        {testimonials[activeSlide].name}
                      </div>
                      <div className="text-sm text-slate-600">{testimonials[activeSlide].role}</div>
                    </div>
                  </div>

                  {/* Metric badge */}
                  <div className="absolute top-8 right-8">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-sm shadow-lg">
                      {testimonials[activeSlide].metric}
                    </div>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-slate-900" />
                </button>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveSlide(i)
                    setIsAutoPlaying(false)
                  }}
                  className="group relative"
                >
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeSlide 
                      ? 'w-8 bg-gradient-to-r from-yellow-500 to-orange-500' 
                      : 'bg-slate-300 group-hover:bg-slate-400'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveSlide(i)
                setIsAutoPlaying(false)
              }}
              className={`group relative transition-all duration-300 ${
                i === activeSlide ? 'scale-105' : 'hover:scale-105 opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-lg transition-opacity ${
                i === activeSlide ? 'opacity-50' : 'opacity-0 group-hover:opacity-30'
              }`}></div>
              <div className={`relative bg-white rounded-2xl p-4 shadow-lg transition-all ${
                i === activeSlide ? 'ring-2 ring-yellow-500' : ''
              }`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-slate-100"
                />
                <div className="text-xs font-semibold text-slate-900 truncate">{testimonial.name}</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}