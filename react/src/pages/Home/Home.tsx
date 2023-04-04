import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import './Home.scss';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const changeLoading = (value: boolean) => {
    setLoading(value);
  };
  return (
    <div className='home'>
      <div className='home__container'>
        <Search loading={changeLoading} />
        <CardList loading={changeLoading} loadingState={loading} />
      </div>
    </div>
  );
};

export default Home;
