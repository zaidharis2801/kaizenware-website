'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero({ onContactClick }) {
  const scrollToSolutions = () => {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-4">
              Continuous Innovation Through AI Automation
            </h1>
            <p className="text-xl text-gray-600 mb-2">改善 - Small Steps, Giant Leaps</p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Transform your business with intelligent micro-SaaS solutions and n8n automation workflows. 
              We build, deploy, and optimize custom automations that integrate seamlessly with your CRM 
              and leverage cutting-edge LLM technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToSolutions}
                className="gradient-bg text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl animate-pulse"></div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-64 h-64 border-4 border-purple-300 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 border-4 border-blue-300 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 border-4 border-green-300 rounded-full"
              ></motion.div>
              <Sparkles className="w-16 h-16 text-purple-600" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}