import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onDonate }) => {
  const [isHovered, setIsHovered] = useState(false);

  const progressPercentage = (project?.raised / project?.target) * 100;

  return (
    <div 
      className="bg-card rounded-xl shadow-warm hover:shadow-warm-hover transition-warm overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-warm"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {project?.category}
          </span>
        </div>

        {/* Impact Stats Overlay */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-warm flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center text-white p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-2xl font-bold">{project?.beneficiaries}</div>
                <div className="text-sm opacity-90">Children Helped</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{project?.completion}%</div>
                <div className="text-sm opacity-90">Complete</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-lg font-semibold">₹{project?.raised?.toLocaleString()}</div>
                <div className="text-xs opacity-90">Raised</div>
              </div>
              <div>
                <div className="text-lg font-semibold">₹{project?.target?.toLocaleString()}</div>
                <div className="text-xs opacity-90">Target</div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Indicator */}
        {project?.urgent && (
          <div className="absolute top-3 right-3">
            <div className="flex items-center space-x-1 bg-error/90 text-error-foreground px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              <Icon name="AlertCircle" size={12} />
              <span>Urgent</span>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2 line-clamp-2">
            {project?.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project?.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-card-foreground">
              ₹{project?.raised?.toLocaleString()} raised
            </span>
            <span className="text-sm text-muted-foreground">
              {progressPercentage?.toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-success h-2 rounded-full transition-warm"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            ₹{(project?.target - project?.raised)?.toLocaleString()} more needed
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-muted rounded-lg">
          <div className="text-center">
            <div className="text-sm font-semibold text-card-foreground">{project?.ageGroup}</div>
            <div className="text-xs text-muted-foreground">Age Group</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-card-foreground">{project?.duration}</div>
            <div className="text-xs text-muted-foreground">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-card-foreground">{project?.location}</div>
            <div className="text-xs text-muted-foreground">Location</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="Heart"
            iconPosition="left"
            iconSize={16}
            className="bg-conversion-orange hover:bg-conversion-orange/90 text-white"
            onClick={() => onDonate(project)}
          >
            Donate Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            iconSize={16}
            className="px-3"
          >
            View
          </Button>
        </div>

        {/* Last Updated */}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Updated {project?.lastUpdated}</span>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>{project?.donors} donors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;