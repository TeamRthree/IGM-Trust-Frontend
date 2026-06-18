import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SixPillarApproach = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Child Care & Protection ",
      icon: "Users",
      description: "Comprehensive approach addressing physical, emotional, intellectual, and social development of every child.",
      details: `By closely following the Juvenile Justice Act, IGM guarantees a safe, secure and caring environment for 
each and every kid. Every child's welfare is given top priority in the house thanks to 24-hour supervision, 
well-defined emergency response plans, and explicit safety procedures.\n\n IGM has a strict zero-tolerance 
policy for any kind of abuse, discrimination, or neglect, and every child is treated with respect, dignity, 
and privacy. `,
      image: "/assets/Gallery/_DSC6363.jpg",
      stats: [
        { label: "Development Programs", value: "25+" },
        { label: "Success Rate", value: "94%" },
        { label: "Children Benefited", value: "1,500+" }
      ]
    },
    {
      title: "Child-Centered Development ",
      icon: "BookOpen",
      description: "Ensuring every child receives quality education from primary through higher education with scholarship support.",
      details: `We focus on nurturing their individuality, potential and well-being through holistic care that integrates 
education, emotional support, health and moral guidance. Every program is designed to empower 
children to make informed choices, develop self-confidence, and grow into responsible, independent 
individuals.\n\nOur goal is to create an environment where every child feels valued, heard, and inspired to 
achieve their fullest potential ensuring that care at IGM goes beyond meeting basic needs to fostering 
lifelong growth. 
`,
      image: "/assets/Gallery/_DSC2049.jpg",
      stats: [
        { label: "Graduation Rate", value: "98%" },
        { label: "Scholarships Awarded", value: "450+" },
        { label: "Partner Schools", value: "15" }
      ]
    },
    {
      title: "Quality Education Access ",
      icon: "Heart",
      description: "Comprehensive healthcare services including regular check-ups, nutrition programs, and mental health support.",
      details: `We focus on fostering Economic Self-Reliance for Women by equipping them with the skills, resources, 
and confidence needed to achieve financial independence. Through vocational training, 
entrepreneurship programs, and financial literacy initiatives, women are empowered to generate 
sustainable income and manage their own resources effectively.  \n\nBy promoting self-reliance, IGM helps women build confidence, dignity, and the ability to shape their own futures, contributing to stronger families and communities.`,
      image: "/assets/Gallery/DJI_0212.jpg",
      stats: [
        { label: "Health Check-ups", value: "Monthly" },
        { label: "Nutrition Programs", value: "Daily" },
        { label: "Medical Partners", value: "8" }
      ]
    },
    {
      title: "Economic Self-Reliance for Women ",
      icon: "Target",
      description: "Practical life skills preparation including financial literacy, communication, and independent living capabilities.",
      details: `Preparing children for independent living is crucial for their successful transition to adulthood. Our life skills training covers financial literacy, communication skills, time management, and practical daily living skills.\n\nThrough workshops, mentorship programs, and real-world practice opportunities, we ensure children are well-equipped to navigate adult responsibilities and make informed decisions about their futures.`,
      image: "/assets/Gallery/Girl grp photo.jpg",
      stats: [
        { label: "Skills Modules", value: "20+" },
        { label: "Workshop Hours", value: "500+" },
        { label: "Mentors Available", value: "35" }
      ]
    }
  ];

  return (
<section
  id="six-pillar"
  className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-background via-warm-foundation to-background"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-12 sm:mb-14 lg:mb-16">
      <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
        Our Four-Pillar Approach
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
        A comprehensive methodology that addresses every aspect of child welfare, ensuring holistic development and successful life outcomes.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">

      {/* Pillar Navigation */}
      <div className="space-y-3">
        {pillars?.map((pillar, index) => (
          <div
            key={index}
            className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-warm ${
              activePillar === index
                ? 'bg-primary text-white shadow-warm'
                : 'bg-white hover:bg-muted shadow-warm hover:shadow-warm-hover'
            }`}
            onClick={() => setActivePillar(index)}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${
                  activePillar === index
                    ? 'bg-white/20'
                    : 'bg-primary/10'
                }`}
              >
                <Icon
                  name={pillar?.icon}
                  size={18}
                  color={
                    activePillar === index
                      ? 'white'
                      : 'var(--color-primary)'
                  }
                />
              </div>

              <div className="flex-1">
                <h3
                  className={`font-medium text-sm sm:text-base ${
                    activePillar === index
                      ? 'text-white'
                      : 'text-foreground'
                  }`}
                >
                  {pillar?.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    activePillar === index
                      ? 'text-white/80'
                      : 'text-muted-foreground'
                  }`}
                >
                  {pillar?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Pillar Content */}
      <div className="lg:col-span-2 space-y-5 sm:space-y-6">
        <div className="bg-white rounded-2xl shadow-warm-hover overflow-hidden">

          {/* Image */}
          <div className="relative">
            <Image
              src={pillars?.[activePillar]?.image}
              alt={pillars?.[activePillar]?.title}
              className="w-full h-52 sm:h-60 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <div className="absolute bottom-4 left-4 sm:left-6">
              <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white mb-1 sm:mb-2">
                {pillars?.[activePillar]?.title}
              </h3>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-4 sm:p-6">
            <div className="prose prose-gray max-w-none">
              {pillars?.[activePillar]?.details
                ?.split('\n\n')
                ?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {pillars?.[activePillar]?.stats?.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-warm"
            >
              <div className="text-lg sm:text-xl font-bold text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
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