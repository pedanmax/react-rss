import React from 'react';
import Search from './Search/Search';
import CardList from './CardList/CardList';
import './Home.scss';

class Home extends React.Component {
  render() {
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
  }
}

export default Home;
