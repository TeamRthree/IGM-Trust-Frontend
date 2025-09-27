import React from 'react';
import Icon from '../../../components/AppIcon';

const DonationTypeSelector = ({ selectedType, onTypeSelect }) => {
  const donationTypes = [
    {
      id: 'one-time',
      title: 'One-Time Donation',
      description: 'Make an immediate impact with a single contribution',
      icon: 'Heart',
      popular: false
    },
    {
      id: 'monthly',
      title: 'Monthly Giving',
      description: 'Provide ongoing support with recurring donations',
      icon: 'Calendar',
      popular: true
    },
    {
      id: 'sponsorship',
      title: 'Child Sponsorship',
      description: 'Sponsor a specific child\'s education and care',
      icon: 'Users',
      popular: false
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Donation Type</h3>
        <p className="text-sm text-muted-foreground">Choose how you would like to contribute</p>
      </div>
      <div className="space-y-3">
        {donationTypes?.map((type) => (
          <button
            key={type?.id}
            onClick={() => onTypeSelect(type?.id)}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md relative ${
              selectedType === type?.id
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border hover:border-primary/50'
            }`}
          >
            {type?.popular && (
              <div className="absolute -top-2 left-4 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                Most Popular
              </div>
            )}
            
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                selectedType === type?.id ? 'bg-primary text-white' : 'bg-muted'
              }`}>
                <Icon name={type?.icon} size={20} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-foreground">{type?.title}</h4>
                  {selectedType === type?.id && (
                    <Icon name="Check" size={16} color="var(--color-primary)" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{type?.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DonationTypeSelector;