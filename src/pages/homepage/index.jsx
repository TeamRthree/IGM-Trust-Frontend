import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ImpactCounters from './components/ImpactCounters';
import FeaturedPrograms from './components/FeaturedPrograms';
import SuccessStoriesPreview from './components/SuccessStoriesPreview';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>IGM Children Homes - Restoring Broken Lives Since 1975</title>
        <meta 
          name="description" 
          content="IGM Children Homes has been transforming lives since 1975. Join our mission to provide shelter, education, and hope to children in need. Every child deserves a chance to dream." 
        />
        <meta name="keywords" content="children homes, charity, NGO, child welfare, education, healthcare, Tamil Nadu, donation, sponsor child" />
        <meta property="og:title" content="IGM Children Homes - Restoring Broken Lives Since 1975" />
        <meta property="og:description" content="Join our mission to transform children's lives through education, healthcare, and love. 500,000+ lives transformed since 1975." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igmchildrenhomes.org" />
        <link rel="canonical" href="https://igmchildrenhomes.org" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Impact Counters */}
          <ImpactCounters />

          {/* Featured Programs */}
          <FeaturedPrograms />

          {/* Success Stories Preview */}
          <SuccessStoriesPreview />

          {/* Call to Action */}
          <CallToAction />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;