'use client'
import { motion } from 'framer-motion'
import { Workflow, Cloud, Users, Brain, Cog, Database } from 'lucide-react'

const solutions = [
  {
    icon: Workflow,
    title: 'n8n Automation Workflows',
    description: 'Build powerful automation workflows with n8n. Connect hundreds of apps and services, create complex logic flows, and automate repetitive tasks without writing code.',
    features: ['Visual workflow builder', 'API integrations', 'Custom webhooks', 'Scheduled triggers']
  },
  {
    icon: Cloud,
    title: 'Custom Micro-SaaS Development',
    description: 'We design, develop, and deploy tailored micro-SaaS solutions that solve specific business problems. From concept to cloud deployment, we handle everything.',
    features: ['Rapid prototyping', 'Scalable architecture', 'Cloud deployment', 'Ongoing maintenance']
  },
  {
    icon: Users,
    title: 'CRM Automation',
    description: 'Transform your CRM into an intelligent system. Automate lead scoring, follow-ups, data entry, and customer journey mapping across any CRM platform.',
    features: ['Lead automation', 'Pipeline management', 'Email sequences', 'Data synchronization']
  },
  {
    icon: Brain,
    title: 'LLM Integration',
    description: 'Integrate cutting-edge AI models into your workflows. From ChatGPT to Claude, we embed intelligence into your processes for smarter automation.',
    features: ['Custom AI agents', 'Natural language processing', 'Content generation', 'Intelligent routing']
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Solutions That Scale With You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From workflow automation to custom micro-SaaS development, we provide end-to-end solutions 
            that continuously improve your business operations.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                </div>
              </div>
              <div className="ml-18">
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
        >
        <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let&apos;s discuss how our automation solutions can transform your workflows and boost productivity.
        </p>
          <button className="gradient-bg text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
