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

  // 🔥 Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Projects', path: '/projects', icon: 'FolderOpen' },
    { name: 'Gallery', path: '/gallery', icon: 'Heart' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border-b shadow-warm">
      
      {/* Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-48">

        {/* Header Row */}
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/homepage" className=" inline-block">
  <img
    src="/assets/images/igm-logo.png"
    alt="IGM Children Homes"
    className="h-16 w-auto"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-button text-sm font-medium transition-warm hover:bg-muted ${
                  isActivePath(item.path)
                    ? 'text-primary bg-muted'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/donate" onClick={closeMenu}>
              <Button
                variant="default"
                size="sm"
                iconName="Heart"
                iconPosition="left"
                iconSize={16}
                className="bg-secondary hover:bg-conversion-orange/90 text-white shadow-button"
              >
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-button text-muted-foreground hover:text-foreground hover:bg-muted transition-warm"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="border-t border-border shadow-lg">
            <nav className="px-6 py-6 space-y-3">

              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-warm ${
                    isActivePath(item.path)
                      ? 'text-primary bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border">
                <Link to="/donate" onClick={closeMenu}>
                  <Button
                    variant="default"
                    fullWidth
                    iconName="Heart"
                    iconPosition="left"
                    iconSize={18}
                    className="bg-secondary hover:bg-conversion-orange/90 text-white py-3 text-base"
                  >
                    Donate Now
                  </Button>
                </Link>
              </div>

            </nav>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
