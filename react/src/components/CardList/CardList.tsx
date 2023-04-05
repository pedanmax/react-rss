import React, { useState, useEffect } from 'react';
import CardApi from '../../components/Card/CardApi';
import { CardFromAPI } from 'types/Types';
import preloader from '../../assets/preload.gif';

const CardList = ({
  loading,
  loadingState,
  getModalInfoCard,
}: {
  loading: (value: boolean) => void;
  loadingState: boolean;
  getModalInfoCard: (obj: object) => void;
}) => {
  const [cards, setCards] = useState<CardFromAPI[]>([]);

  const url = 'https://api.themoviedb.org/3/list/1?api_key=7bc9e78d64d6eabc0a158c008db80432';

  useEffect(() => {
    if (!localStorage.getItem('inputValue')) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => setCards(data.items.slice(0, 15)))
        .then(() => loading(false));
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7bc9e78d64d6eabc0a158c008db80432&query=${localStorage.getItem(
          'inputValue'
        )}&page=1&include_adult=false`
      )
        .then((data) => data.json())
        .then((data) => setCards(data.results))
        .then(() => loading(false));
    }
  }, [loading]);

  const title = loadingState ? (
    <img className='home__preloader' src={preloader} alt='preloader' />
  ) : cards.length === 0 && !loadingState ? (
    <h3 className='home__list-title'>Not found movie</h3>
  ) : cards.length > 0 && !loadingState ? (
    <h3 className='home__list-title'>Choose movie</h3>
  ) : null;

  return (
    <div className='home__cardlist'>
      {title}
      <div className='home__cards'>
        {cards.length > 0 &&
          cards.map((card: CardFromAPI) => {
            return (
              <CardApi
                key={card.id}
                id={card.id}
                poster_path={card.poster_path}
                title={card.title}
                release_date={card.release_date}
                getModalInfoCard={getModalInfoCard}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
