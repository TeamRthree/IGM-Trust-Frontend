import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VolunteerOpportunities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Opportunities', icon: 'Users' },
    { id: 'education', name: 'Education', icon: 'BookOpen' },
    { id: 'healthcare', name: 'Healthcare', icon: 'Heart' },
    { id: 'skills', name: 'Skills Training', icon: 'Tool' },
    { id: 'events', name: 'Events', icon: 'Calendar' },
    { id: 'admin', name: 'Administration', icon: 'FileText' }
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Teaching Assistant',
      category: 'education',
      type: 'Regular',
      duration: '3-6 months',
      commitment: '4-6 hours/week',
      location: 'Main Campus',
      description: 'Help children with homework, reading sessions, and basic computer skills. Perfect for retired teachers or education enthusiasts.',
      requirements: ['Basic English proficiency', 'Patience with children', 'Regular availability'],
      impact: 'Direct educational support to 20-30 children',
      urgency: 'high',
      volunteers: 12,
      needed: 20
    },
    {
      id: 2,
      title: 'Medical Support Volunteer',
      category: 'healthcare',
      type: 'Specialized',
      duration: '6+ months',
      commitment: '8-12 hours/week',
      location: 'Medical Center',
      description: 'Assist healthcare staff with basic medical care, health education, and maintaining medical records.',
      requirements: ['Medical background preferred', 'First aid certification', 'Compassionate nature'],
      impact: 'Healthcare support for 150+ children',
      urgency: 'high',
      volunteers: 5,
      needed: 10
    },
    {
      id: 3,
      title: 'Skill Development Trainer',
      category: 'skills',
      type: 'Specialized',
      duration: '6+ months',
      commitment: '6-8 hours/week',
      location: 'Vocational Center',
      description: 'Teach practical skills like computer basics, tailoring, cooking, or carpentry to older children preparing for independence.',
      requirements: ['Expertise in specific skill', 'Teaching ability', 'Long-term commitment'],
      impact: 'Skill development for 40-60 teenagers',
      urgency: 'medium',
      volunteers: 8,
      needed: 15
    },
    {
      id: 4,
      title: 'Event Coordinator',
      category: 'events',
      type: 'Project-based',
      duration: '1-3 months',
      commitment: '10-15 hours/week',
      location: 'Various',
      description: 'Plan and execute fundraising events, cultural programs, and community outreach activities.',
      requirements: ['Event management experience', 'Creative thinking', 'Leadership skills'],
      impact: 'Community engagement and fundraising',
      urgency: 'medium',
      volunteers: 3,
      needed: 8
    },
    {
      id: 5,
      title: 'Administrative Support',
      category: 'admin',
      type: 'Regular',
      duration: '3+ months',
      commitment: '4-8 hours/week',
      location: 'Main Office',
      description: 'Help with documentation, data entry, donor communications, and general administrative tasks.',
      requirements: ['Computer literacy', 'Attention to detail', 'Communication skills'],
      impact: 'Operational efficiency improvement',
      urgency: 'low',
      volunteers: 6,
      needed: 10
    },
    {
      id: 6,
      title: 'Recreation Coordinator',
      category: 'events',
      type: 'Regular',
      duration: '3+ months',
      commitment: '3-5 hours/week',
      location: 'Main Campus',
      description: 'Organize sports activities, art sessions, music classes, and other recreational programs for children.',
      requirements: ['Enthusiasm for activities', 'Good with children', 'Creative skills'],
      impact: 'Mental health and development support',
      urgency: 'medium',
      volunteers: 10,
      needed: 15
    }
  ];

  const filteredOpportunities = selectedCategory === 'all' 
    ? opportunities 
    : opportunities?.filter(opp => opp?.category === selectedCategory);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case 'high': return 'Urgent Need';
      case 'medium': return 'Moderate Need';
      case 'low': return 'Open Position';
      default: return 'Available';
    }
  };

  return (
    <section id='volunteer' className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon name="Users" size={24} color="var(--color-primary)" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Volunteer Opportunities
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of dedicated volunteers and make a direct impact on children's lives. Find the perfect opportunity that matches your skills and schedule.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-warm ${
                selectedCategory === category?.id
                  ? 'bg-primary text-white shadow-button'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredOpportunities?.map((opportunity) => (
            <div key={opportunity?.id} className="bg-card rounded-xl shadow-warm p-8 hover:shadow-warm-hover transition-warm">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {opportunity?.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getUrgencyColor(opportunity?.urgency)}`}>
                      {getUrgencyText(opportunity?.urgency)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {opportunity?.location}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {opportunity?.commitment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {opportunity?.description}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Type & Duration</p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {opportunity?.type} • {opportunity?.duration}
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Impact</p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {opportunity?.impact}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <p className="font-body text-sm font-medium text-foreground mb-2">Requirements:</p>
                <ul className="space-y-1">
                  {opportunity?.requirements?.map((req, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="mr-2 text-success flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress & Action */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="font-body text-lg font-bold text-foreground">
                      {opportunity?.volunteers}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">Current</p>
                  </div>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-warm"
                      style={{ width: `${(opportunity?.volunteers / opportunity?.needed) * 100}%` }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-body text-lg font-bold text-foreground">
                      {opportunity?.needed}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">Needed</p>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="sm"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={16}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default VolunteerOpportunities;