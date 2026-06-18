import React, { useState } from 'react';

import WhyVolunteer from './WhyVolunteer';
import WhyJoinVolunteerSquad from './WhyJoinVolunteerSquad';



const VolunteerOpportunities = () => {

  return (
    <section id="volunteer" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  {/* Header */}
  <div className="text-center">

<WhyJoinVolunteerSquad />
    <WhyVolunteer />


  </div>

</div>
    </section>
  );
};

export default VolunteerOpportunities;
