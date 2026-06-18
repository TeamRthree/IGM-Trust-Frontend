import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import API from '../../../api/api'; // Axios instance

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
  const [isSent, setIsSent] = useState(false); // Track successful submission

  const inquiryTypes = [
    { value: 'volunteer', label: 'Volunteer Opportunities', description: 'Join our volunteer community' },
    { value: 'partnership', label: 'Corporate Partnership', description: 'CSR and collaboration opportunities' },
    { value: 'visit', label: 'Facility Visit', description: 'Schedule a tour of our facilities' },
    { value: 'donation', label: 'Donation Inquiry', description: 'Questions about giving and sponsorship' },
    { value: 'events', label: 'Events & Fundraising', description: 'Community events and fundraising' },
    { value: 'media', label: 'Media & Press', description: 'Press inquiries and media requests' },
    { value: 'general', label: 'General Inquiry', description: 'Other questions and information' }
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        else if (value.trim().length < 4) return 'Full name must be at least 4 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email address is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;
      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (!value.trim()) return 'Phone number is required';
        else if (!/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number';
        else if (digits.length < 10) return 'Phone number must be at least 10 digits';
        break;
      case 'inquiryType':
        if (!value) return 'Please select an inquiry type';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        else if (value.trim().length < 10) return 'Message must be at least 10 characters long';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData(prev => ({ ...prev, [name]: val }));

    const errorMsg = validateField(name, val);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
    const errorMsg = validateField('inquiryType', value);
    setErrors(prev => ({ ...prev, inquiryType: errorMsg }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await API.post('/enquiries', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        organization: formData.organization,
        message: formData.message,
        newsletter: formData.newsletter,
        updates: formData.updates,
      });

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
      setErrors({});
      setIsSent(true); // Show success overlay
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className="py-16 lg:py-24 bg-muted relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Get in Touch</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make a difference? Fill out the form below and we'll connect you with the right opportunities to help transform children's lives.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-warm p-8 lg:p-12 relative">
          {isSent && (
            <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center z-10 rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
              <p className="text-lg text-foreground text-center max-w-md">
                Your message has been successfully sent. We'll get back to you within 24 hours.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={`${isSent ? 'opacity-50 pointer-events-none' : ''} space-y-6`} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                className={errors.name ? 'border-destructive' : 'border-primary'}
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                className={errors.email ? 'border-destructive' : 'border-primary'}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                className={errors.phone ? 'border-destructive' : 'border-primary'}
              />
              <Input
                label="Organization (Optional)"
                type="text"
                name="organization"
                placeholder="Company or organization name"
                value={formData.organization}
                onChange={handleInputChange}
              />
            </div>

            <Select
              label="How can we help you?"
              placeholder="Select inquiry type"
              options={inquiryTypes}
              value={formData.inquiryType}
              onChange={handleSelectChange}
              error={errors.inquiryType}
              className={errors.inquiryType ? 'border-destructive' : 'border-primary'}
              searchable
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message <span className="text-destructive">*</span></label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us more about your interest in helping children at IGM Children Homes..."
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg font-body text-sm transition-quick focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${
                  errors.message ? 'border-destructive bg-destructive/5' : 'border-primary'
                }`}
              />
              {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
            </div>

           

            <div className="flex items-center justify-center pt-6">
              
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
               
                className={`bg-primary hover:bg-primary/90 text-white shadow-button ${isSent ? 'opacity-50 pointer-events-none' : ''}`}
              >
                {isSent ? 'Sent' : isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
