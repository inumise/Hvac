import { useState, useEffect } from 'react'
import './App.css'
import { Thermometer, Phone, Mail, MapPin, ChevronDown, Check, ArrowRight, Fan, Gauge, Shield, Building2, Image } from 'lucide-react'

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

  // Commissioning Schematic - Primary Service
  const CommissioningSchematic = () => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Central control unit */}
      <rect x="25" y="20" width="30" height="40" rx="2" strokeWidth="1.5"/>
      {/* Display screen */}
      <rect x="30" y="25" width="20" height="12" rx="1"/>
      <path d="M33 29 L47 29 M33 32 L44 32" strokeWidth="0.6"/>
      {/* Control buttons */}
      <circle cx="33" cy="45" r="3"/>
      <circle cx="40" cy="45" r="3"/>
      <circle cx="47" cy="45" r="3"/>
      {/* Status LEDs */}
      <circle cx="33" cy="52" r="1.5" fill="currentColor"/>
      <circle cx="40" cy="52" r="1.5" fill="currentColor"/>
      <circle cx="47" cy="52" r="1.5" fill="currentColor"/>
      {/* Connection lines to systems */}
      <path d="M25 30 L10 30 L10 15" strokeWidth="1"/>
      <path d="M25 40 L5 40" strokeWidth="1"/>
      <path d="M25 50 L10 50 L10 65" strokeWidth="1"/>
      <path d="M55 30 L70 30 L70 15" strokeWidth="1"/>
      <path d="M55 40 L75 40" strokeWidth="1"/>
      <path d="M55 50 L70 50 L70 65" strokeWidth="1"/>
      {/* System endpoints */}
      <rect x="5" y="10" width="10" height="8" rx="1"/>
      <rect x="0" y="37" width="8" height="6" rx="1"/>
      <rect x="5" y="62" width="10" height="8" rx="1"/>
      <rect x="65" y="10" width="10" height="8" rx="1"/>
      <rect x="72" y="37" width="8" height="6" rx="1"/>
      <rect x="65" y="62" width="10" height="8" rx="1"/>
      {/* Checkmark for verification */}
      <path d="M36 35 L39 38 L45 30" strokeWidth="1.5" stroke="#0ea5e9"/>
    </svg>
  )

  // BMS (Building Management System) Schematic
  const BMSSchematic = () => (
    <svg viewBox="0 0 80 80" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Central hub */}
      <circle cx="40" cy="40" r="12" strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="8"/>
      <text x="40" y="43" fontSize="6" fill="currentColor" textAnchor="middle" stroke="none">BMS</text>
      {/* Connected nodes */}
      <circle cx="15" cy="20" r="6"/>
      <circle cx="65" cy="20" r="6"/>
      <circle cx="15" cy="60" r="6"/>
      <circle cx="65" cy="60" r="6"/>
      {/* Connection lines */}
      <path d="M28 35 L20 25" strokeWidth="1"/>
      <path d="M52 35 L60 25" strokeWidth="1"/>
      <path d="M28 45 L20 55" strokeWidth="1"/>
      <path d="M52 45 L60 55" strokeWidth="1"/>
      {/* Data flow indicators */}
      <path d="M22 22 L26 26" strokeWidth="0.8" strokeDasharray="2,1"/>
      <path d="M54 26 L58 22" strokeWidth="0.8" strokeDasharray="2,1"/>
      {/* Sensor icons in nodes */}
      <path d="M13 18 L17 22 M13 22 L17 18" strokeWidth="0.8"/>
      <rect x="63" y="18" width="4" height="4" rx="0.5"/>
      <path d="M14 58 L16 62 M14 62 L16 58" strokeWidth="0.8"/>
      <circle cx="65" cy="60" r="2"/>
    </svg>
  )

  const services = [
    {
      icon: <CommissioningSchematic />,
      title: "HVAC Commissioning",
      description: "Expert system commissioning ensuring optimal performance, energy efficiency, and compliance with design specifications from day one.",
      features: ["Performance Verification", "System Optimization", "Compliance Documentation", "Energy Benchmarking"]
    },
    {
      icon: <ACSchematic />,
      title: "Cooling Technologies",
      description: "Advanced air conditioning and refrigeration systems utilizing cutting-edge technology for maximum efficiency and environmental sustainability.",
      features: ["VRF/VRV Systems", "Chiller Plant Design", "Precision Cooling", "Heat Recovery Integration"]
    },
    {
      icon: <HeatingSchematic />,
      title: "Heating Technologies",
      description: "Innovative heating solutions incorporating heat pumps, radiant systems, and hybrid technologies for optimal thermal comfort.",
      features: ["Heat Pump Systems", "Radiant Heating", "Hybrid Solutions", "Geothermal Integration"]
    },
    {
      icon: <VentilationSchematic />,
      title: "Ventilation & IAQ",
      description: "State-of-the-art ventilation and indoor air quality systems designed for health, comfort, and energy efficiency.",
      features: ["Heat Recovery Ventilation", "Demand Control", "Air Purification", "CO2 Monitoring"]
    },
    {
      icon: <BMSSchematic />,
      title: "BMS Integration",
      description: "Comprehensive Building Management System integration for centralized control, monitoring, and optimization of all HVAC systems.",
      features: ["Central Monitoring", "Predictive Analytics", "Remote Access", "Energy Management"]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* High-Quality 3D Stainless Steel Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Base gradient - dark steel to gunmetal */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(145deg, 
            #1a1a1a 0%, 
            #2d2d2d 10%, 
            #3d3d3d 20%, 
            #4a4a4a 30%, 
            #5a5a5a 40%, 
            #4a4a4a 50%, 
            #3d3d3d 60%, 
            #2d2d2d 75%, 
            #1a1a1a 90%, 
            #0f0f0f 100%)`
        }}></div>
        
        {/* Stainless steel brushed texture overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent 0px,
            rgba(255,255,255,0.03) 1px,
            transparent 2px,
            transparent 4px
          )`
        }}></div>
        
        {/* Metallic sheen - top light source */}
        <div className="absolute inset-0 opacity-50" style={{
          background: `linear-gradient(165deg, 
            rgba(255,255,255,0.25) 0%, 
            rgba(200,200,200,0.15) 10%, 
            rgba(150,150,150,0.08) 20%, 
            transparent 35%, 
            rgba(0,0,0,0.1) 60%, 
            rgba(0,0,0,0.25) 100%)`
        }}></div>
        
        {/* High-Quality 3D Steel Shapes with Anti-Aliasing */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ shapeRendering: 'geometricPrecision' }}>
          <defs>
            {/* Polished stainless steel gradient - bright */}
            <linearGradient id="stainlessPolished" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0f0f0"/>
              <stop offset="8%" stopColor="#e0e0e0"/>
              <stop offset="15%" stopColor="#d0d0d0"/>
              <stop offset="25%" stopColor="#c0c0c0"/>
              <stop offset="35%" stopColor="#b0b0b0"/>
              <stop offset="45%" stopColor="#a0a0a0"/>
              <stop offset="55%" stopColor="#909090"/>
              <stop offset="65%" stopColor="#808080"/>
              <stop offset="75%" stopColor="#707070"/>
              <stop offset="85%" stopColor="#606060"/>
              <stop offset="95%" stopColor="#505050"/>
              <stop offset="100%" stopColor="#404040"/>
            </linearGradient>
            
            {/* Brushed steel gradient - darker */}
            <linearGradient id="steelBrushed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#909090"/>
              <stop offset="10%" stopColor="#808080"/>
              <stop offset="20%" stopColor="#707070"/>
              <stop offset="35%" stopColor="#606060"/>
              <stop offset="50%" stopColor="#707070"/>
              <stop offset="65%" stopColor="#585858"/>
              <stop offset="80%" stopColor="#484848"/>
              <stop offset="90%" stopColor="#383838"/>
              <stop offset="100%" stopColor="#282828"/>
            </linearGradient>
            
            {/* Gunmetal gradient */}
            <linearGradient id="gunmetalSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a5568"/>
              <stop offset="15%" stopColor="#3d4654"/>
              <stop offset="30%" stopColor="#2d3748"/>
              <stop offset="50%" stopColor="#3d4654"/>
              <stop offset="70%" stopColor="#2d3748"/>
              <stop offset="85%" stopColor="#1a202c"/>
              <stop offset="100%" stopColor="#171923"/>
            </linearGradient>
            
            {/* 3D highlight - polished edge */}
            <linearGradient id="steelHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
              <stop offset="10%" stopColor="#f5f5f5" stopOpacity="0.7"/>
              <stop offset="30%" stopColor="#e0e0e0" stopOpacity="0.5"/>
              <stop offset="50%" stopColor="#c0c0c0" stopOpacity="0.3"/>
              <stop offset="70%" stopColor="#a0a0a0" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#808080" stopOpacity="0.05"/>
            </linearGradient>
            
            {/* 3D shadow - beveled edge */}
            <linearGradient id="steelShadowGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.9"/>
              <stop offset="20%" stopColor="#252525" stopOpacity="0.7"/>
              <stop offset="40%" stopColor="#303030" stopOpacity="0.5"/>
              <stop offset="60%" stopColor="#404040" stopOpacity="0.3"/>
              <stop offset="80%" stopColor="#505050" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#606060" stopOpacity="0.05"/>
            </linearGradient>
            
            {/* Reflection gradient for mirror effect */}
            <linearGradient id="steelReflection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25"/>
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </linearGradient>
            
            {/* High-quality drop shadow filter */}
            <filter id="steelDropShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur"/>
              <feOffset dx="6" dy="6" result="offsetBlur"/>
              <feFlood floodColor="#000000" floodOpacity="0.5"/>
              <feComposite in2="offsetBlur" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Inner bevel filter for 3D depth */}
            <filter id="steelBevel" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lightingColor="#ffffff" result="specOut">
                <fePointLight x="-5000" y="-10000" z="20000"/>
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
            </filter>
            
            {/* Ambient occlusion filter */}
            <filter id="ambientOcclusion" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
              <feOffset dx="2" dy="2" result="offsetBlur"/>
              <feFlood floodColor="#000000" floodOpacity="0.3"/>
              <feComposite in2="offsetBlur" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Large 3D Steel Panel - Top Left */}
          <g filter="url(#steelDropShadow)">
            <polygon points="0,0 400,0 320,200 0,170" fill="url(#stainlessPolished)" opacity="0.85"/>
            <polygon points="0,0 400,0 385,25 15,25" fill="url(#steelHighlight)" opacity="0.9"/>
            <polygon points="320,200 400,0 385,25 305,175" fill="url(#steelShadowGrad)" opacity="0.8"/>
            <polygon points="0,0 400,0 320,200 0,170" fill="url(#steelReflection)" opacity="0.3"/>
          </g>
          
          {/* 3D Steel I-Beam - Diagonal */}
          <g filter="url(#steelDropShadow)" transform="rotate(-10, 450, 320)">
            <rect x="80" y="300" width="700" height="50" fill="url(#steelBrushed)" opacity="0.9" rx="1"/>
            <rect x="80" y="300" width="700" height="12" fill="url(#steelHighlight)" opacity="0.85" rx="1"/>
            <rect x="80" y="338" width="700" height="12" fill="url(#steelShadowGrad)" opacity="0.7" rx="1"/>
            <rect x="80" y="312" width="700" height="26" fill="url(#steelReflection)" opacity="0.2"/>
          </g>
          
          {/* 3D Steel Panel - Right Side */}
          <g filter="url(#steelDropShadow)">
            <polygon points="850,30 1250,0 1250,280 800,240" fill="url(#gunmetalSteel)" opacity="0.9"/>
            <polygon points="850,30 1250,0 1235,20 865,48" fill="url(#steelHighlight)" opacity="0.85"/>
            <polygon points="800,240 1250,280 1235,260 815,222" fill="url(#steelShadowGrad)" opacity="0.7"/>
            <polygon points="850,30 1250,0 1250,280 800,240" fill="url(#steelReflection)" opacity="0.25"/>
          </g>
          
          {/* 3D Steel Hexagonal Bolt - Center */}
          <g filter="url(#steelBevel)" transform="translate(520, 380)">
            <polygon points="70,0 140,40 140,120 70,160 0,120 0,40" fill="url(#stainlessPolished)" opacity="0.8"/>
            <polygon points="70,0 140,40 70,60 0,40" fill="url(#steelHighlight)" opacity="0.9"/>
            <polygon points="140,40 140,120 70,160 70,60" fill="url(#steelShadowGrad)" opacity="0.6"/>
            <circle cx="70" cy="80" r="25" fill="url(#gunmetalSteel)" opacity="0.9"/>
            <circle cx="70" cy="80" r="20" fill="url(#steelBrushed)" opacity="0.8"/>
            <ellipse cx="70" cy="72" rx="12" ry="6" fill="url(#steelHighlight)" opacity="0.5"/>
          </g>
          
          {/* 3D Steel Beam - Lower */}
          <g filter="url(#steelDropShadow)" transform="rotate(6, 850, 620)">
            <rect x="250" y="580" width="900" height="45" fill="url(#stainlessPolished)" opacity="0.85" rx="1"/>
            <rect x="250" y="580" width="900" height="10" fill="url(#steelHighlight)" opacity="0.9" rx="1"/>
            <rect x="250" y="615" width="900" height="10" fill="url(#steelShadowGrad)" opacity="0.7" rx="1"/>
            <rect x="250" y="590" width="900" height="25" fill="url(#steelReflection)" opacity="0.2"/>
          </g>
          
          {/* 3D Steel Panel - Bottom Left */}
          <g filter="url(#ambientOcclusion)">
            <polygon points="0,480 230,420 290,750 0,750" fill="url(#steelBrushed)" opacity="0.85"/>
            <polygon points="0,480 230,420 215,440 15,495" fill="url(#steelHighlight)" opacity="0.8"/>
            <polygon points="230,420 290,750 270,730 215,440" fill="url(#steelShadowGrad)" opacity="0.65"/>
          </g>
          
          {/* 3D Steel Triangle Plate - Right */}
          <g filter="url(#steelDropShadow)">
            <polygon points="1050,380 1300,320 1240,580" fill="url(#gunmetalSteel)" opacity="0.85"/>
            <polygon points="1050,380 1300,320 1280,340 1065,395" fill="url(#steelHighlight)" opacity="0.85"/>
            <polygon points="1240,580 1300,320 1280,340 1225,560" fill="url(#steelShadowGrad)" opacity="0.7"/>
            <polygon points="1050,380 1300,320 1240,580" fill="url(#steelReflection)" opacity="0.2"/>
          </g>
          
          {/* Additional detail - small steel rivets */}
          <g opacity="0.7">
            <circle cx="150" cy="80" r="8" fill="url(#stainlessPolished)"/>
            <circle cx="150" cy="80" r="6" fill="url(#steelBrushed)"/>
            <ellipse cx="148" cy="77" rx="3" ry="2" fill="url(#steelHighlight)" opacity="0.8"/>
            
            <circle cx="280" cy="120" r="8" fill="url(#stainlessPolished)"/>
            <circle cx="280" cy="120" r="6" fill="url(#steelBrushed)"/>
            <ellipse cx="278" cy="117" rx="3" ry="2" fill="url(#steelHighlight)" opacity="0.8"/>
            
            <circle cx="1100" cy="150" r="8" fill="url(#stainlessPolished)"/>
            <circle cx="1100" cy="150" r="6" fill="url(#steelBrushed)"/>
            <ellipse cx="1098" cy="147" rx="3" ry="2" fill="url(#steelHighlight)" opacity="0.8"/>
            
            <circle cx="1180" cy="200" r="8" fill="url(#stainlessPolished)"/>
            <circle cx="1180" cy="200" r="6" fill="url(#steelBrushed)"/>
            <ellipse cx="1178" cy="197" rx="3" ry="2" fill="url(#steelHighlight)" opacity="0.8"/>
          </g>
          
          {/* Fine metallic grid overlay */}
          <pattern id="metalGridSteel" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#606060" strokeWidth="0.5" opacity="0.4"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#metalGridSteel)" opacity="0.1"/>
        </svg>
        
        {/* Soft ambient light reflection */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 25% 15%, rgba(255,255,255,0.12) 0%, transparent 45%),
                       radial-gradient(ellipse at 75% 85%, rgba(100,100,100,0.08) 0%, transparent 35%)`
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Fan className="w-10 h-10 text-slate-400 animate-spin" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-0 bg-slate-500/10 rounded-full blur-lg"></div>
            </div>
            <span 
              className="text-xl font-bold"
              style={{
                background: `linear-gradient(135deg, #d0d0d0 0%, #a0a0a0 50%, #808080 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              HVAC Group Global
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-400 hover:text-slate-200 transition-colors">Services</a>
            <a href="#about" className="text-slate-400 hover:text-slate-200 transition-colors">About</a>
            <a href="#partners" className="text-slate-400 hover:text-slate-200 transition-colors">Partners</a>
            <a href="#contact" className="text-slate-400 hover:text-slate-200 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-slate-600 to-slate-700 px-6 py-2 rounded-lg font-semibold text-slate-200 hover:from-slate-500 hover:to-slate-600 transition-all border border-slate-500/30">
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Semi-transparent overlay to let 3D steel background show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/60" />
        
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
          <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-600/40 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-slate-300" />
            <span className="text-slate-300 text-sm font-medium">HVAC Technology Innovation & Knowledge Exchange</span>
          </div>
          
          {/* Hyper-realistic metallic title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span 
              className="inline-block"
              style={{
                background: `linear-gradient(135deg, 
                  #f8f8f8 0%, 
                  #e8e8e8 10%, 
                  #d0d0d0 20%, 
                  #f0f0f0 30%, 
                  #c8c8c8 40%, 
                  #e0e0e0 50%, 
                  #b8b8b8 60%, 
                  #d8d8d8 70%, 
                  #c0c0c0 80%, 
                  #a8a8a8 90%, 
                  #909090 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                textShadow: '0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              Engineering Tomorrow's
            </span>
            <br />
            <span 
              className="inline-block"
              style={{
                background: `linear-gradient(135deg, 
                  #e0e0e0 0%, 
                  #c0c0c0 15%, 
                  #a0a0a0 30%, 
                  #c8c8c8 45%, 
                  #909090 60%, 
                  #b0b0b0 75%, 
                  #808080 90%, 
                  #707070 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
              }}
            >
              Climate Systems
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Pioneering HVAC innovation through advanced commissioning, cutting-edge technology integration, 
            and knowledge exchange. We transform complex climate challenges into efficient, sustainable solutions 
            for industrial and commercial environments across Europe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-slate-600 to-slate-700 px-8 py-4 rounded-xl font-semibold text-lg text-slate-200 hover:from-slate-500 hover:to-slate-600 transition-all border border-slate-500/30 flex items-center justify-center gap-2">
              Start Partnership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-slate-600/50 px-8 py-4 rounded-xl font-semibold text-lg text-slate-300 hover:bg-slate-700/30 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Us
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
              <span 
                style={{
                  background: `linear-gradient(135deg, 
                    #e8e8e8 0%, 
                    #d0d0d0 20%, 
                    #b8b8b8 40%, 
                    #d8d8d8 60%, 
                    #c0c0c0 80%, 
                    #a8a8a8 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                }}
              >
                Technology & Innovation
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Advanced HVAC solutions driven by innovation and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeService === index ? 'scale-[1.02]' : ''
                }`}
                onClick={() => setActiveService(activeService === index ? null : index)}
              >
                {/* Softer Technical Drawing Border */}
                <div className="absolute inset-0 border border-slate-600/30 rounded-2xl">
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-slate-500/50"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-slate-500/50"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l border-slate-500/50"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-slate-500/50"></div>
                </div>

                <div className={`bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
                  activeService === index ? 'bg-slate-800/60' : 'hover:bg-slate-800/50'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="text-slate-400 w-24 h-24 p-3 bg-slate-700/30 rounded-xl flex-shrink-0 border border-slate-600/20">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                      <p className="text-slate-400 mb-4">{service.description}</p>
                      
                      {/* Interactive Toggle Content */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        activeService === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-4 border-t border-slate-600/30">
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-slate-400">
                                <Check className="w-5 h-5 text-slate-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-500 mt-4">
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
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558358235-a0c9b8e8e8e8?w=1920&q=80')`,
            transform: `translateY(${(scrollY - 1000) * 0.3}px)`
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span 
                  style={{
                    background: `linear-gradient(135deg, 
                      #e8e8e8 0%, 
                      #d0d0d0 20%, 
                      #b8b8b8 40%, 
                      #d8d8d8 60%, 
                      #c0c0c0 80%, 
                      #a8a8a8 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                  }}
                >
                  Knowledge Exchange
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                As innovators in HVAC technology, we share our expertise through comprehensive knowledge exchange 
                programs. Our team brings cutting-edge solutions and technical insights to transform how 
                industrial and commercial facilities approach climate control systems.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-600/30">
                  <div className="text-4xl font-bold text-slate-300 mb-2">500+</div>
                  <div className="text-slate-500">Systems Commissioned</div>
                </div>
                <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-600/30">
                  <div className="text-4xl font-bold text-slate-300 mb-2">20+</div>
                  <div className="text-slate-500">Years Innovation</div>
                </div>
                <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-600/30">
                  <div className="text-4xl font-bold text-slate-300 mb-2">15</div>
                  <div className="text-slate-500">Countries Served</div>
                </div>
                <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-600/30">
                  <div className="text-4xl font-bold text-slate-300 mb-2">ISO</div>
                  <div className="text-slate-500">Certified Standards</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Photo Gallery - HVAC Commissioning & Tech Sheets */}
              <div className="grid grid-cols-2 gap-4">
                {/* Commissioning Photo 1 */}
                <div className="relative group overflow-hidden rounded-xl border border-slate-600/30">
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                    alt="HVAC Commissioning - Control Panel"
                    className="w-full h-40 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3">
                    <span className="text-slate-300 text-xs font-mono">COMM-001</span>
                  </div>
                </div>
                
                {/* Tech Sheet Photo 2 */}
                <div className="relative group overflow-hidden rounded-xl border border-slate-600/30">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                    alt="Technical Documentation"
                    className="w-full h-40 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3">
                    <span className="text-slate-300 text-xs font-mono">TECH-DOC-002</span>
                  </div>
                </div>
                
                {/* Commissioning Photo 3 */}
                <div className="relative group overflow-hidden rounded-xl border border-slate-600/30">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                    alt="HVAC System Installation"
                    className="w-full h-40 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3">
                    <span className="text-slate-300 text-xs font-mono">INST-003</span>
                  </div>
                </div>
                
                {/* Tech Sheet Photo 4 */}
                <div className="relative group overflow-hidden rounded-xl border border-slate-600/30">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80"
                    alt="Climate Control Systems"
                    className="w-full h-40 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3">
                    <span className="text-slate-300 text-xs font-mono">SYS-004</span>
                  </div>
                </div>
              </div>
              
              {/* Gallery Label */}
              <div className="mt-4 text-center">
                <span className="text-slate-500 text-sm flex items-center justify-center gap-2">
                  <Image className="w-4 h-4" />
                  Commissioning & Technical Documentation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span 
                style={{
                  background: `linear-gradient(135deg, 
                    #e8e8e8 0%, 
                    #d0d0d0 20%, 
                    #b8b8b8 40%, 
                    #d8d8d8 60%, 
                    #c0c0c0 80%, 
                    #a8a8a8 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                }}
              >
                Industrial Partners
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Collaborating with leading Czech industrial companies to deliver comprehensive HVAC solutions across Europe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Partner 1 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all group">
              <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 border border-slate-600/30 group-hover:border-slate-500/50 transition-all">
                <Building2 className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">Desert Bemedlak s.r.o.</h3>
              <p className="text-slate-500 text-sm mb-4">Industrial HVAC Solutions</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Specialized in large-scale industrial climate control systems for manufacturing facilities and warehouses.
              </p>
            </div>
            
            {/* Partner 2 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all group">
              <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 border border-slate-600/30 group-hover:border-slate-500/50 transition-all">
                <Building2 className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">Afri Company s.r.o.</h3>
              <p className="text-slate-500 text-sm mb-4">Climate Technology</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Innovative climate technology solutions with focus on energy efficiency and sustainable building systems.
              </p>
            </div>
            
            {/* Partner 3 */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all group">
              <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 border border-slate-600/30 group-hover:border-slate-500/50 transition-all">
                <Building2 className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">HVAC Group Global s.r.o.</h3>
              <p className="text-slate-500 text-sm mb-4">Commissioning & Consulting</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expert HVAC commissioning services and technical consulting for complex climate control projects.
              </p>
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
                <span 
                  style={{
                    background: `linear-gradient(135deg, 
                      #e8e8e8 0%, 
                      #d0d0d0 20%, 
                      #b8b8b8 40%, 
                      #d8d8d8 60%, 
                      #c0c0c0 80%, 
                      #a8a8a8 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'
                  }}
                >
                  Partner With Us
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Connect with our team for HVAC commissioning, technology consulting, and knowledge exchange partnerships.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center border border-slate-600/20">
                    <Phone className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Call Us</div>
                    <div className="text-slate-300 font-semibold">+420 123 456 789</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center border border-slate-600/20">
                    <Mail className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Email Us</div>
                    <div className="text-slate-300 font-semibold">info@hvacgroup.cz</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center border border-slate-600/20">
                    <MapPin className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">Headquarters</div>
                    <div className="text-slate-300 font-semibold">Prague, Czech Republic</div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="relative">
              {/* Technical Drawing Border */}
              <div className="absolute inset-0 border border-slate-600/30 rounded-2xl">
                <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-slate-500/50"></div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-slate-500/50"></div>
                <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-slate-500/50"></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-slate-500/50"></div>
              </div>
              
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-slate-400 mb-2 text-sm">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-700/30 border border-slate-600/30 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-slate-500 focus:outline-none transition-colors"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2 text-sm">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-700/30 border border-slate-600/30 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-slate-500 focus:outline-none transition-colors"
                      placeholder="jan@company.cz"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2 text-sm">Service Needed</label>
                    <select className="w-full bg-slate-700/30 border border-slate-600/30 rounded-xl px-4 py-3 text-slate-200 focus:border-slate-500 focus:outline-none transition-colors">
                      <option value="">Select a service</option>
                      <option value="commissioning">HVAC Commissioning</option>
                      <option value="cooling">Cooling Technologies</option>
                      <option value="heating">Heating Technologies</option>
                      <option value="ventilation">Ventilation & IAQ</option>
                      <option value="bms">BMS Integration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-2 text-sm">Message</label>
                    <textarea 
                      className="w-full bg-slate-700/30 border border-slate-600/30 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:border-slate-500 focus:outline-none transition-colors h-32 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-600 to-slate-700 py-4 rounded-xl font-semibold text-lg text-slate-200 hover:from-slate-500 hover:to-slate-600 transition-all border border-slate-500/30"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700/50 bg-slate-900/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Fan className="w-8 h-8 text-slate-500" />
              <span 
                className="text-lg font-bold"
                style={{
                  background: `linear-gradient(135deg, #c0c0c0 0%, #909090 50%, #707070 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                HVAC Group Global
              </span>
            </div>
            
            <div className="flex items-center gap-8 text-slate-500">
              <a href="#services" className="hover:text-slate-300 transition-colors">Services</a>
              <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
              <a href="#partners" className="hover:text-slate-300 transition-colors">Partners</a>
              <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
            </div>
            
            <div className="text-slate-600 text-sm">
              © 2026 HVAC Group Global s.r.o. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
