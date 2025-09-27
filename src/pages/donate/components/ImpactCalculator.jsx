import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactCalculator = ({ amount, donationType }) => {
  const calculateImpact = (amount) => {
    if (!amount || amount < 100) return null;

    const impacts = [];
    
    if (amount >= 500) {
      const meals = Math.floor(amount / 50);
      impacts?.push({
        icon: 'Utensils',
        text: `${meals} nutritious meals for children`,
        color: 'text-green-600'
      });
    }

    if (amount >= 1000) {
      const books = Math.floor(amount / 200);
      impacts?.push({
        icon: 'Book',
        text: `${books} educational books and supplies`,
        color: 'text-blue-600'
      });
    }

    if (amount >= 2500) {
      const healthcare = Math.floor(amount / 500);
      impacts?.push({
        icon: 'Heart',
        text: `${healthcare} children receive healthcare support`,
        color: 'text-red-600'
      });
    }

    if (amount >= 5000) {
      const months = Math.floor(amount / 2500);
      impacts?.push({
        icon: 'Home',
        text: `${months} month(s) of shelter and care`,
        color: 'text-purple-600'
      });
    }

    return impacts;
  };

  const impacts = calculateImpact(amount);

  if (!impacts || impacts?.length === 0) {
    return (
      <div className="bg-muted/50 rounded-lg p-6 text-center">
        <Icon name="Calculator" size={32} className="mx-auto mb-3 text-muted-foreground" />
        <p className="text-muted-foreground">
          Enter an amount to see the impact of your donation
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Target" size={20} color="var(--color-primary)" />
        <h3 className="text-lg font-semibold text-foreground">Your Impact</h3>
      </div>
      <div className="space-y-3">
        {impacts?.map((impact, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Icon name={impact?.icon} size={16} className={impact?.color} />
            </div>
            <p className="text-sm text-foreground flex-1">{impact?.text}</p>
          </div>
        ))}
      </div>
      {donationType === 'monthly' && (
        <div className="mt-4 p-3 bg-white/50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Repeat" size={16} color="var(--color-secondary)" />
            <p className="text-sm font-medium text-foreground">
              Monthly Impact: This impact multiplies every month!
            </p>
          </div>
        </div>
      )}
      {donationType === 'sponsorship' && (
        <div className="mt-4 p-3 bg-white/50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} color="var(--color-accent)" />
            <p className="text-sm font-medium text-foreground">
              Direct sponsorship provides comprehensive care for one child
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactCalculator;