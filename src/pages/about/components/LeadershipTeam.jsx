import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LeadershipTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const leadership = [
    {
      id: 1,
      name: "Shanthi Williams",
      position: "Chairman",
      tenure: "Since 1985",
      image: "/assets/leadership/IGM-01.jpg",
      bio: `Shanthi Williams has been the driving force behind IGM Children Homes for nearly four decades. With a PhD in Child Psychology and extensive experience in social work, she has transformed the organization from a small shelter into a comprehensive child welfare institution.\n\nUnder her leadership, IGM has expanded to serve over 1,500 children and has achieved a 94% success rate in child rehabilitation and reintegration. Her vision of 'Transformative Compassion in Action' continues to guide the organization's mission.`,
      achievements: [
        "Padma Shri Award for Social Service (2018)",
        "National Child Welfare Excellence Award (2015)",
        "40 years of dedicated service to child welfare"
      ],
      contact: {
        email: "priya.sharma@igmhomes.org",
        phone: "+91 98765 43210"
      }
    },
    {
      id: 2,
      name: "Jehoshaphat P. Williams",
      position: "CEO",
      tenure: "Since 1995",
      image: "/assets/leadership/IGM-02.jpg",
      bio: `Jehoshaphat P. Williams oversees the day-to-day operations of all IGM facilities. With an MBA in Non-Profit Management and 30 years of experience in organizational development, he ensures efficient resource allocation and program implementation.\n\nHis expertise in operational excellence has helped IGM maintain the highest standards of care while expanding services to reach more children in need. He is particularly passionate about educational programs and vocational training initiatives.`,
      achievements: [
        "Excellence in Non-Profit Management Award (2020)",
        "Implemented digital transformation initiatives",
        "Expanded operations to 12 facilities across regions"
      ],
      contact: {
        email: "rajesh.kumar@igmhomes.org",
        phone: "+91 98765 43211"
      }
    },
    {
      id: 3,
      name: "Pearlyn Williams Suganthamani",
      position: "Administrator",
      tenure: "Since 2000",
      image: "/assets/leadership/IGM-03.jpg",
      bio: `Pearlyn Williams Suganthamani leads our child development programs with expertise in developmental psychology and trauma-informed care. She holds a PhD in Child Development and has specialized training in working with vulnerable children.\n\nHer innovative approaches to healing and development have been instrumental in achieving our high success rates. She has developed several proprietary programs that are now used as models by other child welfare organizations.`,
      achievements: [
        "Developed trauma-informed care protocols",
        "Published 15+ research papers on child development",
        "Trained over 200 child welfare professionals"
      ],
      contact: {
        email: "meera.patel@igmhomes.org",
        phone: "+91 98765 43212"
      }
    },
    {
      id: 4,
      name: "Eunice Williams",
      position: "Project Director",
      tenure: "Since 2005",
      image: "/assets/leadership/IGM-04.jpg",
      bio: `Eunice Williams manages our community engagement and partnership initiatives. With a background in social work and community development, he has built strong relationships with government agencies, corporate partners, and local communities.\n\nHis efforts have resulted in numerous successful partnerships that have expanded our reach and impact. He is particularly focused on creating sustainable community-based support systems for children and families.`,
      achievements: [
        "Established partnerships with 50+ organizations",
        "Launched community volunteer program",
        "Developed family reintegration protocols"
      ],
      contact: {
        email: "arjun.singh@igmhomes.org",
        phone: "+91 98765 43213"
      }
    }
  ];

  const boardMembers = [
    { name: "Justice (Retd.) Lakshmi Narayan", position: "Chairman", expertise: "Legal & Governance" },
    { name: "Dr. Sunita Reddy", position: "Vice Chairman", expertise: "Healthcare & Nutrition" },
    { name: "Mr. Vikram Agarwal", position: "Treasurer", expertise: "Finance & Audit" },
    { name: "Ms. Kavitha Menon", position: "Secretary", expertise: "Education & Training" },
    { name: "Dr. Ravi Krishnan", position: "Member", expertise: "Child Psychology" },
    { name: "Mr. Suresh Babu", position: "Member", expertise: "Corporate Partnerships" }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated professionals who guide our mission of transformative compassion and ensure the highest standards of child welfare.
          </p>
        </div>

        {/* Executive Leadership */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">
            Executive Leadership
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership?.map((member) => (
              <div
                key={member?.id}
                className="bg-white rounded-2xl shadow-warm hover:shadow-warm-hover transition-warm cursor-pointer overflow-hidden"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-bold text-lg">{member?.name}</h4>
                    <p className="text-sm text-white/90">{member?.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{member?.tenure}</span>
                    <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {member?.bio?.split('\n\n')?.[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* Leadership Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <Image
                  src={selectedMember?.image}
                  alt={selectedMember?.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-warm"
                >
                  <Icon name="X" size={16} />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-heading font-bold text-2xl mb-1">{selectedMember?.name}</h3>
                  <p className="text-lg text-white/90">{selectedMember?.position}</p>
                  <p className="text-sm text-white/80">{selectedMember?.tenure}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-3">Biography</h4>
                  <div className="prose prose-gray max-w-none">
                    {selectedMember?.bio?.split('\n\n')?.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedMember?.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Contact
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipTeam;