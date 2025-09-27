import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import VolunteerOpportunities from './components/VolunteerOpportunities';
import EventCalendar from './components/EventCalendar';
import Icon from '../../components/AppIcon';


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <LocationMap />
        <VolunteerOpportunities />
        <EventCalendar />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-trust rounded-lg">
                  <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg leading-none">IGM Children Homes</h3>
                  <p className="font-body text-sm text-white/80 leading-none">Transforming Lives Since 1975</p>
                </div>
              </div>
              
              <p className="font-body text-white/90 mb-6 leading-relaxed">
                For over four decades, we've been dedicated to providing hope, education, and care to children in need. Join our mission to restore broken lives and build brighter futures.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-quick cursor-pointer">
                  <Icon name="Facebook" size={20} color="white" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-quick cursor-pointer">
                  <Icon name="Twitter" size={20} color="white" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-quick cursor-pointer">
                  <Icon name="Instagram" size={20} color="white" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-quick cursor-pointer">
                  <Icon name="Youtube" size={20} color="white" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Projects', href: '/projects' },
                  { name: 'Success Stories', href: '/success-stories' },
                  { name: 'Volunteer', href: '/contact' },
                  { name: 'Donate Now', href: '/donate' }
                ]?.map((link, index) => (
                  <li key={index}>
                    <a href={link?.href} className="font-body text-white/80 hover:text-white transition-quick">
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-lg text-white mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} color="white" className="mt-1 flex-shrink-0" />
                  <p className="font-body text-sm text-white/80">
                    No. 123, Hope Street<br />
                    Gandhi Nagar, Chennai<br />
                    Tamil Nadu 600020
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} color="white" className="flex-shrink-0" />
                  <p className="font-body text-sm text-white/80">+91 44 2345 6789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} color="white" className="flex-shrink-0" />
                  <p className="font-body text-sm text-white/80">info@igmchildrenhomes.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="font-body text-sm text-white/80 mb-4 md:mb-0">
              © {new Date()?.getFullYear()} IGM Children Homes. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-quick">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-quick">
                Terms of Service
              </a>
              <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-quick">
                Transparency
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;