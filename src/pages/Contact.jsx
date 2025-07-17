import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format the message for WhatsApp
        const whatsappMessage = 
            `New Contact Form Submission:\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Subject:* ${formData.subject}\n` +
            `*Message:* ${formData.message}`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL (using your phone number from earlier)
        const whatsappUrl = `https://wa.me/254745506656?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="bg-white">
           <section className="relative py-20 bg-gradient-to-r from-[#001D53] to-[#001D53]/90">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
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
        <div className="container mx-auto max-w-6xl px-4">
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
                    <a href="mailto:mercy.nzuki33@gmail.com" className="text-gray-600 hover:text-[#00AEEF]">
                      mercy.nzuki33@gmail.com
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
                    <a href="tel:+254745506656" className="text-gray-600 hover:text-[#00AEEF]">
                      +254 745 506 656
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
                    
                  </div>
                </div>

                
            

              
              </div>
            </div>
            
            {/* Updated Contact Form */}
            <div>
                <h2 className="text-3xl font-bold text-[#001D53] mb-6">Send a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                            value={formData.subject}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
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
                        
                        Send via WhatsApp
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
            
            <h2 className="text-3xl font-bold text-[#001D53] mb-6">Ready to Start the Conversation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book Mercy directly for speaking engagements or mental health consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://calendly.com/mercy-nzuki33/30min"
                className="bg-[#50E14C] hover:bg-[#3FB83A] text-white font-bold py-3 px-8 rounded-full"
              >
                Book a Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://calendly.com/mercy-nzuki33/30min"
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