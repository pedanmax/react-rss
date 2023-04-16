import React from 'react';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { server } from '../mocks/server';
import Home from '../pages/Home/Home';
import renderWithProviders from './renderWithProviders';

beforeEach(() => renderWithProviders(<Home />));
beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'bypass',
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const fields = [
  { title: 'Title: Spider-Man: No Way Home', date_release: 'Release date: 2021-12-15' },
  { title: 'Title: Black Widow', date_release: 'Release date: 2021-07-07' },
];

describe('Home component', () => {
  it('Draw cardlist', async () => {
    const cards = await screen.findAllByRole('card-of-cardlist');
    cards.forEach((card) => expect(card).toBeInTheDocument());
    expect(cards).toHaveLength(2);
  });

  it('Draw correct title', async () => {
    const title = await screen.findByText('Choose movie');
    expect(title).toBeInTheDocument();
  });

  it('Draw short info cards from api', async () => {
    const cards = await screen.findAllByRole('card-of-cardlist');
    const titles = await screen.findAllByTestId('title');
    const dates = await screen.findAllByTestId('year');

    cards.forEach(async (card, index) => {
      expect(titles[index]).toHaveTextContent(fields[index].title);
      expect(dates[index]).toHaveTextContent(fields[index].date_release);
    });
  });

  it('Draw info in modal window from api', async () => {
    renderWithProviders(<Home />);
    const button = await screen.findAllByTestId('button');
    fireEvent.click(button[1]);
    expect(
      await screen.findByText(
        'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.'
      )
    ).toBeInTheDocument();
    expect(await screen.findByText('Budget: 200 000 000')).toBeInTheDocument();
    expect(await screen.findByText('Black Widow')).toBeInTheDocument();
    expect(
      await screen.findByText('Genre: Action, Adventure, Science Fiction')
    ).toBeInTheDocument();
    expect(await screen.findByText('Date release: 2021-07-07')).toBeInTheDocument();
  });
});
