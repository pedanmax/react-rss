import React, { useState, useEffect } from 'react';
// import Card from '../Card/Card';
import CardApi from '../../components/Card/CardApi';
import { CardFromAPI } from 'types/Types';
// import cards from '../../data/cards.json';

const CardList = () => {
  const [cards, setCards] = useState([]);
  // get default list of card
  const url = 'https://api.themoviedb.org/3/list/3?api_key=7bc9e78d64d6eabc0a158c008db80432';
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setCards(data.items));
  }, []);
  return (
    <div className='home__cardlist'>
      <h3 className='home__list-title'>Choose movie</h3>
      {/* {console.log(cards)} */}
      <div className='home__cards'>
        {cards &&
          cards.map((card: CardFromAPI) => {
            return (
              <CardApi
                key={card.id}
                id={card.id}
                poster_path={card.poster_path}
                title={card.title}
                release_date={card.release_date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
