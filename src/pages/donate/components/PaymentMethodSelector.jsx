import React from 'react';
import Icon from '../../../components/AppIcon';

const PaymentMethodSelector = ({ 
  selectedMethod, 
  onMethodSelect, 
  isInternational = false,
  amount 
}) => {
  const indianMethods = [
    {
      id: 'upi',
      title: 'UPI',
      description: 'Pay using Google Pay, PhonePe, Paytm, or any UPI app',
      icon: 'Smartphone',
      popular: true,
      minAmount: 1
    },
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay cards accepted',
      icon: 'CreditCard',
      popular: false,
      minAmount: 1
    },
    {
      id: 'netbanking',
      title: 'Net Banking',
      description: 'All major Indian banks supported',
      icon: 'Building',
      popular: false,
      minAmount: 1
    },
    {
      id: 'wallet',
      title: 'Mobile Wallets',
      description: 'Paytm, Mobikwik, Amazon Pay, and more',
      icon: 'Wallet',
      popular: false,
      minAmount: 1
    }
  ];

  const internationalMethods = [
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express accepted',
      icon: 'CreditCard',
      popular: true,
      minAmount: 5
    },
    {
      id: 'paypal',
      title: 'PayPal',
      description: 'Secure payment through PayPal',
      icon: 'DollarSign',
      popular: false,
      minAmount: 5
    },
    {
      id: 'bank-transfer',
      title: 'Bank Transfer',
      description: 'Direct bank transfer (ACH)',
      icon: 'Building',
      popular: false,
      minAmount: 25
    }
  ];

  const methods = isInternational ? internationalMethods : indianMethods;
  const currency = isInternational ? '$' : '₹';

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Payment Method</h3>
        <p className="text-sm text-muted-foreground">
          Choose your preferred payment method
        </p>
      </div>
      <div className="space-y-3">
        {methods?.map((method) => {
          const isDisabled = amount < method?.minAmount;
          
          return (
            <button
              key={method?.id}
              onClick={() => !isDisabled && onMethodSelect(method?.id)}
              disabled={isDisabled}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left relative ${
                isDisabled
                  ? 'border-border bg-muted/50 opacity-50 cursor-not-allowed'
                  : selectedMethod === method?.id
                  ? 'border-primary bg-primary/5 shadow-md hover:shadow-lg'
                  : 'border-border hover:border-primary/50 hover:shadow-md'
              }`}
            >
              {method?.popular && !isDisabled && (
                <div className="absolute -top-2 left-4 bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                  Popular
                </div>
              )}
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isDisabled
                    ? 'bg-muted'
                    : selectedMethod === method?.id 
                    ? 'bg-primary text-white' :'bg-muted'
                }`}>
                  <Icon name={method?.icon} size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground">{method?.title}</h4>
                    {selectedMethod === method?.id && !isDisabled && (
                      <Icon name="Check" size={16} color="var(--color-primary)" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {method?.description}
                  </p>
                  {isDisabled && (
                    <p className="text-xs text-destructive mt-1">
                      Minimum amount: {currency}{method?.minAmount}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="bg-muted/50 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <Icon name="Shield" size={16} className="text-success mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Secure Payment</p>
            <p className="text-xs text-muted-foreground mt-1">
              Your payment information is encrypted and secure. We use industry-standard security measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;