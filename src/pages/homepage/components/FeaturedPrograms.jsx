import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useState, useEffect, useRef } from 'react';

const FeaturedPrograms = () => {
const programs = [
  {
    id: 1,
    title: "Children’s Residential Home",
    description:
      "Providing a safe and nurturing residential environment for vulnerable children with complete care, education, healthcare and emotional support, ensuring every child grows with dignity and hope.",
    image:
      "/assets/Gallery/Children 5.jpg",
    icon: "Heart",
    stats: "220 Children Supported",
    color: "secondary",
    features: [
      "Safe Residential Care",
      "Nutritious Meals & Healthcare",
      "Education & School Fees",
      "Mentoring & Counseling Support"
    ]
  },
  {
    id: 2,
    title: "Free Tuition Centres",
    description:
      "After-school academic support programs serving rural and tribal communities, helping children improve performance, reduce dropout rates and build confidence for a brighter future.",
    image:
      "/assets/Gallery/DSCF9665.jpg",
    icon: "BookOpen",
    stats: "670+ Children Benefited",
    color: "secondary",
    features: [
      "Academic Coaching",
      "Study Materials & Exam Preparation",
      "Life Skill Development",
      "Community & Parent Engagement"
    ]
  },
  {
    id: 3,
    title: "Women Tailoring & Skill Development Centre",
    description:
      "Empowering vulnerable women through vocational training, skill development and entrepreneurship support, enabling economic independence and restoring dignity.",
    image:
      "/assets/Gallery/Jute.jpg",
    icon: "Users",
    stats: "230+ Women Benefited",
    color: "secondary",
    features: [
      "Tailoring Machine Training",
      "Handicraft & Jute Product Design",
      "Entrepreneurship Guidance",
      "Livelihood & Income Support"
    ]
  }
];


  const getColorClasses = (color) => {
    const colorMap = {
      'primary': {
        icon: 'text-primary',
        bg: 'bg-primary/10',
        button: 'bg-primary hover:bg-primary/90',
        accent: 'text-primary'
      },
      'conversion-orange': {
        icon: 'text-conversion-orange',
        bg: 'bg-conversion-orange/10',
        button: 'bg-conversion-orange hover:bg-conversion-orange/90',
        accent: 'text-conversion-orange'
      },
      'secondary': {
        icon: 'text-secondary',
        bg: 'bg-secondary/10',
        button: 'bg-secondary hover:bg-secondary/90',
        accent: 'text-secondary'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const [statsVisible, setStatsVisible] = useState(false);
const [stats, setStats] = useState({
  successRate: 0,
  activePrograms: 0,
});

const statsRef = useRef(null);

const finalStats = {
  successRate: 95,
  activePrograms: 5,
};

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !statsVisible) {
        setStatsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => observer.disconnect();
}, [statsVisible]);

useEffect(() => {
  if (!statsVisible) return;

  const duration = 1500;
  const steps = 50;
  const stepDuration = duration / steps;

  let currentStep = 0;

  const interval = setInterval(() => {
    currentStep++;

    const progress = currentStep / steps;

    setStats({
      successRate: Math.floor(finalStats.successRate * progress),
      activePrograms: Math.floor(finalStats.activePrograms * progress),
    });

    if (currentStep >= steps) {
      clearInterval(interval);
      setStats(finalStats);
    }
  }, stepDuration);

  return () => clearInterval(interval);
}, [statsVisible]);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Core Programs</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            How We Transform Lives
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-6xl mx-auto leading-relaxed">
           We are committed to igniting the dreams of every child deserve not just care, but a chance to dream 
and achieve. Our holistic approach touches every part of a child’s journey nurturing their needs, shaping 
their character and guiding their hopes for the future. Each program we build is a step toward restoring 
hope and creating a life filled with love, purpose and possibility. 
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs?.map((program, index) => {
            const colors = getColorClasses(program?.color);
            
            return (
              <div
                key={program?.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                {/* Image */}
                <div className="relative max-h-44 overflow-hidden">
                  <Image
                    src={program?.image}
                    alt={program?.title}
                    className="w-full  object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-foreground">{program?.stats}</span>
                  </div>
                  
                  
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program?.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {program?.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {program?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className={colors?.accent} strokeWidth={2.5} />
                        <span className="text-sm font-body text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to="/projects">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="ArrowRight"
                      iconPosition="right"
                      className={`${colors?.button} text-white shadow-button`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

       {/* Bottom Section */}
<div className="bg-gradient-to-r from-primary/5 via-warm-foundation to-secondary/5 rounded-2xl  mt-12 sm:mt-16">
  
  <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    
    {/* Left Content */}
    <div className="text-center lg:text-left">
      <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-4">
        Every Initiative Speaks for Itself
      </h3>

      <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
        Behind each initiative are countless inspiring stories of growth, learning and resilience. 
        These life-changing journeys are made possible through the generous support of our donors, 
        volunteers and well-wishers, whose contributions help turn potential into reality.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
        
        

        <Link to="/projects" className="w-full sm:w-auto">
          <Button
            variant="default"
            
            className="w-full sm:w-auto text-sm sm:text-base py-3"
          >
            View All Programs
          </Button>
        </Link>

      </div>
    </div>

    {/* Right Stats */}
    <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      <div className="bg-card rounded-xl p-5 sm:p-6 shadow-warm text-center">
  <div className="font-heading font-bold text-xl sm:text-4xl text-foreground mb-1">
    {stats.successRate}%
  </div>
  <div className="font-body text-xs sm:text-sm text-muted-foreground">
    Program Success Rate
  </div>
</div>

<div className="bg-card rounded-xl p-5 sm:p-6 shadow-warm text-center">
  <div className="font-heading font-bold text-xl sm:text-4xl text-foreground mb-1">
    {stats.activePrograms}
  </div>
  <div className="font-body text-xs sm:text-sm text-muted-foreground">
    Active Programs
  </div>
</div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default FeaturedPrograms;