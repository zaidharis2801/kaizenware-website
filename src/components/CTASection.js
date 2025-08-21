'use client'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies achieving excellence through continuous improvement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-xl">
              Get a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

