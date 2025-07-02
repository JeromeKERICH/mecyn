import { motion } from 'framer-motion'
import { HeartPulse, Sparkles, Shield, Mic } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-5 md:py-10 bg-gradient-to-r from-[#001D53] to-[#001D53]/90 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Story Behind <span className="text-[#50E14C]">the Voice</span>
              </h1>
              <p className="text-xl mb-8">
                I am a Psychologist. The Mind Advocate. Changemaker. <br/> Meet Me beyond the microphone.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="/assets/2.jpg" 
                alt="Mercy Nzuki speaking passionately" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#50E14C] p-4 rounded-lg shadow-lg">
                <Mic size={32} className="text-[#001D53]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="My Journey" 
            subtitle="From curiosity to calling - the path that led me to mental health advocacy" 
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg"
              >
                My fascination with human behavior began in childhood, observing how people responded differently to life's challenges. 
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg"
              >
                During my psychology studies at the Daystar University, I witnessed firsthand how mental health struggles were silently crippling bright minds around me. The turning point came when I lost a classmate to depression.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg"
              >
                That tragedy ignited my mission to make mental health conversations accessible, especially for young people who often suffer in silence.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="/assets/13.jpg" 
                alt="Mercy as a student" 
                className="rounded-lg shadow-md h-64 w-full object-cover border-2 border-[#001D53]/10"
              />
              <img 
                src="/assets/4.jpg" 
                alt="Mercy speaking to youth" 
                className="rounded-lg shadow-md h-64 w-full object-cover border-2 border-[#001D53]/10"
              />
              
            </motion.div>
          </div>
        </div>
    </section>

      {/* Quote Section */}
      <section className="py-5 bg-[#001D53]/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <blockquote className="text-2xl md:text-3xl font-medium text-[#001D53]">
              "Mental health is not a side note in life, it's the heartbeat of every dream we dare to chase."
            </blockquote>
            <div className="w-24 h-1 bg-[#50E14C] mx-auto"></div>
            
          </motion.div>
        </div>
      </section>
    </div>
  )
}