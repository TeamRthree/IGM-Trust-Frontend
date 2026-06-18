import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const ImpactCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    livesTransformed: 0,
    childrenCurrently: 0,
    yearsOfService: 0,
    successStories: 0
  });

  const sectionRef = useRef(null);

  const finalCounts = {
    livesTransformed: 500000,
    childrenCurrently: 1200,
    yearsOfService: 48,
    successStories: 2500
  };

  const impactData = [
    {
      key: 'livesTransformed',
      icon: 'Heart',
      label: 'Lives Transformed',
      suffix: '+',
      color: 'text-conversion-orange',
      bgColor: 'bg-conversion-orange/10'
    },
    {
      key: 'childrenCurrently',
      icon: 'Users',
      label: 'Children Currently Supported',
      suffix: '+',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      key: 'yearsOfService',
      icon: 'Calendar',
      label: 'Years of Dedicated Service',
      suffix: '',
      color: 'text-sky-blue',
      bgColor: 'bg-sky-blue/10'
    },
    {
      key: 'successStories',
      icon: 'Star',
      label: 'Documented Success Stories',
      suffix: '+',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        livesTransformed: Math.floor(finalCounts?.livesTransformed * progress),
        childrenCurrently: Math.floor(finalCounts?.childrenCurrently * progress),
        yearsOfService: Math.floor(finalCounts?.yearsOfService * progress),
        successStories: Math.floor(finalCounts?.successStories * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 100000) {
      return (num / 100000)?.toFixed(1) + 'L';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(1) + 'K';
    }
    return num?.toString();
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-background via-warm-foundation to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Real-Time Impact</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Measuring Our Impact
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every number tells a story of transformation. These aren't just statistics they represent real children whose lives have been forever changed through compassion and dedicated care.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData?.map((item) => (
            <div
              key={item?.key}
              className={`relative group bg-card rounded-xl p-6 shadow-warm hover:shadow-warm-hover transition-all duration-300 border border-border hover:border-primary/20 flex flex-col items-center text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
              }`}
              style={{
                transitionDelay: `${impactData?.indexOf(item) * 100}ms`
              }}
            >
             

              {/* Counter */}
              <div className="space-y-2 mb-4">
                <div className="flex items-baseline space-x-1">
                  <span className={`font-heading font-bold text-4xl lg:text-6xl text-secondary tabular-nums`}>
                    {formatNumber(counters?.[item?.key])}
                  </span>
                  <span className="font-heading font-bold text-2xl text-secondary">
                    {item?.suffix}
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="font-body text-muted-foreground font-medium leading-tight">
                {item?.label}
              </p>

            
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
       <div className="text-center mt-12 sm:mt-16">
  <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-warm border border-border max-w-7xl mx-auto">
    
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      
      {/* Text Section */}
      <div className="text-center lg:text-left ">
        <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-3">
          Be Part of Our Growing Impact
        </h3>
        <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
          Your support helps us reach more children and create more success stories every day.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        
        <Link to="/donate" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-conversion-orange hover:bg-conversion-orange/90 text-white px-6 py-3 sm:py-3.5 rounded-lg font-medium transition-colors shadow-button text-sm sm:text-base">
            
            <span>Donate Now</span>
          </button>
        </Link>

        <Link to="/contact#volunteer" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-muted text-foreground border border-border px-6 py-3 sm:py-3.5 rounded-lg font-medium transition-colors text-sm sm:text-base">
          
            <span>Volunteer</span>
          </button>
        </Link>

      </div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default ImpactCounters;