import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import VolunteerOpportunities from './components/VolunteerOpportunities';
import EventCalendar from './components/EventCalendar';

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactHero />
        <ContactForm />
        <VolunteerOpportunities />
        <EventCalendar />
        <LocationMap />
      </main>
    </div>
  );
};

export default ContactPage;
