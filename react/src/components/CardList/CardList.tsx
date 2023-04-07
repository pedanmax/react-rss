import React, { useState, useEffect } from 'react';
import CardApi from '../../components/Card/CardApi';
import { CardFromAPI } from 'types/Types';
import preloader from '../../assets/preload.gif';
// const test = {
//   title: 'string',
//   release_date: 'asdas',
//   id: 1,
//   poster_path: 'asd',
//   getModalInfoCard,
//   changeModalState,
// },
const CardList = ({
  loading,
  loadingState,
  getModalInfoCard,
  changeModalState,
}: {
  loading: (value: boolean) => void;
  loadingState: boolean;
  getModalInfoCard: (obj: object) => void;
  changeModalState: (value: boolean) => void;
}) => {
  const [cards, setCards] = useState<CardFromAPI[]>([]);

  const url = 'https://api.themoviedb.org/3/list/1?api_key=7bc9e78d64d6eabc0a158c008db80432';

  useEffect(() => {
    if (!localStorage.getItem('inputValue')) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          if (data.items) {
            console.log(data.items);
            setCards(data.items);
          }
        })
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
        {cards &&
          cards.map((card: CardFromAPI) => {
            return (
              <CardApi
                key={card.id}
                id={card.id}
                poster_path={card.poster_path}
                title={card.title}
                release_date={card.release_date}
                getModalInfoCard={getModalInfoCard}
                changeModalState={changeModalState}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
