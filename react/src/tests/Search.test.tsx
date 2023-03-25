import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Search from '../components/home/Search/Search';

describe('Search component', () => {
  it('have search input', () => {
    render(<Search />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
});
