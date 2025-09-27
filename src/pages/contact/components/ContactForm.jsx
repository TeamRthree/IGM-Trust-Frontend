import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    organization: '',
    message: '',
    newsletter: false,
    updates: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: 'volunteer', label: 'Volunteer Opportunities', description: 'Join our volunteer community' },
    { value: 'partnership', label: 'Corporate Partnership', description: 'CSR and collaboration opportunities' },
    { value: 'visit', label: 'Facility Visit', description: 'Schedule a tour of our facilities' },
    { value: 'donation', label: 'Donation Inquiry', description: 'Questions about giving and sponsorship' },
    { value: 'events', label: 'Events & Fundraising', description: 'Community events and fundraising' },
    { value: 'media', label: 'Media & Press', description: 'Press inquiries and media requests' },
    { value: 'general', label: 'General Inquiry', description: 'Other questions and information' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
    if (errors?.inquiryType) {
      setErrors(prev => ({ ...prev, inquiryType: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/?.test(formData?.phone?.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        organization: '',
        message: '',
        newsletter: false,
        updates: false
      });
      
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon name="MessageSquare" size={24} color="var(--color-primary)" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make a difference? Fill out the form below and we'll connect you with the right opportunities to help transform children's lives.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-warm p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={handleInputChange}
                error={errors?.name}
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData?.email}
                onChange={handleInputChange}
                error={errors?.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData?.phone}
                onChange={handleInputChange}
                error={errors?.phone}
                required
              />

              <Input
                label="Organization (Optional)"
                type="text"
                name="organization"
                placeholder="Company or organization name"
                value={formData?.organization}
                onChange={handleInputChange}
              />
            </div>

            <Select
              label="How can we help you?"
              placeholder="Select inquiry type"
              options={inquiryTypes}
              value={formData?.inquiryType}
              onChange={handleSelectChange}
              error={errors?.inquiryType}
              required
              searchable
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us more about your interest in helping children at IGM Children Homes..."
                value={formData?.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg font-body text-sm transition-quick focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${
                  errors?.message 
                    ? 'border-destructive bg-destructive/5' :'border-border bg-input hover:border-primary/30'
                }`}
              />
              {errors?.message && (
                <p className="mt-2 text-sm text-destructive">{errors?.message}</p>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <Checkbox
                label="Subscribe to our newsletter"
                description="Get updates about our programs and success stories"
                checked={formData?.newsletter}
                onChange={(e) => setFormData(prev => ({ ...prev, newsletter: e?.target?.checked }))}
              />

              <Checkbox
                label="Receive volunteer opportunity updates"
                description="Be notified about new volunteer opportunities and events"
                checked={formData?.updates}
                onChange={(e) => setFormData(prev => ({ ...prev, updates: e?.target?.checked }))}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
              <p className="text-sm text-muted-foreground">
                We'll respond within 24 hours during business days.
              </p>
              
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                iconSize={18}
                className="bg-primary hover:bg-primary/90 text-white shadow-button"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;