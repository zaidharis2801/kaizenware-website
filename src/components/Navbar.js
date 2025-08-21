'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-white font-bold">改</span>
            </div>
            <span className="text-2xl font-bold gradient-text">KaizenWare</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-purple-600 transition-colors">
              Solutions
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <button className="gradient-bg text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}