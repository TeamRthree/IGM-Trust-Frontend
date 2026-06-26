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
      position: "Treasurer",
      tenure: "Since 1985",
      image: "/assets/leadership/IGM-01.jpg",
      bio: `Mrs. Shanthi Williams, along with her husband Rev. Dr. Jacob Williams, founded IGM 
Children's Homes in 1974 with just seven orphaned children, inspired by a God-given calling to 
care for the vulnerable and transform lives through compassion, love and service. What began as 
a small act of care for a few vulnerable children has grown into a mission that has transformed 
thousands of lives through dedicated for the community development initiatives. 
Driven by the belief that every child deserves a safe and nurturing environment, Mrs. Shanthi 
Williams has been instrumental in developing programs that provide shelter, education, 
healthcare and emotional support to children.  
Today, her legacy continues to inspire children, volunteers, donors, staff and supporters to work 
towards a society where every child is protected, every woman is empowered and every 
individual can live with dignity, hope, and purpose.`,
      achievements: [
       
      ],
      contact: {
        email: "priya.sharma@igmhomes.org",
        phone: "+91 98765 43210"
      }
    },
    {
      id: 2,
      name: "Rev. Dr. Jehoshaphat P. Williams",
      position: "Chairman",
      tenure: "Since 1995",
      image: "/assets/leadership/IGM-02.jpg",
      bio: `Dr. Jehoshaphat P. Williams is the Chairman of IGM Children 
Homes and a passionate humanitarian dedicated to serving vulnerable 
children and communities. He continues the legacy of IGM, founded by 
his parents, Rev. Dr. Jacob Williams and Mrs. Shanthi Williams, in 
1974. Under his leadership, IGM provides child care, education, women 
empowerment programs, healthcare services, and disaster relief support. 
He is committed to ensuring every child receives protection, quality 
education, and opportunities for a brighter future.  He has been honored with several awards, including the Sac of Honor 
from Lions Clubs International and an Honorary Doctorate from 
Universal Globe Academy, for his exceptional social service. As 
Chairman of IGM Children Homes, he leads initiatives in child welfare, 
education, women empowerment, healthcare and disaster relief. His 
dedication to serving humanity continues to transform lives and inspire 
positive change in communities. `,
      achievements: [
        "Sac of Honor from Lions Clubs International",
        "Honorary Doctorate from Universal Globe Academy"
      ],
      contact: {
        email: "rajesh.kumar@igmhomes.org",
        phone: "+91 98765 43211"
      }
    },
    {
      id: 3,
      name: "Mrs. Pearlyn Suganthamani",
      position: "Secretary",
      tenure: "Since 2000",
      image: "/assets/leadership/IGM-03.jpg",
      bio: `Mrs. Pearlyn Suganthamani serves as the Secretary of IGM Children 
Homes, contributing significantly to the organization's mission of caring 
for children and supporting disadvantaged communities. She plays a key 
role in coordinating administrative functions and ensuring the smooth 
operation of various programs and activities. Her responsibilities include 
supporting child welfare initiatives, educational programs, women 
empowerment projects, and community outreach efforts. With strong 
organizational skills and a compassionate heart for service, she helps 
maintain effective communication and program management. She works 
closely with the leadership team to uphold the values and vision of IGM. 
Her dedication and commitment have helped strengthen the 
organization's impact over the years. `,
      achievements: [
        
      ],
      contact: {
        email: "meera.patel@igmhomes.org",
        phone: "+91 98765 43212"
      }
    },
    {
      id: 4,
      name: "Mrs. Eunice Vinola Williams",
      position: "Project Director",
      tenure: "Since 2005",
      image: "/assets/leadership/IGM-04.jpg",
      bio: `Mrs. Eunice Vinola Williams serves as the Project Director of IGM 
Children Homes, overseeing the planning, implementation, and 
monitoring of various child welfare, education, women empowerment, 
healthcare, and community development programs. With a deep passion 
for social service and child care, she works closely with the team to 
ensure the well-being, protection, and holistic development of every 
child under IGM's care. Her dedication and leadership continue to 
strengthen IGM’s mission of transforming lives and building a brighter 
future for vulnerable children and communities. She is committed to 
creating sustainable programs that empower children and families to 
achieve long-term growth and self-reliance. Through her compassionate 
leadership and vision, she continues to inspire positive change and foster 
a nurturing environment where every child can thrive and reach their full 
potential.`,
      achievements: [
        
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
    <section id='team' className="py-20 bg-muted">
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
                  className="w-full h-84 object-cover"
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
                
               
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipTeam;