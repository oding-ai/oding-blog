import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Helper to get all MD/MDX files
const getContentFiles = () => {
  const contentDir = path.join(process.cwd(), 'src/content/posts');
  return glob.sync('**/*.{md,mdx}', { cwd: contentDir });
};

// Helper to get all public pages
const getPageFiles = () => {
  const pagesDir = path.join(process.cwd(), 'src/pages');
  return glob.sync('**/*.astro', { cwd: pagesDir });
};

describe('Route Integrity Test', () => {
  
  it('should have content files for blog posts', () => {
    const posts = getContentFiles();
    expect(posts.length).toBeGreaterThan(0);
    console.log(`Found ${posts.length} posts.`);
  });

  it('should generate valid paths for all posts', () => {
    const posts = getContentFiles();
    posts.forEach(file => {
      // Slug is filename without extension
      const slug = file.replace(/\.(md|mdx)$/, '');
      const expectedPath = `/oding-blog/posts/${slug}/`;
      
      // Basic check: Path should not contain undefined or double slashes (except protocol)
      expect(expectedPath).not.toContain('undefined');
      expect(expectedPath).toMatch(/^\/oding-blog\/posts\/[\w-]+\/$/);
    });
  });

  // Note: True 404 checking requires E2E testing (Playwright/Cypress) against a running server.
  // In unit test (Vitest), we verify the *data source* and *path generation logic*.
});