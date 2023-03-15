import React from 'react';
import { CardType } from 'types/Types';
import './Card.scss';

class Card extends React.Component<CardType> {
  constructor(props: CardType) {
    super(props);
  }
  render() {
    return (
      <div className='card'>
        <img className='card__img' src={this.props.img}></img>
        <div className='card__info'>
          <div className='card__title'>Name: {this.props.title}</div>
          <div className='card__year'>Year: {this.props.year}</div>
          <div className='card__year'>Country: {this.props.country}</div>
          <div className='card__year'>Genre: {this.props.genre}</div>
          <div className='card__year'>Views: {this.props.views}</div>
        </div>
      </div>
    );
  }
}

export default Card;
