import { rest } from 'msw';
const urlDefault = 'https://api.themoviedb.org/3/list/1';

const items = [
  {
    adult: false,
    backdrop_path: '/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
    genre_ids: [28, 12, 878],
    id: 634649,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Spider-Man: No Way Home',
    overview:
      'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    popularity: 378.285,
    poster_path: '/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
    release_date: '2021-12-15',
    title: 'Spider-Man: No Way Home',
    video: false,
    vote_average: 8,
    vote_count: 17093,
  },
  {
    adlut: false,
    backdrop_path: '/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg',
    genre_ids: [28, 12, 878],
    id: 497698,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Black Widow',
    overview:
      '"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."',
    popularity: 109.917,
    poster_path: '/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg',
    release_date: '2021-07-07',
    title: 'Black Widow',
    video: false,
    vote_average: 7.353,
    vote_count: 8796,
  },
];

export const handlers = [
  rest.get(urlDefault, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ items }));
  }),
];
