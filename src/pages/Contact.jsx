import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }
    , [])
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#001D53] to-[#001D53]/90">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-[#50E14C] rounded-full flex items-center justify-center">
              <Send className="text-white" size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-[#50E14C]">Connect</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Reach out for speaking engagements, media inquiries, or mental health consultations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#001D53] mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#50E14C]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#50E14C]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001D53] mb-1">Email</h3>
                    <a href="mailto:nzukimercy@gmail.com" className="text-gray-600 hover:text-[#00AEEF]">
                      nzukimercy@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Typically responds within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00AEEF]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#00AEEF]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001D53] mb-1">Phone</h3>
                    <a href="tel:+254700000000" className="text-gray-600 hover:text-[#00AEEF]">
                      +254 700 000 000
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#FF6B35]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001D53] mb-1">Location</h3>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-500 mt-1">Available for in-person and virtual engagements worldwide</p>
                  </div>
                </div>

                
            

              
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#001D53] mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50E14C] focus:border-[#50E14C] outline-none transition"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50E14C] focus:border-[#50E14C] outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50E14C] focus:border-[#50E14C] outline-none transition"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media Inquiry</option>
                    <option value="consultation">Mental Health Consultation</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#50E14C] focus:border-[#50E14C] outline-none transition"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#50E14C] hover:bg-[#3FB83A] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-[#001D53]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#50E14C] rounded-full flex items-center justify-center">
              <MessageSquare className="text-white" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-[#001D53] mb-6">Ready to Start the Conversation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book Mercy directly for speaking engagements or mental health consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="bg-[#50E14C] hover:bg-[#3FB83A] text-white font-bold py-3 px-8 rounded-full"
              >
                Book a Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="bg-[#001D53] hover:bg-[#001D53]/90 text-white font-bold py-3 px-8 rounded-full"
              >
                Request Speaker Info
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}