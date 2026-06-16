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
          
         

          
        </div>

        {/* Content Section */}
        <div className="p-8 text-white flex flex-col justify-between">
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

         


          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              size="lg"
             
              className="bg-secondary hover:bg-conversion-orange/90 text-white shadow-button flex-1"
              onClick={() => onDonate(project)}
            >
              Donate to This Project
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