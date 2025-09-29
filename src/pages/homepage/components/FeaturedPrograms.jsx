import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Education & Skill Development",
      description: "Comprehensive educational programs from primary school through vocational training, ensuring every child has the tools for a successful future.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "BookOpen",
      stats: "1,200+ Students",
      color: "secondary",
      features: ["Primary & Secondary Education", "Vocational Training", "Computer Literacy", "Life Skills Development"]
    },
    {
      id: 2,
      title: "Healthcare & Nutrition",
      description: "Complete healthcare services including regular check-ups, nutritious meals, and mental health support to ensure holistic well-being.",
      image: "https://images.pexels.com/photos/6303773/pexels-photo-6303773.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Heart",
      stats: "24/7 Care",
      color: "secondary",
      features: ["Regular Health Check-ups", "Nutritious Meals", "Mental Health Support", "Emergency Medical Care"]
    },
    {
      id: 3,
      title: "Family Reunification",
      description: "Dedicated efforts to reunite children with their families when possible, providing counseling and support throughout the process.",
      image: "https://media.istockphoto.com/id/1473468869/photo/group-of-happy-people-with-senior-citizens-at-park.jpg?s=612x612&w=0&k=20&c=xROHNPZDpatj3V_XaVwZjthyC0HhT0FVSevcXsmI_xo=",
      icon: "Users",
      stats: "85% Success Rate",
      color: "secondary",
      features: ["Family Tracing", "Counseling Services", "Gradual Reintegration", "Follow-up Support"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'primary': {
        icon: 'text-primary',
        bg: 'bg-primary/10',
        button: 'bg-primary hover:bg-primary/90',
        accent: 'text-primary'
      },
      'conversion-orange': {
        icon: 'text-conversion-orange',
        bg: 'bg-conversion-orange/10',
        button: 'bg-conversion-orange hover:bg-conversion-orange/90',
        accent: 'text-conversion-orange'
      },
      'secondary': {
        icon: 'text-secondary',
        bg: 'bg-secondary/10',
        button: 'bg-secondary hover:bg-secondary/90',
        accent: 'text-secondary'
      }
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Core Programs</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            How We Transform Lives
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach addresses every aspect of a child's development, from basic needs to future aspirations. Each program is designed to restore hope and build lasting foundations for success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs?.map((program, index) => {
            const colors = getColorClasses(program?.color);
            
            return (
              <div
                key={program?.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-hover transition-all duration-300 border border-border hover:border-primary/20"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program?.image}
                    alt={program?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-foreground">{program?.stats}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 ${colors?.bg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                    <Icon name={program?.icon} size={24} className={colors?.icon} strokeWidth={2.5} />
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program?.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {program?.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {program?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className={colors?.accent} strokeWidth={2.5} />
                        <span className="text-sm font-body text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to="/projects">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="ArrowRight"
                      iconPosition="right"
                      className={`${colors?.button} text-white shadow-button`}
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-primary/5 via-warm-foundation to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                Every Program Tells a Story
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Behind every program are countless success stories of children who found hope, developed skills, and built bright futures. Your support makes these transformations possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/success-stories">
                  <Button
                    variant="default"
                    iconName="BookOpen"
                    iconPosition="left"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Read Success Stories
                  </Button>
                </Link>
                
                <Link to="/projects">
                  <Button
                    variant="outline"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    View All Programs
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-warm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div className="font-heading font-bold text-2xl text-foreground mb-1">95%</div>
                <div className="font-body text-sm text-muted-foreground">Program Success Rate</div>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-warm text-center">
                <div className="w-12 h-12 bg-conversion-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-conversion-orange" />
                </div>
                <div className="font-heading font-bold text-2xl text-foreground mb-1">12</div>
                <div className="font-body text-sm text-muted-foreground">Active Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;