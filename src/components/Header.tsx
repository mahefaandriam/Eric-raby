import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageFR, setIsLanguageFR] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const { i18n } = useTranslation();
  const { t } = useTranslation();


  useEffect(() => {
    const storedLang = sessionStorage.getItem('isFR');
    if (storedLang !== null) {
      setIsLanguageFR(storedLang === 'true'); 
    } else {
      console.log("null lang");
      const userLang = navigator.language;
      if (userLang == 'fr') setIsLanguageFR(storedLang === 'true'); 
      if (userLang == 'en') setIsLanguageFR(storedLang === 'false');
      if ((userLang !== 'fr') && (userLang !== 'en')) setIsLanguageFR(storedLang === 'false');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = !isLanguageFR;
    setIsLanguageFR(newLang);
    sessionStorage.setItem('isFR', newLang.toString());
  };

  const handleReload = () => {
    window.location.reload(); // Full page reload
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //const handleServicesMouseEnter = () => setIsServicesOpen(true);
  //const handleServicesMouseLeave = () => setIsServicesOpen(false);
   const handleServicesMouseEnter = () => {
    if(timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel any pending close
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    // Set a delay before closing
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if(timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleServicesClick = () => setIsServicesOpen((prev) => !prev);

  const headerClass = isScrolled
    ? 'shadow-md text-black'
    : 'text-black ';

  const isHomePage = location.pathname === '/';
  
  return (
    <header
      className={`fixed w-full z-50 bg-secondary transition-all duration-300 py-2 ${headerClass} ${
        !isHomePage && !isScrolled ? 'bg-primary-800' : ''
      }`}
    >
      <div className="container mx-auto px-5 md:px-30">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className=" items-center">
            <div className={`bg-[url(/qwam-logo.png)] bg-cover bg-center flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-9 h-9' : 'w-15 h-15 md:w-24 md:h-24'} `}>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <a href="#home" className="hover:text-black/25 text-black/50 text-xs font-thin transition duration-200">
              {t('header.home')}
            </a>
            <a href="#about" className="hover:text-black/25 text-black/50 text-xs font-thin transition duration-200">
              {t('header.about')}
            </a>
            <a href="#interventions" className="hover:text-black/25 text-black/50 text-xs font-thin transition duration-200">
              {t('header.interventions')}
            </a>
            <a href="#experiences" className="hover:text-black/25 text-black/50 text-xs font-thin transition duration-200">
              {t('header.experiences')} 
            </a>
            <a href="#contact" className="hover:text-black/25 text-black/50 text-xs font-thin transition duration-200">
              {t('header.contacts')}
            </a>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/erabyrun" className="text-black hover:text-accent transition-colors duration-300">
                <Facebook size={16} fill="#111" strokeWidth={0} />
              </a>
              <a href="#" className="text-black hover:text-accent transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com/in/eric-raby-2794948" className="text-black hover:text-accent transition-colors duration-300">
                <Linkedin size={16} fill="#111" strokeWidth={0} />
              </a>
            </div>
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="flex items-center text-xs font-thin text-black/50 hover:text-accent transition duration-200 focus:outline-none"        
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                type="button"
              >
               <img src={`${isLanguageFR ? '/FRA.svg' : '/GBR.svg'}`} className='w-8 h-auto px-2' /> {isLanguageFR ? 'Français' : 'English'} <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute right-0 mt-2 w-35 shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-200 transform origin-top-right
                  ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
              >
                <div className="py-1">
                  <a href="/" onClick={() =>{
                                  i18n.changeLanguage(`${isLanguageFR ? 'en' : 'fr'}`);
                                  toggleLanguage();
                                  handleReload();
                                }} 
                    className="flex px-2 py-1 text-center text-gray-700 text-xs hover:bg-gray-100">
                    <img src={`${isLanguageFR ? '/GBR.svg' : '/FRA.svg'}`} className='w-8 h-auto px-2' /> {isLanguageFR ? 'English' : 'Français'} 
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-secondary z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-black text-2xl focus:outline-none"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-left mx-8  space-y-6 text-black">
          <a
            href="#home"
            onClick={closeMenu}
            className="hover:text-black/25 text-xs text-black/80 transition duration-200"
          >
            {t('header.home')}
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-black/25 text-xs text-black/80 transition duration-200"
          >
            {t('header.about')}
          </a>
          <a
            href="#interventions"
            onClick={closeMenu}
            className="hover:text-black/25 text-xs text-black/80 transition duration-200"
          >
            {t('header.interventions')}
          </a>
          <a
            href="#experiences"
            onClick={closeMenu}
            className="hover:text-black/25 text-xs  text-black/80 transition duration-200"
          >
            {t('header.experiences')}
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-black/25 text-xs text-black/80 transition duration-200"
          >
            {t('header.contacts')}
          </a>
          <div className="flex space-x-4">
              <a href="https://www.facebook.com/erabyrun" className="text-black hover:text-accent transition-colors duration-300">
                <Facebook size={16} fill="#111" strokeWidth={0} />
              </a>
              <a href="#" className="text-black hover:text-accent transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com/in/eric-raby-2794948" className="text-black hover:text-accent transition-colors duration-300">
                <Linkedin size={16} fill="#111" strokeWidth={0} />
              </a>
          </div>
          <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="flex items-center text-xs  text-gray-700 hover:text-accent transition duration-200 focus:outline-none"        
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                type="button"
              >
               <img src={`${isLanguageFR ? '/FRA.svg' : '/GBR.svg'}`} className='w-8 h-auto px-2' /> {isLanguageFR ? 'Français' : 'English'} <ChevronDown size={16} className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute left-0 mt-2 w-35 shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-200 transform origin-top-right
                  ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
              >
                <div className="py-1">
                  <a href="/" onClick={() =>{
                                  i18n.changeLanguage(`${isLanguageFR ? 'en' : 'fr'}`);
                                  toggleLanguage();
                                  handleReload();
                                }} 
                    className="flex px-2 py-1 text-center text-gray-700 text-xs hover:bg-gray-100">
                    <img src={`${isLanguageFR ? '/GBR.svg' : '/FRA.svg'}`} className='w-8 h-auto px-2' /> {isLanguageFR ? 'English' : 'Français'} 
                  </a>
                </div>
              </div>
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;