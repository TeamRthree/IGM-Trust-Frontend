import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const CallToAction = () => {

  const [isVisible, setIsVisible] = useState(false);

const [animatedStats, setAnimatedStats] = useState({
  activeDonors: 0,
  monthlySupporters: 0,
  activeVolunteers: 0,
  volunteerHours: 0,
  corporatePartners: 0,
  csrProjects: 0,
});

const sectionRef = useRef(null);


  const actionCards = [
    {
      title: "Support Our Mission",
      description: "Join thousands of compassionate donors who help us restore broken lives and create lasting change.",
      icon: "Heart",
      primaryAction: {
        text: "Donate Now",
        link: "/donate",
        variant: "default",
        className: "bg-secondary hover:bg-secondary/90"
      },
      secondaryAction: {
        text: "Sponsor a Child",
        link: "/donate",
        variant: "outline"
      },
    stats: [
  { label: "Active Donors", value: animatedStats.activeDonors },
  { label: "Monthly Supporters", value: animatedStats.monthlySupporters }
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
        className: "bg-secondary hover:bg-secondary/90"
      },
      secondaryAction: {
        text: "Learn More",
        link: "/contact",
        variant: "outline"
      },
     stats: [
  { label: "Active Volunteers", value: animatedStats.activeVolunteers },
  { label: "Volunteer Hours", value: animatedStats.volunteerHours }
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
  { label: "Corporate Partners", value: animatedStats.corporatePartners },
  { label: "CSR Projects", value: animatedStats.csrProjects }
]
    }
  ];

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, [isVisible]);

useEffect(() => {
  if (!isVisible) return;

  const duration = 2000;
  const steps = 60;
  const stepDuration = duration / steps;

  let currentStep = 0;

  const interval = setInterval(() => {
    currentStep++;

    const progress = currentStep / steps;

    setAnimatedStats({
      activeDonors: Math.floor(2500 * progress),
      monthlySupporters: Math.floor(850 * progress),
      activeVolunteers: Math.floor(450 * progress),
      volunteerHours: Math.floor(12000 * progress),
      corporatePartners: Math.floor(75 * progress),
      csrProjects: Math.floor(120 * progress),
    });

    if (currentStep >= steps) {
      clearInterval(interval);

      setAnimatedStats({
        activeDonors: 2500,
        monthlySupporters: 850,
        activeVolunteers: 450,
        volunteerHours: 12000,
        corporatePartners: 75,
        csrProjects: 120,
      });
    }
  }, stepDuration);

  return () => clearInterval(interval);
}, [isVisible]);

  return (
    <section   ref={sectionRef} id='corporate' className="py-20 bg-muted text-white relative overflow-hidden">
      <div className="absolute inset-0 "></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4 text-foreground">
            Together, We Restore Broken Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every child deserves a chance to dream. Your compassion creates lasting change. Join our mission of transformative compassion in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionCards?.map((card, index) => (
            <div key={index} className="bg-card shadow-warm hover:shadow-warm-hover transition-all duration-300 backdrop-blur-sm rounded-2xl p-8 ">
              
              
              <h3 className="font-heading font-bold text-3xl text-foreground text-center mb-12">
                {card?.title}
              </h3>
              
              <p className=" text-center mb-6 leading-relaxed text-muted-foreground">
                {card?.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {card?.stats?.map((stat, idx) => (
                  <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">
  {typeof stat.value === "number"
    ? stat.value.toLocaleString() + "+"
    : stat.value}
</div>
                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col space-y-4">
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
                    className="border-secondary text-secondary bg-transparent hover:bg-transparent hover:text-primary hover:border-primary"
                  >
                    {card?.secondaryAction?.text}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-white backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="font-heading text-foreground font-bold text-2xl mb-6">
            Ready to Make a Difference?
          </h3>
          
          <p className="text-muted-foreground mb-8">
            Your support can turn small steps into lasting impact. Let’s work together to create something meaningful.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                variant="default"
                
                className="bg-secondary text-white "
              >
                Get in Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                variant="outline"
                
                className="border-secondary text-secondary hover:text-secondary hover:bg-transparent"
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