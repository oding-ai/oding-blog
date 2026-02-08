import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const SITE_TITLE = 'ODING_LOG';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Helper to check active state (simple includes check)
  // Fix: Check for both /posts and /blog (legacy) to be safe, but link points to /posts
  const isActive = (path: string) => currentPath.includes(path);
  const activeClass = "text-[#00ff41]"; // Neon Green
  const inactiveClass = "text-neutral-400 hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
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
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a 
              href="/oding-blog/posts/" 
              className={`transition-colors ${isActive('/posts') ? activeClass : inactiveClass}`}
            >
              Posts
            </a>
            <a 
              href="/oding-blog/about/" 
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
          {/* Theme Toggle */}
          <div className="pl-6 border-l border-muted/40">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Hamburger Button & Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="p-2 -mr-2 text-neutral-400 hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full border-b border-muted/40 bg-background/95 backdrop-blur-md z-40">
          <nav className="flex flex-col p-4 space-y-4 text-sm font-medium animate-in slide-in-from-top-2 fade-in duration-200">
            <a 
              href="/oding-blog/posts/" 
              className={`transition-colors ${isActive('/posts') ? activeClass : inactiveClass}`}
            >
              Posts
            </a>
            <a 
              href="/oding-blog/about/" 
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
