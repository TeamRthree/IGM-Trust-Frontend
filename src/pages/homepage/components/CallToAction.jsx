import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const [activeTab, setActiveTab] = useState('donate');

  const actionTabs = [
    {
      id: 'donate',
      title: 'Make a Donation',
      icon: 'Heart',
      description: 'Your contribution directly impacts a child\'s life',
      color: 'secondary'
    },
    {
      id: 'sponsor',
      title: 'Sponsor a Child',
      icon: 'Users',
      description: 'Build a personal connection and watch them grow',
      color: 'secondary'
    },
    {
      id: 'volunteer',
      title: 'Volunteer Time',
      icon: 'Clock',
      description: 'Share your skills and make a hands-on difference',
      color: 'secondary'
    }
  ];

  const donationOptions = [
    { amount: '₹500', impact: 'Provides meals for 1 child for a week' },
    { amount: '₹2,000', impact: 'Covers educational materials for 1 month' },
    { amount: '₹5,000', impact: 'Supports healthcare for 1 child for 3 months' },
    { amount: '₹10,000', impact: 'Sponsors complete care for 1 child for 1 month' }
  ];

  const sponsorshipLevels = [
    { level: 'Basic Care', amount: '₹3,000/month', features: ['Food & Shelter', 'Basic Healthcare', 'Primary Education'] },
    { level: 'Complete Care', amount: '₹5,000/month', features: ['All Basic Care', 'Skill Development', 'Higher Education', 'Personal Mentoring'] },
    { level: 'Future Builder', amount: '₹8,000/month', features: ['All Complete Care', 'Vocational Training', 'Career Guidance', 'Life Skills Coaching'] }
  ];

  const volunteerOpportunities = [
    { role: 'Education Support', time: '2-4 hours/week', description: 'Help with homework and tutoring' },
    { role: 'Skill Training', time: '4-6 hours/week', description: 'Teach vocational skills and life skills' },
    { role: 'Mentorship', time: '1-2 hours/week', description: 'Provide guidance and emotional support' },
    { role: 'Event Support', time: 'Flexible', description: 'Help organize fundraising events' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'conversion-orange': {
        bg: 'bg-conversion-orange',
        hover: 'hover:bg-conversion-orange/90',
        text: 'text-conversion-orange',
        bgLight: 'bg-conversion-orange/10',
        border: 'border-conversion-orange'
      },
      'primary': {
        bg: 'bg-primary',
        hover: 'hover:bg-primary/90',
        text: 'text-primary',
        bgLight: 'bg-primary/10',
        border: 'border-primary'
      },
      'secondary': {
        bg: 'bg-secondary',
        hover: 'hover:bg-secondary/90',
        text: 'text-secondary',
        bgLight: 'bg-secondary/10',
        border: 'border-secondary'
      }
    };
    return colorMap?.[color] || colorMap?.['conversion-orange'];
  };

  const renderTabContent = () => {
    const currentTab = actionTabs?.find(tab => tab?.id === activeTab);
    const colors = getColorClasses(currentTab?.color);

    switch (activeTab) {
      case 'donate':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationOptions?.map((option, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-conversion-orange/50 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-2xl text-secondary">{option?.amount}</span>
                    <Icon name="Heart" size={20} className="text-conversion-orange group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="font-body text-muted-foreground text-sm">{option?.impact}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" className="flex-1">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Heart"
                  iconPosition="left"
                  className="bg-secondary hover:bg-conversion-orange/90 text-white shadow-button"
                >
                  Donate Now
                </Button>
              </Link>
              <Link to="/donate" >
              <Button
                variant="outline"
                iconName="Calculator"
                iconPosition="left"
                className="border-secondary text-conversion-orange hover:bg-secondary"
              >
                Custom Amount
              </Button>
              </Link>
            </div>
          </div>
        );

      case 'sponsor':
        return (
          <div className="space-y-6">
            <div className="grid gap-4">
              {sponsorshipLevels?.map((level, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground">{level?.level}</h4>
                      <p className="font-body text-primary font-medium">{level?.amount}</p>
                    </div>
                    <Link to="/donate" >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary mt-4 md:mt-0"
                    >
                      Choose Plan
                    </Button>
                    </Link>
                    
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {level?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm font-body text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/donate">
              <Button
                variant="default"
                fullWidth
                iconName="Users"
                iconPosition="left"
                className="bg-primary mt-8 hover:bg-primary/90 text-white shadow-button"
              >
                Start Sponsorship
              </Button>
            </Link>
          </div>
        );

      case 'volunteer':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {volunteerOpportunities?.map((opportunity, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground mb-1">{opportunity?.role}</h4>
                      <p className="font-body text-secondary text-sm font-medium">{opportunity?.time}</p>
                    </div>
                    <Icon name="Clock" size={20} className="text-secondary" />
                  </div>
                  <p className="font-body text-muted-foreground text-sm">{opportunity?.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex-1">
                <Button
                  variant="default"
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  className="bg-secondary hover:bg-secondary/90 text-white shadow-button"
                >
                  Apply to Volunteer
                </Button>
              </Link>
              <Link to="/contact" className="">
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
                className="border-secondary text-secondary hover:bg-secondary"
              >
                Schedule Visit
              </Button>
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion-orange/10 rounded-full px-4 py-2 mb-6">
            <Icon name="HandHeart" size={16} className="text-conversion-orange" />
            <span className="text-sm font-medium text-conversion-orange">Take Action</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Your Compassion Creates Change
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every child deserves a chance to dream. Choose how you'd like to make a difference in a child's life today. Together, we can restore broken lives and build brighter futures.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-card rounded-3xl shadow-warm-hover border border-border overflow-hidden">
          <div className="grid lg:grid-cols-2 md:h-[100vh]">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src="https://media.istockphoto.com/id/1092042232/photo/two-cute-asian-child-girls-making-heart-shape-with-hands-together-with-love.jpg?s=612x612&w=0&k=20&c=BYx43zNVQB4HLsDxLq-17o55JBgqlD2rpjGMlhZztOU="
                alt="Children at IGM Homes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent lg:from-transparent lg:via-transparent lg:to-foreground/60"></div>
              
             
          
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              {/* Tab Navigation */}
              <div className="flex flex-col sm:flex-row gap-2 mb-8 bg-muted rounded-xl p-2">
                {actionTabs?.map((tab) => {
                  const colors = getColorClasses(tab?.color);
                  const isActive = activeTab === tab?.id;
                  
                  return (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                        isActive
                          ? `${colors?.bg} text-white shadow-button`
                          : 'text-muted-foreground hover:text-foreground hover:bg-background'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span className="hidden sm:inline">{tab?.title}</span>
                      <span className="sm:hidden">{tab?.title?.split(' ')?.[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Description */}
              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                  {actionTabs?.find(tab => tab?.id === activeTab)?.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {actionTabs?.find(tab => tab?.id === activeTab)?.description}
                </p>
              </div>

              {/* Tab Content */}
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-conversion-orange/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
              Every Action Matters
            </h3>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you donate ₹100 or ₹10,000, sponsor a child or volunteer an hour, your contribution creates ripples of positive change that last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  className="border-primary text-primary hover:bg-primary"
                >
                  Call Us: +91 98765 43210
                </Button>
              </Link>
              
              <Link to="/about">
                <Button
                  variant="ghost"
                  iconName="Info"
                  iconPosition="left"
                  className="text-muted-foreground hover:text-white"
                >
                  Learn More About IGM
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;