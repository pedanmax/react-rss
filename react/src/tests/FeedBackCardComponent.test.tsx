import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FeedBackCardComponent from '../components/FeedBackCard/FeedBackCardComponent';

const testObj = {
  name: 'Maks',
  movie: 'Avatar',
  date: '22-03-2022',
  select: 'amazing',
  checkBoxes: 'U',
  radioBoxes: '10',
  image: '',
};

beforeEach(() => {
  render(<FeedBackCardComponent obj={testObj} />);
});

describe('FeedBackCardComponent', () => {
  it('Card should contains image', () => {
    const image = screen.getByAltText('photo');
    expect(image).toBeInTheDocument();
  });
  it('Card should contains user name', () => {
    const name = screen.getByText('My name: Maks');
    expect(name).toBeInTheDocument();
  });
  it('Card should contains user movie name', () => {
    const movieName = screen.getByText('Movie name: Avatar');
    expect(movieName).toBeInTheDocument();
  });
  it('Card should contains date', () => {
    const date = screen.getByText('Date of review: 22-03-2022');
    expect(date).toBeInTheDocument();
  });
  it('Card should contains mood after', () => {
    const mood = screen.getByText('Mood after: amazing');
    expect(mood).toBeInTheDocument();
  });
  it('Card should contains subtitles', () => {
    const subtitles = screen.getByText('Subtitles: U');
    expect(subtitles).toBeInTheDocument();
  });
  it('Card should contains rate movie', () => {
    const rate = screen.getByText('Rate movie: 10');
    expect(rate).toBeInTheDocument();
  });
});
