import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ImpactStories = () => {
  const stories = [
    {
      id: 1,
      name: "Nandhini",
      age: 16,
      image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: `From struggling with basic literacy to becoming the top student in her class, Nandhini's transformation shows the power of dedicated support and education.`,
      achievement: "Class Topper",
      donationImpact: "₹2,500/month sponsorship"
    },
    {
      id: 2,
      name: "Bakiyalakshmi",
      age: 14,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=compress&cs=tinysrgb&w=400",
      story: `Once shy and withdrawn, Bakiyalakshmi now leads the school debate team and dreams of becoming a teacher to help other children.`,
      achievement: "Debate Team Leader",
      donationImpact: "₹1,800/month education support"
    },
    {
      id: 3,
      name: "Arjun",
      age: 12,
      image: "https://images.pixabay.com/photo/2020/05/17/20/21/kid-5183105_960_720.jpg",
      story: `Arjun discovered his passion for art through our creative programs. His paintings now inspire other children and bring joy to our community.`,
      achievement: "Young Artist",
      donationImpact: "₹1,200/month creative development"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">Stories of Hope</h3>
        <p className="text-muted-foreground">
          See how your donations create lasting change in children's lives
        </p>
      </div>
      <div className="space-y-6">
        {stories?.map((story) => (
          <div key={story?.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-warm transition-all duration-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                  <Image
                    src={story?.image}
                    alt={`${story?.name}, age ${story?.age}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-foreground">{story?.name}</h4>
                    <span className="text-sm text-muted-foreground">• {story?.age} years old</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={14} className="text-secondary" />
                    <span className="text-sm font-medium text-secondary">{story?.achievement}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {story?.story}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={14} className="text-primary" />
                    <span className="text-xs text-primary font-medium">
                      {story?.donationImpact}
                    </span>
                  </div>
                  <button className="text-xs text-primary hover:text-primary/80 font-medium">
                    Read Full Story →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Your donation could be the next success story
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={12} />
            <span>500+ children supported</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="GraduationCap" size={12} />
            <span>200+ graduates</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Heart" size={12} />
            <span>48 years of service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStories;