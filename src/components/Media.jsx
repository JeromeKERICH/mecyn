import { useState } from 'react'
import {  Mic2, Headphones, Radio } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

// Media data
const tvAppearances = [
  {
    id: 1,
    title: "Breaking Mental Health Stigma",
    outlet: "TV47",
    description: "Discussing youth mental health challenges and solutions",
    image: "/assets/mercy4.jpg"
  },
  {
    id: 2,
    title: "Mental Health in Schools",
    outlet: "NTV Health Bites",
    description: "Addressing the growing need for school mental health programs",
    image: "/assets/mercy5.jpg"
  },
  {
    id: 3,
    title: "Workplace Wellbeing",
    outlet: "KTN 2Bonge Show",
    description: "How organizations can support employee mental health",
    image: "/assets/7.jpg"
  },
  {
    id: 4,
    title: "Digital Mental Health Tools",
    outlet: "EBN TV",
    description: "Exploring technology's role in mental health access",
    image: "/assets/5.jpg"
  }
]

const radioFeatures = [
  { outlet: "NRG Radio", program: "The Wellness Hour" },
  { outlet: "Homeboyz Radio", program: "Mind Matters" },
  { outlet: "Radio Waumini", program: "Soul Care Series" }
]

export default function Media() {
  const [selectedItem, setSelectedItem] = useState(null)

  const openModal = (item) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <div className="bg-white">
     

      {/* TV Appearances */}
      <section className="py-5 md:py-10">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="TV Features & Interviews" 
            subtitle="Bringing mental health awareness to mainstream media" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {tvAppearances.map((item) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={item.image} 
                    alt={`Mercy on ${item.outlet}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D53]/90 to-transparent flex items-end p-4">
                  <div>
                    
                    <h3 className="text-white font-bold text-lg">{item.outlet}</h3>
                    <p className="text-white/90 text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radio Features */}
      <section className="py-16 bg-[#001D53]/5">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Radio & Podcast Features" 
            subtitle="Conversations that resonate through the airwaves" 
          />

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {radioFeatures.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00AEEF]/10 flex items-center justify-center">
                    {index % 3 === 0 ? (
                      <Radio className="text-[#00AEEF]" size={20} />
                    ) : index % 3 === 1 ? (
                      <Mic2 className="text-[#00AEEF]" size={20} />
                    ) : (
                      <Headphones className="text-[#00AEEF]" size={20} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#001D53]">{item.outlet}</h3>
                    <p className="text-gray-600">{item.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Modal for TV Appearance Details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={`Mercy on ${selectedItem.outlet}`}
                className="w-full h-64 md:h-80 object-cover rounded-t-xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#50E14C]/10 flex items-center justify-center">
                  <Play className="text-[#50E14C]" size={20} />
                </div>
                <span className="font-bold text-[#001D53]">{selectedItem.outlet}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#001D53] mb-2">{selectedItem.title}</h3>
              <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="/contact"
                  className="inline-block bg-[#00AEEF] hover:bg-[#0085bf] text-white font-bold py-2 px-6 rounded-full text-sm"
                >
                  Request Similar Coverage
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}