import { useState, useEffect } from 'react'
import './App.css'
import { Thermometer, Phone, Mail, MapPin, ChevronDown, Check, ArrowRight, Fan, Gauge, Shield } from 'lucide-react'

function App() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Technical schematic SVGs for each service
  const ACSchematic = () => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Compressor */}
      <circle cx="20" cy="60" r="10" strokeWidth="1.5"/>
      <text x="20" y="63" fontSize="6" fill="currentColor" textAnchor="middle" stroke="none">C</text>
      {/* Condenser coil */}
      <rect x="45" y="50" width="25" height="20" rx="2"/>
      <path d="M50 55 L65 55 M50 60 L65 60 M50 65 L65 65" strokeWidth="0.8"/>
      {/* Evaporator coil */}
      <rect x="45" y="10" width="25" height="20" rx="2"/>
      <path d="M50 15 L65 15 M50 20 L65 20 M50 25 L65 25" strokeWidth="0.8"/>
      {/* Refrigerant lines */}
      <path d="M30 60 L45 60" strokeWidth="1.5"/>
      <path d="M70 50 L70 30 L70 30" strokeWidth="1.5"/>
      <path d="M45 20 L35 20 L35 50 L20 50" strokeWidth="1"/>
      {/* Expansion valve */}
      <polygon points="70,35 75,40 70,45 65,40" fill="currentColor" stroke="none"/>
      {/* Airflow arrows */}
      <path d="M57 5 L57 10 M52 7 L57 2 L62 7" strokeWidth="0.8"/>
      <path d="M57 75 L57 70 M52 73 L57 78 L62 73" strokeWidth="0.8"/>
    </svg>
  )

  const HeatingSchematic = () => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Furnace body */}
      <rect x="10" y="25" width="30" height="45" rx="2" strokeWidth="1.5"/>
      {/* Heat exchanger */}
      <path d="M15 35 Q25 40 35 35 M15 45 Q25 50 35 45 M15 55 Q25 60 35 55" strokeWidth="1"/>
      {/* Burner flames */}
      <path d="M18 65 L18 60 M22 65 L22 58 M26 65 L26 60 M30 65 L30 58" strokeWidth="1.5" stroke="#0ea5e9"/>
      {/* Ductwork */}
      <rect x="45" y="30" width="25" height="12" rx="1"/>
      <rect x="45" y="48" width="25" height="12" rx="1"/>
      {/* Supply duct */}
      <path d="M40 36 L45 36" strokeWidth="1.5"/>
      {/* Return duct */}
      <path d="M40 54 L45 54" strokeWidth="1.5"/>
      {/* Airflow arrows */}
      <path d="M55 25 L55 30 M50 27 L55 22 L60 27" strokeWidth="0.8"/>
      <path d="M55 65 L55 60 M50 63 L55 68 L60 63" strokeWidth="0.8"/>
      {/* Thermostat */}
      <rect x="60" y="10" width="12" height="10" rx="1"/>
      <circle cx="66" cy="15" r="3"/>
    </svg>
  )

  const VentilationSchematic = () => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Main duct */}
      <rect x="5" y="35" width="70" height="15" rx="1" strokeWidth="1.5"/>
      {/* Branch ducts */}
      <rect x="15" y="10" width="10" height="25" rx="1"/>
      <rect x="35" y="10" width="10" height="25" rx="1"/>
      <rect x="55" y="10" width="10" height="25" rx="1"/>
      {/* Vents */}
      <rect x="15" y="5" width="10" height="5"/>
      <path d="M17 7 L23 7" strokeWidth="0.8"/>
      <rect x="35" y="5" width="10" height="5"/>
      <path d="M37 7 L43 7" strokeWidth="0.8"/>
      <rect x="55" y="5" width="10" height="5"/>
      <path d="M57 7 L63 7" strokeWidth="0.8"/>
      {/* Fan unit */}
      <circle cx="40" cy="62" r="12" strokeWidth="1.5"/>
      <path d="M40 50 L40 55" strokeWidth="1"/>
      {/* Fan blades */}
      <path d="M35 62 L45 62 M40 57 L40 67 M36 58 L44 66 M44 58 L36 66" strokeWidth="0.8"/>
      {/* Airflow arrows */}
      <path d="M20 30 L20 35 M15 32 L20 27 L25 32" strokeWidth="0.8"/>
      <path d="M40 30 L40 35 M35 32 L40 27 L45 32" strokeWidth="0.8"/>
      <path d="M60 30 L60 35 M55 32 L60 27 L65 32" strokeWidth="0.8"/>
    </svg>
  )

  const MaintenanceSchematic = () => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Pressure gauge */}
      <circle cx="25" cy="25" r="15" strokeWidth="1.5"/>
      <circle cx="25" cy="25" r="12"/>
      <path d="M25 25 L25 15" strokeWidth="1.5"/>
      <path d="M25 25 L32 20" strokeWidth="1"/>
      {/* Gauge markings */}
      <path d="M15 25 L17 25 M25 13 L25 15 M35 25 L33 25" strokeWidth="0.8"/>
      {/* Multimeter */}
      <rect x="50" y="10" width="20" height="30" rx="2" strokeWidth="1.5"/>
      <rect x="54" y="14" width="12" height="8" rx="1"/>
      <circle cx="57" cy="30" r="2"/>
      <circle cx="63" cy="30" r="2"/>
      {/* Wrench */}
      <path d="M10 55 L25 70" strokeWidth="2"/>
      <path d="M8 52 L13 57 L8 62 Z" fill="currentColor"/>
      <rect x="23" y="68" width="6" height="8" rx="1" transform="rotate(-45 26 72)"/>
      {/* Filter */}
      <rect x="45" y="50" width="25" height="20" rx="2"/>
      <path d="M48 55 L67 55 M48 60 L67 60 M48 65 L67 65" strokeWidth="0.8"/>
      {/* Checkmark */}
      <path d="M72 52 L75 55 L80 48" strokeWidth="1.5" stroke="#0ea5e9"/>
    </svg>
  )

  const services = [
    {
      icon: <ACSchematic />,
      title: "Air Conditioning",
      description: "Professional AC installation, repair, and maintenance services for residential and commercial properties.",
      features: ["24/7 Emergency Service", "Energy Efficient Systems", "Smart Thermostat Integration"]
    },
    {
      icon: <HeatingSchematic />,
      title: "Heating Systems",
      description: "Complete heating solutions including furnaces, heat pumps, and radiant heating systems.",
      features: ["Furnace Installation", "Heat Pump Services", "Boiler Maintenance"]
    },
    {
      icon: <VentilationSchematic />,
      title: "Ventilation",
      description: "Advanced ventilation systems ensuring optimal air quality and circulation throughout your space.",
      features: ["Duct Cleaning", "Air Quality Testing", "Exhaust Systems"]
    },
    {
      icon: <MaintenanceSchematic />,
      title: "Maintenance",
      description: "Preventive maintenance programs to keep your HVAC systems running at peak efficiency.",
      features: ["Annual Inspections", "Filter Replacement", "System Optimization"]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* 3D Steel Background with Sapphire-to-Navy Metallic Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient - sapphire to navy metallic */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, 
            #0c4a6e 0%, 
            #0369a1 15%, 
            #0ea5e9 30%, 
            #38bdf8 40%, 
            #0ea5e9 50%, 
            #0369a1 65%, 
            #0c4a6e 80%, 
            #082f49 100%)`
        }}></div>
        
        {/* Metallic sheen overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          background: `linear-gradient(180deg, 
            rgba(255,255,255,0.15) 0%, 
            rgba(255,255,255,0.05) 20%, 
            transparent 40%, 
            rgba(0,0,0,0.1) 60%, 
            rgba(0,0,0,0.2) 100%)`
        }}></div>
        
        {/* 3D Steel Shapes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Metallic sapphire gradient - lighter */}
            <linearGradient id="steelSapphire" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7dd3fc"/>
              <stop offset="15%" stopColor="#38bdf8"/>
              <stop offset="30%" stopColor="#0ea5e9"/>
              <stop offset="50%" stopColor="#38bdf8"/>
              <stop offset="70%" stopColor="#0ea5e9"/>
              <stop offset="85%" stopColor="#0284c7"/>
              <stop offset="100%" stopColor="#0369a1"/>
            </linearGradient>
            
            {/* Metallic navy gradient - darker */}
            <linearGradient id="steelNavy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1"/>
              <stop offset="20%" stopColor="#075985"/>
              <stop offset="40%" stopColor="#0c4a6e"/>
              <stop offset="60%" stopColor="#0369a1"/>
              <stop offset="80%" stopColor="#0c4a6e"/>
              <stop offset="100%" stopColor="#082f49"/>
            </linearGradient>
            
            {/* 3D highlight gradient */}
            <linearGradient id="steel3DHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.6"/>
              <stop offset="30%" stopColor="#7dd3fc" stopOpacity="0.3"/>
              <stop offset="70%" stopColor="#0284c7" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#082f49" stopOpacity="0.4"/>
            </linearGradient>
            
            {/* 3D shadow gradient */}
            <linearGradient id="steel3DShadow" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#082f49" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#0c4a6e" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2"/>
            </linearGradient>
            
            {/* Drop shadow filter for 3D effect */}
            <filter id="steelShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="4" dy="4" stdDeviation="8" floodColor="#082f49" floodOpacity="0.5"/>
            </filter>
            
            <filter id="steelGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-2" dy="-2" stdDeviation="4" floodColor="#7dd3fc" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Large 3D Steel Panel - Top Left */}
          <g filter="url(#steelShadow)">
            <polygon points="0,0 350,0 280,180 0,150" fill="url(#steelSapphire)" opacity="0.7"/>
            <polygon points="0,0 350,0 340,20 10,20" fill="url(#steel3DHighlight)" opacity="0.8"/>
            <polygon points="280,180 350,0 340,20 270,160" fill="url(#steel3DShadow)" opacity="0.6"/>
          </g>
          
          {/* 3D Steel Beam - Diagonal */}
          <g filter="url(#steelShadow)" transform="rotate(-12, 400, 300)">
            <rect x="100" y="280" width="600" height="40" fill="url(#steelNavy)" opacity="0.8" rx="2"/>
            <rect x="100" y="280" width="600" height="8" fill="url(#steel3DHighlight)" opacity="0.7" rx="2"/>
            <rect x="100" y="312" width="600" height="8" fill="url(#steel3DShadow)" opacity="0.5" rx="2"/>
          </g>
          
          {/* 3D Steel Panel - Right Side */}
          <g filter="url(#steelShadow)">
            <polygon points="900,50 1200,0 1200,250 850,220" fill="url(#steelNavy)" opacity="0.75"/>
            <polygon points="900,50 1200,0 1200,15 910,60" fill="url(#steel3DHighlight)" opacity="0.7"/>
            <polygon points="850,220 1200,250 1200,235 860,205" fill="url(#steel3DShadow)" opacity="0.5"/>
          </g>
          
          {/* 3D Steel Hexagon - Center */}
          <g filter="url(#steelGlow)" transform="translate(500, 400)">
            <polygon points="60,0 120,35 120,105 60,140 0,105 0,35" fill="url(#steelSapphire)" opacity="0.6"/>
            <polygon points="60,0 120,35 60,50 0,35" fill="url(#steel3DHighlight)" opacity="0.8"/>
            <polygon points="120,35 120,105 60,140 60,50" fill="url(#steel3DShadow)" opacity="0.4"/>
          </g>
          
          {/* 3D Steel Beam - Lower */}
          <g filter="url(#steelShadow)" transform="rotate(8, 800, 600)">
            <rect x="300" y="550" width="800" height="35" fill="url(#steelSapphire)" opacity="0.7" rx="2"/>
            <rect x="300" y="550" width="800" height="7" fill="url(#steel3DHighlight)" opacity="0.8" rx="2"/>
            <rect x="300" y="578" width="800" height="7" fill="url(#steel3DShadow)" opacity="0.5" rx="2"/>
          </g>
          
          {/* 3D Steel Panel - Bottom Left */}
          <g filter="url(#steelShadow)">
            <polygon points="0,500 200,450 250,700 0,700" fill="url(#steelNavy)" opacity="0.7"/>
            <polygon points="0,500 200,450 190,465 10,510" fill="url(#steel3DHighlight)" opacity="0.6"/>
          </g>
          
          {/* 3D Steel Triangle - Right */}
          <g filter="url(#steelShadow)">
            <polygon points="1100,400 1300,350 1250,550" fill="url(#steelSapphire)" opacity="0.65"/>
            <polygon points="1100,400 1300,350 1280,365 1110,410" fill="url(#steel3DHighlight)" opacity="0.7"/>
            <polygon points="1250,550 1300,350 1280,365 1235,530" fill="url(#steel3DShadow)" opacity="0.5"/>
          </g>
          
          {/* Subtle metallic grid overlay */}
          <pattern id="metalGridBlue" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0ea5e9" strokeWidth="0.3" opacity="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#metalGridBlue)" opacity="0.15"/>
        </svg>
        
        {/* Soft light reflection overlay */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 30% 20%, rgba(186,230,253,0.15) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, rgba(14,165,233,0.1) 0%, transparent 40%)`
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-sky-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Fan className="w-10 h-10 text-sky-400 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-lg"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              HVAC Group Global
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-sky-400 transition-colors">Services</a>
            <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-sky-400 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/25">
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hvac-pipes.jpg'), url('https://images.unsplash.com/photo-1615309662243-1a8c5c8d8e8e?w=1920&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.3)'
          }}
        />
        
        {/* Technical Drawing Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />
        
        {/* Animated HVAC Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pipe Lines */}
          <svg className="absolute w-full h-full" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
            <defs>
              <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <path d="M0,200 Q200,150 400,200 T800,200 T1200,200 T1600,200" stroke="url(#pipeGradient)" strokeWidth="3" fill="none" className="animate-pulse"/>
            <path d="M0,400 Q200,350 400,400 T800,400 T1200,400 T1600,400" stroke="url(#pipeGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
            <path d="M0,600 Q200,550 400,600 T800,600 T1200,600 T1600,600" stroke="url(#pipeGradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}/>
          </svg>
          
          {/* Floating Gauges */}
          <div className="absolute top-1/4 left-1/4 opacity-20" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <Gauge className="w-32 h-32 text-sky-400" />
          </div>
          <div className="absolute top-1/3 right-1/4 opacity-20" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
            <Thermometer className="w-24 h-24 text-sky-400" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-sky-400" />
            <span className="text-sky-400 text-sm font-medium">Licensed & Certified HVAC Professionals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
              Advanced Climate
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Control Solutions
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional HVAC services with cutting-edge technology. We design, install, and maintain 
            heating, ventilation, and air conditioning systems for optimal comfort and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:from-sky-400 hover:to-blue-500 transition-all shadow-xl shadow-sky-500/30 flex items-center justify-center gap-2">
              Schedule Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-sky-500/50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-500/10 transition-all flex items-center justify-center gap-2 pulse-border">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-sky-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive HVAC solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeService === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                {/* Technical Drawing Border */}
                <div className="absolute inset-0 border border-sky-500/20 rounded-2xl pulse-border">
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-sky-400 pulse-corner"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-sky-400 pulse-corner"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l border-sky-400 pulse-corner"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-sky-400 pulse-corner"></div>
                </div>

                <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
                  activeService === index ? 'bg-slate-800/80' : 'hover:bg-slate-800/70'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="text-sky-400 w-24 h-24 p-3 bg-sky-500/10 rounded-xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-slate-400 mb-4">{service.description}</p>
                      
                      {/* Interactive Toggle Content */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        activeService === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t border-sky-500/20">
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-slate-300">
                                <Check className="w-5 h-5 text-sky-400" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sky-400 mt-4">
                        <span className="text-sm font-medium">
                          {activeService === index ? 'Click to collapse' : 'Click to expand'}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeService === index ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558358235-a0c9b8e8e8e8?w=1920&q=80')`,
            transform: `translateY(${(scrollY - 1000) * 0.3}px)`
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Engineering Excellence
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                With over 20 years of experience in the HVAC industry, we bring technical expertise 
                and innovative solutions to every project. Our team of certified technicians uses 
                the latest technology to ensure optimal performance and energy efficiency.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20 pulse-border">
                  <div className="text-4xl font-bold text-sky-400 mb-2">500+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20 pulse-border" style={{ animationDelay: '1s' }}>
                  <div className="text-4xl font-bold text-sky-400 mb-2">20+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20 pulse-border" style={{ animationDelay: '2s' }}>
                  <div className="text-4xl font-bold text-sky-400 mb-2">98%</div>
                  <div className="text-slate-400">Client Satisfaction</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20 pulse-border" style={{ animationDelay: '3s' }}>
                  <div className="text-4xl font-bold text-sky-400 mb-2">24/7</div>
                  <div className="text-slate-400">Emergency Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Technical Drawing Frame */}
              <div className="absolute inset-0 border border-sky-500/30 rounded-2xl transform rotate-3 pulse-border"></div>
              <div className="absolute inset-0 border border-sky-500/20 rounded-2xl transform -rotate-3 pulse-border" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/hvac-pipes.jpg"
                    alt="HVAC System"
                    className="w-full h-full object-cover opacity-80"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1615309662243-1a8c5c8d8e8e?w=800&q=80';
                    }}
                  />
                </div>
                
                {/* Technical Annotations */}
                <div className="absolute top-4 right-4 bg-sky-500/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-sky-500/30">
                  <span className="text-sky-400 text-sm font-mono">HVAC-SYS-001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Ready to upgrade your HVAC system? Contact us for a free consultation and quote.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Call Us</div>
                    <div className="text-white font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email Us</div>
                    <div className="text-white font-semibold">info@hvacpro.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Visit Us</div>
                    <div className="text-white font-semibold">123 Industrial Ave, Tech City</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Technical Drawing Border */}
              <div className="absolute inset-0 border border-sky-500/20 rounded-2xl pulse-border">
                <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-sky-400 pulse-corner"></div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-sky-400 pulse-corner"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-sky-400 pulse-corner"></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-sky-400 pulse-corner"></div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-slate-300 mb-2 text-sm">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-700/50 border border-sky-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 text-sm">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-700/50 border border-sky-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 text-sm">Service Needed</label>
                    <select className="w-full bg-slate-700/50 border border-sky-500/20 rounded-xl px-4 py-3 text-white focus:border-sky-500 focus:outline-none transition-colors">
                      <option value="">Select a service</option>
                      <option value="ac">Air Conditioning</option>
                      <option value="heating">Heating Systems</option>
                      <option value="ventilation">Ventilation</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-2 text-sm">Message</label>
                    <textarea 
                      className="w-full bg-slate-700/50 border border-sky-500/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors h-32 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 py-4 rounded-xl font-semibold text-lg hover:from-sky-400 hover:to-blue-500 transition-all shadow-lg shadow-sky-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-sky-500/20 bg-slate-900/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Fan className="w-8 h-8 text-sky-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                HVAC Group Global
              </span>
            </div>
            
            <div className="flex items-center gap-8 text-slate-400">
              <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
            </div>
            
            <div className="text-slate-500 text-sm">
              © 2026 HVAC Group Global. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
