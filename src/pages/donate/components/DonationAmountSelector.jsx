import React from 'react';

import Icon from '../../../components/AppIcon';

const DonationAmountSelector = ({ 
  selectedAmount, 
  onAmountSelect, 
  customAmount, 
  onCustomAmountChange,
  currency = '₹'
}) => {
  const predefinedAmounts = [
    { value: 500, label: '500', impact: 'Feeds a child for 10 days' },
    { value: 1000, label: '1,000', impact: 'School supplies for 2 children' },
    { value: 2500, label: '2,500', impact: 'Monthly education support' },
    { value: 5000, label: '5,000', impact: 'Healthcare for 5 children' },
    { value: 10000, label: '10,000', impact: 'Sponsor a child for 2 months' },
    { value: 25000, label: '25,000', impact: 'Support facility maintenance' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Choose Amount</h3>
        <p className="text-sm text-muted-foreground">Select a donation amount or enter a custom value</p>
      </div>
      {/* Predefined Amounts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {predefinedAmounts?.map((amount) => (
          <button
            key={amount?.value}
            onClick={() => onAmountSelect(amount?.value)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
              selectedAmount === amount?.value
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-foreground">
                {currency}{amount?.label}
              </span>
              {selectedAmount === amount?.value && (
                <Icon name="Check" size={16} color="var(--color-primary)" />
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-tight">
              {amount?.impact}
            </p>
          </button>
        ))}
      </div>
      {/* Custom Amount Input */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Custom Amount</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">
            {currency}
          </span>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => onCustomAmountChange(e?.target?.value)}
            placeholder="Enter amount"
            className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            min="100"
          />
        </div>
        {customAmount && customAmount >= 100 && (
          <p className="text-xs text-muted-foreground">
            Your contribution of {currency}{customAmount} will make a meaningful difference
          </p>
        )}
      </div>
    </div>
  );
};

export default DonationAmountSelector;