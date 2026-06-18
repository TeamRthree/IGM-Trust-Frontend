import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div className="relative h-[75vh] min-h-[550px] max-h-[850px]">

        <img
          src="/assets/Gallery/feeding during flood.jpg"
          alt="IGM Children Homes Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

          

            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
              Join Our Community
              <br />
              <span className="text-white">
                of Hope Builders
              </span>
            </h1>

            <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-10">
              Whether you want to volunteer, partner with us, or visit our
              facilities, we're here to help you make a meaningful difference
              in children's lives. Every connection starts with a conversation.
            </p>

            <div className="flex justify-center">
  <Button
    variant="default"
    size="lg"
    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-warm"
    onClick={() => {
      document
        .getElementById("volunteer")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }}
  >
    Start Volunteering
  </Button>
</div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ContactHero;