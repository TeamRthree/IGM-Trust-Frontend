import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-trust text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Icon name="Heart" size={24} color="white" strokeWidth={2.5} />
                </div>
                <span className="text-lg font-medium text-white/90">Since 1975</span>
              </div>
              <h1 className="font-heading font-bold text-4xl lg:text-6xl leading-tight">
                Transformative Compassion in Action
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
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
              <Button
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                View Reports
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
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-warm-hover">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500K+</div>
                  <div className="text-sm text-muted-foreground">Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;