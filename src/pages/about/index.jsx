import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LegacyTimeline from './components/LegacyTimeline';
import SixPillarApproach from './components/SixPillarApproach';
import LeadershipTeam from './components/LeadershipTeam';
import TrustVerification from './components/TrustVerification';
import CallToAction from './components/CallToAction';
import StoryStats from './components/StoryStats';

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
        
<StoryStats/>

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
     
    </div>
  );
};

export default About;