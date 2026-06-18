import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onDonate, onView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const raised = project?.raised || 0;
  const target = project?.target || 0;

  const progressPercentage =
    target > 0 ? (raised / target) * 100 : 0;

  // Impact logic
  const impactCount =
    project?.children_supported ||
    project?.beneficiaries_count ||
    0;

  const impactLabel = project?.children_supported
    ? "Children Supported"
    : "Beneficiaries";

  // Cost logic
  const hasYearlyCost = project?.cost_per_child_per_year;
  const hasMonthlyCost = project?.cost_per_child_per_month;
  const hasTraineeCost = project?.per_trainee_cost;

  return (
   <div
  className="bg-card rounded-xl shadow-warm hover:shadow-warm-hover transition-warm overflow-hidden group flex flex-col"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Image Container */}
  <div className="relative min-h-[300px]">
    <Image
      src={project?.image}
      alt={project?.title}
      className="w-full h-full object-cover  transition-warm"
    />

    {/* Category Badge */}
    <div className="absolute top-3 left-3">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-primary-foreground backdrop-blur-sm">
        {project?.category}
      </span>
    </div>

    {/* Hover Overlay */}
    <div
      className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-warm flex items-center justify-center ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center text-white p-6">
        <div className="text-3xl font-bold mb-2">{impactCount}</div>
        <div className="text-sm opacity-90 mb-4">{impactLabel}</div>

        {hasYearlyCost && (
          <div className="text-lg font-semibold">
            ₹{project.cost_per_child_per_year.toLocaleString()} / Year
          </div>
        )}

        {hasMonthlyCost && (
          <div className="text-sm opacity-90">
            ₹{project.cost_per_child_per_month.toLocaleString()} / Month
          </div>
        )}

        {hasTraineeCost && (
          <div className="text-lg font-semibold">
            ₹{project.per_trainee_cost.toLocaleString()} Per Trainee
          </div>
        )}
      </div>
    </div>

    
  </div>

  {/* Content */}
  <div className="p-6 flex flex-col flex-1">

    {/* FLEX STRUCTURE */}
    <div className="flex flex-col h-full">

      {/* TOP ZONE */}
      <div>

        {/* Title + Description */}
        <div className="mb-4">
          <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2 line-clamp-2">
            {project?.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 min-h-[60px]">
            {project?.description}
          </p>
        </div>

        {/* 💰 Cost Highlight Section (Fixed Height) */}
        {(hasYearlyCost || hasTraineeCost) && (
          <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20 min-h-[64px] flex flex-col justify-center">
            {hasYearlyCost && (
              <div className="text-sm font-semibold text-primary">
                ₹{project.cost_per_child_per_year.toLocaleString()} / Year Per Child
              </div>
            )}

            {hasMonthlyCost && (
              <div className="text-xs text-muted-foreground">
                ₹{project.cost_per_child_per_month.toLocaleString()} / Month
              </div>
            )}

            {hasTraineeCost && (
              <div className="text-sm font-semibold text-primary">
                ₹{project.per_trainee_cost.toLocaleString()} Per Trainee
              </div>
            )}
          </div>
        )}

       

       {/* Impact Metrics (Perfectly Balanced) */}
<div className="mb-4 border border-border rounded-lg p-4 min-h-[130px] bg-card/50 grid grid-rows-3">

  {/* Row 1 */}
  <div className="flex flex-col justify-center">
    <div className="text-xs text-muted-foreground">Age Group</div>
    <div className="text-sm font-semibold text-card-foreground">
      {project?.age_group}
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-col justify-center">
    <div className="text-xs text-muted-foreground">{impactLabel}</div>
    <div className="text-sm font-semibold text-card-foreground">
      {impactCount}
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex flex-col justify-center">
    <div className="text-xs text-muted-foreground">Location</div>
    <div className="text-sm font-semibold text-card-foreground break-words line-clamp-2">
      {project?.location}
    </div>
  </div>

</div>


      </div>

      {/* BOTTOM ZONE (Always Aligned) */}
      <div className="mt-auto">

        {/* Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            fullWidth
           
            className="bg-conversion-orange hover:bg-conversion-orange/90 text-white"
            onClick={() => onDonate(project)}
          >
            Donate Now
          </Button>

          <Button
            variant="outline"
            size="sm"
         
            className="px-3"
            onClick={() => onView(project)}
          >
            View
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Updated{" "}
              {project?.last_updated
                ? dayjs.utc(project.last_updated).local().fromNow()
                : dayjs.utc(project?.created_at).local().fromNow()}
            </span>

            
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

  );
};

export default ProjectCard;
