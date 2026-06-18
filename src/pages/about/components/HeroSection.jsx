import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-warm-foundation to-background text-white overflow-hidden">
      <div className="absolute inset-0 "></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-6 gap-12 items-center">
          <div className="space-y-8 col-span-2">
            <div className="space-y-4">
              
              <h1 className="font-heading text-foreground font-bold text-4xl lg:text-5xl leading-tight">
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
                
                className="bg-primary hover:bg-primary/90 text-white shadow-warm"
              >
                Meet Our Team
              </Button>
              
            </div>
          </div>
          
          <div className="relative col-span-4">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-hover">
              <Image
                src="/assets/Gallery/Staff GRP photo.jpg"
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