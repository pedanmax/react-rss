import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import renderWithProviders from './renderWithProviders';
import App from '../App';

describe('App component', () => {
  it('rendering pages', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(await screen.findByText('Choose movie')).toBeInTheDocument();
    fireEvent.click(await screen.findByText('About'));
    expect(await screen.findByText('About page')).toBeInTheDocument();
    fireEvent.click(await screen.findByText('Form'));
    expect(await screen.findByText('Please fill out the form')).toBeInTheDocument();
  });

  it('render not found page', async () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    screen.debug();
    expect(await screen.findByText('This page was not found!')).toBeInTheDocument();
  });
});
