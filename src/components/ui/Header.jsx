import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Projects', path: '/projects', icon: 'FolderOpen' },
    { name: 'Success Stories', path: '/success-stories', icon: 'Heart' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0  z-50 transition-warm 
          shadow-warm border-b w-full bg-white"
    >
      <div className="w-full px-2 md:px-8 xl:px-48">
        <div className="flex  items-center justify-between h-20 ">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-quick"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-trust rounded-lg shadow-button">
              <Icon name="Heart" size={24} className='text-secondary' strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-foreground leading-none">
                IGM Children
              </span>
              <span className="font-body text-sm text-muted-foreground leading-none">
                Homes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-button text-sm font-medium transition-warm hover:bg-muted ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
              className="text-sm"
            >
              Call Us
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Heart"
              iconPosition="left"
              iconSize={16}
              className="bg-conversion-orange hover:bg-conversion-orange/90 text-white shadow-button"
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-button text-muted-foreground hover:text-foreground hover:bg-muted transition-warm"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-warm overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-button text-sm font-medium transition-warm ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                  onClick={closeMenu}
                >
                  Call Us
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Heart"
                  iconPosition="left"
                  iconSize={16}
                  className="bg-conversion-orange hover:bg-conversion-orange/90 text-white"
                  onClick={closeMenu}
                >
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;