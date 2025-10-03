import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LegacyTimeline = () => {
  const [activeYear, setActiveYear] = useState(1975);

  const timelineData = [
    {
      year: 1975,
      title: "Foundation of Hope",
      description: "IGM Children Homes was established with a vision to restore broken lives and provide sanctuary for vulnerable children.",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg",
      icon: "Home",
      stats: { children: "25", staff: "3", facilities: "1" }
    },
    {
      year: 1985,
      title: "Official Registration",
      description: "Achieved official charitable organization status, establishing legal framework for expanded operations and transparency.",
      image: "https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg",
      icon: "FileCheck",
      stats: { children: "150", staff: "12", facilities: "2" }
    },
    {
      year: 1995,
      title: "Educational Excellence",
      description: "Launched comprehensive education programs, ensuring every child receives quality schooling and skill development.",
      image: "https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg",
      icon: "GraduationCap",
      stats: { children: "400", staff: "25", facilities: "4" }
    },
    {
      year: 2005,
      title: "Healthcare Integration",
      description: "Established on-site medical facilities and partnerships with healthcare providers for comprehensive child welfare.",
      image: "https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg",
      icon: "Heart",
      stats: { children: "800", staff: "45", facilities: "6" }
    },
    {
      year: 2015,
      title: "Digital Transformation",
      description: "Embraced technology for better child tracking, donor engagement, and transparent impact reporting.",
      image: "https://images.pexels.com/photos/8613265/pexels-photo-8613265.jpeg",
      icon: "Smartphone",
      stats: { children: "1200", staff: "75", facilities: "8" }
    },
    {
      year: 2025,
      title: "Global Recognition",
      description: "Celebrating 50 years of transformative compassion with half a million lives touched and international partnerships.",
      image: "https://images.pexels.com/photos/8613266/pexels-photo-8613266.jpeg",
      icon: "Award",
      stats: { children: "1500", staff: "120", facilities: "12" }
    }
  ];

  const activeData = timelineData?.find(item => item?.year === activeYear);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            50 Years of Transformative Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to global recognition, our journey reflects unwavering commitment to restoring broken lives and creating lasting change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Navigation */}
          <div className="space-y-6">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {timelineData?.map((item, index) => (
                <div
                  key={item?.year}
                  className={`relative flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-warm ${
                    activeYear === item?.year
                      ? 'bg-white shadow-warm'
                      : 'hover:bg-white/50'
                  }`}
                  onClick={() => setActiveYear(item?.year)}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-warm ${
                    activeYear === item?.year
                      ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={item?.icon} size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className={`font-bold text-lg ${
                        activeYear === item?.year ? 'text-primary' : 'text-foreground'
                      }`}>
                        {item?.year}
                      </span>
                      <span className={`font-medium ${
                        activeYear === item?.year ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {item?.title}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      activeYear === item?.year ? 'text-muted-foreground' : 'text-muted-foreground/70'
                    }`}>
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Content */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-hover">
              <Image
                src={activeData?.image}
                alt={`IGM Children Homes in ${activeData?.year}`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading font-bold text-2xl mb-2">
                  {activeData?.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {activeData?.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-warm">
                <div className="text-2xl font-bold text-primary mb-1">
                  {activeData?.stats?.children}
                </div>
                <div className="text-sm text-muted-foreground">Children Served</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-warm">
                <div className="text-2xl font-bold text-secondary mb-1">
                  {activeData?.stats?.staff}
                </div>
                <div className="text-sm text-muted-foreground">Staff Members</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-warm">
                <div className="text-2xl font-bold text-accent mb-1">
                  {activeData?.stats?.facilities}
                </div>
                <div className="text-sm text-muted-foreground">Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyTimeline;