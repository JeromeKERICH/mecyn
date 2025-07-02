import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#' },
    { icon: <Twitter size={20} />, url: '#' },
    { icon: <Instagram size={20} />, url: '#' },
    { icon: <Linkedin size={20} />, url: '#' },
  ]

  return (
    <footer className="bg-[#001D53] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#50E14C] flex items-center justify-center">
                <span className="text-[#001D53] font-bold text-xl">MN</span>
              </div>
              
            </div>
            <p className="mb-4">
              Transforming minds and building stronger communities through mental health advocacy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#001D53] border border-[#50E14C] flex items-center justify-center text-[#50E14C] hover:bg-[#50E14C] hover:text-[#001D53] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#50E14C]">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 text-[#00AEEF]" />
                <a href="mailto:mercy.nzuki33@gmail.com" className="hover:underline">
                  mercy.nzuki33@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 text-[#00AEEF]" />
                <a href="tel:+254745506656" className="hover:underline">
                  +254 745 506 656
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Partner With Dip-Co</h5>
              <a
                href="#"
                className="inline-block bg-[#00AEEF] hover:bg-[#0085bf] text-[#001D53] font-bold py-2 px-4 rounded-full text-sm"
              >
                Contact Dip-Co
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#50E14C]/20 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} Mercy Nzuki. All rights reserved. |{' '}
            <span className="text-[#50E14C]">
              "It's okay not to be okay, and it's powerful to ask for help."
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}