import React from 'react';
import cards from '../../../data/cards.json';
import './Card.scss';

console.log(cards);

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <img className='card__img' src={cards[0].img}></img>
        <div className='card__info'>
          <div className='card__title'>Name: {cards[0].title}</div>
          <div className='card__year'>Year: {cards[0].year}</div>
          <div className='card__year'>Country: {cards[0].country}</div>
          <div className='card__year'>Genre: {cards[0].genre}</div>
          <div className='card__year'>Views: {cards[0].views}</div>
        </div>
      </div>
    );
  }
}

export default Card;
