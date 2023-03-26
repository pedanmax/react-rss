import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FeedBackCollection from '../components/FeedBackCollection/FeedBackCollection';

const testObj = {
  name: 'Maks',
  movie: 'Avatar',
  date: '22-03-2022',
  select: 'amazing',
  checkBoxes: 'U',
  radioBoxes: '10',
  image: '',
};
const testArr = Array(5).fill(testObj);

describe('FeedBackCollection', () => {
  render(<FeedBackCollection cards={testArr} />);
  it('Collection should show all cards from array', () => {
    const cards = screen.getAllByTestId('feedback-card');
    expect(cards).toHaveLength(testArr.length);
  });
});
