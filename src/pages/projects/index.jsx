import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';
import ProjectFilters from './components/ProjectFilters';
import ProjectGrid from './components/ProjectGrid';
import DonationModal from './components/DonationModal';

const Projects = () => {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    ageGroup: '',
    location: '',
    sortBy: 'newest',
    urgent: false,
    nearCompletion: false,
    newProjects: false
  });

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(9);

  // Mock data
  const projectStats = {
    activeProjects: 47,
    childrenHelped: 12500,
    totalRaised: 45000000,
    totalDonors: 8750
  };

  const featuredProject = {
    id: 'featured-1',
    title: 'Emergency Education Support for Flood-Affected Children',
    description: `Recent floods have displaced over 200 children from their homes and schools. We're providing temporary educational facilities, learning materials, and psychological support to help them continue their education during this difficult time.`,
    category: 'Emergency Relief',image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    target: 2500000,
    raised: 1875000,
    beneficiaries: 200,
    donors: 450,
    completion: 75,
    urgent: true,
    deadline: '2025-01-15',location: 'Chennai',lastUpdated: '2 hours ago'
  };

  const allProjects = [
    {
      id: 1,
      title: 'Digital Learning Center for Rural Children',
      description: `Establishing a modern computer lab with high-speed internet connectivity to bridge the digital divide for children in remote villages. This initiative will provide access to online educational resources and digital literacy training.`,
      category: 'Education',
      image: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg',
      target: 1500000,
      raised: 1125000,
      beneficiaries: 150,
      donors: 320,
      completion: 75,
      urgent: false,
      ageGroup: '8-16 years',
      duration: '12 months',
      location: 'Coimbatore',
      lastUpdated: '1 day ago'
    },
    {
      id: 2,
      title: 'Nutritional Meal Program Expansion',
      description: `Expanding our daily meal program to serve 300 additional children with balanced, nutritious meals. This program ensures no child goes hungry and supports their physical and cognitive development.`,
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      target: 800000,
      raised: 720000,
      beneficiaries: 300,
      donors: 180,
      completion: 90,
      urgent: false,
      ageGroup: '3-14 years',
      duration: '6 months',
      location: 'Madurai',
      lastUpdated: '3 hours ago'
    },
    {
      id: 3,
      title: 'Vocational Training for Teenagers',
      description: `Comprehensive skill development program offering training in tailoring, carpentry, electronics repair, and computer basics to prepare teenagers for sustainable employment opportunities.`,
      category: 'Skill Development',
      image: 'https://images.pexels.com/photos/8613083/pexels-photo-8613083.jpeg',
      target: 1200000,
      raised: 480000,
      beneficiaries: 80,
      donors: 95,
      completion: 40,
      urgent: true,
      ageGroup: '16-18 years',
      duration: '18 months',
      location: 'Salem',
      lastUpdated: '5 hours ago'
    },
    {
      id: 4,
      title: 'Healthcare & Medical Support Initiative',
      description: `Providing regular health checkups, vaccinations, and medical treatment for children. Includes dental care, vision screening, and emergency medical support for serious health conditions.`,
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/8613015/pexels-photo-8613015.jpeg',
      target: 2000000,
      raised: 1400000,
      beneficiaries: 500,
      donors: 275,
      completion: 70,
      urgent: false,
      ageGroup: '0-18 years',
      duration: '24 months',
      location: 'Trichy',
      lastUpdated: '6 hours ago'
    },
    {
      id: 5,
      title: 'Sports & Recreation Facility Development',
      description: `Building a multi-purpose sports complex with playground equipment, indoor games area, and sports coaching programs to promote physical fitness and team building among children.`,
      category: 'Recreation',
      image: 'https://images.pexels.com/photos/8613092/pexels-photo-8613092.jpeg',
      target: 3000000,
      raised: 900000,
      beneficiaries: 400,
      donors: 150,
      completion: 30,
      urgent: false,
      ageGroup: '6-18 years',
      duration: '15 months',
      location: 'Vellore',
      lastUpdated: '1 day ago'
    },
    {
      id: 6,
      title: 'Library & Reading Program Enhancement',
      description: `Creating a comprehensive library with age-appropriate books, educational materials, and reading programs to foster love for learning and improve literacy rates among children.`,
      category: 'Education',
      image: 'https://images.pexels.com/photos/8613025/pexels-photo-8613025.jpeg',
      target: 600000,
      raised: 540000,
      beneficiaries: 250,
      donors: 200,
      completion: 90,
      urgent: false,
      ageGroup: '5-16 years',
      duration: '8 months',
      location: 'Thanjavur',
      lastUpdated: '2 days ago'
    },
    {
      id: 7,
      title: 'Emergency Shelter Renovation Project',
      description: `Urgent renovation of dormitory facilities including roof repairs, plumbing upgrades, and electrical work to ensure safe and comfortable living conditions for 100 children during monsoon season.`,
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg',
      target: 1800000,
      raised: 450000,
      beneficiaries: 100,
      donors: 85,
      completion: 25,
      urgent: true,
      ageGroup: '3-18 years',
      duration: '4 months',
      location: 'Kanyakumari',
      lastUpdated: '4 hours ago'
    },
    {
      id: 8,
      title: 'Art & Creative Expression Workshop',
      description: `Establishing art studios and music rooms with professional instructors to nurture creativity and provide therapeutic outlets for children who have experienced trauma.`,
      category: 'Creative Arts',
      image: 'https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg',
      target: 750000,
      raised: 375000,
      beneficiaries: 120,
      donors: 110,
      completion: 50,
      urgent: false,
      ageGroup: '6-16 years',
      duration: '12 months',
      location: 'Pondicherry',
      lastUpdated: '1 day ago'
    },
    {
      id: 9,
      title: 'Clean Water & Sanitation Upgrade',
      description: `Installing modern water purification systems, constructing additional toilets, and implementing hygiene education programs to ensure access to clean water and proper sanitation facilities.`,
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg',
      target: 1100000,
      raised: 825000,
      beneficiaries: 350,
      donors: 190,
      completion: 75,
      urgent: false,
      ageGroup: '0-18 years',
      duration: '6 months',
      location: 'Erode',
      lastUpdated: '8 hours ago'
    },
    {
      id: 10,
      title: 'Mental Health & Counseling Support',
      description: `Providing professional psychological counseling and mental health support for children dealing with trauma, behavioral issues, and emotional challenges through qualified therapists.`,
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/8613086/pexels-photo-8613086.jpeg',
      target: 900000,
      raised: 630000,
      beneficiaries: 75,
      donors: 140,
      completion: 70,
      urgent: false,
      ageGroup: '8-18 years',
      duration: '24 months',
      location: 'Tirunelveli',
      lastUpdated: '12 hours ago'
    },
    {
      id: 11,
      title: 'Solar Power Installation Project',
      description: `Installing solar panels and renewable energy systems to reduce electricity costs and ensure uninterrupted power supply for educational activities and daily operations.`,
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/8613090/pexels-photo-8613090.jpeg',
      target: 2200000,
      raised: 1100000,
      beneficiaries: 600,
      donors: 220,
      completion: 50,
      urgent: false,
      ageGroup: '0-18 years',
      duration: '10 months',
      location: 'Karur',
      lastUpdated: '1 day ago'
    },
    {
      id: 12,
      title: 'Emergency Medical Equipment Fund',
      description: `Purchasing essential medical equipment including nebulizers, oxygen concentrators, and first aid supplies to handle medical emergencies and provide immediate healthcare support.`,
      category: 'Healthcare',
      image: 'https://images.pexels.com/photos/8613088/pexels-photo-8613088.jpeg',
      target: 1300000,
      raised: 390000,
      beneficiaries: 500,
      donors: 95,
      completion: 30,
      urgent: true,
      ageGroup: '0-18 years',
      duration: '3 months',
      location: 'Dindigul',
      lastUpdated: '6 hours ago'
    }
  ];

  const categories = [...new Set(allProjects.map(p => p.category))];
  const ageGroups = [...new Set(allProjects.map(p => p.ageGroup))];
  const locations = [...new Set(allProjects.map(p => p.location))];

  // Filter projects based on current filters
  useEffect(() => {
    let filtered = [...allProjects];

    // Search filter
    if (filters?.search) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
        project?.category?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    // Category filter
    if (filters?.category) {
      filtered = filtered?.filter(project => project?.category === filters?.category);
    }

    // Age group filter
    if (filters?.ageGroup) {
      filtered = filtered?.filter(project => project?.ageGroup === filters?.ageGroup);
    }

    // Location filter
    if (filters?.location) {
      filtered = filtered?.filter(project => project?.location === filters?.location);
    }

    // Quick filters
    if (filters?.urgent) {
      filtered = filtered?.filter(project => project?.urgent);
    }

    if (filters?.nearCompletion) {
      filtered = filtered?.filter(project => project?.completion >= 80);
    }

    if (filters?.newProjects) {
      filtered = filtered?.filter(project => 
        project?.lastUpdated?.includes('hour') || project?.lastUpdated === '1 day ago'
      );
    }

    // Sort projects
    switch (filters?.sortBy) {
      case 'urgent':
        filtered?.sort((a, b) => b?.urgent - a?.urgent);
        break;
      case 'progress':
        filtered?.sort((a, b) => b?.completion - a?.completion);
        break;
      case 'funding':
        filtered?.sort((a, b) => b?.raised - a?.raised);
        break;
      case 'alphabetical':
        filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
        break;
      default: // newest
        filtered?.sort((a, b) => {
          const timeA = a?.lastUpdated?.includes('hour') ? 1 : 
                       a?.lastUpdated?.includes('1 day') ? 2 : 3;
          const timeB = b?.lastUpdated?.includes('hour') ? 1 : 
                       b?.lastUpdated?.includes('1 day') ? 2 : 3;
          return timeA - timeB;
        });
    }

    setFilteredProjects(filtered);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      category: '',
      ageGroup: '',
      location: '',
      sortBy: 'newest',
      urgent: false,
      nearCompletion: false,
      newProjects: false
    });
  };

  const handleDonate = (project) => {
    setSelectedProject(project);
    setIsDonationModalOpen(true);
  };

  const handleDonationSubmit = (donationData) => {
    // Mock donation processing
    console.log('Processing donation:', donationData);
    alert(`Thank you for your donation of ₹${donationData?.amount?.toLocaleString()} to ${donationData?.project?.title}!`);
  };

  const handleLoadMore = () => {
    setDisplayedProjects(prev => prev + 6);
  };

  const displayProjects = filteredProjects?.slice(0, displayedProjects);
  const hasMore = displayedProjects < filteredProjects?.length;

  return (
    <>
      <Helmet>
        <title>Our Projects - IGM Children Homes | Transforming Lives Through Compassionate Care</title>
        <meta name="description" content="Explore our 47+ active projects helping 12,500+ children across Tamil Nadu. From education and healthcare to emergency relief - see how your support creates lasting impact." />
        <meta name="keywords" content="children projects, education support, healthcare initiatives, emergency relief, child welfare, NGO projects, donation projects" />
      </Helmet>
      <div className="min-h-screen bg-background pt-16">
        <Header />
        
        {/* Hero Section */}
<section className="relative bg-gradient-to-br from-background via-warm-foundation to-background text-white overflow-hidden pt-24 pb-12 py-24 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted  text-sm text-muted-foreground font-medium backdrop-blur-sm">
            <Icon name="Target" size={16} className="mr-2 text-muted-foreground" />
            47 Active Projects
          </div>

          <h1 className="font-heading font-bold text-4xl text-foreground lg:text-5xl leading-tight">
            Impact Showcase Universe
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
            Discover how your compassion transforms lives through our comprehensive child welfare programs. 
            Each project represents hope, potential, and the journey from broken to beautiful.
          </p>
        </div>

        {/* Stats Overview */}
        <ProjectStats stats={projectStats} />
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-warm-hover">
          <img
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
            alt="Children learning together at IGM Children Homes"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Featured Project */}
        <section className="py-12 bg-muted">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FeaturedProject 
              project={featuredProject} 
              onDonate={handleDonate}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                All Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our comprehensive collection of projects, each designed to restore broken lives 
                and create lasting positive change in children's futures.
              </p>
            </div>

            {/* Filters */}
            <ProjectFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              categories={categories}
              ageGroups={ageGroups}
              locations={locations}
            />

            {/* Results Summary */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">
                  Showing {displayProjects?.length} of {filteredProjects?.length} projects
                </span>
                {filteredProjects?.length !== allProjects?.length && (
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="RotateCcw"
                    iconPosition="left"
                    iconSize={14}
                    onClick={handleClearFilters}
                  >
                    Show All
                  </Button>
                )}
              </div>
            </div>

            {/* Projects Grid */}
            <ProjectGrid
              projects={displayProjects}
              loading={loading}
              onDonate={handleDonate}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Can't Find the Right Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every child's journey is unique. Contact us to learn about custom sponsorship opportunities 
              or to discuss how you can make a targeted impact in specific areas of need.
            </p>
            <Link to="/contact">
    <Button
      variant="default"
      size="lg"
      iconName="Phone"
      iconPosition="left"
      iconSize={20}
      className="bg-primary hover:bg-primary/90"
    >
      Contact Our Team
    </Button>
  </Link>
          </div>
        </section>

        {/* Donation Modal */}
        <DonationModal
          project={selectedProject}
          isOpen={isDonationModalOpen}
          onClose={() => setIsDonationModalOpen(false)}
          onDonate={handleDonationSubmit}
        />
      </div>
    </>
  );
};

export default Projects;