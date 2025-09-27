import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LegacyTimeline from './components/LegacyTimeline';
import SixPillarApproach from './components/SixPillarApproach';
import LeadershipTeam from './components/LeadershipTeam';
import TrustVerification from './components/TrustVerification';
import CallToAction from './components/CallToAction';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'About Us - IGM Children Homes | Transformative Compassion in Action';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Learn about IGM Children Homes - 50 years of transformative compassion in action. Discover our six-pillar approach, leadership team, and commitment to transparency in child welfare.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Legacy Timeline */}
        <LegacyTimeline />
        
        {/* Six Pillar Approach */}
        <SixPillarApproach />
        
        {/* Leadership Team */}
        <LeadershipTeam />
        
        {/* Trust & Verification */}
        <TrustVerification />
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <span className="text-white font-bold text-lg">IGM</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg">IGM Children</div>
                  <div className="text-sm text-white/80">Homes</div>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Transformative compassion in action since 1975. Restoring broken lives and creating lasting change for vulnerable children.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/homepage" className="block text-white/80 hover:text-white text-sm transition-quick">Home</a>
                <a href="/about" className="block text-white/80 hover:text-white text-sm transition-quick">About Us</a>
                <a href="/projects" className="block text-white/80 hover:text-white text-sm transition-quick">Our Projects</a>
                <a href="/success-stories" className="block text-white/80 hover:text-white text-sm transition-quick">Success Stories</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Get Involved</h4>
              <div className="space-y-2">
                <a href="/donate" className="block text-white/80 hover:text-white text-sm transition-quick">Donate Now</a>
                <a href="/contact" className="block text-white/80 hover:text-white text-sm transition-quick">Volunteer</a>
                <a href="/contact" className="block text-white/80 hover:text-white text-sm transition-quick">Partner With Us</a>
                <a href="/contact" className="block text-white/80 hover:text-white text-sm transition-quick">Contact Us</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-white/80">
                <p>+91 98765 43210</p>
                <p>info@igmhomes.org</p>
                <p>123 Hope Street, Chennai<br />Tamil Nadu 600001</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80 text-sm">
              © {new Date()?.getFullYear()} IGM Children Homes. All rights reserved. | Reg. No: 12345/1985
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;