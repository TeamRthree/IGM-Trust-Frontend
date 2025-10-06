import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative bg-white  py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
              <Icon name="Users" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="font-heading text-foreground font-bold text-4xl lg:text-6xl mb-6 text-balance">
            Join Our Community of
            <span className="block text-foreground"> Hope Builders</span>
          </h1>
          
          <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you want to volunteer, partner with us, or visit our facilities, we're here to help you make a meaningful difference in children's lives. Every connection starts with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Heart"
              iconPosition="left"
              iconSize={20}
              className="bg-secondary hover:bg-conversion-orange/90 text-white shadow-warm"
            >
              Start Volunteering
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              className="border-secondary text-secondary hover:bg-black/10 hover:text-secondary"
            >
              Schedule Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;