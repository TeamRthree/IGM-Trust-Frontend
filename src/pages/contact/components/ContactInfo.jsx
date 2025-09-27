import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'MapPin',
      title: 'Visit Our Campus',
      details: [
        'IGM Children Homes',
        'No. 123, Hope Street, Gandhi Nagar',
        'Chennai, Tamil Nadu 600020',
        'India'
      ],
      action: 'Get Directions',
      actionIcon: 'Navigation'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      details: [
        'Main Office: +91 44 2345 6789',
        'Volunteer Coordinator: +91 98765 43210',
        'Emergency Contact: +91 94567 89012',
        'Available: Mon-Sat, 9 AM - 6 PM'
      ],
      action: 'Call Now',
      actionIcon: 'Phone'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      details: [
        'General: info@igmchildrenhomes.org',
        'Volunteers: volunteer@igmchildrenhomes.org',
        'Partnerships: partner@igmchildrenhomes.org',
        'Media: media@igmchildrenhomes.org'
      ],
      action: 'Send Email',
      actionIcon: 'Mail'
    }
  ];

  const quickActions = [
    {
      icon: 'Calendar',
      title: 'Schedule a Visit',
      description: 'Tour our facilities and meet our children',
      color: 'bg-primary'
    },
    {
      icon: 'Users',
      title: 'Volunteer Today',
      description: 'Join our community of dedicated volunteers',
      color: 'bg-secondary'
    },
    {
      icon: 'Handshake',
      title: 'Partner with Us',
      description: 'Explore corporate partnership opportunities',
      color: 'bg-accent'
    },
    {
      icon: 'Heart',
      title: 'Make a Donation',
      description: 'Support our mission with a contribution',
      color: 'bg-conversion-orange'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactDetails?.map((contact, index) => (
            <div key={index} className="bg-card rounded-xl shadow-warm p-8 text-center hover:shadow-warm-hover transition-warm">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                  <Icon name={contact?.icon} size={28} color="var(--color-primary)" strokeWidth={2} />
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                {contact?.title}
              </h3>
              
              <div className="space-y-2 mb-6">
                {contact?.details?.map((detail, idx) => (
                  <p key={idx} className="font-body text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                iconName={contact?.actionIcon}
                iconPosition="left"
                iconSize={16}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                {contact?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Ready to Get Involved?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose how you'd like to make a difference in children's lives. Every action, big or small, creates lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions?.map((action, index) => (
            <div key={index} className="bg-card rounded-xl shadow-warm p-6 text-center hover:shadow-warm-hover transition-warm cursor-pointer group">
              <div className="flex items-center justify-center mb-4">
                <div className={`flex items-center justify-center w-12 h-12 ${action?.color} rounded-full group-hover:scale-110 transition-warm`}>
                  <Icon name={action?.icon} size={24} color="white" strokeWidth={2} />
                </div>
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {action?.title}
              </h3>
              
              <p className="font-body text-sm text-muted-foreground">
                {action?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-destructive/5 border border-destructive/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full">
              <Icon name="AlertTriangle" size={24} color="var(--color-destructive)" strokeWidth={2} />
            </div>
          </div>
          
          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
            Emergency Contact
          </h3>
          
          <p className="font-body text-muted-foreground mb-4">
            For urgent matters concerning child welfare or safety
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="destructive"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              iconSize={18}
            >
              Emergency: +91 94567 89012
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              iconSize={18}
              className="border-destructive text-destructive hover:bg-destructive hover:text-white"
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;