import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BulSULogo, OPCRLogo } from '../../assets/images';
import '../../styles/landing_page.css';

function Header() {
  const [showNavBarShadow, setShowNavBarShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // State to track the scroll position

  // Scroll to FAQs section
  const scrollToFAQsSection = () => {
    if (faqsSectionRef.current) {
      window.scrollTo({
        top: faqsSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Scroll to Contact section
  const scrollToContactSection = () => {
    if (faqsSectionRef.current) {
      window.scrollTo({
        top: contactSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll animation for logos and shadow for the navbar
  useEffect(() => {
    const handleScroll = () => {
      setShowNavBarShadow(window.scrollY >= 100); // Show shadow after scrolling 100px
      setScrollY(window.scrollY); // Track current scroll position
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="navigation_bar"
      className={showNavBarShadow ? "show-shadow" : "hide-shadow"}
    >
      {/* Navigation */}
      <nav>
        <div className="logos">
          <img src={BulSULogo} alt="Logo" className="logo" />
          <img src={OPCRLogo} alt="Logo" className="logo" />
        </div>

        <div className="actions">
          <Link onClick={scrollToFAQsSection}>FAQs</Link>
          <Link onClick={scrollToContactSection}>Contact</Link>
          <Link to="./login" className="primary solid btn">
            <span className="default-text">Login</span>
            <span className="hover-text">Login and Register</span>
          </Link>
        </div>

        <button
          id="hamburgerMenuButton"
          className={`${menuOpen && "menu-open"} text btn`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* Menu */}
      <div className={`${menuOpen && "open"} menu`}>
        <Link>FAQs</Link>
        <Link>Developers</Link>
        <Link>Contact</Link>
        <Link to="./login">Login</Link>
        <Link to="./register" className="primary solid btn">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
