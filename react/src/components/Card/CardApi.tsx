import React from 'react';
import { CardFromAPI } from 'types/Types';
import './Card.scss';

const CardApi = (props: CardFromAPI) => {
  const handleCard = (id: number) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7bc9e78d64d6eabc0a158c008db80432`)
      .then((data) => data.json())
      .then((data) => props.getModalInfoCard(data))
      .then(() => props.changeModalState(true));
  };

  return (
    <div className='card' role='card-of-cardlist'>
      {props.poster_path && (
        <img
          className='card__img'
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          data-testid='image'
          alt='poster'
        ></img>
      )}
      <div className='card__info'>
        <div className='card__title' style={{ fontWeight: '700' }} data-testid='title'>
          Title: {props.title}
        </div>
        <div className='card__text' data-testid='year'>
          Release date: {props.release_date}
        </div>
        <button
          className='card__button'
          data-testid='button'
          onClick={() => {
            console.log(props.id);
            handleCard(props.id);
          }}
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default CardApi;
