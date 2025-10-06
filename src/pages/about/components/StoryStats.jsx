import React from 'react';
import Icon from '../../../components/AppIcon';

const StoryStats = () => {
  const stats = [
    {
      icon: 'Users',
      value: '2,847',
      label: 'Children Transformed',
      description: 'Lives changed through our programs',
      color: 'text-primary'
    },
    {
      icon: 'GraduationCap',
      value: '1,234',
      label: 'Educational Success',
      description: 'Children completed their education',
      color: 'text-success'
    },
    {
      icon: 'Briefcase',
      value: '567',
      label: 'Career Placements',
      description: 'Secured meaningful employment',
      color: 'text-secondary'
    },
    {
      icon: 'Home',
      value: '89%',
      label: 'Family Reunification',
      description: 'Successfully reunited with families',
      color: 'text-accent'
    }
  ];

  return (
    <div id='our-story' className=" bg-muted  pt-20 ">
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
<div className="text-center mb-8">
        <h2 className="font-heading font-bold text-foreground text-3xl mb-4">
          Impact Through Stories
        </h2>
        <p className=" text-muted-foreground text-lg max-w-2xl mx-auto">
          Every number represents a life transformed, a dream realized, and a future restored. These are the stories behind our mission.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={stat?.icon} size={28} className="text-foreground" />
            </div>
            <div className="text-3xl font-heading font-bold mb-2">
              {stat?.value}
            </div>
            <div className="text-lg text-muted-foreground/70 font-semibold mb-1">
              {stat?.label}
            </div>
            <div className="text-muted-foreground text-sm">
              {stat?.description}
            </div>
          </div>
        ))}
      </div>
      </div>
      
      
      
    </div>
  );
};

export default StoryStats;