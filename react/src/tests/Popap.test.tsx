import React from 'react';
import { render, screen } from '@testing-library/react';
import Popap from '../components/Popap/Popap';

describe('Popap', () => {
  it('Popap should contains title', () => {
    render(<Popap refProp={React.createRef<HTMLDivElement>()} />);
    const title = screen.getByRole('heading', { level: 4 });
    expect(title).toBeInTheDocument();
  });
});
