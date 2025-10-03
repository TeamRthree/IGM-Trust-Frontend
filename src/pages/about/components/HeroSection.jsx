import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-warm-foundation to-background text-white overflow-hidden">
      <div className="absolute inset-0 "></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-muted rounded-lg backdrop-blur-sm">
                  <Icon name="Heart" size={24} className='text-foreground' strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-muted-foreground">Since 1975</span>
              </div>
              <h1 className="font-heading text-foreground font-bold text-4xl lg:text-6xl leading-tight">
                Transformative Compassion in Action
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                A legacy brand that has quietly changed half a million lives, balancing maternal warmth with professional credibility.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90 shadow-warm"
              >
                Meet Our Team
              </Button>
              
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-hover">
              <Image
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Children learning together at IGM Children Homes"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;