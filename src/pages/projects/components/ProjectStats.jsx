import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Target',
      label: 'Active Projects',
      value: stats?.activeProjects,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Users',
      label: 'Children Helped',
      value: stats?.childrenHelped?.toLocaleString(),
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'IndianRupee',
      label: 'Total Raised',
      value: `₹${stats?.totalRaised?.toLocaleString()}`,
      color: 'text-conversion-orange',
      bgColor: 'bg-conversion-orange/10'
    },
    {
      icon: 'Heart',
      label: 'Total Donors',
      value: stats?.totalDonors?.toLocaleString(),
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems?.map((item, index) => (
        <div 
          key={index}
          className="bg-card rounded-xl shadow-warm p-6 hover:shadow-warm-hover transition-warm"
        >
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${item?.bgColor}`}>
              <Icon name={item?.icon} size={24} className={item?.color} />
            </div>
            <div>
              <div className="text-2xl font-bold text-card-foreground font-heading">
                {item?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {item?.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;