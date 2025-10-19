"use client"
import { 
  Zap, 
  Menu, 
  X, 
  ChevronDown,
  Download,
  User,
  Settings,
  LogOut,
  HelpCircle,
  FileText,
  Users,
  Shield,
  Sparkles
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { 
      name: 'Features', 
      href: '#features',
      dropdown: [
        { name: 'Speed Boost', icon: Zap, href: '#features' },
        { name: 'Deep Clean', icon: Sparkles, href: '#features' },
        { name: 'System Repair', icon: Shield, href: '#features' },
      ]
    },
    { name: 'How It Works', href: '#how' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#reviews' },
    { 
      name: 'Resources', 
      href: '#',
      dropdown: [
        { name: 'Documentation', icon: FileText, href: '#' },
        { name: 'Community', icon: Users, href: '#' },
        { name: 'Support', icon: HelpCircle, href: '#' },
      ]
    },
  ]

  const userMenuItems = [
    { name: 'My Account', icon: User, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
    { name: 'Help Center', icon: HelpCircle, href: '#' },
    { name: 'Sign Out', icon: LogOut, href: '#', divider: true },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200' 
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                NOWSTART
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <div 
                  key={i} 
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(i)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors group"
                  >
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === i ? 'rotate-180' : ''
                      }`} />
                    )}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                  </a>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === i && (
                    <div className="absolute top-full left-0 mt-4 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                          <div className="p-2">
                            {link.dropdown.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all group/item"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                  <item.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 ">Account</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute top-full  right-0 mt-2 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="relative">
                      <div className="absolute  inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-2xl blur-xl opacity-20"></div>
                      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="p-2">
                          {userMenuItems.map((item, idx) => (
                            <div key={idx}>
                              {item.divider && <div className="h-px bg-slate-200 my-2"></div>}
                              <a
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                              >
                                <item.icon className="w-4 h-4 text-slate-500 group-hover/item:text-blue-600 transition-colors" />
                                <span className="text-sm font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                  {item.name}
                                </span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contat Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl animate-in slide-in-from-top duration-300">
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navLinks.map((link, i) => (
                <div key={i}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all group"
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  >
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </span>
                    {link.dropdown && (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </a>
                  
                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-slate-500" />
                          <span className="text-sm text-slate-600">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-slate-200">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all">
                  <User className="w-4 h-4 text-slate-700" />
                  <span className="text-sm font-semibold text-slate-700">Sign In</span>
                </button>
                
                <a
                  href="#download"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Download className="w-4 h-4" />
                  Download Free
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16"></div>
    </>
  )
}