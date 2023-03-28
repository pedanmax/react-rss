import React from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__search'>
          <Search />
        </div>
        <CardList />
      </div>
    </div>
  );
};

export default Home;
