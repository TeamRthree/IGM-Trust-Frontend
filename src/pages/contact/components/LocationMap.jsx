import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {


  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            Find Us
          </h2>

          <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Visit our facilities and see firsthand how we're transforming children's lives.
            We welcome visitors, volunteers, and partners.
          </p>
        </div>

        {/* Full Width Map */}
        <div className="bg-card rounded-xl shadow-warm overflow-hidden mb-8">
          <div className="aspect-[21/8] min-h-[350px] lg:min-h-[500px] w-full">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="IGM Children Homes Location"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d630.5704178832401!2d80.06194378628255!3d12.850389896516752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f65234f07c85%3A0x1c4ff52142ac5891!2sIGM%20Children%20home!5e0!3m2!1sen!2sin!4v1781760706489!5m2!1sen!2sin"
              className="border-0 w-full h-full"
            />
          </div>

          
        </div>

        {/* Details Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Timing Card */}
          <div className="bg-background rounded-xl shadow-warm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                Visiting Information
              </h3>
            </div>

            <div className="flex flex-col gap-4">

        

              <div className="bg-[#E0E7FF]/60 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Icon
                    name="Clock"
                    size={18}
                    color="var(--color-primary)"
                    className="mr-2"
                  />
                  <span className="font-body text-sm text-muted-foreground">
                    Visiting Hours
                  </span>
                </div>

                <p className="font-heading font-semibold text-lg text-foreground">
                  9:00 AM - 5:00 PM
                </p>
              </div>

              <div className="bg-[#E0E7FF]/60 rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <Icon
                    name="Calendar"
                    size={18}
                    color="var(--color-primary)"
                    className="mr-2"
                  />
                  <span className="font-body text-sm text-muted-foreground">
                    Working Days
                  </span>
                </div>

                <p className="font-heading font-semibold text-lg text-foreground">
                  Monday - Saturday
                </p>
              </div>

            </div>
          </div>

          {/* Address Card */}
          {/* Address Card */}
<div className="bg-background rounded-xl shadow-warm p-6 sm:p-8">
  <div className="flex items-center gap-3 mb-6">
    <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
      Address
    </h3>
  </div>

  <div className="bg-[#E0E7FF]/60 rounded-lg p-5">
    <p className="font-body text-base text-foreground leading-relaxed mb-6">
      No.9, Karthick Nagar,
      <br />
      IGM Campus Veerabaghu Nagar,
      <br />
        Guduvancheri 603202, South India.
     

      
    </p>

    <div className="border-t border-border pt-5 space-y-4">

      <div className="flex items-start gap-3">
        <Icon
          name="Phone"
          size={18}
          color="var(--color-primary)"
          className="mt-0.5 flex-shrink-0"
        />

        <div>
          <p className="text-xs text-muted-foreground mb-1">
            Phone Number
          </p>

          <p className="font-medium text-foreground">
            +91 98765 43210
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Icon
          name="Mail"
          size={18}
          color="var(--color-primary)"
          className="mt-0.5 flex-shrink-0"
        />

        <div>
          <p className="text-xs text-muted-foreground mb-1">
            Email Address
          </p>

          <p className="font-medium text-foreground break-all">
            info@igmchildrenhomes.org
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

        </div>

        {/* Planning Visit */}
        <div className="bg-background border border-secondary/20 rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full">
              <Icon
                name="Info"
                size={22}
                color="var(--color-secondary)"
              />
            </div>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
              Planning a Visit?
            </h3>
          </div>

          <div className="space-y-3">
  <div className="flex items-start">
    <Icon
      name="Check"
      size={16}
      className="mr-3 text-success mt-1 flex-shrink-0"
    />
    <p className="font-body text-sm text-muted-foreground">
      Bring valid ID for security purposes
    </p>
  </div>

  <div className="flex items-start">
    <Icon
      name="Check"
      size={16}
      className="mr-3 text-success mt-1 flex-shrink-0"
    />
    <p className="font-body text-sm text-muted-foreground">
      Photography requires prior permission
    </p>
  </div>

  <div className="flex items-start">
    <Icon
      name="Check"
      size={16}
      className="mr-3 text-success mt-1 flex-shrink-0"
    />
    <p className="font-body text-sm text-muted-foreground">
      Group visits welcome with advance notice
    </p>
  </div>
</div>
        </div>

      </div>
    </section>
  );
};

export default LocationMap;