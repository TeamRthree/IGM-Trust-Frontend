import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FeaturedStory from './components/FeaturedStory';
import StoryFilters from './components/StoryFilters';
import StoryCard from './components/StoryCard';
import StoryStats from './components/StoryStats';
import RelatedStories from './components/RelatedStories';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const storiesPerPage = 9;

  // Featured Story Data
  const featuredStory = {
    id: 1,
    name: "Nandhini",
    age: 15,
    category: "Education & Skills",
    heroImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&h=600&fit=crop",
    tagline: "From abandoned child to scholarship winner - a journey of resilience, education, and hope that transformed not just one life, but inspired an entire community.",
    duration: "5 years at IGM",
    location: "Chennai Center",
    timeline: [
      {
        icon: "Home",
        title: "Arrival at IGM",
        date: "January 2019",
        description: "Nandhini arrived at IGM Children Homes at age 10, having been abandoned and struggling with basic literacy. She was shy, withdrawn, and had lost hope in her future."
      },
      {
        icon: "BookOpen",
        title: "Educational Foundation",
        date: "March 2019",
        description: "Started with basic literacy programs and slowly built confidence. Our dedicated teachers worked one-on-one to help her catch up with her peers and develop a love for learning."
      },
      {
        icon: "Users",
        title: "Social Integration",
        date: "August 2020",
        description: "Began participating in group activities, made her first friends, and started showing leadership qualities. Her personality began to shine through various cultural programs."
      },
      {
        icon: "Award",
        title: "Academic Excellence",
        date: "May 2022",
        description: "Achieved top grades in her class and discovered her passion for science and mathematics. Started tutoring younger children, showing her natural teaching abilities."
      },
      {
        icon: "GraduationCap",
        title: "Scholarship Achievement",
        date: "December 2023",
        description: "Received a full scholarship for higher education and was accepted into a prestigious engineering program. Now mentors other children at IGM while pursuing her dreams."
      }
    ],
    achievements: [
      {
        title: "Academic Excellence",
        description: "Consistently ranked in top 5% of her class with 95% average grades"
      },
      {
        title: "Leadership Skills",
        description: "Elected as student council president and peer mentor coordinator"
      },
      {
        title: "Community Impact",
        description: "Tutored 25+ younger children and organized educational workshops"
      }
    ]
  };

  // All Stories Data
  const allStories = [
    {
      id: 2,
      name: "Bakiyalakshmi",
      age: 16,
      category: "education",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      excerpt: "From struggling with basic literacy to becoming the top student in her class, Bakiyalakshmi's educational journey showcases the power of dedicated support and determination.",
      duration: "4 years",
      location: "Chennai Center",
      achievements: ["Class Topper", "Science Fair Winner"],
      hasVideo: true,
      dateAdded: new Date('2023-11-15'),
      popularity: 95
    },
    {
      id: 3,
      name: "Arjun Kumar",
      age: 14,
      category: "sports",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      excerpt: "Discovered his passion for football at IGM and now represents the state team. His journey from the streets to the stadium inspires many young athletes.",
      duration: "3 years",
      location: "Bangalore Center",
      achievements: ["State Team", "Best Player Award"],
      hasVideo: false,
      dateAdded: new Date('2023-10-20'),
      popularity: 88
    },
    {
      id: 4,
      name: "Priya Sharma",
      age: 17,
      category: "skills",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      excerpt: "Learned computer programming and web development skills. Now works as a junior developer while completing her studies, supporting her family financially.",
      duration: "2 years",
      location: "Delhi Center",
      achievements: ["Certified Developer", "Job Placement"],
      hasVideo: true,
      dateAdded: new Date('2023-12-01'),
      popularity: 92
    },
    {
      id: 5,
      name: "Ravi Patel",
      age: 13,
      category: "arts",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      excerpt: "Found his voice through music and art therapy. Now performs in local concerts and has won several art competitions, expressing his emotions through creativity.",
      duration: "3 years",
      location: "Mumbai Center",
      achievements: ["Art Competition Winner", "Concert Performer"],
      hasVideo: false,
      dateAdded: new Date('2023-09-10'),
      popularity: 76
    },
    {
      id: 6,
      name: "Meera Singh",
      age: 15,
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1594824804732-ca8db7d1e3d8?w=400&h=300&fit=crop",
      excerpt: "Overcame serious health challenges with proper medical care and nutrition. Now advocates for child health awareness and wants to become a doctor.",
      duration: "4 years",
      location: "Kolkata Center",
      achievements: ["Health Ambassador", "Medical Scholarship"],
      hasVideo: true,
      dateAdded: new Date('2023-08-25'),
      popularity: 84
    },
    {
      id: 7,
      name: "Karthik Reddy",
      age: 16,
      category: "skills",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      excerpt: "Mastered carpentry and woodworking skills through our vocational training program. Started his own small business and employs two other youth from the program.",
      duration: "3 years",
      location: "Hyderabad Center",
      achievements: ["Business Owner", "Skill Trainer"],
      hasVideo: false,
      dateAdded: new Date('2023-11-30'),
      popularity: 79
    },
    {
      id: 8,
      name: "Anjali Gupta",
      age: 14,
      category: "education",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      excerpt: "Excelled in mathematics and science, winning multiple academic competitions. Dreams of becoming an engineer and has already started preparing for entrance exams.",
      duration: "4 years",
      location: "Pune Center",
      achievements: ["Math Olympiad Winner", "Science Scholar"],
      hasVideo: true,
      dateAdded: new Date('2023-07-15'),
      popularity: 91
    },
    {
      id: 9,
      name: "Suresh Kumar",
      age: 17,
      category: "sports",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      excerpt: "Transformed from a troubled youth to a disciplined athlete. Now competes in national-level athletics and mentors younger children in sports and life skills.",
      duration: "5 years",
      location: "Jaipur Center",
      achievements: ["National Athlete", "Youth Mentor"],
      hasVideo: false,
      dateAdded: new Date('2023-06-20'),
      popularity: 87
    },
    {
      id: 10,
      name: "Divya Krishnan",
      age: 15,
      category: "arts",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0b8d4?w=400&h=300&fit=crop",
      excerpt: "Discovered her talent for classical dance and storytelling. Performs at cultural events and uses her art to raise awareness about children\'s rights and education.",
      duration: "4 years",
      location: "Kochi Center",
      achievements: ["Cultural Ambassador", "Dance Champion"],
      hasVideo: true,
      dateAdded: new Date('2023-10-05'),
      popularity: 82
    }
  ];

  // Filter and sort stories
  const getFilteredStories = () => {
    let filtered = allStories?.filter(story => {
      const matchesCategory = selectedCategory === 'all' || story?.category === selectedCategory;
      const matchesAge = selectedAge === 'all' || 
        (selectedAge === '0-5' && story?.age <= 5) ||
        (selectedAge === '6-12' && story?.age >= 6 && story?.age <= 12) ||
        (selectedAge === '13-18' && story?.age >= 13 && story?.age <= 18);
      const matchesSearch = searchTerm === '' || 
        story?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        story?.excerpt?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      
      return matchesCategory && matchesAge && matchesSearch;
    });

    // Sort stories
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return b?.dateAdded - a?.dateAdded;
        case 'popular':
          return b?.popularity - a?.popularity;
        case 'alphabetical':
          return a?.name?.localeCompare(b?.name);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredStories = getFilteredStories();
  const totalPages = Math.ceil(filteredStories?.length / storiesPerPage);
  const currentStories = filteredStories?.slice(
    (currentPage - 1) * storiesPerPage,
    currentPage * storiesPerPage
  );

  // Handle filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleAgeChange = (age) => {
    setSelectedAge(age);
    setCurrentPage(1);
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  // Pagination handlers
  const handlePageChange = (page) => {
    setIsLoading(true);
    setCurrentPage(page);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Success Stories - IGM Children Homes | Transforming Lives Through Hope</title>
        <meta name="description" content="Discover inspiring success stories of children whose lives have been transformed through IGM Children Homes. Read about their journeys from struggle to triumph, education achievements, and bright futures." />
        <meta name="keywords" content="success stories, child transformation, education success, IGM children homes, inspiring stories, child welfare, hope, achievement" />
        <meta property="og:title" content="Success Stories - IGM Children Homes" />
        <meta property="og:description" content="Inspiring stories of transformation, hope, and achievement from children at IGM Children Homes" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Featured Story */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
                Stories of <span className="text-primary">Transformation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every child has a story. Every story has the power to inspire. Discover the incredible journeys of children whose lives have been transformed through love, care, and opportunity at IGM Children Homes.
              </p>
            </div>

            <FeaturedStory story={featuredStory} />
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <StoryStats />
          </div>
        </section>

        {/* Stories Collection */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                More Inspiring Journeys
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each story represents a life transformed, a dream realized, and hope restored. Filter and explore the diverse paths to success.
              </p>
            </div>

            {/* Filters */}
            <StoryFilters
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              selectedAge={selectedAge}
              onAgeChange={handleAgeChange}
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />

            {/* Results Summary */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-muted-foreground">
                Showing {currentStories?.length} of {filteredStories?.length} stories
                {searchTerm && (
                  <span className="ml-2">
                    for "<span className="font-medium text-foreground">{searchTerm}</span>"
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
            </div>

            {/* Stories Grid */}
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading stories...</p>
                </div>
              </div>
            ) : currentStories?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentStories?.map((story) => (
                  <StoryCard key={story?.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  No Stories Found
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We couldn't find any stories matching your current filters. Try adjusting your search criteria or browse all stories.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedAge('all');
                    setSearchTerm('');
                    setSortBy('recent');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && !isLoading && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  iconName="ChevronLeft"
                  iconPosition="left"
                  iconSize={16}
                >
                  Previous
                </Button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-warm ${
                          currentPage === pageNum
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  iconName="ChevronRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Related Stories & Newsletter */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <RelatedStories currentStoryId={featuredStory?.id} category={featuredStory?.category} />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
                Your Support Creates More Success Stories
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Every donation, every sponsorship, every act of kindness contributes to transforming a child's life. Join us in writing the next chapter of hope and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Heart"
                  iconPosition="left"
                  iconSize={20}
                  className="bg-white text-primary hover:bg-white/90 shadow-button"
                >
                  Sponsor a Child Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  iconSize={20}
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessStories;