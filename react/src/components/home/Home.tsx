import React from 'react';
import Search from './Search/Search';
import Card from './Card/Card';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='home__container'>
          <div className='home__search'>
            <Search />
          </div>
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
