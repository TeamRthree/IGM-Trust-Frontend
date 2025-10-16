import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import API, { createDonation } from '../../../api/api';

const DonationModal = ({ project, isOpen, onClose, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '', phone: '', anonymous: false });
  const [error, setError] = useState('');
  const [donationId, setDonationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleAmountSelect = (amount) => { setDonationAmount(amount.toString()); setCustomAmount(''); };
  const handleCustomAmountChange = (e) => { setCustomAmount(e.target.value); setDonationAmount(e.target.value); };


  const resetForm = () => {
  setDonationAmount('');
  setCustomAmount('');
  setDonorInfo({ name: '', email: '', phone: '', anonymous: false });
  setError('');
  setDonationId(null);
  setLoading(false);
};


const validateForm = () => {
  const errors = {};

  // Amount validation
  const amount = parseInt(donationAmount, 10);
  if (!amount || amount <= 0) {
    errors.amount = 'Please enter a valid donation amount';
  }

  // Name validation
  if (!donorInfo.name.trim()) {
    errors.name = 'Full name is required';
  }

  // Email validation
  if (!donorInfo.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(donorInfo.email)) {
    errors.email = 'Email is invalid';
  }

  // Phone validation (optional)
  if (donorInfo.phone && !/^\d{10}$/.test(donorInfo.phone)) {
    errors.phone = 'Phone number must be 10 digits';
  }

  setError(errors);
  return Object.keys(errors).length === 0;
};


  const handleDonate = async () => {
  if (!validateForm()) return; // ✅ stop if invalid

  const amount = parseInt(donationAmount, 10);
  setLoading(true);
  setError('');

  const donationData = {
    donor_first_name: donorInfo.name.split(' ')[0] || '-',
    donor_last_name: donorInfo.name.split(' ').slice(1).join('') || '-',
    donor_email: donorInfo.email,
    donor_phone: donorInfo.phone,
    donation_type: 'one-time',
    amount,
    currency: 'INR',
    project_id: project?.id,
    project_title: project?.title,
    project_location: project?.location,
    project_target: project?.target,
    children_helped: Math.floor(amount / 2000),
  };

  try {
    const response = await createDonation(donationData);
    if (response?.data?.success) {
      const createdDonation = response.data.donation;
      setDonationId(createdDonation.id);
      alert(`Donation of ₹${amount.toLocaleString()} submitted for ${project?.title}.`);
    }
  } catch (err) {
    console.error(err);
    alert('Donation failed. Please try again.');
  } finally {
    setLoading(false);
  }
};


const simulatePaymentSuccess = async () => {
  if (!donationId) {
    alert("Submit donation first!");
    return;
  }
  setLoading(true);

  try {
    // 1️⃣ Mark payment as success
    const response = await API.put(`/donations/${donationId}/status`, {
      payment_status: "success",
      payment_id: "SIMULATED_PAYMENT_12345",
    });

    if (response?.data?.success) {
      const updatedDonation = response.data.donation;
      const updatedProject = response.data.project; // ✅ directly get updated project from response

      // 2️⃣ Send updated donation + project to parent component
      onDonate({
        ...updatedDonation,
        project: updatedProject,
      });

      // 3️⃣ Show success message
      alert(`Payment successful for ${updatedProject?.title}!`);
      resetForm();   
    }
  } catch (err) {
    console.error(err);
    alert("Payment simulation failed.");
  } finally {
    setLoading(false);
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
              <h2 className="font-heading font-semibold text-xl text-card-foreground">Support This Project</h2>
              <p className="text-sm text-muted-foreground">Make a difference in children's lives</p>
            </div>
          </div>
          <button  onClick={() => {
    resetForm(); // ✅ clear all fields
    onClose();   // ✅ close modal
  }} className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-warm">
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Project Info */}
        <div className="p-6 border-b border-border">
          <div className="flex space-x-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={project?.image} alt={project?.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-1">{project?.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{project?.description}</p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>{project?.beneficiaries} children</span><span>•</span>
                <span>{project?.location}</span><span>•</span>
                <span>{project?.completion}% complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Amount */}
        <div className="p-6 border-b border-border">
          <h4 className="font-heading font-semibold text-lg text-card-foreground mb-4">Choose Donation Amount</h4>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
            {predefinedAmounts.map(amount => (
              <button key={amount} onClick={() => handleAmountSelect(amount)} className={`p-3 rounded-lg border-2 transition-warm text-center ${donationAmount === amount.toString() ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-card-foreground'}`}>
                <div className="font-semibold">₹{amount.toLocaleString()}</div>
              </button>
            ))}
          </div>
          <Input label="Custom Amount (₹)" type="number" placeholder="Enter custom amount" value={customAmount} onChange={handleCustomAmountChange} min="1" />
          {donationAmount && <div className="mt-4 p-4 bg-success/10 rounded-lg flex items-center space-x-2 text-success"><Icon name="Heart" size={16} /><span className="font-medium text-sm">Your ₹{parseInt(donationAmount, 10).toLocaleString()} donation can help provide education and care for children in need.</span></div>}
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
      value={donorInfo.name}
      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
      required
    />
    {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}

    <Input
      label="Email Address"
      type="email"
      placeholder="Enter your email"
      value={donorInfo.email}
      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
      required
    />
    {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
  </div>

  <Input
    label="Phone Number"
    type="tel"
    placeholder="Enter your phone number"
    value={donorInfo.phone}
    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
    className="mb-4"
  />
  {error.phone && <p className="text-red-500 text-sm mt-1">{error.phone}</p>}

  {error.amount && <p className="text-red-500 text-sm mt-2">{error.amount}</p>}

  <label className="flex items-center space-x-2 text-sm">
    <input
      type="checkbox"
      checked={donorInfo.anonymous}
      onChange={(e) => setDonorInfo({ ...donorInfo, anonymous: e.target.checked })}
      className="rounded border-border"
    />
    <span className="text-muted-foreground">Make this donation anonymous</span>
  </label>
</div>


        {/* Action Buttons */}
        <div className="p-6">
          <div className="flex space-x-3">
            <Button variant="outline" fullWidth onClick={() => {
    resetForm(); // ✅ clear all fields
    onClose();   // ✅ close modal
  }} disabled={loading}>Cancel</Button>
            <Button variant="default" fullWidth iconName="Heart" iconPosition="left" iconSize={16} className="bg-conversion-orange hover:bg-conversion-orange/90 text-white" onClick={handleDonate} disabled={!donationAmount || !donorInfo.name || !donorInfo.email || loading}>
              {loading ? 'Processing...' : `Donate ₹${donationAmount ? parseInt(donationAmount, 10).toLocaleString() : '0'}`}
            </Button>
          </div>

          {donationId && !loading && <p className="text-success text-sm mt-2">Donation submitted! Click "Simulate Payment Success" to mark it as successful.</p>}

          <Button variant="default" onClick={simulatePaymentSuccess} className="bg-success hover:bg-success/90 mt-3" disabled={!donationId || loading}>
            Simulate Payment Success
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-3">
            Your donation is secure and will be processed safely. You'll receive a confirmation email with tax receipt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
