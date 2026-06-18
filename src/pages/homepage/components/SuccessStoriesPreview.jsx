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
      name: "Swetha",
      age: "27 Years old",
      profession: "Nurse at Hindu mission hospital ",
      story: "Swetha was abandoned at just 3 years old and cared for by her loving grandmother. At age 6, she joined IGM Children Home, where guidance and support shaped her future. With encouragement, she completed her studies and pursued her dreams. Today, Swetha serves as a nurse in a reputed hospital, living the life she always hoped for. ",
      image: "/assets/Gallery/Dress Giving.jpg",
      beforeImage: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Professional Nurse ",
      yearsAtIGM: "24 years",
      quote: "Abandoned young, I joined IGM, completed my studies, and am now a nurse.",
      currentStatus: "Mentoring 15 children in coding"
    },
    {
      id: 2,
      name: "Bakiyalakshmi",
      age: "21 years old",
      profession: "Nurse at Reputed Hospital",
      story: "Orphaned and abandoned as a young child, I felt lost and alone. Then IGM Children Homes welcomed me with love, care, and the chance to learn. With their support, I grew, studied, and followed my dreams. Today, I am a nurse, grateful for the life and opportunities they gave me",
      image: "/assets/Gallery/medical camp FEb 2024.jpg",
      beforeImage: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Nursing Degree with Honors",
      yearsAtIGM: "14 years",
      quote: "I found love, care, and education at IGM—today, my dreams have come true",
      currentStatus: "Pediatric ward specialist"
    },
    {
      id: 3,
      name: "Suresh Kumar",
      age: "34 years old",
      profession: "Accounting Manager, IGM Children homes. ",
      story: "At the age of 10, my parents entrusted me to IGM. There, I was nurtured, supported and given the education I needed to grow. With their guidance, I completed my college studies successfully. Today, I proudly work as a manager at IGM, giving back to the place that shaped my life.",
      image: "/assets/Gallery/IGM01177.jpg",
      beforeImage: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievement: "Vocational Training Graduate",
      yearsAtIGM: "24 years",
      quote: "IGM gave me a home, a future and the chance to give back",
      currentStatus: "Employing 8 community members"
    }
  ];

  const currentStory = successStories?.[activeStory];

  return (
    <section id='success-stories' className="py-16 lg:py-24 bg-gradient-to-br from-warm-foundation via-background to-sky-blue/5">
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
        <div  className="bg-card rounded-3xl overflow-hidden shadow-warm-hover border border-border mb-12">
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

                
              </div>
            </div>

            {/* Before/After Images */}
            <div className="relative">
              <div className="h-full max-h-[540px] relative overflow-hidden">
                <Image
                  src={currentStory?.image}
                  alt={`${currentStory?.name} today`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
                
               
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Story Navigation */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Story Thumbnails */}
          <div className="flex md:space-x-4 flex-col md:flex-row space-y-4 md:space-y-0 pb-2">
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

          
        </div>

       
      </div>
    </section>
  );
};

export default SuccessStoriesPreview;