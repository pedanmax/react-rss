import React from 'react';
import { CardType } from 'types/Types';
import './Card.scss';
const Card = (props: CardType) => {
  return (
    <div className='card' role='card-of-cardlist'>
      <img className='card__img' src={props.img} data-testid='image'></img>
      <div className='card__info'>
        <div className='card__title' style={{ fontWeight: '700' }} data-testid='title'>
          Name: {props.title}
        </div>
        <div className='card__text' data-testid='year'>
          Year: {props.year}
        </div>
        <div className='card__text' data-testid='country'>
          Country: {props.country}
        </div>
        <div className='card__text' data-testid='genre'>
          Genre: {props.genre}
        </div>
        <div className='card__text' data-testid='views'>
          Views: {props.views}
        </div>
      </div>
    </div>
  );
};

export default Card;
