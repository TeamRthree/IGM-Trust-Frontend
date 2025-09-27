import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SuccessStoriesPreview = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Nandhini Krishnan",
      age: "24 years old",
      profession: "Software Engineer at TCS",
      story: "Abandoned as an infant at our doorstep, Nandhini grew up with unwavering determination. Today, she's a successful software engineer, supporting her adoptive family and inspiring other children at IGM.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      beforeImage: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Computer Science Graduate",
      yearsAtIGM: "18 years",
      quote: "IGM didn\'t just give me shelter; they gave me dreams and the courage to pursue them.",
      currentStatus: "Mentoring 15 children in coding"
    },
    {
      id: 2,
      name: "Bakiyalakshmi Raman",
      age: "22 years old",
      profession: "Registered Nurse",
      story: "Rescued from child labor at age 8, Bakiyalakshmi discovered her passion for helping others. She's now a registered nurse at Apollo Hospital, dedicated to caring for children.",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
      beforeImage: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Nursing Degree with Honors",
      yearsAtIGM: "14 years",
      quote: "Every child I care for reminds me of my own journey from despair to hope.",
      currentStatus: "Pediatric ward specialist"
    },
    {
      id: 3,
      name: "Arjun Kumar",
      age: "26 years old",
      profession: "Small Business Owner",
      story: "Lost his parents in an accident at age 6, Arjun found a new family at IGM. He now runs a successful tailoring business and employs 8 people from his community.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      beforeImage: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Vocational Training Graduate",
      yearsAtIGM: "16 years",
      quote: "IGM taught me that setbacks are setups for comebacks. Now I help others rise too.",
      currentStatus: "Employing 8 community members"
    }
  ];

  const currentStory = successStories?.[activeStory];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-warm-foundation via-background to-sky-blue/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Star" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Success Stories</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Dreams Realized
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every child who walks through our doors carries infinite potential. These are the stories of transformation, resilience, and triumph that inspire us every day.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="bg-card rounded-3xl overflow-hidden shadow-warm-hover border border-border mb-12">
          <div className="grid lg:grid-cols-2">
            {/* Story Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-secondary/20">
                    <Image
                      src={currentStory?.image}
                      alt={currentStory?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground">
                      {currentStory?.name}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {currentStory?.age} • {currentStory?.profession}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative">
                  <Icon name="Quote" size={32} className="text-secondary/20 absolute -top-2 -left-2" />
                  <p className="font-body text-lg text-foreground italic leading-relaxed pl-8">
                    {currentStory?.quote}
                  </p>
                </blockquote>

                {/* Story */}
                <p className="font-body text-muted-foreground leading-relaxed">
                  {currentStory?.story}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <div className="font-heading font-bold text-xl text-secondary mb-1">
                      {currentStory?.achievement}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">Achievement</div>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-xl text-primary mb-1">
                      {currentStory?.yearsAtIGM}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">At IGM Homes</div>
                  </div>
                </div>

                {/* Current Status */}
                <div className="bg-secondary/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={16} className="text-secondary" />
                    <span className="font-medium text-secondary text-sm">Current Impact</span>
                  </div>
                  <p className="font-body text-foreground">{currentStory?.currentStatus}</p>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="relative">
              <div className="h-full min-h-[500px] relative overflow-hidden">
                <Image
                  src={currentStory?.image}
                  alt={`${currentStory?.name} today`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
                
                {/* Before Image Overlay */}
                <div className="absolute bottom-6 left-6 w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-warm">
                  <Image
                    src={currentStory?.beforeImage}
                    alt={`${currentStory?.name} before`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute bottom-6 left-36 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-medium text-foreground">Then & Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Story Thumbnails */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {successStories?.map((story, index) => (
              <button
                key={story?.id}
                onClick={() => setActiveStory(index)}
                className={`flex-shrink-0 p-4 rounded-xl transition-all duration-300 ${
                  index === activeStory
                    ? 'bg-secondary/20 border-2 border-secondary' :'bg-card border border-border hover:border-secondary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={story?.image}
                      alt={story?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground text-sm">{story?.name}</div>
                    <div className="text-muted-foreground text-xs">{story?.profession}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link to="/success-stories">
              <Button
                variant="default"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-secondary hover:bg-secondary/90 text-white shadow-button"
              >
                Read All Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="GraduationCap" size={28} className="text-primary" />
            </div>
            <div className="font-heading font-bold text-3xl text-foreground mb-2">2,500+</div>
            <div className="font-body text-muted-foreground">Success Stories Documented</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-conversion-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Briefcase" size={28} className="text-conversion-orange" />
            </div>
            <div className="font-heading font-bold text-3xl text-foreground mb-2">85%</div>
            <div className="font-body text-muted-foreground">Employment Rate</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={28} className="text-secondary" />
            </div>
            <div className="font-heading font-bold text-3xl text-foreground mb-2">100%</div>
            <div className="font-body text-muted-foreground">Find Purpose & Hope</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesPreview;