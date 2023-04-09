import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Search from '../components/Search/Search';
import { vi } from 'vitest';

const loading = vi.fn();
describe('Search component', () => {
  it('have search input', () => {
    render(<Search loading={loading} />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
});
