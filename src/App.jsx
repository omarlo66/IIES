import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Plane, 
  MapPin, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  ChevronRight,
  Play,
  Phone,
  Mail,
  Globe,
  CheckCircle
} from 'lucide-react'
import './App.css'

// Import drone images
import droneImage1 from './assets/BhGWXZb6B3oJ.jpg'
import droneImage2 from './assets/EV8uiiiiWsx0.jpg'
import droneImage3 from './assets/GhHlDdiZaCGg.jpg'
import droneImage7 from './assets/uLMsDXN6fwwo.jpg'
import droneImage8 from './assets/65tCJLCLRrXM.png'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Aerial & Drone Surveying",
      description: "Professional drone surveying services using DJI Matrice 350 RTK and Mavic 3 multispectral systems"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "GIS Mapping & Analysis",
      description: "Advanced geospatial analysis and mapping solutions for environmental monitoring"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Training & Support",
      description: "Comprehensive drone operation training and ongoing technical support for your team"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Environmental Services",
      description: "Specialized environmental monitoring and analysis using cutting-edge drone technology"
    }
  ]

  const projects = [
    {
      title: "Ministry of Defense UAV Project",
      description: "Supplied and trained 15+ personnel on DJI Matrice 350 RTK and Mavic 3 Pro systems",
      year: "2024"
    },
    {
      title: "Vegetation Cover Monitoring",
      description: "Sabah Al-Ahmad Nature Reserve monitoring using DJI Mavic 3 multispectral",
      year: "2024"
    },
    {
      title: "Shoreline Change Detection",
      description: "Qaruh Island monitoring with high-resolution drone imagery and analysis",
      year: "2024"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: y1 }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </motion.div>

        {/* Floating Drone Images */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 opacity-30"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src={droneImage3} alt="DJI Drone" className="w-full h-full object-contain" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 opacity-20"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <img src={droneImage7} alt="DJI Matrice" className="w-full h-full object-contain" />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
              Official DJI Enterprise Distributor - Kuwait
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            IIES
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl mb-8 text-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Integrated International Environmental Services
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Leading provider of drone technology solutions, environmental services, and geospatial analysis in Kuwait
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Explore Our Services
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive drone solutions and environmental services powered by cutting-edge DJI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-all duration-300 h-full backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-blue-400 mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise in drone technology and environmental monitoring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-600 hover:border-cyan-400 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-cyan-600 text-white">{project.year}</Badge>
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DJI Technology Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Authorized distributor of professional DJI drone systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img 
                  src={droneImage7} 
                  alt="DJI Matrice 350 RTK" 
                  className="w-full h-48 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DJI Matrice 350 RTK</h3>
              <p className="text-gray-400">Professional industrial drone platform</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img 
                  src={droneImage3} 
                  alt="DJI Mavic 3" 
                  className="w-full h-48 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DJI Mavic 3 Multispectral</h3>
              <p className="text-gray-400">Advanced multispectral imaging system</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img 
                  src={droneImage8} 
                  alt="DJI Matrice 300 RTK" 
                  className="w-full h-48 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DJI Matrice 300 RTK</h3>
              <p className="text-gray-400">Enterprise-grade aerial platform</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose IIES?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award className="w-8 h-8" />, title: "Official DJI Partner", desc: "Authorized distributor with full support" },
              { icon: <Users className="w-8 h-8" />, title: "Expert Training", desc: "Comprehensive drone operation training" },
              { icon: <Shield className="w-8 h-8" />, title: "Proven Track Record", desc: "Successful projects across Kuwait" },
              { icon: <Zap className="w-8 h-8" />, title: "Cutting-Edge Technology", desc: "Latest DJI enterprise solutions" },
              { icon: <CheckCircle className="w-8 h-8" />, title: "Full Support", desc: "Ongoing technical assistance" },
              { icon: <Globe className="w-8 h-8" />, title: "Environmental Focus", desc: "Specialized in environmental monitoring" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Take Flight?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact us today to discuss your drone technology needs and environmental monitoring requirements
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 text-lg">
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </Button>
            </div>

            <div className="text-gray-400">
              <p className="mb-2">📍 Kuwait City, Kuwait</p>
              <p className="mb-2">📧 info@iies-kuwait.com</p>
              <p>📞 +965 XXXX XXXX</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Integrated International Environmental Services (IIES). All rights reserved.</p>
          <p className="mt-2">Official DJI Enterprise Distributor - Kuwait</p>
        </div>
      </footer>
    </div>
  )
}

export default App

