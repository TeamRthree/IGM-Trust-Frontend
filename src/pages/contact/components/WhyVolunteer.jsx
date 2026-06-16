import React from "react";
import Icon from "../../../components/AppIcon";

const WhyVolunteer = () => {
  const opportunities = [
    "Child Mentoring & Tutoring",
    "Arts, Crafts & Creative Activities",
    "Sports & Recreation Programs",
    "Computer & Digital Skills Training",
    "Healthcare & Medical Camps",
    "Community Outreach Programs",
    "Fundraising & Awareness Campaigns",
    "Event Planning & Coordination",
    "Photography & Media Support"
  ];

  const durations = [
    "One-day volunteering",
    "Weekend volunteering",
    "Short-term (1–3 months)",
    "Long-term engagement",
  ];

  const benefits = [
    "Students and Youth Volunteers",
    "Corporate Teams",
    "Professionals",
    "Retired Individuals",
    "Community Groups",
    "Social Service Enthusiasts"
  ];

  return (
    <div className="mt-12 sm:mt-16">
      <div className=" rounded-xl p-6 sm:p-8 lg:px-10">

        {/* TOP CONTENT */}
        <div className="flex flex-col items-center  mb-6">
          <div className="flex items-center gap-3 mb-4">
            

            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
              Volunteer With IGM
            </h3>
          </div>

          <p className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            At IGM Children’s Home, volunteers play a vital role in shaping
            young lives. Whether you are a student, professional, teacher,
            doctor, or simply someone with a heart to serve — there is a place
            for you here.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">

          {/* OPPORTUNITIES */}
          <div className="bg-card rounded-xl p-5 sm:p-6 border border-border">
            <div className="flex items-center gap-3 mb-5">
             

              <h4 className="font-heading font-semibold text-lg text-foreground">
                Opportunities
              </h4>
            </div>

            <div className="space-y-3">
              {opportunities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Icon
                    name="Check"
                    size={16}
                    className="text-success mt-0.5 flex-shrink-0"
                  />

                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DURATIONS */}
          <div className="bg-card rounded-xl p-5 sm:p-6 border border-border">
            <div className="flex items-center gap-3 mb-5">
             

              <h4 className="font-heading font-semibold text-lg text-foreground">
                Duration Options
              </h4>
            </div>

            <div className="space-y-3">
              {durations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div className="bg-card rounded-xl p-5 sm:p-6 border border-border">
            <div className="flex items-center gap-3 mb-5">
              

              <h4 className="font-heading font-semibold text-lg text-foreground">
                Who Can Volunteer?
              </h4>
            </div>

            <div className="space-y-3">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Icon
                    name="CheckCircle2"
                    size={16}
                    className="text-success mt-0.5 flex-shrink-0"
                  />

                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-border text-center">
          <p className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-3">
            Together, we can build brighter futures.
          </p>

          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Join our community of dedicated volunteers and make a meaningful
            impact in the lives of children through compassion and service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyVolunteer;