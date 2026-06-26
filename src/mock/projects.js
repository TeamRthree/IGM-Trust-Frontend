const projects = [
  {
    id: 1,
    title: "Children’s Residential Home",
    description:
      "Providing a safe, nurturing residential environment for vulnerable children with complete care and education support.",
    details_html: `
      <h3>Support Includes:</h3>
      <ul>
        <li>Accommodation</li>
        <li>Nutritious food</li>
        <li>Education & school fees</li>
        <li>Healthcare</li>
        <li>Clothing & essentials</li>
        <li>Mentoring & counseling</li>
      </ul>
      <p>
        This home ensures holistic growth, emotional security, and long-term
        empowerment for every child under our care.
      </p>
    `,
    category: "Childcare",
    location: "Guduvancherry, Chennai, Tamil Nadu",
    image:
      "https://res.cloudinary.com/dlwy94hlr/image/upload/v1781768811/_DSC8178_tswtvv.jpg",
    target: 1800000,
    raised: 1485000,
    donors_count: 347,
    completion: 82,
    children_helped: 220,
    duration: "12 Months (Annual Support)",
    age_group: "6 – 18 Years",
    children_supported: 220,
    beneficiaries_count: 220,
    cost_per_child_per_year: 30000,
    cost_per_child_per_month: 2500,
    urgent: true,
    status: "active",
    last_updated: "2 hours ago",
  },

  {
    id: 2,
    title: "Free Tuition Centres",
    description:
      "After-school academic support programs serving rural and tribal communities.",
    details_html: `
      <h3>Support Includes:</h3>
      <ul>
        <li>Academic coaching</li>
        <li>Study materials</li>
        <li>Examination preparation</li>
        <li>Moral & life skill development</li>
      </ul>
      <p>
        These centres reduce dropout rates and empower rural students with
        consistent academic guidance.
      </p>
    `,
    category: "Education",
    location: "Devikapuram & Jawwadhu Hills",
    image:
      "https://res.cloudinary.com/dlwy94hlr/image/upload/v1781768811/DSCF9665_hgblbl.jpg",
    target: 600000,
    raised: 438000,
    donors_count: 198,
    completion: 73,
    children_helped: 670,
    duration: "Year-Round",
    age_group: "6 – 16 Years",
    children_supported: 670,
    beneficiaries_count: 670,
    urgent: false,
    status: "active",
    last_updated: "1 day ago",
  },

  {
    id: 3,
    title: "Women Tailoring & Skill Development Centre",
    description:
      "Skill training and livelihood empowerment program for women.",
    details_html: `
      <h3>Support Includes:</h3>
      <ul>
        <li>Tailoring machine training</li>
        <li>Raw materials</li>
        <li>Jute bag & product design training</li>
        <li>Livelihood & entrepreneurship support</li>
      </ul>
      <p>
        This program restores dignity and financial independence for women in
        rural communities.
      </p>
    `,
    category: "Women Empowerment",
    location: "Guduvancherry & Jammunamarathur – Tiruvannamalai District",
    image:
      "https://res.cloudinary.com/dlwy94hlr/image/upload/v1781768811/Jute_d6xwud.jpg",
    target: 400000,
    raised: 325000,
    donors_count: 156,
    completion: 81,
    children_helped: 230,
    duration: "6-Month Training Program",
    age_group: "18 – 45 Years",
    beneficiaries_count: 230,
    per_trainee_cost: 8000,
    urgent: false,
    status: "active",
    last_updated: "3 days ago",
  },

  {
    id: 4,
    title: "Medical Camps & Health Support",
    description:
      "Free healthcare camps serving underserved rural populations.",
    details_html: `
      <h3>Support Includes:</h3>
      <ul>
        <li>Free medical check-ups</li>
        <li>Medicines</li>
        <li>Diagnostics</li>
        <li>Health awareness programs</li>
      </ul>
      <p>
        Serving over 2,100 beneficiaries annually through preventive and
        primary healthcare initiatives.
      </p>
    `,
    category: "Healthcare",
    location: "Rural Areas",
    image:
      "https://res.cloudinary.com/dlwy94hlr/image/upload/v1781768810/Privaram_Medical_camp_fpr3wt.jpg",
    target: 500000,
    raised: 287000,
    donors_count: 104,
    completion: 57,
    children_helped: 2100,
    duration: "4–6 Camps Per Year",
    age_group: "All Age Groups",
    beneficiaries_count: 2100,
    urgent: false,
    status: "active",
    last_updated: "5 days ago",
  },

  {
    id: 5,
    title: "Educational Sponsorship Program",
    description:
      "Supporting children’s education through direct sponsorship assistance.",
    details_html: `
      <h3>Support Includes:</h3>
      <ul>
        <li>School fees</li>
        <li>Uniforms</li>
        <li>Books</li>
        <li>Stationery</li>
        <li>Digital learning tools</li>
      </ul>
      <p>
        Ensuring continuous education for children from economically weaker
        backgrounds.
      </p>
    `,
    category: "Education",
    location: "Guduvanchery, Pandur, Kuzhangalchery, Panappakam",
    image:
      "https://res.cloudinary.com/dlwy94hlr/image/upload/v1781768811/Graduation_egd7kq.jpg",
    target: 700000,
    raised: 612000,
    donors_count: 296,
    completion: 87,
    children_helped: 560,
    duration: "12 Months",
    age_group: "6 – 18 Years",
    children_supported: 560,
    beneficiaries_count: 560,
    cost_per_child_per_year: 12000,
    urgent: true,
    status: "active",
    last_updated: "4 hours ago",
  },
];

export default projects;