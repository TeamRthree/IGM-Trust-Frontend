import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "About IGM",
      links: [
        { name: "Our Story", path: "/about" },
        { name: "Mission & Vision", path: "/about" },
        { name: "Leadership Team", path: "/about" },
        { name: "Annual Reports", path: "/about" }
      ]
    },
    {
      title: "Our Work",
      links: [
        { name: "All Programs", path: "/projects" },
        { name: "Education", path: "/projects" },
        { name: "Healthcare", path: "/projects" },
        { name: "Family Reunification", path: "/projects" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { name: "Donate Now", path: "/donate" },
        { name: "Sponsor a Child", path: "/donate" },
        { name: "Volunteer", path: "/contact" },
        { name: "Corporate Partnership", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Success Stories", path: "/success-stories" },
        { name: "Photo Gallery", path: "/success-stories" },
        { name: "News & Updates", path: "/about" },
        { name: "Contact Us", path: "/contact" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com/igmchildrenhomes" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/igmchildrenhomes" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/igmchildrenhomes" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/igmchildrenhomes" },
    { name: "YouTube", icon: "Youtube", url: "https://youtube.com/igmchildrenhomes" }
  ];

  

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className=" mx-auto px-6 md:px-8 xl:px-48  py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-trust rounded-lg">
                <Icon name="Heart" size={28} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-none">
                  IGM Children
                </span>
                <span className="font-body text-sm text-white/80 leading-none">
                  Homes
                </span>
              </div>
            </Link>
            
            <p className="font-body text-white/80 leading-relaxed mb-6">
              Since 1975, we've been restoring broken lives and building brighter futures for children in need. Every child deserves a chance to dream.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-sky-blue flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  123 Hope Street, Chennai, Tamil Nadu 600001
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-sky-blue flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  +91 98765 43210
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-sky-blue flex-shrink-0" />
                <span className="font-body text-sm text-white/80">
                  info@igmchildrenhomes.org
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section, index) => (
            <div key={index}>
              <h3 className="font-heading font-bold text-lg text-white mb-6">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.path}
                      className="font-body text-white/80 hover:text-sky-blue transition-colors text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="font-body text-white/60 text-sm text-center md:text-left">
              © {currentYear} IGM Children Homes. All rights reserved. | 
              <span className="text-white/80"> Registered under Section 12A & 80G</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="font-body text-white/60 text-sm mr-2">Follow us:</span>
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-sky-blue/20 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-white/80 group-hover:text-sky-blue transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/about" className="font-body text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="font-body text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="font-body text-white/60 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
              <Link to="/about" className="font-body text-white/60 hover:text-white text-sm transition-colors">
                Transparency Report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;