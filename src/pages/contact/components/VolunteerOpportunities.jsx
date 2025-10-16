import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { categories, opportunities } from '../volunteerData';
import API from '../../../api/api'; // <-- import your API

// Volunteer Form Modal
const VolunteerModal = ({ isOpen, onClose, role, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);



  
  // Reset form when modal opens or closes
  React.useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) errs.phone = 'Invalid number';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await API.post('/volunteer-application', { ...formData, role });
      if (response.data.success) {
        onSubmit(); // notify parent to show success modal
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
        <button className="absolute top-3 right-3 text-muted-foreground" onClick={onClose}>
          <Icon name="X" size={20} />
        </button>
        <h3 className="text-xl font-bold mb-4">Apply for {role}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            disabled={loading}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            disabled={loading}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            disabled={loading}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <Button type="submit" className="w-full bg-primary text-white" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
};

// Success Modal
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-sm relative text-center">
        <button className="absolute top-3 right-3 text-muted-foreground" onClick={onClose}>
          <Icon name="X" size={20} />
        </button>
        <Icon name="Check" size={40} className="text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
        <p className="text-muted-foreground mb-6">Thank you for volunteering. We will get back to you soon.</p>
        <Button onClick={onClose} className="bg-primary text-white w-full">Close</Button>
      </div>
    </div>
  );
};

// Main Component
const VolunteerOpportunities = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const filteredOpportunities =
    selectedCategory === 'all'
      ? opportunities
      : opportunities.filter((opp) => opp.category === selectedCategory);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'medium': return 'text-warning bg-warning/10 border-warning/20';
      case 'low': return 'text-success bg-success/10 border-success/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case 'high': return 'Urgent Need';
      case 'medium': return 'Moderate Need';
      case 'low': return 'Open Position';
      default: return 'Available';
    }
  };

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const handleFormSubmit = () => {
    setModalOpen(false);
    setSuccessOpen(true);
  };

  return (
    <section id="volunteer" className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon name="Users" size={24} color="var(--color-primary)" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Volunteer Opportunities
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of dedicated volunteers and make a direct impact on children's lives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-warm ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-button'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredOpportunities.map((opp) => (
            <div key={opp.id} className="bg-card rounded-xl shadow-warm p-8 hover:shadow-warm-hover transition-warm">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-heading font-bold text-xl text-foreground">{opp.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getUrgencyColor(opp.urgency)}`}>
                      {getUrgencyText(opp.urgency)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {opp.location}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {opp.commitment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">{opp.description}</p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Type & Duration</p>
                  <p className="font-body text-sm font-medium text-foreground">{opp.type} • {opp.duration}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Impact</p>
                  <p className="font-body text-sm font-medium text-foreground">{opp.impact}</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <p className="font-body text-sm font-medium text-foreground mb-2">Requirements:</p>
                <ul className="space-y-1">
                  {opp.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="mr-2 text-success flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress & Action */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="font-body text-lg font-bold text-foreground">{opp.volunteers}</p>
                    <p className="font-body text-xs text-muted-foreground">Current</p>
                  </div>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-warm"
                      style={{ width: `${(opp.volunteers / opp.needed) * 100}%` }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-body text-lg font-bold text-foreground">{opp.needed}</p>
                    <p className="font-body text-xs text-muted-foreground">Needed</p>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="sm"
                  iconName="UserPlus"
                  iconPosition="left"
                  iconSize={16}
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => handleApplyClick(opp.title)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <VolunteerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        role={selectedRole}
        onSubmit={handleFormSubmit}
      />
      <SuccessModal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </section>
  );
};

export default VolunteerOpportunities;
