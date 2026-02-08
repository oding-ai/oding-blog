import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import ThemeToggle from '../components/ThemeToggle';
import React from 'react';

// Mock localStorage logic remains here or can be moved to setup if needed globally
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    localStorageMock.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders theme toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByLabelText('Toggle Theme')).toBeInTheDocument();
  });

  it('toggles theme class on click', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle Theme');

    // Initial state (default light if no preference)
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Click to toggle
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // Click again
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});