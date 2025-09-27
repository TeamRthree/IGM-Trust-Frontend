import React from 'react';
import ProjectCard from './ProjectCard';
import Icon from '../../../components/AppIcon';

const ProjectGrid = ({ projects, loading, onDonate, onLoadMore, hasMore }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="bg-card rounded-xl shadow-warm overflow-hidden animate-pulse">
            <div className="h-48 bg-muted"></div>
            <div className="p-6">
              <div className="h-4 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-2 bg-muted rounded mb-4"></div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-8 bg-muted rounded"></div>
                <div className="h-8 bg-muted rounded"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-8 bg-muted rounded flex-1"></div>
                <div className="h-8 bg-muted rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-full mx-auto mb-4">
          <Icon name="Search" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-card-foreground mb-2">
          No Projects Found
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We couldn't find any projects matching your current filters. Try adjusting your search criteria or browse all projects.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects?.map((project) => (
          <ProjectCard
            key={project?.id}
            project={project}
            onDonate={onDonate}
          />
        ))}
      </div>
      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={onLoadMore}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-warm font-medium"
          >
            <Icon name="Plus" size={20} />
            <span>Load More Projects</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;