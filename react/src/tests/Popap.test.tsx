import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from './renderWithProviders';
import Popap from '../components/Popap/Popap';

describe('Popap', () => {
  it('Popap should contains title', () => {
    renderWithProviders(<Popap refProp={React.createRef<HTMLDivElement>()} />);
    const title = screen.getByRole('heading', { level: 4 });
    expect(title).toBeInTheDocument();
  });
});
