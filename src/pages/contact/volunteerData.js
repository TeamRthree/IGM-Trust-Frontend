// src/data/volunteerData.js

export const categories = [
  { id: 'all', name: 'All Opportunities', icon: 'Users' },
  { id: 'education', name: 'Education', icon: 'BookOpen' },
  { id: 'healthcare', name: 'Healthcare', icon: 'Heart' },
  { id: 'skills', name: 'Skills Training', icon: 'Tool' },
  { id: 'events', name: 'Events', icon: 'Calendar' },
  { id: 'admin', name: 'Administration', icon: 'FileText' }
];

export const opportunities = [
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
