import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const ProjectFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  categories, 
  ageGroups, 
  locations 
}) => {
  const categoryOptions = categories?.map(cat => ({ value: cat, label: cat }));
  const ageGroupOptions = ageGroups?.map(age => ({ value: age, label: age }));
  const locationOptions = locations?.map(loc => ({ value: loc, label: loc }));

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'urgent', label: 'Most Urgent' },
    { value: 'progress', label: 'Highest Progress' },
    { value: 'funding', label: 'Most Funded' },
    { value: 'alphabetical', label: 'A-Z' }
  ];

  const hasActiveFilters = filters?.category || filters?.ageGroup || filters?.location || 
                          filters?.urgent || filters?.search;

  return (
    <div className="bg-card rounded-xl shadow-warm p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
            <Icon name="Filter" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg text-card-foreground">
              Filter Projects
            </h3>
            <p className="text-sm text-muted-foreground">
              Find projects that match your interests
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            iconName="X"
            iconPosition="left"
            iconSize={16}
            onClick={onClearFilters}
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search projects by name, description, or keywords..."
          value={filters?.search}
          onChange={(e) => onFilterChange('search', e?.target?.value)}
          className="w-full"
        />
      </div>
      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Category Filter */}
        <Select
          label="Category"
          placeholder="All Categories"
          options={[{ value: '', label: 'All Categories' }, ...categoryOptions]}
          value={filters?.category}
          onChange={(value) => onFilterChange('category', value)}
        />

        {/* Age Group Filter */}
        <Select
          label="Age Group"
          placeholder="All Ages"
          options={[{ value: '', label: 'All Ages' }, ...ageGroupOptions]}
          value={filters?.ageGroup}
          onChange={(value) => onFilterChange('ageGroup', value)}
        />

        {/* Location Filter */}
        <Select
          label="Location"
          placeholder="All Locations"
          options={[{ value: '', label: 'All Locations' }, ...locationOptions]}
          value={filters?.location}
          onChange={(value) => onFilterChange('location', value)}
        />

        {/* Sort Filter */}
        <Select
          label="Sort By"
          options={sortOptions}
          value={filters?.sortBy}
          onChange={(value) => onFilterChange('sortBy', value)}
        />
      </div>
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3">
        <Button
          variant={filters?.urgent ? "default" : "outline"}
          size="sm"
          iconName="AlertCircle"
          iconPosition="left"
          iconSize={16}
          onClick={() => onFilterChange('urgent', !filters?.urgent)}
          className={filters?.urgent ? "bg-error hover:bg-error/90 text-error-foreground" : ""}
        >
          Urgent Projects
        </Button>
        
        <Button
          variant={filters?.nearCompletion ? "default" : "outline"}
          size="sm"
          iconName="Target"
          iconPosition="left"
          iconSize={16}
          onClick={() => onFilterChange('nearCompletion', !filters?.nearCompletion)}
          className={filters?.nearCompletion ? "bg-success hover:bg-success/90 text-success-foreground" : ""}
        >
          Near Completion
        </Button>
        
        <Button
          variant={filters?.newProjects ? "default" : "outline"}
          size="sm"
          iconName="Sparkles"
          iconPosition="left"
          iconSize={16}
          onClick={() => onFilterChange('newProjects', !filters?.newProjects)}
          className={filters?.newProjects ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : ""}
        >
          New Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectFilters;