import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const heroStories = [
    {
      id: 1,
      title: "Nandhini\'s Journey to Success",
      subtitle: "From abandoned child to software engineer",
      description: "Once left at our doorstep as an infant, Nandhini graduated with honors in Computer Science and now works at a leading tech company, supporting her adoptive family.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Read Her Story",
      link: "/success-stories"
    },
    {
      id: 2,
      title: "Building Dreams, One Child at a Time",
      subtitle: "48 years of transforming lives",
      description: "Since 1975, we've provided shelter, education, and love to over 500,000 children. Every child deserves a chance to dream, and your support makes it possible.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "See Our Impact",
      link: "/projects"
    },
    {
      id: 3,
      title: "Your Compassion Creates Change",
      subtitle: "Join our mission today",
      description: "Every donation, every volunteer hour, every shared story brings us closer to a world where no child is left behind. Together, we restore broken lives.",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Donate Now",
      link: "/donate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStory((prev) => (prev + 1) % heroStories?.length);
        setIsVisible(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroStories?.length]);

  const goToStory = (index) => {
    if (index !== currentStory) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStory(index);
        setIsVisible(true);
      }, 300);
    }
  };

  const currentHeroStory = heroStories?.[currentStory];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-foundation via-background to-sky-blue/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={currentHeroStory?.image}
            alt={currentHeroStory?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-foreground/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
                <Icon name="Heart" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Since 1975</span>
              </div>
              
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                {currentHeroStory?.title}
              </h1>
              
              <h2 className="font-body text-xl md:text-2xl text-sky-blue font-medium">
                {currentHeroStory?.subtitle}
              </h2>
              
              <p className="font-body text-lg text-white/90 leading-relaxed max-w-2xl">
                {currentHeroStory?.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={currentHeroStory?.link}>
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-conversion-orange hover:bg-conversion-orange/90 text-white shadow-warm-hover w-full sm:w-auto"
                >
                  {currentHeroStory?.cta}
                </Button>
              </Link>
              
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white">500K+</div>
                <div className="font-body text-sm text-white/80">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white">48</div>
                <div className="font-body text-sm text-white/80">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white">12</div>
                <div className="font-body text-sm text-white/80">Active Programs</div>
              </div>
            </div>
          </div>

          {/* Story Navigation */}
          <div className="hidden lg:flex flex-col justify-center space-y-4">
            {heroStories?.map((story, index) => (
              <button
                key={story?.id}
                onClick={() => goToStory(index)}
                className={`text-left p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                  index === currentStory
                    ? 'bg-white/20 border-white/40 shadow-warm'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-conversion-orange' : 'bg-white/50'
                  }`}></div>
                  <div>
                    <div className="font-medium text-white text-sm">{story?.title}</div>
                    <div className="text-white/70 text-xs">{story?.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Story Indicators */}
        <div className="lg:hidden flex justify-center space-x-2 mt-8">
          {heroStories?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStory(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStory ? 'bg-conversion-orange' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-body">Discover Our Impact</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;