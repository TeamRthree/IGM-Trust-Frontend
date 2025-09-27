import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const actionCards = [
    {
      title: "Support Our Mission",
      description: "Join thousands of compassionate donors who help us restore broken lives and create lasting change.",
      icon: "Heart",
      primaryAction: {
        text: "Donate Now",
        link: "/donate",
        variant: "default",
        className: "bg-conversion-orange hover:bg-conversion-orange/90"
      },
      secondaryAction: {
        text: "Sponsor a Child",
        link: "/donate",
        variant: "outline"
      },
      stats: [
        { label: "Active Donors", value: "2,500+" },
        { label: "Monthly Supporters", value: "850+" }
      ]
    },
    {
      title: "Volunteer With Us",
      description: "Share your skills and time to directly impact children\'s lives through our comprehensive volunteer programs.",
      icon: "Users",
      primaryAction: {
        text: "Join as Volunteer",
        link: "/contact",
        variant: "default",
        className: "bg-primary hover:bg-primary/90"
      },
      secondaryAction: {
        text: "Learn More",
        link: "/contact",
        variant: "outline"
      },
      stats: [
        { label: "Active Volunteers", value: "450+" },
        { label: "Volunteer Hours", value: "12,000+" }
      ]
    },
    {
      title: "Partner With Us",
      description: "Create meaningful corporate partnerships that align with your CSR goals while making a real difference.",
      icon: "Handshake",
      primaryAction: {
        text: "Explore Partnership",
        link: "/contact",
        variant: "default",
        className: "bg-secondary hover:bg-secondary/90"
      },
      secondaryAction: {
        text: "View Case Studies",
        link: "/projects",
        variant: "outline"
      },
      stats: [
        { label: "Corporate Partners", value: "75+" },
        { label: "CSR Projects", value: "120+" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            Together, We Restore Broken Lives
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Every child deserves a chance to dream. Your compassion creates lasting change. Join our mission of transformative compassion in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-warm">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                <Icon name={card?.icon} size={32} color="white" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-center mb-4">
                {card?.title}
              </h3>
              
              <p className="text-white/90 text-center mb-6 leading-relaxed">
                {card?.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {card?.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat?.value}</div>
                    <div className="text-sm text-white/80">{stat?.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <Link to={card?.primaryAction?.link}>
                  <Button
                    variant={card?.primaryAction?.variant}
                    fullWidth
                    className={card?.primaryAction?.className || ""}
                  >
                    {card?.primaryAction?.text}
                  </Button>
                </Link>
                <Link to={card?.secondaryAction?.link}>
                  <Button
                    variant={card?.secondaryAction?.variant}
                    fullWidth
                    className="border-white text-white hover:bg-white/10"
                  >
                    {card?.secondaryAction?.text}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="font-heading font-bold text-2xl mb-6">
            Ready to Make a Difference?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} color="white" />
              <span className="text-white/90">+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} color="white" />
              <span className="text-white/90">info@igmhomes.org</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="MapPin" size={20} color="white" />
              <span className="text-white/90">Visit Our Centers</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Get in Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="outline"
                iconName="Eye"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                See Our Impact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;