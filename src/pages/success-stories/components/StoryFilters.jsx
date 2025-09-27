import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryFilters = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedAge, 
  onAgeChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const categories = [
    { value: 'all', label: 'All Stories', icon: 'Grid3X3' },
    { value: 'education', label: 'Education', icon: 'GraduationCap' },
    { value: 'healthcare', label: 'Healthcare', icon: 'Heart' },
    { value: 'skills', label: 'Skills Training', icon: 'Wrench' },
    { value: 'sports', label: 'Sports', icon: 'Trophy' },
    { value: 'arts', label: 'Arts & Culture', icon: 'Palette' }
  ];

  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: '0-5', label: '0-5 years' },
    { value: '6-12', label: '6-12 years' },
    { value: '13-18', label: '13-18 years' }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'alphabetical', label: 'A-Z' }
  ];

  return (
    <div className="bg-card rounded-xl shadow-warm p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search success stories..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      {/* Filter Categories */}
      <div className="mb-6">
        <h3 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category?.value}
              onClick={() => onCategoryChange(category?.value)}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-warm ${
                selectedCategory === category?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Age Groups and Sort */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Age Groups */}
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
            Age Group
          </h3>
          <div className="flex flex-wrap gap-2">
            {ageGroups?.map((age) => (
              <button
                key={age?.value}
                onClick={() => onAgeChange(age?.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-warm ${
                  selectedAge === age?.value
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {age?.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-sm text-foreground mb-3 uppercase tracking-wide">
            Sort By
          </h3>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Active Filters Display */}
      {(selectedCategory !== 'all' || selectedAge !== 'all' || searchTerm) && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {categories?.find(c => c?.value === selectedCategory)?.label}
                    <button
                      onClick={() => onCategoryChange('all')}
                      className="ml-1 hover:text-primary/80"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {selectedAge !== 'all' && (
                  <span className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
                    {ageGroups?.find(a => a?.value === selectedAge)?.label}
                    <button
                      onClick={() => onAgeChange('all')}
                      className="ml-1 hover:text-secondary/80"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent rounded text-xs">
                    "{searchTerm}"
                    <button
                      onClick={() => onSearchChange('')}
                      className="ml-1 hover:text-accent/80"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </span>
                )}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                onCategoryChange('all');
                onAgeChange('all');
                onSearchChange('');
                onSortChange('recent');
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryFilters;