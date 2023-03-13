import React from 'react';
import Search from './Search/Search';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='home__container'>
          <Search />
        </div>
      </div>
    );
  }
}

export default Home;
