import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const StoryStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    yearsOfService: 0,
    childrenUnderCare: 0,
    livesTransformed: 0,
    familyReunification: 0,
  });

  const sectionRef = useRef(null);

  const finalCounts = {
    yearsOfService: 50,
    childrenUnderCare: 60,
    livesTransformed: 1000,
    familyReunification: 87,
  };

  const stats = [
    {
      key: 'yearsOfService',
      icon: 'Users',
      suffix: '+',
      label: 'Years of Service',
      description: 'Lives changed through our programs',
      color: 'text-accent',
    },
    {
      key: 'childrenUnderCare',
      icon: 'GraduationCap',
      suffix: '+',
      label: 'Children Under Care',
      description: 'Children supported through our initiatives',
      color: 'text-accent',
    },
    {
      key: 'livesTransformed',
      icon: 'Briefcase',
      suffix: '+',
      label: 'Lives Transformed',
      description: 'Secured meaningful opportunities and support',
      color: 'text-accent',
    },
    {
      key: 'familyReunification',
      icon: 'Home',
      suffix: '%',
      label: 'Family Reunification',
      description: 'Successfully reunited with families',
      color: 'text-accent',
    },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;

      setCounters({
        yearsOfService: Math.floor(
          finalCounts.yearsOfService * progress
        ),
        childrenUnderCare: Math.floor(
          finalCounts.childrenUnderCare * progress
        ),
        livesTransformed: Math.floor(
          finalCounts.livesTransformed * progress
        ),
        familyReunification: Math.floor(
          finalCounts.familyReunification * progress
        ),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }

    return num.toString();
  };

  return (
    <div
      id="our-story"
      ref={sectionRef}
      className="bg-muted pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-foreground text-3xl mb-4">
            Impact Through Stories
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every number represents a life transformed, a dream realized,
            and a future restored. These are the stories behind our mission.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-6 shadow-warm"
            >
              <div
                className={`text-3xl md:text-4xl font-heading font-bold mb-2 ${stat.color}`}
              >
                {formatNumber(counters[stat.key])}
                {stat.suffix}
              </div>

              <div className="text-lg text-muted-foreground/70 font-semibold mb-1">
                {stat.label}
              </div>

              <div className="text-muted-foreground text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryStats;