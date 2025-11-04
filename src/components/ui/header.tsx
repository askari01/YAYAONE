import React, { useState } from 'react';
import logo from '@/assets/YAYAONE.png';

interface NavBarProps {
  onSectionChange?: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // If there's a sticky nav, account for its height so the section isn't hidden behind it.
    const nav = document.querySelector('nav');
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const scrollTo = Math.max(0, elementTop - navHeight - 8); // small offset

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };


  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  // Contact email configuration — change as needed
  const contactEmail = 'hello@techcorp.com';
  const contactSubject = 'Website Inquiry';
  const contactBody = 'Hi there,%0A%0AI would like to learn more about your services.%0A%0AThanks,%0A';

  const contactUs = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}&body=${contactBody}`;
    // Use location.href to open the user's mail client
    window.location.href = mailto;
    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" onClick={closeMobileMenu}>
            <img src={logo} alt="YAYA ONE" className="h-10" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="navbar-item"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              // onClick={}
            >
              <a
                href={`#${item.id}`}
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  closeMobileMenu();
                  onSectionChange?.(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Utilities */}
        <div className="navbar-utilities">
          <button className="navbar-button" onClick={contactUs}>
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`navbar-menu mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {menuItems.map((item) => (
          <li key={item.label} className="navbar-item mobile-item">
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
                closeMobileMenu();
              }}
              className="navbar-link"
            >
              {item.label}
            </a>
          </li>
        ))}
        {/* <li className="mobile-utility">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              contactUs(e);
            }}
          >
            Contact Us
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;