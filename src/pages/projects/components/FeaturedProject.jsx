import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime); // MUST extend before using fromNow
dayjs.extend(utc);

const FeaturedProject = ({ project, onDonate }) => {
  const progressPercentage = (project?.raised / project?.target) * 100;
  const daysLeft = Math.ceil((new Date(project.deadline) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-gradient-trust rounded-xl overflow-hidden bg-white min-h-[400px] shadow-warm-hover  mb-8">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-full">
          <Image
            src={project?.image}
            alt={project?.title}
            className="w-full object-contain h-full"
          />
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-black/20 text-secondary-foreground px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Icon name="Star" size={16} />
              <span>Featured Project</span>
            </div>
          </div>

          {/* Urgency Badge */}
          {project?.urgent && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-black/20 text-error-foreground px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                <Icon name="Clock" size={16} />
                <span>64 days left</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8 text-white">
          <div className="mb-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/20 text-white mb-3">
              {project?.category}
            </div>
            <h2 className="font-heading font-bold text-foreground text-2xl lg:text-3xl mb-3">
              {project?.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project?.description}
            </p>
          </div>

         

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{project?.children_helped}</div>
              <div className="text-sm text-muted-foreground">Children</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{project?.donors_count}</div>
              <div className="text-sm text-muted-foreground">Donors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{project?.completion}%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
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
              className="bg-secondary hover:bg-conversion-orange/90 text-white shadow-button flex-1"
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
              className="border-secondary text-secondary hover:text-secondary hover:bg-transparent "
            >
              Share
            </Button>
          </div>

          {/* Last Update */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Last updated: {project?.last_updated
                  ? dayjs.utc(project.last_updated).local().fromNow()
                  : dayjs.utc(project?.created_at).local().fromNow()
                }</span>
              <div className="flex items-center text-muted-foreground space-x-1">
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