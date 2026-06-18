import React from "react";
import Icon from "../../../components/AppIcon";

const WhyJoinVolunteerSquad = () => {
  const reasons = [
    {
      icon: "HeartHandshake",
      title: "Be a Positive Role Model",
      description:
        "Inspire, mentor and encourage children to dream bigger, build confidence and achieve their goals.",
    },
    {
      icon: "Lightbulb",
      title: "Develop New Skills",
      description:
        "Gain valuable experience in leadership, communication, teamwork, event management and social service.",
    },
    {
      icon: "Sparkles",
      title: "Share Your Talents",
      description:
        "Use your skills in teaching, arts, music, sports, technology, healthcare or counseling to create impact.",
    },
    {
      icon: "Smile",
      title: "Experience the Joy of Giving",
      description:
        "Witness the happiness, growth and confidence of children through your support and encouragement.",
    },
    {
      icon: "ShieldCheck",
      title: "Trusted Since 1974",
      description:
        "Join a respected organization serving children through education, healthcare, shelter and welfare programs.",
    },
    {
      icon: "Users",
      title: "Build Meaningful Connections",
      description:
        "Meet like-minded volunteers, professionals and community leaders while making a difference together.",
    },
  ];

  return (
    <div className="mb-16 sm:mb-20">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
          Start Volunteering With IGM Children Homes
        </h2>

       

        <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
          At IGM Children Homes, volunteering is more than just giving your
          time. It is an opportunity to make a lasting impact on the lives of
          children and communities while becoming part of a compassionate family
          dedicated to positive change through love, care and service.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 shadow-warm hover:shadow-warm-hover transition-warm flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Icon
                name={item.icon}
                size={22}
                color="var(--color-primary)"
              />
            </div>

            <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
              {item.title}
            </h4>

            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinVolunteerSquad;