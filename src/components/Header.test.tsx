import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import React from 'react';

describe('Header Component', () => {
  it('renders site title', () => {
    render(<Header />);
    expect(screen.getByText('ODING_LOG')).toBeInTheDocument();
  });

  it('contains navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Posts')).toHaveAttribute('href', '/oding-blog/posts/');
    expect(screen.getByText('About')).toHaveAttribute('href', '/oding-blog/about/');
    expect(screen.getByText('GitHub')).toHaveAttribute('href', 'https://github.com/oding-ai');
  });
});