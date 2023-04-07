import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList/CardList';
import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { server } from '../mocks/server';

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const loading = vi.fn();
describe('CardList component', () => {
  it('cardlist draw card from api', async () => {
    render(
      <CardList
        loadingState={false}
        loading={loading}
        changeModalState={loading}
        getModalInfoCard={loading}
      />
    );
    const cards = await screen.findAllByRole('card-of-cardlist');
    expect(cards).toHaveLength(1);
  });
});
