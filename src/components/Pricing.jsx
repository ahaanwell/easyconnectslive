"use client"
import { Leaf, Rocket, Users, Check, X, Crown, ArrowRight, Zap, Shield, Star } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('yearly')
  const [hoveredPlan, setHoveredPlan] = useState(null)

  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for beginners",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: Leaf,
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      features: [
        { text: "Basic system scan", included: true },
        { text: "Junk file cleanup", included: true },
        { text: "5GB max cleanup", included: true },
        { text: "Community support", included: true },
        { text: "Advanced optimization", included: false },
        { text: "Real-time protection", included: false },
      ],
      cta: "Start Free",
    },
    {
      name: "Professional",
      tagline: "Most popular",
      monthlyPrice: 4.99,
      yearlyPrice: 29,
      icon: Rocket,
      gradient: "from-blue-500 via-cyan-500 to-indigo-500",
      features: [
        { text: "Deep system optimization", included: true },
        { text: "Unlimited cleanup", included: true },
        { text: "Registry repair", included: true },
        { text: "Real-time protection", included: true },
        { text: "24/7 priority support", included: true },
        { text: "1 PC license", included: true },
      ],
      cta: "Start Free Trial",
      highlight: true,
      badge: "Best Value",
    },
    {
      name: "Family",
      tagline: "Multiple devices",
      monthlyPrice: 9.99,
      yearlyPrice: 49,
      icon: Users,
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Up to 5 PC licenses", included: true },
        { text: "Centralized dashboard", included: true },
        { text: "Advanced security suite", included: true },
        { text: "Cloud backup (50GB)", included: true },
        { text: "Dedicated support", included: true },
      ],
      cta: "Start Free Trial",
      badge: "Premium",
    },
  ]

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Crown className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Simple & Transparent</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free, upgrade anytime. No credit card required.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-16 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:scale-105 transition-transform"
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
              billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
            }`}></div>
          </button>
          <span className={`text-sm font-semibold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly
          </span>
          {billingCycle === 'yearly' && (
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg animate-pulse">
              Save 50%
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative transition-all duration-500 ${
                plan.highlight ? 'md:scale-110 z-20' : hoveredPlan === i ? 'scale-105 z-10' : 'hover:scale-105 hover:z-10'
              }`}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${plan.gradient} rounded-3xl blur-2xl transition-opacity duration-500 ${
                plan.highlight || hoveredPlan === i ? 'opacity-40' : 'opacity-0'
              }`}></div>
              
              {/* Card */}
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl ${
                plan.highlight ? 'ring-2 ring-blue-500/50' : ''
              }`}>
                
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 left-0 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="flex items-center gap-1 text-white font-bold text-sm">
                      <Star className="w-4 h-4 fill-white" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`${plan.badge ? 'pt-14' : 'pt-8'} px-8 pb-8`}>
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} items-center justify-center shadow-lg mb-4 ${
                      hoveredPlan === i ? 'rotate-12 scale-110' : ''
                    } transition-all duration-500`}>
                      <plan.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                    <p className="text-sm text-slate-600 font-medium">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-black text-slate-900">
                        ${billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="text-slate-600 font-semibold">
                          /{billingCycle === 'yearly' ? 'year' : 'mo'}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && plan.monthlyPrice > 0 && (
                      <div className="text-sm text-slate-600 mt-1">
                        ${(plan.yearlyPrice / 12).toFixed(2)}/month billed annually
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          feature.included ? 'bg-green-500' : 'bg-slate-200'
                        }`}>
                          {feature.included ? (
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          ) : (
                            <X className="w-3 h-3 text-slate-400" strokeWidth={3} />
                          )}
                        </div>
                        <span className={`text-sm ${feature.included ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.highlight
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-xl hover:scale-105`
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}>
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: "30-Day Money Back" },
                { icon: Zap, text: "Instant Activation" },
                { icon: Check, text: "No Hidden Fees" },
                { icon: Star, text: "Free Updates" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-2 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}