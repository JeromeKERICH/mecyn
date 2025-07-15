import { motion } from 'framer-motion'
import { Mic, Users, Calendar, Quote, Presentation, BookOpen, User } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const speakingEngagements = [
  {
    id: 1,
    title: "RedCross & USAID Best Practice Meeting",
    description: "Panel discussion on youth interventions for ASRHR, mental health, GBV and HIV service uptake for parenting adolescents",
    category: "Panel Discussion",
    icon: <User className="text-[#00AEEF]" size={20} />,
    highlight: "Addressed solutions for teen moms and dads in vulnerable situations",
    image: "/assets/9.jpg", // Add image path
    alt: "Mercy speaking at RedCross panel"
  },
  {
    id: 2,
    title: "Kenya Adolescent Health Survey Launch",
    description: "Presented on digital solutions for supporting adolescents in Kenya",
    category: "Keynote Presentation",
    icon: <Presentation className="text-[#50E14C]" size={20} />,
    highlight: "Co-launched community handbook for engaging adolescents and parents",
    image: "/assets/30.jpg",
    alt: "Presenting at Kenya Adolescent Health Survey"
  },
  {
    id: 3,
    title: "International Day of the Girl Child",
    description: "#GirlSummit2023 panelist discussing mental health challenges",
    category: "Panel Discussion",
    icon: <Quote className="text-[#00AEEF]" size={20} />,
    highlight: "Advocated for gender-responsive mental health policies",
    image: "/assets/10.jpg",
    alt: "Panel discussion at Girl Summit"
  },
  {
    id: 4,
    title: "National Youth Summit - AYP Forum",
    description: "Conducted mental health presentation for adolescents",
    category: "Workshop",
    icon: <Users className="text-[#001D53]" size={20} />,
    highlight: "Pioneered youth-friendly mental health curriculum",
    image: "/assets/13.jpg",
    alt: "Workshop at National Youth Summit"
  },
  {
    id: 5,
    title: "KCPA International Mental Health Conference",
    description: "Featured speaker on innovative mental health approaches",
    category: "Keynote",
    icon: <Presentation className="text-[#50E14C]" size={20} />,
    highlight: "Showcased Kenya's progress in mental health advocacy",
    image: "/assets/17.jpg",
    alt: "Keynote at KCPA Conference"
  },
  {
    id: 6,
    title: "Oky Kenya App Launch",
    description: "Coordinated menstrual health digital solution launch",
    category: "Event Coordination",
    icon: <BookOpen className="text-[#001D53]" size={20} />,
    highlight: (
      <span>
        Featured in <a href="https://lvcthealth.org/menstrual-health-application-launched-in-kenya/" target="_blank" rel="noopener" className="text-[#00AEEF] hover:underline">LVCT Health</a> and <a href="https://www.youtube.com/watch?v=JT2GcO3VLVQ" target="_blank" rel="noopener" className="text-[#00AEEF] hover:underline">YouTube</a>
      </span>
    ),
    image: "/assets/14.jpg",
    alt: "Oky Kenya App launch event"
  }
]

// ... (rest of your imports and expertiseAreas array remains the same)

export default function Speaking() {
  return (
    <div className="bg-white">
      {/* Engagements Timeline */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Speaking Engagements" 
            subtitle="Moments of impact through public speaking" 
          />

          <div className="relative max-w-6xl mx-auto">
            
            
            <div className="space-y-16 md:space-y-24">
              {speakingEngagements.map((engagement, index) => (
                <motion.div
                  key={engagement.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                >
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
                    {/* Image - Larger and more prominent */}
                    <div className="w-full md:w-2/3 lg:w-1/2 relative overflow-hidden rounded-xl shadow-xl">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={engagement.image}
                          alt={engagement.alt}
                          width={600}
                          height={350}
                          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <div className="flex items-center gap-2 mb-1">
                            {engagement.icon}
                            <span className="text-sm font-medium text-white/90">
                              {engagement.category}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">
                            {engagement.title}
                          </h3>
                          <div className="text-sm text-[#50E14C] font-medium">
                            {engagement.date}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - Overlaps with image on desktop */}
                    <div className={`w-full md:w-1/2 lg:w-2/5 relative ${index % 2 === 0 ? 'md:-ml-16' : 'md:-mr-16'} z-10`}>
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                        <p className="text-gray-600 mb-4">
                          {engagement.description}
                        </p>
                        <div className="text-sm bg-[#001D53]/5 p-4 rounded-lg border-l-4 border-[#50E14C]">
                          {engagement.highlight}
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Policy Contributions */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Policy & Guideline Development" 
            subtitle="Shaping systemic approaches to mental health" 
          />

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#50E14C]/10 flex items-center justify-center">
                <BookOpen className="text-[#50E14C]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#001D53] mb-3">
                  School Mental Health Guideline
                </h3>
                <p className="text-gray-600 mb-4">
                  Contributed to Kenya's first comprehensive mental health guidelines for educational institutions, focusing on early intervention and support systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#001D53]/5 text-[#001D53] text-xs font-medium px-3 py-1 rounded-full">
                    Adolescent Focus
                  </span>
                  <span className="bg-[#001D53]/5 text-[#001D53] text-xs font-medium px-3 py-1 rounded-full">
                    Teacher Training
                  </span>
                  <span className="bg-[#001D53]/5 text-[#001D53] text-xs font-medium px-3 py-1 rounded-full">
                    Policy Framework
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}