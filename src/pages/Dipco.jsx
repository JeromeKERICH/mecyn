import { motion } from 'framer-motion'
import { BrainCircuit, Sparkles, Users, ArrowRight, Calendar, HeartPulse, User } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { useEffect } from 'react'

const programs = [
  {
    id: 1,
    
    title: "Mastermind Mentorship Program",
    tagline: "Strengthening Minds. Nurturing Hearts. Guiding Purpose.",
    description: "A holistic mentorship program for children, teens, and young adults (ages 3–24), built on global youth development standards.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    features: [
      "Age-specific mentorship tracks",
      "Six dynamic life-skills modules",
      "Trained facilitators with guided handbooks",
      "Structured coaching approach"
    ],
  
    impact: ["Confidence", "Purpose", "Emotional intelligence", "Real-world readiness"],
    
    textColor: "text-[#50E14C]"
  },
  {
    id: 2,
   
    title: "Mind Matters",
    tagline: "Where every thought counts, and every feeling is valid.",
    description: "A safe, supportive space for children and young people to understand and prioritize mental wellness.",
    image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    features: [
      "Mental health awareness sessions",
      "Individual & group therapy options",
      "Play, art, and talk therapy modalities",
      "Post-trauma counseling support",
      "Licensed professionals"
    ],
    impact: ["Mental resilience", "Emotional coping", "Holistic wellbeing", "Stigma reduction"],
    
    textColor: "text-[#001D53]"
  },
  {
    id: 3,
    title: "Holiday Escapades",
    tagline: "Unplug, Explore, and Grow, One Escapade at a Time.",
    description: "Fun, interactive retreats blending recreation with personal growth for ages 3–24.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    features: [
      "Weekend Escapades (1-day)",
      "Holiday Camps (4-day immersive)",
      "Team-building activities",
      "Emotional learning workshops",
      "Leadership development"
    ],
    impact: ["Self-confidence", "Social skills", "Stress management", "Life purpose"],
    
    textColor: "text-[#50E14C]"
  },
  {
    id: 4,
    title: "Parent/Guardian Connect",
    tagline: "Strong Parents, Thriving Children.",
    description: "Empowered children start with supported parents and caregivers.",
    image: "/assets/20.jpg",
    features: [
      "Sundown Socials (peer gatherings)",
      "Mind Matters for Parents",
      "Stress & self-care workshops",
      "Healthy boundaries training",
      "Family balance strategies"
    ],
    impact: ["Parenting confidence", "Emotional balance", "Family bonds", "Support networks"],
    
    textColor: "text-[#001D53]"
  }
]

export default function Programs() {
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DIP-CO <span className="text-[#50E14C]">Programs</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Empowering children, youth, and families to grow, thrive, and live with purpose
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Transformative Programs" 
            subtitle="Holistic support for the entire family ecosystem" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Program Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D53]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-block ${program.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {program.title.includes("Mind") ? "Mental Health" : program.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
                
                {/* Program Content */}
                <div className="p-6">
                  
                  <h2 className={`text-2xl font-bold mb-2 ${program.textColor}`}>{program.title}</h2>
                  <p className="text-lg font-medium text-gray-700 mb-4">{program.tagline}</p>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-800 mb-3">Program Features:</h3>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className={`${program.textColor}`}>•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {program.tracks && (
                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 mb-3">Life-Skills Tracks:</h3>
                      <div className="flex flex-wrap gap-2">
                        {program.tracks.map((track, index) => (
                          <span key={index} className={`text-xs font-medium px-3 py-1 rounded-full ${program.color}/10 ${program.textColor}`}>
                            {track}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">Impact:</h3>
                    <div className="flex flex-wrap gap-2">
                      {program.impact.map((item, index) => (
                        <span key={index} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="py-16 bg-[#001D53]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
              <SectionTitle 
                title="The DIP-CO Difference" 
                subtitle="How our programs work together" 
              />
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  DIP-CO programs are <strong>interconnected</strong> to support the whole ecosystem around young people — from early childhood through young adulthood, and including the caregivers who raise them.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className={`bg-[#50E14C]/10 text-[#50E14C] rounded-full p-1 flex-shrink-0`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span><strong>Comprehensive support</strong> across all developmental stages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`bg-[#00AEEF]/10 text-[#00AEEF] rounded-full p-1 flex-shrink-0`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span><strong>Evidence-based</strong> frameworks from WHO, UNICEF, and more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`bg-[#FF6B35]/10 text-[#FF6B35] rounded-full p-1 flex-shrink-0`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span><strong>Whole-family approach</strong> that strengthens entire communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 md:py-10 lg:py:10 relative h-1/4 flex items-center justify-center bg-gradient-to-br from-[#001D53] to-[#50E14C] overflow-hidden">
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Begin the Journey?</h2>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#001D53] font-bold py-4 px-6 rounded-lg"
            >
              Join a Program
            </motion.a>
           
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#001D53] font-bold py-4 px-6 rounded-lg"
            >
              Register Your Child
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#001D53] font-bold py-4 px-6 rounded-lg"
            >
              Let's Grow Together
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  )
}