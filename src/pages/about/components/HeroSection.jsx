import React from 'react';
import Button from '../../../components/ui/Button';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* Background Image */}
      <div className="relative h-[80vh] min-h-[600px] max-h-[900px]">

        <img
          src="/assets/Gallery/Staff GRP photo.jpg"
          alt="IGM Children Homes Team"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
              Transformative
              <br />
              Compassion in Action
            </h1>

            <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
              A legacy institution that has quietly transformed half a million
              lives through unwavering compassion, professional care, and a
              commitment to restoring hope for every child.
            </p>

           <div className="flex justify-center">
  <Button
    variant="default"
    size="lg"
    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 shadow-warm"
    onClick={() => {
      document
        .getElementById("team")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }}
  >
    Meet Our Team
  </Button>
</div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;