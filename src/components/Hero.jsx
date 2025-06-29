import { motion } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#001D53] to-[#50E14C] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/assets/1.jpg" 
          alt="Mercy Nzuki" 
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#001D53]/70"></div>
      </div>
      
      {/* Hero content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 text-center text-white max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-start md:text-center">
          Transforming Minds, <span className="text-[#50E14C]">One Conversation</span> at a Time
        </h1>
        <p className="text-xl md:text-2xl mb-8 md:text-center text-start font-san-serif">
          Mental Health Advocate. Psychologist. Speaker.
        </p>
        
        <div className="flex flex-row text-xs sm:flex-row gap-4 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/services" 
            className="bg-[#00AEEF] hover:bg-[#0085bf] text-[#001D53] font-bold py-3 px-6 rounded-full flex items-center gap-2"
          >
            Explore My Work <ArrowRight size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
          >
            Book Me <Mic size={20} />
          </motion.a>
        </div>
      </motion.div>
      
      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-[#50E14C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}