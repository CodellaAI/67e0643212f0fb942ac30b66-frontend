
"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-retro-navy border-b-4 border-neon-pink">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <span className="text-2xl font-retro text-neon-green">RETRO</span>
            <span className="text-2xl font-retro text-neon-pink">WAVE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['HOME', 'ABOUT', 'GALLERY', 'DOWNLOADS', 'LINKS', 'GUESTBOOK'].map((item) => (
              <NavItem key={item} label={item} />
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-neon-pink" />
            ) : (
              <Menu className="w-6 h-6 text-neon-pink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-retro-navy border-t-2 border-neon-blue">
          <div className="px-4 py-3 space-y-2">
            {['HOME', 'ABOUT', 'GALLERY', 'DOWNLOADS', 'LINKS', 'GUESTBOOK'].map((item) => (
              <div key={item} className="py-2">
                <NavItem label={item} />
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

const NavItem = ({ label }) => {
  return (
    <a
      href="#"
      className="font-pixel text-white hover:text-neon-pink transition-colors duration-200 relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all duration-200 group-hover:w-full"></span>
    </a>
  );
};

export default Header;
