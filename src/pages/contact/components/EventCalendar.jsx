import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date()?.getMonth());
  const [selectedYear] = useState(new Date()?.getFullYear());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Fundraising Gala',
      date: '2025-01-15',
      time: '6:00 PM - 10:00 PM',
      location: 'Grand Ballroom, Chennai',
      type: 'Fundraising',
      description: 'Join us for an elegant evening of dining, entertainment, and fundraising to support our children\'s education programs.',
      capacity: 200,
      registered: 156,
      price: '₹2,500 per person',
      status: 'open',
      category: 'major'
    },
    {
      id: 2,
      title: 'Volunteer Orientation Session',
      date: '2025-01-08',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Campus',
      type: 'Training',
      description: 'Comprehensive orientation for new volunteers covering our programs, policies, and hands-on training.',
      capacity: 30,
      registered: 18,
      price: 'Free',
      status: 'open',
      category: 'volunteer'
    },
    {
      id: 3,
      title: 'Children\'s Art Exhibition',
      date: '2025-01-22',
      time: '3:00 PM - 7:00 PM',
      location: 'Community Center',
      type: 'Exhibition',
      description: 'Showcase of artwork created by our children, featuring paintings, crafts, and creative projects.',
      capacity: 150,
      registered: 89,
      price: 'Free',
      status: 'open',
      category: 'community'
    },
    {
      id: 4,
      title: 'Corporate Partnership Summit',
      date: '2025-02-05',
      time: '9:00 AM - 5:00 PM',
      location: 'Business Center, Chennai',
      type: 'Partnership',
      description: 'Exclusive event for corporate partners and potential CSR collaborators to explore partnership opportunities.',
      capacity: 50,
      registered: 32,
      price: 'Invitation Only',
      status: 'limited',
      category: 'corporate'
    },
    {
      id: 5,
      title: 'Monthly Donor Meet & Greet',
      date: '2025-01-28',
      time: '4:00 PM - 6:00 PM',
      location: 'Main Campus',
      type: 'Community',
      description: 'Informal gathering for donors to meet the children, staff, and see the impact of their contributions.',
      capacity: 40,
      registered: 35,
      price: 'Free for Donors',
      status: 'almost-full',
      category: 'donor'
    },
    {
      id: 6,
      title: 'Skills Workshop: Digital Literacy',
      date: '2025-02-12',
      time: '2:00 PM - 5:00 PM',
      location: 'Vocational Center',
      type: 'Workshop',
      description: 'Hands-on workshop teaching basic computer skills to older children, volunteers welcome to assist.',
      capacity: 25,
      registered: 12,
      price: 'Free',
      status: 'open',
      category: 'education'
    }
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      'Fundraising': 'bg-conversion-orange text-white',
      'Training': 'bg-primary text-white',
      'Exhibition': 'bg-secondary text-white',
      'Partnership': 'bg-accent text-white',
      'Community': 'bg-success text-white',
      'Workshop': 'bg-warning text-white'
    };
    return colors?.[type] || 'bg-muted text-foreground';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'text-success';
      case 'limited': return 'text-warning';
      case 'almost-full': return 'text-warning';
      case 'full': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open Registration';
      case 'limited': return 'Limited Spots';
      case 'almost-full': return 'Almost Full';
      case 'full': return 'Registration Closed';
      default: return 'Available';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getProgressPercentage = (registered, capacity) => {
    return Math.min((registered / capacity) * 100, 100);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon name="Calendar" size={24} color="var(--color-primary)" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events and be part of our mission to transform children's lives. From fundraising galas to volunteer training sessions, there's something for everyone.
          </p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronLeft"
            iconPosition="left"
            iconSize={16}
            onClick={() => setSelectedMonth(prev => prev > 0 ? prev - 1 : 11)}
          >
            Previous
          </Button>
          
          <div className="bg-card rounded-lg px-6 py-3 shadow-warm">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              {months?.[selectedMonth]} {selectedYear}
            </h3>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ChevronRight"
            iconPosition="right"
            iconSize={16}
            onClick={() => setSelectedMonth(prev => prev < 11 ? prev + 1 : 0)}
          >
            Next
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {upcomingEvents?.map((event) => (
            <div key={event?.id} className="bg-card rounded-xl shadow-warm p-8 hover:shadow-warm-hover transition-warm">
              {/* Event Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getEventTypeColor(event?.type)}`}>
                      {event?.type}
                    </span>
                    <span className={`text-sm font-medium ${getStatusColor(event?.status)}`}>
                      {getStatusText(event?.status)}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {event?.title}
                  </h3>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Calendar" size={14} className="mr-2" />
                      {formatDate(event?.date)}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-2" />
                      {event?.time}
                    </div>
                    <div className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-2" />
                      {event?.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {event?.description}
              </p>

              {/* Event Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Price</p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {event?.price}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Capacity</p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {event?.registered}/{event?.capacity} registered
                  </p>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-sm text-muted-foreground">Registration Progress</span>
                  <span className="font-body text-sm font-medium text-foreground">
                    {Math.round(getProgressPercentage(event?.registered, event?.capacity))}%
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-warm"
                    style={{ width: `${getProgressPercentage(event?.registered, event?.capacity)}%` }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={16}
                  disabled={event?.status === 'full'}
                  className="bg-primary hover:bg-primary/90 text-white flex-1"
                >
                  {event?.status === 'full' ? 'Registration Closed' : 'Register Now'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Share2"
                  iconPosition="left"
                  iconSize={16}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Share
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Categories */}
        <div className="bg-card rounded-xl shadow-warm p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Event Categories
            </h3>
            <p className="font-body text-muted-foreground">
              Explore different types of events and find the ones that interest you most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Fundraising Events', icon: 'DollarSign', description: 'Galas, auctions, and charity drives', color: 'bg-conversion-orange' },
              { name: 'Volunteer Training', icon: 'Users', description: 'Orientation and skill development', color: 'bg-primary' },
              { name: 'Community Events', icon: 'Heart', description: 'Open houses and celebrations', color: 'bg-success' },
              { name: 'Educational Workshops', icon: 'BookOpen', description: 'Learning and development sessions', color: 'bg-warning' },
              { name: 'Corporate Partnerships', icon: 'Handshake', description: 'Business collaboration events', color: 'bg-accent' },
              { name: 'Awareness Campaigns', icon: 'Megaphone', description: 'Community outreach programs', color: 'bg-secondary' }
            ]?.map((category, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-border hover:shadow-warm transition-warm">
                <div className="flex items-center justify-center mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 ${category?.color} rounded-full`}>
                    <Icon name={category?.icon} size={24} color="white" />
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {category?.name}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {category?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
              <Icon name="Bell" size={32} color="var(--color-primary)" />
            </div>
          </div>
          
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
            Never Miss an Event
          </h3>
          
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our event newsletter and be the first to know about upcoming fundraisers, volunteer opportunities, and community gatherings.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="flex-1 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <Button
              variant="default"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              iconSize={18}
              className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;