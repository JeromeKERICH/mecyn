import { motion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'

export function FloatingWhatsApp() {
  const phoneNumber = "+254700000000" // Replace with Mercy's actual WhatsApp number
  const message = "Hello%20Mercy,%20I%20came%20across%20your%20website%20and%20would%20like%20to%20chat%20about..." // Pre-filled message (URL encoded)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
    
<a
  href={`https://wa.me/254729353537`}
  className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-lg hover:bg-[#128C7E] transition-colors"
>
  <MessageSquare className="w-5 h-5" />
  <span>Chat Now</span>
</a>


    </motion.div>
  )
}