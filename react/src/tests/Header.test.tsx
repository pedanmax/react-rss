import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Header from '../components/HeaderComponent/Header';

import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from './renderWithProviders';

beforeEach(() => {
  renderWithProviders(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

describe('Header', () => {
  it('render name current page', () => {
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const formLink = screen.getByText('Form');
    fireEvent.click(homeLink);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Current page: home');

    fireEvent.click(aboutLink);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Current page: about');

    fireEvent.click(formLink);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Current page: form');
  });

  it('add active class to link in navigation by click', () => {
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const formLink = screen.getByText('Form');

    fireEvent.click(homeLink);
    expect(homeLink).toHaveClass('active');
    fireEvent.click(aboutLink);
    expect(aboutLink).toHaveClass('active');
    fireEvent.click(formLink);
    expect(formLink).toHaveClass('active');
  });
});
