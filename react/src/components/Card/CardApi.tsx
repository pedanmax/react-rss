import React from 'react';
import { CardFromAPI } from 'types/Types';
import './Card.scss';

const CardApi = (props: CardFromAPI) => {
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
            props.getModalCardId(props.id);
          }}
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default CardApi;
