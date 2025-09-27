import React from 'react';
import StoryCard from './StoryCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedStories = ({ currentStoryId, category }) => {
  const relatedStories = [
    {
      id: 2,
      name: "Bakiyalakshmi",
      age: 16,
      category: "Education",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      excerpt: "From struggling with basic literacy to becoming the top student in her class, Bakiyalakshmi's educational journey showcases the power of dedicated support and determination.",
      duration: "4 years",
      location: "Chennai Center",
      achievements: ["Class Topper", "Science Fair Winner"],
      hasVideo: true
    },
    {
      id: 3,
      name: "Arjun Kumar",
      age: 14,
      category: "Sports",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      excerpt: "Discovered his passion for football at IGM and now represents the state team. His journey from the streets to the stadium inspires many young athletes.",
      duration: "3 years",
      location: "Bangalore Center",
      achievements: ["State Team", "Best Player Award"],
      hasVideo: false
    },
    {
      id: 4,
      name: "Priya Sharma",
      age: 17,
      category: "Skills Training",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      excerpt: "Learned computer programming and web development skills. Now works as a junior developer while completing her studies, supporting her family financially.",
      duration: "2 years",
      location: "Delhi Center",
      achievements: ["Certified Developer", "Job Placement"],
      hasVideo: true
    }
  ];

  // Filter out current story and limit to 3 related stories
  const filteredStories = relatedStories?.filter(story => story?.id !== currentStoryId)?.slice(0, 3);

  return (
    <div className="bg-warm-foundation rounded-2xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
            More Inspiring Stories
          </h2>
          <p className="text-muted-foreground">
            Discover other children whose lives have been transformed through our programs
          </p>
        </div>
        <Button
          variant="outline"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          View All Stories
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories?.map((story) => (
          <StoryCard key={story?.id} story={story} />
        ))}
      </div>
      {/* Newsletter Signup */}
      <div className="mt-12 text-center bg-card rounded-xl p-8">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={24} className="text-primary-foreground" />
        </div>
        <h3 className="font-heading font-bold text-xl text-foreground mb-2">
          Stay Updated with New Stories
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Get the latest success stories and updates from IGM Children Homes delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button
            variant="default"
            iconName="Send"
            iconPosition="right"
            iconSize={16}
            className="bg-primary hover:bg-primary/90"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedStories;