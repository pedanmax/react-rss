import { rest } from 'msw';
const url = 'https://api.themoviedb.org/3/list/1?api_key=7bc9e78d64d6eabc0a158c008db80432';

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
];

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: items,
      })
    );
  }),
];
