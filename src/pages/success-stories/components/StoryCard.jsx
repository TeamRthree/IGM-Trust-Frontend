import React from 'react';

import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, featured = false }) => {
  const cardClass = featured 
    ? "group relative overflow-hidden rounded-xl bg-card shadow-warm hover:shadow-warm-hover transition-warm cursor-pointer h-96"
    : "group relative overflow-hidden rounded-lg bg-card shadow-warm hover:shadow-warm-hover transition-warm cursor-pointer h-80";

  return (
    <div className={cardClass}>
      {/* Story Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story?.image}
          alt={story?.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-warm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Story Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            {story?.category}
          </span>
        </div>

        {/* Video Play Button for Video Stories */}
        {story?.hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-warm">
              <Icon name="Play" size={24} className="text-primary ml-1" />
            </div>
          </div>
        )}
      </div>
      {/* Story Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-warm">
            {story?.name}
          </h3>
          <span className="text-sm text-muted-foreground">{story?.age} years</span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {story?.excerpt}
        </p>

        {/* Progress Indicators */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{story?.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{story?.location}</span>
          </div>
        </div>

        {/* Achievement Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {story?.achievements?.slice(0, 2)?.map((achievement, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded text-xs bg-success/10 text-success"
            >
              <Icon name="Award" size={12} className="mr-1" />
              {achievement}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
          className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-warm"
        >
          Read Full Story
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;