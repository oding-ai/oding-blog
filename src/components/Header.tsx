import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SITE_TITLE = 'ODING_LOG';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Helper to check active state (simple includes check)
  const isActive = (path: string) => currentPath.includes(path);
  const activeClass = "text-[#00ff41]"; // Neon Green
  const inactiveClass = "text-neutral-400 hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/40 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:max-w-6xl md:mx-auto">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          {/* Vercel-like triangle placeholder */}
          <div className="relative flex items-center justify-center w-6 h-6">
             <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#00ff41]" />
          </div>
          <a href="/oding-blog/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
            {SITE_TITLE}
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a 
            href="/oding-blog/posts" 
            className={`transition-colors ${isActive('/posts') ? activeClass : inactiveClass}`}
          >
            Posts
          </a>
          <a 
            href="/oding-blog/about" 
            className={`transition-colors ${isActive('/about') ? activeClass : inactiveClass}`}
          >
            About
          </a>
          <a 
            href="https://github.com/oding-ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-400 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 -mr-2 text-neutral-400 hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-muted/40 bg-background">
          <nav className="flex flex-col p-4 space-y-4 text-sm font-medium animate-in slide-in-from-top-2 fade-in duration-200">
            <a 
              href="/oding-blog/posts" 
              className={`transition-colors ${isActive('/posts') ? activeClass : inactiveClass}`}
            >
              Posts
            </a>
            <a 
              href="/oding-blog/about" 
              className={`transition-colors ${isActive('/about') ? activeClass : inactiveClass}`}
            >
              About
            </a>
            <a 
              href="https://github.com/oding-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-400 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
