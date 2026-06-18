import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrustVerification = () => {
  const [activeReport, setActiveReport] = useState('annual');

  const [isVisible, setIsVisible] = useState(false);

  const [metrics, setMetrics] = useState({
    transparency: 0,
    retention: 0,
    expense: 0,
    efficiency: 0,
  });

  const sectionRef = useRef(null);

  const certifications = [
    {
      name: "Charity Navigator",
      rating: "4 Stars",
      description: "Highest rating for financial transparency and accountability",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
      validUntil: "December 2025",
      icon: "Star"
    },
    {
      name: "GuideStar Gold Seal",
      rating: "Gold Level",
      description: "Recognition for transparency and impact reporting excellence",
      image: "https://images.pexels.com/photos/6863186/pexels-photo-6863186.jpeg",
      validUntil: "March 2026",
      icon: "Award"
    },
    {
      name: "FCRA Registration",
      rating: "Active",
      description: "Government approval for receiving foreign contributions",
      image: "https://images.pexels.com/photos/6863190/pexels-photo-6863190.jpeg",
      validUntil: "June 2027",
      icon: "Shield"
    },
    {
      name: "12A & 80G Certification",
      rating: "Valid",
      description: "Tax exemption status for donors and organization",
      image: "https://images.pexels.com/photos/6863195/pexels-photo-6863195.jpeg",
      validUntil: "Permanent",
      icon: "FileCheck"
    }
  ];

  const auditReports = [
    {
      year: "2024",
      type: "Annual Report",
      status: "Published",
      highlights: [
        "₹2.5 Crore total revenue",
        "89% program expense ratio",
        "1,500+ children served",
        "Zero compliance issues"
      ],
      downloadUrl: "#"
    },
    {
      year: "2023",
      type: "Financial Audit",
      status: "Completed",
      highlights: [
        "Clean audit opinion",
        "Improved efficiency by 12%",
        "Expanded to 2 new facilities",
        "Enhanced transparency measures"
      ],
      downloadUrl: "#"
    },
    {
      year: "2023",
      type: "Impact Assessment",
      status: "Published",
      highlights: [
        "94% success rate in rehabilitation",
        "450+ children successfully reintegrated",
        "98% education completion rate",
        "Community impact in 15 districts"
      ],
      downloadUrl: "#"
    }
  ];

  const fundAllocation = [
    { category: "Direct Child Care", percentage: 65, amount: "₹1,62,50,000", color: "bg-primary" },
    { category: "Education Programs", percentage: 15, amount: "₹37,50,000", color: "bg-secondary" },
    { category: "Healthcare Services", percentage: 9, amount: "₹22,50,000", color: "bg-accent" },
    { category: "Administration", percentage: 8, amount: "₹20,00,000", color: "bg-muted-foreground" },
    { category: "Fundraising", percentage: 3, amount: "₹7,50,000", color: "bg-warning" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      const progress = currentStep / steps;

      setMetrics({
        transparency: Math.floor(98 * progress),
        retention: Math.floor(87 * progress),
        expense: Math.floor(89 * progress),
        efficiency: Math.floor(11 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);

        setMetrics({
          transparency: 98,
          retention: 87,
          expense: 89,
          efficiency: 11,
        });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const transparencyMetrics = [
    {
      label: "Financial Transparency Score",
      value: metrics.transparency,
      icon: "TrendingUp"
    },
    {
      label: "Donor Retention Rate",
      value: metrics.retention,
      icon: "Users"
    },
    {
      label: "Program Expense Ratio",
      value: metrics.expense,
      icon: "PieChart"
    },
    {
      label: "Administrative Efficiency",
      value: metrics.efficiency,
      icon: "Settings"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="transparency-metrics"
      className="py-20 bg-gradient-to-br from-background via-warm-foundation to-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Transparency Metrics
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to transparency and accountability is validated by
            independent certifications, regular audits, and comprehensive reporting.
          </p>
        </div>

        <div className="mx-auto">

          <div className="flex flex-col items-center">

            <div className="flex flex-wrap justify-center gap-4">
              {transparencyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-warm text-center min-w-[220px]"
                >
                  <div className="text-5xl font-bold text-primary mb-1">
                    {metric.value}%
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustVerification;