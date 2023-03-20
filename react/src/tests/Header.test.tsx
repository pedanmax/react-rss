import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header/Header';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

describe('Header', () => {
  it('render name current page', () => {
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    fireEvent.click(homeLink);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Current page: Home');

    fireEvent.click(aboutLink);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Current page: About');
  });

  it('add active class to link in navigation by click', () => {
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');

    fireEvent.click(homeLink);
    expect(homeLink).toHaveClass('active');
    fireEvent.click(aboutLink);
    expect(aboutLink).toHaveClass('active');
  });
});
