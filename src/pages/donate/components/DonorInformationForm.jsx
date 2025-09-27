import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const DonorInformationForm = ({ 
  formData, 
  onFormDataChange, 
  errors = {},
  isInternational = false 
}) => {
  const countryOptions = [
    { value: 'IN', label: 'India' },
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'CA', label: 'Canada' },
    { value: 'AU', label: 'Australia' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'SG', label: 'Singapore' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'OTHER', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Donor Information</h3>
        <p className="text-sm text-muted-foreground">
          Please provide your details for donation receipt and updates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          value={formData?.firstName || ''}
          onChange={(e) => handleInputChange('firstName', e?.target?.value)}
          error={errors?.firstName}
          required
        />

        <Input
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          value={formData?.lastName || ''}
          onChange={(e) => handleInputChange('lastName', e?.target?.value)}
          error={errors?.lastName}
          required
        />
      </div>
      <Input
        label="Email Address"
        type="email"
        placeholder="Enter your email address"
        description="We'll send your donation receipt and updates here"
        value={formData?.email || ''}
        onChange={(e) => handleInputChange('email', e?.target?.value)}
        error={errors?.email}
        required
      />
      <Input
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone number"
        value={formData?.phone || ''}
        onChange={(e) => handleInputChange('phone', e?.target?.value)}
        error={errors?.phone}
      />
      <Select
        label="Country"
        placeholder="Select your country"
        options={countryOptions}
        value={formData?.country || ''}
        onChange={(value) => handleInputChange('country', value)}
        error={errors?.country}
        required
        searchable
      />
      {formData?.country === 'IN' && (
        <Input
          label="PAN Number"
          type="text"
          placeholder="Enter your PAN number"
          description="Required for tax exemption certificate (80G)"
          value={formData?.panNumber || ''}
          onChange={(e) => handleInputChange('panNumber', e?.target?.value?.toUpperCase())}
          error={errors?.panNumber}
          maxLength={10}
        />
      )}
      <div className="space-y-4">
        <Checkbox
          label="I would like to receive updates about IGM Children Homes"
          description="Get stories, impact reports, and news about our work"
          checked={formData?.receiveUpdates || false}
          onChange={(e) => handleInputChange('receiveUpdates', e?.target?.checked)}
        />

        <Checkbox
          label="I agree to the Terms and Conditions and Privacy Policy"
          error={errors?.agreeToTerms}
          checked={formData?.agreeToTerms || false}
          onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
          required
        />

        {formData?.country === 'IN' && (
          <Checkbox
            label="I confirm that this donation is from my own funds and not from any prohibited source"
            description="As per FCRA regulations for Indian donations"
            checked={formData?.confirmSource || false}
            onChange={(e) => handleInputChange('confirmSource', e?.target?.checked)}
            required
          />
        )}
      </div>
    </div>
  );
};

export default DonorInformationForm;