'use client'
import { motion } from 'framer-motion'
import { Bot, RefreshCw, Zap, BarChart3, Link2, Rocket } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Automation',
    description: 'Deploy intelligent agents that learn and improve from every interaction, automating complex workflows with precision.'
  },
  {
    icon: RefreshCw,
    title: 'Iterative Optimization',
    description: 'Our systems continuously analyze performance metrics and automatically implement micro-improvements.'
  },
  {
    icon: Zap,
    title: 'Micro-SaaS Suite',
    description: 'Specialized tools designed for specific tasks, working in harmony to create a comprehensive ecosystem.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor every improvement with detailed dashboards that showcase cumulative impact.'
  },
  {
    icon: Link2,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows. Our solutions adapt to your ecosystem.'
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    description: 'Start small, grow infinitely. Our platform scales with your ambitions.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Evolving Solutions for Modern Challenges
          </h2>
          <p className="text-xl text-gray-600">
            Every improvement matters. Every automation counts.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-600"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
