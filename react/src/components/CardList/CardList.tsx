import React, { useState, useEffect } from 'react';
// import Card from '../Card/Card';
import CardApi from '../../components/Card/CardApi';
import { CardFromAPI } from 'types/Types';
// import cards from '../../data/cards.json';

const CardList = ({ cardsFromSearch }: { cardsFromSearch: CardFromAPI[] }) => {
  const [cards, setCards] = useState<CardFromAPI[]>([]);
  // get default list of card
  const url = 'https://api.themoviedb.org/3/list/1?api_key=7bc9e78d64d6eabc0a158c008db80432';

  useEffect(() => {
    if (!localStorage.getItem('inputValue')) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => setCards(data.items.slice(0, 15)));
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7bc9e78d64d6eabc0a158c008db80432&query=${localStorage.getItem(
          'inputValue'
        )}&page=1&include_adult=false`
      )
        .then((data) => data.json())
        .then((data) => setCards(data.results));
    }
  }, []);

  useEffect(() => {
    setCards(cardsFromSearch);
  }, [cardsFromSearch]);

  return (
    <div className='home__cardlist'>
      {cards.length > 0 && <h3 className='home__list-title'>Choose movie</h3>}
      <div className='home__cards'>
        {cards.length ? (
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
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default CardList;
