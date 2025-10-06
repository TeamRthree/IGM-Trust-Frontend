import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DonationAmountSelector from './components/DonationAmountSelector';
import DonationTypeSelector from './components/DonationTypeSelector';
import ImpactCalculator from './components/ImpactCalculator';
import DonorInformationForm from './components/DonorInformationForm';
import PaymentMethodSelector from './components/PaymentMethodSelector';
import DonationSummary from './components/DonationSummary';
import ProgressIndicator from './components/ProgressIndicator';
import ImpactStories from './components/ImpactStories';

const DonatePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [donationType, setDonationType] = useState('monthly');
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'IN',
    panNumber: '',
    receiveUpdates: true,
    agreeToTerms: false,
    confirmSource: false
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const totalSteps = 4;
  const isInternational = donorInfo?.country !== 'IN';
  const currency = isInternational ? '$' : '₹';
  const finalAmount = customAmount && parseFloat(customAmount) >= 100 ? parseFloat(customAmount) : selectedAmount;

  // Mock impact counters
  const [impactCounters, setImpactCounters] = useState({
    totalRaised: 2847650,
    childrenHelped: 1247,
    monthlyGoal: 500000,
    currentMonthRaised: 342180
  });

  useEffect(() => {
    // Simulate real-time counter updates
    const interval = setInterval(() => {
      setImpactCounters(prev => ({
        ...prev,
        totalRaised: prev?.totalRaised + Math.floor(Math.random() * 100),
        currentMonthRaised: prev?.currentMonthRaised + Math.floor(Math.random() * 50)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!finalAmount || finalAmount < 100) {
        newErrors.amount = 'Please select or enter a valid amount (minimum ₹100)';
      }
    }

    if (step === 2) {
      if (!donorInfo?.firstName?.trim()) newErrors.firstName = 'First name is required';
      if (!donorInfo?.lastName?.trim()) newErrors.lastName = 'Last name is required';
      if (!donorInfo?.email?.trim()) newErrors.email = 'Email is required';
      if (!donorInfo?.country) newErrors.country = 'Country is required';
      if (!donorInfo?.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';
      
      if (donorInfo?.country === 'IN' && !donorInfo?.confirmSource) {
        newErrors.confirmSource = 'Please confirm the source of funds';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (donorInfo?.email && !emailRegex?.test(donorInfo?.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (step === 3) {
      if (!paymentMethod) newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleEditStep = (section) => {
    switch (section) {
      case 'type': case'amount':
        setCurrentStep(1);
        break;
      case 'donor':
        setCurrentStep(2);
        break;
      case 'payment':
        setCurrentStep(3);
        break;
      default:
        break;
    }
  };

  const handleDonationSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Update impact counters
      setImpactCounters(prev => ({
        ...prev,
        totalRaised: prev?.totalRaised + finalAmount,
        currentMonthRaised: prev?.currentMonthRaised + finalAmount,
        childrenHelped: prev?.childrenHelped + Math.floor(finalAmount / 2000)
      }));

      setShowSuccessModal(true);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN')?.format(amount);
  };

  const progressPercentage = (impactCounters?.currentMonthRaised / impactCounters?.monthlyGoal) * 100;

  return (
    <>
      <Helmet>
        <title>Donate - Transform Lives | IGM Children Homes</title>
        <meta name="description" content="Make a difference in children's lives. Support education, healthcare, and care through secure donations. Every contribution creates lasting impact." />
        <meta name="keywords" content="donate, child sponsorship, charity, education support, healthcare, IGM Children Homes" />
      </Helmet>
      <div className="min-h-screen bg-warm-foundation">
        <Header />
        
        {/* Hero Section with Impact Counters */}
        <section className="pt-24 pb-12 bg-muted ">
          <div className="max-w-7xl mx-auto py-32 px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Transform Lives Through Giving
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your compassion creates lasting change. Join thousands of supporters in restoring hope and building futures for children in need.
              </p>
            </div>

            {/* Real-time Impact Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  ₹{formatCurrency(impactCounters?.totalRaised)}
                </div>
                <div className="text-sm text-muted-foreground">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {impactCounters?.childrenHelped}+
                </div>
                <div className="text-sm text-muted-foreground">Children Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">48</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Lives Transformed</div>
              </div>
            </div>

            {/* Monthly Goal Progress */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span>Monthly Goal Progress</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-white/70 rounded-full h-2">
                <div 
                  className="bg-secondary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1 text-muted-foreground">
                <span>₹{formatCurrency(impactCounters?.currentMonthRaised)}</span>
                <span>₹{formatCurrency(impactCounters?.monthlyGoal)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Donation Form */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Donation Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg shadow-warm p-6 md:p-8">
                  <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

                  {/* Step 1: Amount and Type Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <DonationTypeSelector
                        selectedType={donationType}
                        onTypeSelect={setDonationType}
                      />
                      
                      <DonationAmountSelector
                        selectedAmount={selectedAmount}
                        onAmountSelect={setSelectedAmount}
                        customAmount={customAmount}
                        onCustomAmountChange={setCustomAmount}
                        currency={currency}
                      />

                      {errors?.amount && (
                        <div className="text-destructive text-sm">{errors?.amount}</div>
                      )}

                      <div className="flex justify-end">
                        <Button
                          variant="default"
                          onClick={handleNextStep}
                          iconName="ArrowRight"
                          iconPosition="right"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Donor Information */}
                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <DonorInformationForm
                        formData={donorInfo}
                        onFormDataChange={setDonorInfo}
                        errors={errors}
                        isInternational={isInternational}
                      />

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={handlePreviousStep}
                          iconName="ArrowLeft"
                          iconPosition="left"
                        >
                          Back
                        </Button>
                        <Button
                          variant="default"
                          onClick={handleNextStep}
                          iconName="ArrowRight"
                          iconPosition="right"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment Method */}
                  {currentStep === 3 && (
                    <div className="space-y-8">
                      <PaymentMethodSelector
                        selectedMethod={paymentMethod}
                        onMethodSelect={setPaymentMethod}
                        isInternational={isInternational}
                        amount={finalAmount}
                      />

                      {errors?.paymentMethod && (
                        <div className="text-destructive text-sm">{errors?.paymentMethod}</div>
                      )}

                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          onClick={handlePreviousStep}
                          iconName="ArrowLeft"
                          iconPosition="left"
                        >
                          Back
                        </Button>
                        <Button
                          variant="default"
                          onClick={handleNextStep}
                          iconName="ArrowRight"
                          iconPosition="right"
                          className="bg-primary hover:bg-primary/90"
                        >
                          Review Donation
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review and Submit */}
                  {currentStep === 4 && (
                    <DonationSummary
                      donationType={donationType}
                      amount={finalAmount}
                      currency={currency}
                      donorInfo={donorInfo}
                      paymentMethod={paymentMethod}
                      onEdit={handleEditStep}
                      onProceed={handleDonationSubmit}
                      isProcessing={isProcessing}
                    />
                  )}
                </div>
              </div>

              {/* Right Column - Impact Calculator and Stories */}
              <div className="space-y-6">
                <div className="bg-card rounded-lg shadow-warm p-6">
                  <ImpactCalculator 
                    amount={finalAmount} 
                    donationType={donationType}
                  />
                </div>

                

                {/* Trust Indicators */}
                <div className="bg-card rounded-lg shadow-warm p-6">
                  <h4 className="font-semibold text-foreground mb-4">Why Donate With Us?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="Shield" size={16} className="text-success mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">100% Secure</p>
                        <p className="text-xs text-muted-foreground">SSL encrypted payments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Eye" size={16} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Full Transparency</p>
                        <p className="text-xs text-muted-foreground">Track your impact</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Award" size={16} className="text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Tax Benefits</p>
                        <p className="text-xs text-muted-foreground">80G tax exemption</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg p-8 max-w-md w-full text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} className="text-success" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-6">
                Your donation of {currency}{formatCurrency(finalAmount)} has been processed successfully. 
                You will receive a confirmation email shortly.
              </p>
              <Button
                variant="default"
                onClick={() => setShowSuccessModal(false)}
                className="bg-primary hover:bg-primary/90"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        
      </div>
    </>
  );
};

export default DonatePage;