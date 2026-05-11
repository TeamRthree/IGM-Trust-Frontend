import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectDetailModal = ({ project, isOpen, onClose, onDonate }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>

        

        

       

        {/* Full HTML Details */}
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none mb-4">
  <div dangerouslySetInnerHTML={{ __html: project.details_html }} />
</div>


        {/* Action Buttons */}
        <div className="flex space-x-2 mt-4">
          
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={onClose}
             className="bg-conversion-orange hover:bg-conversion-orange/90 text-white"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
