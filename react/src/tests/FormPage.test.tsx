import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormPage from '../pages/FormPage/FormPage';

beforeEach(() => {
  render(<FormPage />);
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
