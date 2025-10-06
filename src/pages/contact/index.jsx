import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';

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
      
       
        <VolunteerOpportunities />
        <EventCalendar />
         <LocationMap />
      </main>
    </div>
  );
};

export default ContactPage;