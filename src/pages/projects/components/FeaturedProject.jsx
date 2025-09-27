import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onDonate }) => {
  const progressPercentage = (project?.raised / project?.target) * 100;
  const daysLeft = Math.ceil((new Date(project.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-gradient-trust rounded-xl overflow-hidden shadow-warm-hover mb-8">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-auto">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full h-full object-cover"
          />
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-secondary/90 text-secondary-foreground px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Icon name="Star" size={16} />
              <span>Featured Project</span>
            </div>
          </div>

          {/* Urgency Badge */}
          {project?.urgent && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-error/90 text-error-foreground px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <Icon name="Clock" size={16} />
                <span>{daysLeft} days left</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 text-white">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-3">
              {project?.category}
            </div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
              {project?.title}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              {project?.description}
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold">
                ₹{project?.raised?.toLocaleString()} raised
              </span>
              <span className="text-white/80">
                {progressPercentage?.toFixed(0)}% of ₹{project?.target?.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-warm"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{project?.beneficiaries}</div>
              <div className="text-sm text-white/80">Children</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{project?.donors}</div>
              <div className="text-sm text-white/80">Donors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{project?.completion}%</div>
              <div className="text-sm text-white/80">Complete</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              size="lg"
              iconName="Heart"
              iconPosition="left"
              iconSize={20}
              className="bg-conversion-orange hover:bg-conversion-orange/90 text-white shadow-button flex-1"
              onClick={() => onDonate(project)}
            >
              Donate to This Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Share2"
              iconPosition="left"
              iconSize={20}
              className="border-white/30 text-white hover:bg-white/10"
            >
              Share
            </Button>
          </div>

          {/* Last Update */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-sm text-white/80">
              <span>Last updated: {project?.lastUpdated}</span>
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} />
                <span>{project?.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;