import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DonationSummary = ({ 
  donationType, 
  amount, 
  currency = '₹',
  donorInfo,
  paymentMethod,
  onEdit,
  onProceed,
  isProcessing = false
}) => {
  const getDonationTypeDisplay = (type) => {
    switch (type) {
      case 'one-time':
        return 'One-Time Donation';
      case 'monthly':
        return 'Monthly Donation';
      case 'sponsorship':
        return 'Child Sponsorship';
      default:
        return 'Donation';
    }
  };

  const getPaymentMethodDisplay = (method) => {
    switch (method) {
      case 'upi':
        return 'UPI Payment';
      case 'card':
        return 'Credit/Debit Card';
      case 'netbanking':
        return 'Net Banking';
      case 'wallet':
        return 'Mobile Wallet';
      case 'paypal':
        return 'PayPal';
      case 'bank-transfer':
        return 'Bank Transfer';
      default:
        return 'Payment Method';
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-IN')?.format(amount);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Donation Summary</h3>
        <p className="text-sm text-muted-foreground">
          Please review your donation details before proceeding
        </p>
      </div>
      {/* Donation Details Card */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Heart" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{getDonationTypeDisplay(donationType)}</h4>
              <p className="text-sm text-muted-foreground">
                {donationType === 'monthly' ? 'Recurring monthly' : 'One-time contribution'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onEdit('type')}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Edit
          </button>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <span className="text-foreground">Amount:</span>
            <div className="text-right">
              <span className="text-2xl font-bold text-foreground">
                {currency}{formatAmount(amount)}
              </span>
              {donationType === 'monthly' && (
                <p className="text-sm text-muted-foreground">/month</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Donor Information Card */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Donor Information</h4>
          <button
            onClick={() => onEdit('donor')}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Edit
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name:</span>
            <span className="text-foreground">
              {donorInfo?.firstName} {donorInfo?.lastName}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email:</span>
            <span className="text-foreground">{donorInfo?.email}</span>
          </div>
          {donorInfo?.phone && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Phone:</span>
              <span className="text-foreground">{donorInfo?.phone}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Country:</span>
            <span className="text-foreground">{donorInfo?.country}</span>
          </div>
        </div>
      </div>
      {/* Payment Method Card */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Payment Method</h4>
          <button
            onClick={() => onEdit('payment')}
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Edit
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-2 bg-muted rounded-lg">
            <Icon name="CreditCard" size={16} />
          </div>
          <span className="text-foreground">{getPaymentMethodDisplay(paymentMethod)}</span>
        </div>
      </div>
      {/* Tax Information */}
      {donorInfo?.country === 'IN' && (
        <div className="bg-success/5 border border-success/20 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Icon name="FileText" size={16} className="text-success mt-0.5" />
            <div>
              <p className="text-sm font-medium text-success">Tax Exemption Available</p>
              <p className="text-xs text-success/80 mt-1">
                This donation is eligible for 50% tax exemption under Section 80G of the Income Tax Act.
                You will receive a tax exemption certificate via email.
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Proceed Button */}
      <Button
        variant="default"
        size="lg"
        fullWidth
        loading={isProcessing}
        onClick={onProceed}
        className="bg-conversion-orange hover:bg-conversion-orange/90 text-white shadow-button"
        iconName="ArrowRight"
        iconPosition="right"
      >
        {isProcessing ? 'Processing...' : `Donate ${currency}${formatAmount(amount)}`}
      </Button>
      {/* Security Notice */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <Icon name="Shield" size={14} />
          <span className="text-xs">Secured by SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default DonationSummary;