import React from 'react';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Search from '../components/Search/Search';
import renderWithProviders from './renderWithProviders';

describe('Search component', () => {
  it('have search input', () => {
    renderWithProviders(<Search />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
});
