import React from 'react';
import Card from '../Card/Card';
import cards from '../../data/cards.json';

const CardList = () => {
  return (
    <div className='home__cardlist'>
      <h3 className='home__list-title'>The list of cards</h3>
      <div className='home__cards'>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
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
    </div>
  );
};

export default CardList;
