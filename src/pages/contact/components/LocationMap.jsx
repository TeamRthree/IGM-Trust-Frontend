import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  // Mock coordinates for Chennai, Tamil Nadu
  const latitude = 13.0827;
  const longitude = 80.2707;
  
  const facilities = [
    {
      name: 'Main Campus',
      address: 'No. 123, Hope Street, Gandhi Nagar, Chennai - 600020',
      type: 'Primary Facility',
      capacity: '150 children',
      programs: ['Education', 'Healthcare', 'Skill Development', 'Recreation']
    },
    {
      name: 'Vocational Training Center',
      address: 'No. 456, Skills Avenue, Anna Nagar, Chennai - 600040',
      type: 'Training Facility',
      capacity: '80 students',
      programs: ['Computer Training', 'Tailoring', 'Carpentry', 'Cooking']
    },
    {
      name: 'Medical Center',
      address: 'No. 789, Health Road, T. Nagar, Chennai - 600017',
      type: 'Healthcare Facility',
      capacity: '24/7 Service',
      programs: ['General Medicine', 'Pediatrics', 'Dental Care', 'Mental Health']
    }
  ];

  return (
   <section className="py-12 sm:py-16 lg:py-24 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-10 sm:mb-12">
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full">
          <Icon name="MapPin" size={22} color="var(--color-primary)" />
        </div>
      </div>

      <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
        Find Us
      </h2>

      <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
        Visit our facilities and see firsthand how we're transforming children's lives. 
        We welcome visitors, volunteers, and partners.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

      {/* Map */}
      <div className="order-2 lg:order-1">
        <div className="bg-card rounded-xl shadow-warm overflow-hidden">

          {/* Responsive Map */}
          <div className="aspect-video w-full min-h-[250px] sm:min-h-[350px]">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="IGM Children Homes Location"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
              className="border-0 w-full h-full"
            />
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex items-start sm:items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex-shrink-0">
                <Icon name="Navigation" size={18} color="var(--color-primary)" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground">
                  Main Campus Location
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Visiting Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="bg-muted rounded-lg p-4">
                <Icon name="Clock" size={18} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="font-body text-xs text-muted-foreground">Visiting Hours</p>
                <p className="font-body text-sm font-medium text-foreground">9 AM - 5 PM</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <Icon name="Calendar" size={18} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="font-body text-xs text-muted-foreground">Open Days</p>
                <p className="font-body text-sm font-medium text-foreground">Mon - Sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities List */}
      <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 text-center lg:text-left">
          Our Facilities
        </h3>

        {facilities?.map((facility, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-warm p-4 sm:p-6 hover:shadow-warm-hover transition-warm"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
              
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex-shrink-0">
                <Icon name="Building" size={18} color="var(--color-primary)" />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-heading font-semibold text-base sm:text-lg text-foreground">
                    {facility?.name}
                  </h4>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {facility?.type}
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3 flex items-start">
                  <Icon name="MapPin" size={14} className="mr-2 flex-shrink-0 mt-0.5" />
                  {facility?.address}
                </p>

                <div className="flex items-center space-x-4 mb-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Users" size={14} className="mr-1" />
                    {facility?.capacity}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {facility?.programs?.map((program, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-foreground text-xs rounded-full"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Visit Info */}
        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 sm:p-6">
          <div className="flex items-start space-x-3 mb-4">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-secondary/20 rounded-full flex-shrink-0">
              <Icon name="Info" size={18} color="var(--color-secondary)" />
            </div>
            <h4 className="font-heading font-semibold text-base sm:text-lg text-foreground">
              Planning a Visit?
            </h4>
          </div>

          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
            <li className="flex items-start">
              <Icon name="Check" size={14} className="mr-2 text-success flex-shrink-0 mt-0.5" />
              Schedule visits in advance for better experience
            </li>
            <li className="flex items-start">
              <Icon name="Check" size={14} className="mr-2 text-success flex-shrink-0 mt-0.5" />
              Bring valid ID for security purposes
            </li>
            <li className="flex items-start">
              <Icon name="Check" size={14} className="mr-2 text-success flex-shrink-0 mt-0.5" />
              Photography requires prior permission
            </li>
            <li className="flex items-start">
              <Icon name="Check" size={14} className="mr-2 text-success flex-shrink-0 mt-0.5" />
              Group visits welcome with advance notice
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</section>

  );
};

export default LocationMap;