import React from 'react';
import { CardType } from 'types/Types';
import './Card.scss';

class Card extends React.Component<CardType> {
  constructor(props: CardType) {
    super(props);
  }
  render() {
    return (
      <div className='card' role='card-of-cardlist'>
        <img className='card__img' src={this.props.img} data-testid='image'></img>
        <div className='card__info'>
          <div className='card__title' style={{ fontWeight: '700' }} data-testid='title'>
            Name: {this.props.title}
          </div>
          <div className='card__text' data-testid='year'>
            Year: {this.props.year}
          </div>
          <div className='card__text' data-testid='country'>
            Country: {this.props.country}
          </div>
          <div className='card__text' data-testid='genre'>
            Genre: {this.props.genre}
          </div>
          <div className='card__text' data-testid='views'>
            Views: {this.props.views}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
