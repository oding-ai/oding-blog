import React, { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

const SITE_TITLE = 'ODING_LOG';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 border-b border-muted max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#00ff41] animate-pulse" />
          <h1 className="text-xl font-bold tracking-tight">
            <a href="/oding-blog/" className="hover:text-[#00ff41] transition-colors">
              {SITE_TITLE}
            </a>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-400">
          <a href="/oding-blog/blog" className="hover:text-[#00ff41] transition-colors">[POSTS]</a>
          <a href="/oding-blog/about" className="hover:text-[#00ff41] transition-colors">[ABOUT]</a>
          <a href="https://github.com/Ssoon-m" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff41] transition-colors">[GITHUB]</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-neutral-400 hover:text-[#00ff41]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden mt-4 pt-4 border-t border-muted/50 flex flex-col gap-4 text-sm text-neutral-400 animate-in slide-in-from-top-2 fade-in duration-200">
          <a href="/oding-blog/blog" className="hover:text-[#00ff41] transition-colors block py-2">[POSTS]</a>
          <a href="/oding-blog/about" className="hover:text-[#00ff41] transition-colors block py-2">[ABOUT]</a>
          <a href="https://github.com/Ssoon-m" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff41] transition-colors block py-2">[GITHUB]</a>
        </nav>
      )}
    </header>
  );
}
