import React from 'react';
import '../Home.scss';

class Search extends React.Component {
  render() {
    return (
      <>
        <input type='search' className='home__input' placeholder='search...' />
        <button className='home__button'>Search</button>
      </>
    );
  }
}

export default Search;
