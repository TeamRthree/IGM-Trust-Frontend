import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedStory = ({ story }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-card shadow-warm-hover">
      {/* Hero Image/Video Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        {!isVideoPlaying ? (
          <>
            <Image
              src={story?.heroImage}
              alt={story?.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Video Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-warm group"
              >
                <Icon name="Play" size={32} className="text-primary ml-1 group-hover:scale-110 transition-warm" />
              </button>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="text-white text-center">
              <Icon name="Play" size={48} className="mx-auto mb-4" />
              <p className="text-lg">Video Player Placeholder</p>
              <p className="text-sm opacity-80">"{story?.name}'s Journey"</p>
            </div>
          </div>
        )}

        {/* Story Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                Featured Story
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                {story?.category}
              </span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-4">
              {story?.name}'s Journey
            </h1>
            
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              {story?.tagline}
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>{story?.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>{story?.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>{story?.age} years old</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Story Content Section */}
      <div className="p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Story Timeline */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
              Transformation Timeline
            </h2>
            
            <div className="space-y-8">
              {story?.timeline?.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name={milestone?.icon} size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {milestone?.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{milestone?.date}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-12">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
              Key Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {story?.achievements?.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-muted rounded-xl">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={24} className="text-success-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {achievement?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-warm-foundation rounded-2xl p-8">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Help More Children Like {story?.name}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your support can transform lives and create more success stories. Join us in our mission to restore broken lives and build brighter futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Heart"
                iconPosition="left"
                iconSize={20}
                className="bg-conversion-orange hover:bg-conversion-orange/90 text-white"
              >
                Sponsor a Child
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Share2"
                iconPosition="left"
                iconSize={20}
              >
                Share This Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;