  import React, { useState, useEffect, useRef } from 'react';
  import { Link, useLocation } from "react-router-dom";
  import { Helmet } from 'react-helmet';
  import Header from '../../components/ui/Header';
  import Icon from '../../components/AppIcon';
  import Button from '../../components/ui/Button';
  import ProjectStats from './components/ProjectStats';
  import FeaturedProject from './components/FeaturedProject';
  import ProjectFilters from './components/ProjectFilters';
  import ProjectGrid from './components/ProjectGrid';
  import DonationModal from './components/DonationModal';
  import api from '../../api/api'; // ✅ your API helper
  import DonationPopup from '../../components/DonationPopup';
    import ProjectDetailsModal from './components/ProjectDetailModal';

  const Projects = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const projectSectionRef = useRef(null);

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

    const [allProjects, setAllProjects] = useState([]);
    const [featuredProject, setFeaturedProject] = useState(null);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const [displayedProjects, setDisplayedProjects] = useState(9);

    const [liveDonation, setLiveDonation] = useState(null);

    const [projectStats, setProjectStats] = useState({
  activeProjects: 0,
  childrenHelped: 0,
  totalRaised: 0,
  totalDonors: 0
});

useEffect(() => {
  const fetchStats = async () => {
    try {
      const res = await api.get('/project-stats');
      if (res.data?.success) {
        setProjectStats(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch project stats:', err);
    }
  };

  fetchStats();
}, []);

    const categories = [...new Set(allProjects.map(p => p.category))];
    const ageGroups = [...new Set(allProjects.map(p => p.age_group))]; // backend uses snake_case
    const locations = [...new Set(allProjects.map(p => p.location))];

    // ✅ Fetch projects from backend
    useEffect(() => {
      const fetchProjects = async () => {
        setLoading(true);
        try {
          const res = await api.get('/projects'); // GET /api/projects
          if (res.data?.success) {
            const projects = res.data.data;

            setAllProjects(projects);

            // Featured project: first urgent or first project
            const featured = projects.find(p => p.urgent) || projects[0];
            setFeaturedProject(featured);
          }
        } catch (err) {
          console.error('Failed to fetch projects:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }, []);

    // ✅ Set category from URL on mount
    useEffect(() => {
      const categoryFromURL = query.get("category");
      if (categoryFromURL) {
        setFilters(prev => ({ ...prev, category: categoryFromURL }));
        setTimeout(() => {
          projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }, [location.search]);

    // ✅ Filter projects based on current filters
    useEffect(() => {
      let filtered = [...allProjects];

      if (filters?.search) {
        filtered = filtered.filter(project =>
          project?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
          project?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
          project?.category?.toLowerCase()?.includes(filters?.search?.toLowerCase())
        );
      }

      if (filters?.category) filtered = filtered.filter(p => p?.category === filters.category);
      if (filters?.ageGroup) filtered = filtered.filter(p => p?.age_group === filters.ageGroup);
      if (filters?.location) filtered = filtered.filter(p => p?.location === filters.location);
      if (filters?.urgent) filtered = filtered.filter(p => p?.urgent);
      if (filters?.nearCompletion) filtered = filtered.filter(p => p?.completion >= 80);
      if (filters?.newProjects) filtered = filtered.filter(p =>
        p?.last_updated?.includes('hour') || p?.last_updated === '1 day ago'
      );

      switch (filters?.sortBy) {
        case 'urgent': filtered.sort((a, b) => b?.urgent - a?.urgent); break;
        case 'progress': filtered.sort((a, b) => b?.completion - a?.completion); break;
        case 'funding': filtered.sort((a, b) => b?.raised - a?.raised); break;
        case 'alphabetical': filtered.sort((a, b) => a?.title?.localeCompare(b?.title)); break;
        default:
          filtered.sort((a, b) => {
            const timeA = a?.last_updated?.includes('hour') ? 1 : a?.last_updated?.includes('1 day') ? 2 : 3;
            const timeB = b?.last_updated?.includes('hour') ? 1 : b?.last_updated?.includes('1 day') ? 2 : 3;
            return timeA - timeB;
          });
      }

      setFilteredProjects(filtered);
    }, [filters, allProjects]);

    const handleFilterChange = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));
    const handleClearFilters = () => setFilters({
      search: '', category: '', ageGroup: '', location: '', sortBy: 'newest',
      urgent: false, nearCompletion: false, newProjects: false
    });

    const handleDonate = (project) => { setSelectedProject(project); setIsDonationModalOpen(true); };

    const handleViewProject = (project) => {
  setSelectedProject(project);
  setIsDetailsModalOpen(true); // open details modal instead of donation
};



  const handleDonationSubmit = (donationData) => {
  const { project: updatedProject } = donationData;

  if (!updatedProject) return;

  // ✅ Update project list with latest backend data
  setAllProjects((prevProjects) =>
    prevProjects.map((p) =>
      p.id === updatedProject.id ? updatedProject : p
    )
  );

  // ✅ Update featured project if it’s the same one
  setFeaturedProject((prev) =>
    prev?.id === updatedProject.id ? updatedProject : prev
  );

  // Show live donation popup
 // Show live donation popup
if (donationData) setLiveDonation(donationData);

};








    const handleLoadMore = () => setDisplayedProjects(prev => prev + 6);
    const displayProjects = filteredProjects?.slice(0, displayedProjects);
    const hasMore = displayedProjects < filteredProjects?.length;

    if (loading) return <div className="text-center py-24">Loading projects...</div>;

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
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground font-medium backdrop-blur-sm">
                      <Icon name="Target" size={16} className="mr-2 text-muted-foreground" />
                      {projectStats.activeProjects} Active Projects
                    </div>
                    <h2 className="font-heading font-bold text-4xl text-foreground lg:text-5xl !leading-snug">
                      Impact Showcase Universe
                    </h2>
                    <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                      Discover how your compassion transforms lives through our comprehensive child welfare programs. Each project represents hope, potential, and the journey from broken to beautiful.
                    </p>
                  </div>
                  <ProjectStats stats={projectStats} />
                </div>

                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-warm-hover">
                    <img
                      src={featuredProject?.image}
                      alt={featuredProject?.title}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Project */}
          {featuredProject && (
            <section className="py-12 bg-muted">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <FeaturedProject project={featuredProject} onDonate={handleDonate} />
              </div>
            </section>
          )}

          {/* Projects Section */}
          <section className="py-12" ref={projectSectionRef}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">All Projects</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Browse through our comprehensive collection of projects...
                </p>
              </div>

              <ProjectFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                categories={categories}
                ageGroups={ageGroups}
                locations={locations}
              />

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

              <ProjectGrid
                projects={displayProjects}
                loading={loading}
                onDonate={handleDonate}
                  onView={handleViewProject}
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
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Every child's journey is unique. Contact us to learn about custom sponsorship opportunities or to discuss how you can make a targeted impact in specific areas of need.
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
            onClose={() => {setIsDonationModalOpen(false);setSelectedProject(null);}}
            onDonate={handleDonationSubmit}
          />

          <ProjectDetailsModal
  project={selectedProject}
  isOpen={isDetailsModalOpen}
  onClose={() => setIsDetailsModalOpen(false)}
/>

        </div>

        {/* // Render the DonationPopup at the end of return */}
{liveDonation && (
  <DonationPopup donation={liveDonation} onClose={() => setLiveDonation(null)} />
)}
      </>
    );
  };

  export default Projects;
