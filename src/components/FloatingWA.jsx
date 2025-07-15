import { motion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'

export function FloatingWhatsApp() {
    const phoneNumber = "+254745506656" 
    const message = "Hello Mercy, I came across your website and would like to chat about..."
    const fullMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href={whatsappLink}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-lg hover:bg-[#128C7E] transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat Now</span>
        </a>
      </motion.div>
    )
}