import React, { ReactNode } from 'react';
import Card from '../Card/Card';
import cards from '../../../data/cards.json';

class CardList extends React.Component {
  render() {
    return (
      <div className='home__cards'>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              img={card.img}
              title={card.title}
              year={card.year}
              country={card.country}
              genre={card.genre}
              views={card.views}
            />
          );
        })}
      </div>
    );
  }
}
export default CardList;
