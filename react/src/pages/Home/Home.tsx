import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import './Home.scss';
import { CardFromAPI } from 'types/Types';

const Home = () => {
  const [cards, setCards] = useState([]);
  const getCards = (param: string) => {
    if (param) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7bc9e78d64d6eabc0a158c008db80432&query=${param}&page=1&include_adult=false`
      )
        .then((data) => data.json())
        .then((data) => setCards(data.results));
    } else {
      fetch('https://api.themoviedb.org/3/list/1?api_key=7bc9e78d64d6eabc0a158c008db80432')
        .then((data) => data.json())
        .then((data) => setCards(data.items.slice(0, 15)));
    }
  };
  return (
    <div className='home'>
      <div className='home__container'>
        <Search getCards={getCards} />
        <CardList cardsFromSearch={cards} />
      </div>
    </div>
  );
};

export default Home;
