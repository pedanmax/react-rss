import React from 'react';
import { vi } from 'vitest';
import { it, describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Form from '../components/Form/Form';
import renderWithProviders from './renderWithProviders';

const mock = vi.fn();
beforeEach(() => {
  renderWithProviders(<Form changeVisibilityPopap={mock} />);
});

describe('Form component', () => {
  it('Form should render two text input', () => {
    const textInputs = screen.getAllByRole('textbox');
    expect(textInputs).toHaveLength(2);
  });
  it('Form should render date input', () => {
    const dateInput = screen.getByTestId('date');
    expect(dateInput).toBeInTheDocument();
  });
  it('Form should render select', () => {
    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();
  });
  it('Form should render three checkbox input', () => {
    const checkboxInputs = screen.getAllByRole('checkbox');
    expect(checkboxInputs).toHaveLength(3);
  });
  it('Form should render three radio inputs', () => {
    const radioInputs = screen.getAllByRole('radio');
    expect(radioInputs).toHaveLength(3);
  });
  it('Form should render file input', () => {
    const file = screen.getByTestId('file');
    expect(file).toBeInTheDocument();
  });
  it('Form should has submit button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Send feedback');
  });
});
