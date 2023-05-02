import React from 'react';
import { screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import FormPage from '../pages/FormPage/FormPage';
import renderWithProviders from './renderWithProviders';

beforeEach(() => {
  renderWithProviders(<FormPage />);
});
describe('FormPage', () => {
  it('Form page should contains title with current text', () => {
    const formPageTitle = screen.getByText('Please fill out the form');
    expect(formPageTitle).toBeInTheDocument();
  });
  it('Form page should contains form', () => {
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
});
