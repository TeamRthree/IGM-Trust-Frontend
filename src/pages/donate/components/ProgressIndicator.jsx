import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, title: 'Amount', icon: 'DollarSign' },
    { id: 2, title: 'Details', icon: 'User' },
    { id: 3, title: 'Payment', icon: 'CreditCard' },
    { id: 4, title: 'Review', icon: 'Check' }
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps?.map((step, index) => (
          <React.Fragment key={step?.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentStep >= step?.id
                    ? 'bg-primary text-white shadow-md'
                    : currentStep === step?.id - 1
                    ? 'bg-primary/20 text-primary border-2 border-primary' :'bg-muted text-muted-foreground'
                }`}
              >
                {currentStep > step?.id ? (
                  <Icon name="Check" size={16} />
                ) : (
                  <Icon name={step?.icon} size={16} />
                )}
              </div>
              <span
                className={`text-xs mt-2 font-medium ${
                  currentStep >= step?.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {step?.title}
              </span>
            </div>
            
            {index < steps?.length - 1 && (
              <div className="flex-1 mx-4">
                <div
                  className={`h-0.5 transition-all duration-200 ${
                    currentStep > step?.id ? 'bg-primary' : 'bg-border'
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;