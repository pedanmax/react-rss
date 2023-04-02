import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../components/Card/Card';

const fields = ['title', 'year', 'country', 'genre', 'views'];
beforeEach(() => {
  render(
    <Card
      img='https://media1.fdncms.com/connectsavannah/imager/u/original/7210229/black-panther-poster.jpg'
      title='Test name'
      year={+1}
      country='test country'
      genre='test genre'
      views={+1}
    />
  );
});

describe('Card component', () => {
  it('card has all fields', () => {
    fields.forEach((field) => expect(screen.queryByTestId(field)).toBeInTheDocument());
  });

  it('card title has font-weight 700', () => {
    expect(screen.getByTestId('title')).toHaveStyle('font-weight: 700;');
  });
});
