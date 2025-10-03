import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SixPillarApproach = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Holistic Child Development",
      icon: "Users",
      description: "Comprehensive approach addressing physical, emotional, intellectual, and social development of every child.",
      details: `Our holistic development framework ensures each child receives personalized attention across all growth dimensions. We focus on building confidence, creativity, and critical thinking skills while nurturing emotional intelligence and social awareness.\n\nThrough structured activities, mentorship programs, and individualized care plans, we help children discover their unique potential and develop the skills needed for successful integration into society.`,
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      stats: [
        { label: "Development Programs", value: "25+" },
        { label: "Success Rate", value: "94%" },
        { label: "Children Benefited", value: "1,500+" }
      ]
    },
    {
      title: "Quality Education Access",
      icon: "BookOpen",
      description: "Ensuring every child receives quality education from primary through higher education with scholarship support.",
      details: `Education is the cornerstone of transformation. We provide comprehensive educational support including formal schooling, vocational training, and skill development programs tailored to each child's interests and abilities.\n\nOur partnerships with leading educational institutions ensure children have access to quality learning environments, modern teaching methods, and opportunities for higher education through our scholarship programs.`,
      image: "https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg",
      stats: [
        { label: "Graduation Rate", value: "98%" },
        { label: "Scholarships Awarded", value: "450+" },
        { label: "Partner Schools", value: "15" }
      ]
    },
    {
      title: "Healthcare & Nutrition",
      icon: "Heart",
      description: "Comprehensive healthcare services including regular check-ups, nutrition programs, and mental health support.",
      details: `Health is fundamental to a child's development. Our healthcare pillar encompasses preventive care, regular health monitoring, nutritional support, and mental health services.\n\nWe maintain on-site medical facilities staffed by qualified healthcare professionals and have partnerships with leading hospitals to ensure children receive the best possible medical care when needed.`,
      image: "https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg",
      stats: [
        { label: "Health Check-ups", value: "Monthly" },
        { label: "Nutrition Programs", value: "Daily" },
        { label: "Medical Partners", value: "8" }
      ]
    },
    {
      title: "Life Skills Training",
      icon: "Target",
      description: "Practical life skills preparation including financial literacy, communication, and independent living capabilities.",
      details: `Preparing children for independent living is crucial for their successful transition to adulthood. Our life skills training covers financial literacy, communication skills, time management, and practical daily living skills.\n\nThrough workshops, mentorship programs, and real-world practice opportunities, we ensure children are well-equipped to navigate adult responsibilities and make informed decisions about their futures.`,
      image: "https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg",
      stats: [
        { label: "Skills Modules", value: "20+" },
        { label: "Workshop Hours", value: "500+" },
        { label: "Mentors Available", value: "35" }
      ]
    },
    {
      title: "Family Reintegration",
      icon: "Home",
      description: "Supporting family reunification when possible and creating lasting family-like bonds within our community.",
      details: `When appropriate and safe, we work towards family reintegration through counseling, mediation, and support services. For children who cannot return to their biological families, we create strong family-like bonds within our community.\n\nOur approach includes family counseling, regular family visits when possible, and creating a supportive environment that mimics healthy family dynamics to ensure children experience love, belonging, and security.`,
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg",
      stats: [
        { label: "Successful Reintegrations", value: "280+" },
        { label: "Family Counseling Sessions", value: "1,200+" },
        { label: "Support Programs", value: "12" }
      ]
    },
    {
      title: "Community Integration",
      icon: "Globe",
      description: "Facilitating smooth integration into society through community engagement and social responsibility programs.",
      details: `Community integration ensures children develop strong social connections and civic responsibility. We organize community service projects, cultural events, and social activities that help children build relationships beyond our facilities.\n\nThrough partnerships with local organizations, volunteer programs, and community events, we help children develop a sense of belonging and responsibility towards society while building networks that support their long-term success.`,
      image: "https://images.pexels.com/photos/8613265/pexels-photo-8613265.jpeg",
      stats: [
        { label: "Community Projects", value: "50+" },
        { label: "Volunteer Hours", value: "2,000+" },
        { label: "Partner Organizations", value: "25" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-warm-foundation to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Our Six-Pillar Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive methodology that addresses every aspect of child welfare, ensuring holistic development and successful life outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pillar Navigation */}
          <div className="space-y-3">
            {pillars?.map((pillar, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-warm ${
                  activePillar === index
                    ? 'bg-primary text-white shadow-warm'
                    : 'bg-white hover:bg-muted shadow-warm hover:shadow-warm-hover'
                }`}
                onClick={() => setActivePillar(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                    activePillar === index
                      ? 'bg-white/20' :'bg-primary/10'
                  }`}>
                    <Icon 
                      name={pillar?.icon} 
                      size={20} 
                      color={activePillar === index ? 'white' : 'var(--color-primary)'} 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium text-sm ${
                      activePillar === index ? 'text-white' : 'text-foreground'
                    }`}>
                      {pillar?.title}
                    </h3>
                    <p className={`text-xs mt-1 ${
                      activePillar === index ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {pillar?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Pillar Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-warm-hover overflow-hidden">
              <div className="relative">
                <Image
                  src={pillars?.[activePillar]?.image}
                  alt={pillars?.[activePillar]?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">
                    {pillars?.[activePillar]?.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="prose prose-gray max-w-none">
                  {pillars?.[activePillar]?.details?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {pillars?.[activePillar]?.stats?.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-warm">
                  <div className="text-xl font-bold text-primary mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixPillarApproach;