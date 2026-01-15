import { useState, useEffect } from 'react'
import './App.css'
import { Wind, Thermometer, Wrench, Phone, Mail, MapPin, ChevronDown, Check, ArrowRight, Fan, Gauge, Snowflake, Flame, Shield } from 'lucide-react'

function App() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Snowflake className="w-12 h-12" />,
      title: "Air Conditioning",
      description: "Professional AC installation, repair, and maintenance services for residential and commercial properties.",
      features: ["24/7 Emergency Service", "Energy Efficient Systems", "Smart Thermostat Integration"]
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Heating Systems",
      description: "Complete heating solutions including furnaces, heat pumps, and radiant heating systems.",
      features: ["Furnace Installation", "Heat Pump Services", "Boiler Maintenance"]
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Ventilation",
      description: "Advanced ventilation systems ensuring optimal air quality and circulation throughout your space.",
      features: ["Duct Cleaning", "Air Quality Testing", "Exhaust Systems"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Maintenance",
      description: "Preventive maintenance programs to keep your HVAC systems running at peak efficiency.",
      features: ["Annual Inspections", "Filter Replacement", "System Optimization"]
    }
  ]

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      title: "Commercial Complex",
      category: "Industrial HVAC"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: "Office Building",
      category: "Ventilation System"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      title: "Residential Project",
      category: "Central Air"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Technical Drawing Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0ea5e9" strokeWidth="0.5"/>
            </pattern>
            <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#0ea5e9" strokeWidth="0.3"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="#0ea5e9" strokeWidth="0.3"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="#0ea5e9" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          <rect width="100%" height="100%" fill="url(#circles)"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-sky-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Fan className="w-10 h-10 text-sky-400 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 bg-sky-400/20 rounded-full blur-lg"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              HVAC Pro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-sky-400 transition-colors">Services</a>
            <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
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
            <path d="M0,200 Q200,150 400,200 T800,200 T1200,200 T1600,200" stroke="url(#pipeGradient)" strokeWidth="8" fill="none" className="animate-pulse"/>
            <path d="M0,400 Q200,350 400,400 T800,400 T1200,400 T1600,400" stroke="url(#pipeGradient)" strokeWidth="6" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }}/>
            <path d="M0,600 Q200,550 400,600 T800,600 T1200,600 T1600,600" stroke="url(#pipeGradient)" strokeWidth="4" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}/>
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
            <button className="border-2 border-sky-500/50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-500/10 transition-all flex items-center justify-center gap-2">
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
                <div className="absolute inset-0 border-2 border-sky-500/20 rounded-2xl">
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-sky-500"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-sky-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-sky-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-sky-500"></div>
                </div>

                <div className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
                  activeService === index ? 'bg-slate-800/80' : 'hover:bg-slate-800/70'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="text-sky-400 p-4 bg-sky-500/10 rounded-xl">
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
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20">
                  <div className="text-4xl font-bold text-sky-400 mb-2">500+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20">
                  <div className="text-4xl font-bold text-sky-400 mb-2">20+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20">
                  <div className="text-4xl font-bold text-sky-400 mb-2">98%</div>
                  <div className="text-slate-400">Client Satisfaction</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-sky-500/20">
                  <div className="text-4xl font-bold text-sky-400 mb-2">24/7</div>
                  <div className="text-slate-400">Emergency Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Technical Drawing Frame */}
              <div className="absolute inset-0 border-2 border-sky-500/30 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 border-2 border-sky-500/20 rounded-2xl transform -rotate-3"></div>
              
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful HVAC installations and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-square bg-slate-700 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://placehold.co/600x600/1e293b/0ea5e9?text=HVAC+Project';
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-sky-400 text-sm font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                {/* Technical Corner */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-sky-500/50"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-sky-500/50"></div>
              </div>
            ))}
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
              <div className="absolute inset-0 border-2 border-sky-500/20 rounded-2xl">
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-sky-500"></div>
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-sky-500"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-sky-500"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-sky-500"></div>
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
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                HVAC Pro
              </span>
            </div>
            
            <div className="flex items-center gap-8 text-slate-400">
              <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
            </div>
            
            <div className="text-slate-500 text-sm">
              © 2026 HVAC Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
