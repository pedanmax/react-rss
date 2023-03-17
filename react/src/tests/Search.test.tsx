import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import CardList from '../components/home/CardList/CardList';
import cards from '../data/cards.json';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Search from '../components/home/Search/Search';

describe('Search component', () => {
  it('have search input', () => {
    render(<Search />);
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });
});
