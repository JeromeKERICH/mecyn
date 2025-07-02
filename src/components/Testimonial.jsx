import { motion } from 'framer-motion'
import { Quote, Star, User, Mic, HeartPulse, CircuitBoard, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Met you at Kids Palace, Mlolongo. You're a force Mercy!",
    context: "Random Encounter",
    icon: <User className="text-[#50E14C]" />
  },
  {
    id: 2,
    quote: "You are an amazing leader.",
    context: "Youth Program Participant",
    icon: <HeartPulse className="text-[#00AEEF]" />
  },
  {
    id: 3,
    quote: "You exceeded expectation in your presentation – Bible Translation Literacy Workplace Mental Health",
    context: "Corporate Training",
    icon: <Mic className="text-[#FF6B35]" />
  },
  {
    id: 4,
    quote: "The delivery of the mental health content made me understand positive mental health",
    context: "Conference Attendee",
    icon: <CircuitBoard className="text-[#A45CFF]" />
  },
  {
    id: 5,
    quote: "You have great presentation skills",
    context: "Event Organizer",
    icon: <Sparkles className="text-[#001D53]" />
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className="bg-gradient-to-r from-[#001D53] to-[#001D53]/90">
      {/* Hero Section */}
      <section className="relative py-5 md:py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 mx-auto mb-3 bg-[#50E14C] rounded-full flex items-center justify-center">
              <Quote className="text-white" size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Voices of <span className="text-[#50E14C]">Impact</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              What people say about Mercy's transformative work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-5 md:py-10 relative">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100/itemsPerPage)}%)`,
                width: `${(testimonials.length / itemsPerPage) * 100}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100/itemsPerPage}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 19, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow h-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        {testimonial.icon}
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">{testimonial.context}</span>
                      </div>
                    </div>
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"    
            >
                <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Video Testimonials CTA */}
      <section className="py-5 md:py-10 bg-[#001D53]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Do you want real impact?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let me help you amplify your message and connect with your audience through powerful storytelling and mental health advocacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/contact"
                className="bg-white hover:bg-gray-100 text-[#001D53] font-bold py-3 px-8 rounded-full"
              >
                Book a Free Session
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}