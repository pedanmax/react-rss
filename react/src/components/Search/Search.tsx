import React, { useState, useEffect, useRef } from 'react';
import '../../pages/home/Home.scss';

const Search = () => {
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');
  const inputSearch = useRef('');

  useEffect(() => {
    inputSearch.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', inputSearch.current || '');
    };
  }, []);

  return (
    <div className='home__search'>
      <input
        type='search'
        className='home__input'
        placeholder='search...'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className='home__button'>Search</button>
    </div>
  );
};

export default Search;
