import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DonationModal = ({ project, isOpen, onClose, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false
  });

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount?.toString());
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e?.target?.value);
    setDonationAmount(e?.target?.value);
  };

  const handleDonate = () => {
    const amount = parseInt(donationAmount);
    if (amount && amount > 0) {
      onDonate({
        project: project,
        amount: amount,
        donor: donorInfo
      });
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-warm-hover max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-conversion-orange/10 rounded-lg">
              <Icon name="Heart" size={20} className="text-conversion-orange" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-card-foreground">
                Support This Project
              </h2>
              <p className="text-sm text-muted-foreground">
                Make a difference in children's lives
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-warm"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Project Info */}
        <div className="p-6 border-b border-border">
          <div className="flex space-x-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-1">
                {project?.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                {project?.description}
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>{project?.beneficiaries} children</span>
                <span>•</span>
                <span>{project?.location}</span>
                <span>•</span>
                <span>{project?.completion}% complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Amount */}
        <div className="p-6 border-b border-border">
          <h4 className="font-heading font-semibold text-lg text-card-foreground mb-4">
            Choose Donation Amount
          </h4>
          
          {/* Predefined Amounts */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
            {predefinedAmounts?.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`p-3 rounded-lg border-2 transition-warm text-center ${
                  donationAmount === amount?.toString()
                    ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-card-foreground'
                }`}
              >
                <div className="font-semibold">₹{amount?.toLocaleString()}</div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <Input
            label="Custom Amount (₹)"
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            min="1"
          />

          {/* Impact Message */}
          {donationAmount && (
            <div className="mt-4 p-4 bg-success/10 rounded-lg">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Heart" size={16} />
                <span className="font-medium text-sm">
                  Your ₹{parseInt(donationAmount)?.toLocaleString()} donation can help provide education and care for children in need.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Donor Information */}
        <div className="p-6 border-b border-border">
          <h4 className="font-heading font-semibold text-lg text-card-foreground mb-4">
            Donor Information
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your name"
              value={donorInfo?.name}
              onChange={(e) => setDonorInfo({...donorInfo, name: e?.target?.value})}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={donorInfo?.email}
              onChange={(e) => setDonorInfo({...donorInfo, email: e?.target?.value})}
              required
            />
          </div>
          
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={donorInfo?.phone}
            onChange={(e) => setDonorInfo({...donorInfo, phone: e?.target?.value})}
            className="mb-4"
          />

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={donorInfo?.anonymous}
              onChange={(e) => setDonorInfo({...donorInfo, anonymous: e?.target?.checked})}
              className="rounded border-border"
            />
            <span className="text-muted-foreground">Make this donation anonymous</span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="p-6">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="Heart"
              iconPosition="left"
              iconSize={16}
              className="bg-conversion-orange hover:bg-conversion-orange/90 text-white"
              onClick={handleDonate}
              disabled={!donationAmount || !donorInfo?.name || !donorInfo?.email}
            >
              Donate ₹{donationAmount ? parseInt(donationAmount)?.toLocaleString() : '0'}
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            Your donation is secure and will be processed safely. You'll receive a confirmation email with tax receipt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;